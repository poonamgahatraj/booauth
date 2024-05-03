export default function Sidenav (){
    return(
        <>
        <div style={{display:"flex", justifyContent:"space-between", alignItems:"center",flexDirection:"column",  width:"5%", height:"100vh",paddingTop:'1%', borderBottom:"none"}}>
            <div style={{display:"flex", alignItems:"center",flexDirection:"column"}}>
                <img src=".\boohub_logo.png" style={{height:"50px",marginBottom:"50px"}}></img>
                <div style={{height:"50px"}}>
                <img src=".\Home.svg"></img>
                </div>

                <div style={{height:"50px"}}>
                <img src=".\users.svg"></img>
                </div>
                
               
                <img src=".\setting.svg"></img>
            </div>
            <div style={{display:"flex", alignItems:"center",flexDirection:"column"}}>
                <p>Apps</p>

            <div style={{height:"50px"}}>
            <img src=".\laptop.png"></img>
                </div>

                <div style={{height:"50px"}}>
                <img src=".\bam.png"></img>
                </div>

                <div style={{height:"50px"}}>
                <img src=".\boochat.png"></img>
                </div>

                <div style={{height:"50px"}}>
                <img src=".\star.png"></img>  
                </div>
           
                
              
             
            </div>
        </div>
      
        </>
    )
}