export default function EmailCheck (){
    return(
        <>
         <div style={{border:"1px solid #DDDDDD", width:"100%",height:"100vh",margin:"auto",borderRadius:"5px",display:"flex",flexDirection:"column",alignItems:"center"}}>
           <img src=".\boohub_logo.png" style={{marginTop:"5%"}}></img>

           <div style={{border:"1px solid #DDDDDD", width:"480px",borderRadius:"5px",marginTop:"5%"}}>
            <div style={{display:"flex",justifyContent:"center",alignItems:"center", marginTop:"5%"}}>
            <div style={{border:"none", height:"50px", width:"50px",borderRadius:"50px", backgroundColor:"#DC5620"}}></div>
            </div>
                   
                    <div style={{padding:"30px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
                    <p style={{fontSize:"18px"}}><b>Check your email</b></p>
                    <div style={{textAlign:"center",fontSize:"14px", width:"85%"}}>
                    <p >Please check the email address <span><b>Testing@gmail.com.au</b></span> for instructions to reset your password. </p>
                    </div>
                    
                    </div>
                <div style={{padding:"5%", paddingTop:"0"}}>
                    
                    <button style={{border:"1px solid #DC5620",backgroundColor:"#DC5620", color:"white",width:"100%",padding:"10px"}}> Open mail </button>
                    

                    <div style={{display:"flex", justifyContent:"center",alignItems:"center", flexDirection:"column"}}>
                        <p>Didn,t receive the mail? <span style={{color:"#DC5620"}}><b>Click to resend</b></span></p>
                        <p>Back to log in</p>
                    </div>
                </div>
                    </div>
                   
           
             
            
        </div>
        </>
    )
}