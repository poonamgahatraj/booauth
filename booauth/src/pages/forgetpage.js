import '../forgetpage.css'

export default function ForgetPage (){
    return(
        <>
        <div  className="Container" style={{border:"1px solid #DDDDDD",margin:"auto",borderRadius:"5px",display:"flex",flexDirection:"column",alignItems:"center"}}>
           <img src=".\boohub_logo.png" style={{marginTop:"5%"}}></img>

           <div style={{border:"1px solid #DDDDDD", width:"480px",borderRadius:"5px",marginTop:"5%", marginBottom:"5%"}}>
           <div style={{display:"flex",justifyContent:"center", marginTop:"5%"}}>
    <div style={{border:"1px solid #DD51060F ", backgroundColor:"#DD51060F", height:"45px", width:"45px", display:"flex", justifyContent:'center',alignItems:"center",borderRadius:"50px"}}>
    <div style={{border:"1px solid #FAE5DA ", backgroundColor:"#FAE5DA", height:"30px", width:"30px", display:"flex", justifyContent:'center',alignItems:"center",borderRadius:"50px",color:"#DC5620"}}>
        <img src=".\key1.webp" style={{height:"15px"}}></img>
    </div>
    </div>
    </div>
                   
                    <div style={{padding:"30px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center", paddingTop:"1%"}}>
                    <p style={{fontSize:"18px"}}><b>Forgot Password?</b></p>
                    <div style={{textAlign:"center",fontSize:"14px", width:"85%"}}>
                    <p style={{marginTop:"0"}}>Enter your email address and we will send you instuctions to reset your password. </p>
                    </div>
                    
                    </div>
                <div style={{padding:"5%", paddingTop:"0"}}>
                    <form>
                        <label>Email</label><br></br>
                        <input type="text" placeholder="Enter your email" style={{width:"100%",boxSizing:"border-box",padding:"10px", marginTop:"2%"}}></input>
                    </form>
                    <br></br><br></br>
                    <button style={{border:"1px solid #DC5620",backgroundColor:"#DC5620", color:"white",width:"100%",padding:"10px"}}> Continue </button>
                    

                    <div style={{display:"flex", justifyContent:"center",alignItems:"center"}}>
                        <img src=""></img>
                        <p>Back to log in</p>
                    </div>
                </div>
                    </div>
                   
           
             
            
        </div>
        </>
    )
}