export default function Authentic_App(){
    return(
        <>
        <div style={{height:"100vh", width:"100%", backgroundColor:"rgba(128, 128, 128, 0.5)",display:"flex", justifyContent:"center",alignItems:"center"}}>

<div style={{height:"57%", width:"30%", backgroundColor:"white", borderRadius:"2%"}}>
    <div style={{margin:"25px"}}>

   
    <div style={{display:"flex",justifyContent:"flex-end", alignItems:"center"}}>
        
        <img src=".\cross btn.svg"></img>
    </div>
   
   

    <div>
        <p style={{fontWeight:"500"}}>Install an authentication app on your phone.</p>
        <p style={{width:"85%",fontSize:"14px"}}>You'll need to install an authentication app on your phone to set up Two-Factor Authentication. We recomment one of the following apps.</p>
    </div>
    <div style={{display:"flex",alignItems:"center"}}>
        <img src=".\google_auth.jpg" style={{height:"40px",marginRight:"10px"}}></img>
        <div>
            <p style={{fontSize:"14px",marginBottom:"0"}}>Google Authenticator</p>
            <p style={{fontSize:"12px",marginTop:"0"}}>From Google Inc.</p>
        </div>

    </div>

    <div  style={{display:"flex",alignItems:"center"}}>
        <img src=".\microsoft_auth.png" style={{height:"30px", width:"40px", borderRadius:"5px",marginRight:"10px"}}></img>
        <div>
            <p style={{fontSize:"14px",marginBottom:"0"}}>Microsoft Authenticator</p>
            <p style={{fontSize:"12px",marginTop:"0"}}>From Microsoft</p>
        </div>

    </div>

    <div style={{display:"flex",justifyContent:"flex-end",marginTop:"20px"}}>
        <button style={{border:"none", backgroundColor:"#F1F1F1",height:"35px",width:"20%",borderRadius:"5px"}}>Cancel</button>
        <button style={{border:"none", backgroundColor:"#DD5106",height:"35px",width:"30%",marginLeft:"20px",color:"white",borderRadius:"5px"}}>Ready to scan</button>
    </div>
    </div>
</div>

</div>
        </>
    )
}