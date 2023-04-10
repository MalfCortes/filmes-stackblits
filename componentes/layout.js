export default ({ children  }) =>{
  return(
    <div style={{
      width:"100vw",
      height:"100vh",
    }
    }>
      <div style={{
        width:"500px",
        margin:"auto"
      }}>
      { children }
      </div>
      
    </div>
  )
}