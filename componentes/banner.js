import styles from "../styles/banner.module.css"

export default () =>{
  return(
    <div className={styles.container}>
      <div>
       <div><h1> Rodrigo </h1></div> 
      </div>

      <div>
      <input type="text" placeholder="pesquise um filme" />
      <button>OK</button>
      </div>
      
    </div>
  )
}