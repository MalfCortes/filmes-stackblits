import Layout from '../componentes/layout.js'
import styles from '../styles/lista.module.css'

export default (props) => {
  
  return(
    <div className={styles.container}>
      <h1>Tops da semana</h1>
      
      <ul className={styles.ul}>
        {props.json.results.map((i)=>(
        <li className={styles.li} key={i.title}>
          <a href={`https://nextjsrjyhvx-bouu--3000--b5037fed.local-credentialless.webcontainer.io/pokemon/${i.id}`}>
          <h4>{i.title || i.name}</h4>
          <img src={`https://image.tmdb.org/t/p/original/${i.poster_path}`} alt={i.title} width='150'/>
          </a>
        </li>
      ))}
      </ul>
    </div>    
  )
}

export async function getStaticProps() {

  const resp = await fetch("https://api.themoviedb.org/3/trending/all/week?api_key=8cf8c28a8b87eaf7ecab60dfec410969&language=pt-BR")
  const json = await resp.json()

  return {
    props: { json }, // will be passed to the page component as props
  }
}