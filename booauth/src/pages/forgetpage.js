export default function ForgetPage (){
    return(
        <>
        <div style={{border:"1px solid #DDDDDD", width:"100%",height:"100vh",margin:"auto",borderRadius:"5px",display:"flex",flexDirection:"column",alignItems:"center"}}>
           <img src=".\boohub_logo.png" style={{marginTop:"5%"}}></img>

           <div style={{border:"1px solid #DDDDDD", width:"480px",borderRadius:"5px",marginTop:"5%"}}>
            <div style={{display:"flex",justifyContent:"center",alignItems:"center", marginTop:"5%"}}>
            <div style={{border:"none", height:"50px", width:"50px",borderRadius:"50px", backgroundColor:"#DC5620"}}></div>
            </div>
                   
                    <div style={{padding:"30px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
                    <p style={{fontSize:"18px"}}><b>Forgot Password?</b></p>
                    <div style={{textAlign:"center",fontSize:"14px", width:"85%"}}>
                    <p >Enter your email address and we will send you instuctions to reset your password. </p>
                    </div>
                    
                    </div>
                <div style={{padding:"5%", paddingTop:"0"}}>
                    <form>
                        <label>Email</label><br></br>
                        <input type="text" placeholder="Enter your email" style={{width:"100%",boxSizing:"border-box",padding:"10px"}}></input>
                    </form>
                    <br></br>
                    <button style={{border:"1px solid #DC5620",backgroundColor:"#DC5620", color:"white",width:"100%",padding:"10px"}}> Continue </button>
                    

                    <div style={{display:"flex", justifyContent:"center",alignItems:"center"}}>
                        <p>Back to log in</p>
                    </div>
                </div>
                    </div>
                   
           
             
            
        </div>
        </>
    )
}