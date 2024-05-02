export default function Password_success(){
    return(
        <>
        <div style={{border:"1px solid #DDDDDD", width:"100%",height:"100vh",margin:"auto",borderRadius:"5px",display:"flex",flexDirection:"column",alignItems:"center", backgroundColor:"#FFFFFF"}}>
           <img src=".\boohub_logo.png" style={{marginTop:"5%"}}></img>

           <div style={{border:"1px solid #DDDDDD", width:"34%",borderRadius:"5px",marginTop:"5%"}}>
           <div style={{display:"flex",justifyContent:"center", marginTop:"5%"}}>
    <div style={{border:"1px solid #DD51060F ", backgroundColor:"#DD51060F", height:"45px", width:"45px", display:"flex", justifyContent:'center',alignItems:"center",borderRadius:"50px"}}>
    <div style={{border:"1px solid #FAE5DA ", backgroundColor:"#FAE5DA", height:"30px", width:"30px", display:"flex", justifyContent:'center',alignItems:"center",borderRadius:"50px",color:"#DC5620"}}>
        <img src=".\tick1.png" style={{height:"20px"}}></img>
    </div>
    </div>
    </div>
                   
                    <div style={{padding:"30px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
                    <p style={{fontSize:"18px", marginTop:"0"}}><b>Password set successfully</b></p>
                    <div style={{textAlign:"center",fontSize:"14px"}}>
                    <p style={{marginTop:"0", marginBottom:"0"}} >Your password has been successfully reset. </p>
                    <p  style={{marginTop:"0"}}>Click below to log in.</p>
                    </div>
                    
                    </div>
                <div style={{padding:"5%", paddingTop:"0",paddingBottom:"8%"}}>
                    
                    <button style={{border:"1px solid #DC5620",backgroundColor:"#DC5620", color:"white",width:"100%",padding:"10px"}}>Continue</button>
                    
                </div>
                    </div>
                   
           
             
            
        </div>
        </>
    )
}