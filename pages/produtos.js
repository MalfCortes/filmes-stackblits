import Banner from '../componentes/banner.js'
import styles from '../styles/lista.module.css'

export default (props) => {
  
  return(
    <div className={styles.container}>
      <Banner />
      <h1>Tops da semana</h1>
      
      <ul className={styles.ul}>
        {props.json.results.map((i)=>(
        <li className={styles.li} key={i.title}>
          <a href={`/pokemon/${i.id}`}>
          <h5>{i.title || i.name}</h5>
          <img className={styles.image} src={`https://image.tmdb.org/t/p/original/${i.poster_path}`} alt={i.title} width='100px'/>
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
