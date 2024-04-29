export default function Login(){
    return(
        <>
        <div style={{border:"1px solid #DDDDDD", width:"100%",height:"100%"}}>

        
        <div style={{display:"flex",justifyContent:"center",alignItems:"center",marginTop:"6%"}}>
        <img src=".\boohub_logo.png" style={{width:"70px"}}></img>
        </div>
       

        <div style={{border:"1px solid #DDDDDD", width:"450px",height:"450px",margin:"auto",borderRadius:"5px",display:"flex",flexDirection:"column",alignItems:"center", marginTop:"4%",marginBottom:"5%"}}>
            <p style={{fontSize:"2opx",marginTop:"5%"}}><b>Welcome back</b></p>
            <p style={{fontSize:"16px",margin:"0"}}>Log In to manage your access to our services & tools.</p>

            <div style={{width:"90%"}}>
            <form style={{marginTop:"5%"}}>
                <label style={{fontSize:"18px", fontWeight:"500"}}>Email</label><br></br><br></br>
                <input type="text" placeholder="Enter your email here" style={{padding:"3%",width:"100%",boxSizing: "border-box", border:"1px solid #DDDDDD", borderRadius:"5px",fontSize:"14px"}}></input><br></br><br></br>
                <label style={{fontSize:"18px", fontWeight:"500"}}>Password</label><br></br><br></br>
                <input type="password" placeholder="Enter your password here" style={{padding:"3%",width:"100%",boxSizing: "border-box",border:"1px solid #DDDDDD", borderRadius:"5px",fontSize:"14px"}}></input><br></br>
               
            </form>
            </div>
            <button style={{color:"white",backgroundColor:"#DC5620",height:"50px",width:"90%",borderRadius:"5px", border:"none",marginTop:"5%", marginBottom:"5%",fontSize:"20px"}}>Log In</button>

          
            <a href="url" style={{width:"90%", display:"flex",justifyContent:"end",color:"black",fontSize:"18px"}}>Forgot Password?</a>
            
             
            
        </div>
        </div>
        </>
    )
}