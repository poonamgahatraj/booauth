export default function NewPassword(){
    return(
        <>
        <div style={{border:"1px solid #DDDDDD", width:"100%",height:"100%",margin:"auto",borderRadius:"5px",display:"flex",flexDirection:"column",alignItems:"center"}}>
           <img src=".\boohub_logo.png" style={{marginTop:"5%"}}></img>

           <div style={{border:"1px solid #DDDDDD", width:"34%",height:"75%",borderRadius:"5px",marginTop:'5%',marginBottom:'5%'}}>
           <div style={{display:"flex",justifyContent:"center", marginTop:"5%"}}>
    <div style={{border:"1px solid #DD51060F ", backgroundColor:"#DD51060F", height:"45px", width:"45px", display:"flex", justifyContent:'center',alignItems:"center",borderRadius:"50px"}}>
    <div style={{border:"1px solid #FAE5DA ", backgroundColor:"#FAE5DA", height:"30px", width:"30px", display:"flex", justifyContent:'center',alignItems:"center",borderRadius:"50px",color:"#DC5620"}}>
        <img src=".\key1.webp" style={{height:"15px"}}></img>
    </div>
    </div>
    </div>
                   
                    <div style={{padding:"30px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center", paddingTop:"0"}}>
                    <p style={{fontSize:"18px"}}><b>Set your new password</b></p>
                    <div style={{textAlign:"center",fontSize:"14px"}}>
                    <p style={{marginTop:"0",fontSize:"12px"}} >Hint:Your password must be different to previously used passwords. </p>
                    </div>
                    
                    </div>
                <div style={{padding:"5%", paddingTop:"0"}}>
                    <form>
                        <label>New password</label><br></br>
                        <input type="password" placeholder="Enter your new password" style={{width:"100%",boxSizing:"border-box",padding:"10px",marginTop:"2%"}}></input><br></br>
                        <label>Must contain atleast 8 characters</label><br></br>
                        <label>Confirm password</label>
                        <input type="password" placeholder="Confirm your new password" style={{width:"100%",boxSizing:"border-box",padding:"10px",marginTop:"2%"}}></input><br></br>
                    </form>
                    <br></br><br></br>
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