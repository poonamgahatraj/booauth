export default function EmailCheck (){
    return(
        <>
         <div style={{border:"1px solid #DDDDDD", width:"100%",height:"100%",margin:"auto",borderRadius:"5px",display:"flex",flexDirection:"column",alignItems:"center"}}>
           <img src=".\boohub_logo.png" style={{marginTop:"5%"}}></img>

           <div style={{border:"1px solid #DDDDDD", width:"34%",borderRadius:"5px",marginTop:"3%",marginBottom:"5%"}}>
            <div style={{display:"flex",justifyContent:"center",alignItems:"center", marginTop:"5%"}}>
            <div style={{border:"1px solid #DD51060F ", backgroundColor:"#DD51060F", height:"45px", width:"45px", display:"flex", justifyContent:'center',alignItems:"center",borderRadius:"50px"}}>
    <div style={{border:"1px solid #FAE5DA ", backgroundColor:"#FAE5DA", height:"30px", width:"30px", display:"flex", justifyContent:'center',alignItems:"center",borderRadius:"50px",color:"#DC5620"}}>
        <img src=".\email.jpg" style={{height:"15px"}}></img>
    </div>
    </div>
            </div>
                   
                    <div style={{padding:"30px",paddingBottom:"5px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
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