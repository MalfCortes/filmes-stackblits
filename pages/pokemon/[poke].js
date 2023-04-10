import Layout from "../../componentes/layout.js"
import { useRouter } from 'next/router'


export default (props) =>{

  
  const router = useRouter()
  const { pid } = router.query

  return(
    <Layout>
      <a href='/produtos'>Voltar</a>
      <h1>{props.json.original_title}</h1>
      <img src={`https://image.tmdb.org/t/p/original/${props.json.poster_path}`} alt="" width="300px" />
      <h4>{props.json.overview}</h4>
      <h4>Votação: {props.json.vote_average}</h4>
      
    </Layout>
  )
}

export async function getServerSideProps(context) {
  const poke = context.params.poke
  const resp = await fetch(`https://api.themoviedb.org/3/movie/${poke}?api_key=8cf8c28a8b87eaf7ecab60dfec410969&language=pt-BR`)
  const json = await resp.json()

  return {
    props: { json }, 
  }
}