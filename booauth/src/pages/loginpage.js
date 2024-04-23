export default function Login(){
    return(
        <>
        <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
        <img src=".\boohub_logo.png" ></img>
        </div>
       

        <div style={{border:"1px solid #DDDDDD", width:"663px",height:"550px",margin:"auto",borderRadius:"5px",display:"flex",flexDirection:"column",alignItems:"center", marginTop:"5%",marginBottom:"5%"}}>
            <p style={{fontSize:"26px"}}><b>Welcome back</b></p>
            <p style={{fontSize:"20px"}}>Log In to manage your access to our services & tools.</p>

            <div style={{width:"90%"}}>
            <form>
                <label style={{fontSize:"18px"}}><b>Email</b></label><br></br><br></br>
                <input type="text" placeholder="Enter your email here" style={{height:"50px",width:"100%",boxSizing: "border-box", border:"1px solid #DDDDDD", borderRadius:"5px",fontSize:"20px"}}></input><br></br><br></br>
                <label style={{fontSize:"18px"}}><b>Password</b></label><br></br><br></br>
                <input type="password" placeholder="Enter your password here" style={{height:"50px",width:"100%",boxSizing: "border-box",border:"1px solid #DDDDDD", borderRadius:"5px",fontSize:"18px"}}></input><br></br>
               
            </form>
            </div>
            <button style={{color:"white",backgroundColor:"#DC5620",height:"50px",width:"90%",borderRadius:"5px", border:"none",marginTop:"5%", marginBottom:"5%",fontSize:"20px"}}>Log In</button>

          
            <a href="url" style={{width:"90%", display:"flex",justifyContent:"end",color:"black",fontSize:"18px"}}>Forgot Password?</a>
            
             
            
        </div>
        </>
    )
}