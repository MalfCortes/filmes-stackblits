export default ({ children, image  }) =>{
  
  return(
    <div style={{
      backgroundImage: `url(${image})`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      width:"100vw",
      height:"100vh",
    }
    }>
      <div style={{
        width:"800px",
        margin:"auto"
      }}>
      { children }
      </div>
      
    </div>
  )
}