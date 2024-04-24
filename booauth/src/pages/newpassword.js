export default function NewPassword(){
    return(
        <>
        <div style={{border:"1px solid #DDDDDD", width:"100%",height:"100vh",margin:"auto",borderRadius:"5px",display:"flex",flexDirection:"column",alignItems:"center"}}>
           <img src=".\boohub_logo.png" style={{marginTop:"5%"}}></img>

           <div style={{border:"1px solid #DDDDDD", width:"480px",borderRadius:"5px",marginTop:"5%"}}>
            <div style={{display:"flex",justifyContent:"center",alignItems:"center", marginTop:"5%"}}>
            <div style={{border:"none", height:"50px", width:"50px",borderRadius:"50px", backgroundColor:"#DC5620"}}></div>
            </div>
                   
                    <div style={{padding:"30px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
                    <p style={{fontSize:"18px"}}><b>Set your new password</b></p>
                    <div style={{textAlign:"center",fontSize:"14px"}}>
                    <p >Hint:Your password must be different to previously used passwords. </p>
                    </div>
                    
                    </div>
                <div style={{padding:"5%", paddingTop:"0"}}>
                    <form>
                        <label>New password</label><br></br>
                        <input type="password" placeholder="Enter your new password" style={{width:"100%",boxSizing:"border-box",padding:"10px"}}></input><br></br>
                        <label>Must contain atleast 8 characters</label><br></br>
                        <label>Confirm password</label>
                        <input type="password" placeholder="Confirm your new password" style={{width:"100%",boxSizing:"border-box",padding:"10px"}}></input><br></br>
                    </form>
                    <br></br>
                    <button style={{border:"1px solid #DC5620",backgroundColor:"#DC5620", color:"white",width:"100%",padding:"10px"}}> Reset password </button>
                    

                    <div style={{display:"flex", justifyContent:"center",alignItems:"center"}}>
                        <p>Back to log in</p>
                    </div>
                </div>
                    </div>
                   
           
             
            
        </div>
        </>
    )
}