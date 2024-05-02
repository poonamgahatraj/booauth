export default function PassChangeReq (){
    return(
        <>
        <div style={{display:"flex", justifyContent:"center",alignItems:'center',backgroundColor:"#F9F9F9",height:"100vh", width:"100vw"}}>
            <div style={{height:'70%', width:"52%", backgroundColor:"#FFFFFF"}}>
                <div style={{padding:"5%"}}>
                <img src=".\boohub_logo.png"></img>
                <p style={{fontWeight:"500", fontSize:"23px"}}>Password Change Request</p>
              
              <p style={{fontSize:"14px",margin:"0"}}>You have submitted password change request.</p>
              <p style={{fontSize:"14px",margin:"0"}}>If it wasn't you please disregard this email and make sure you can still login to your account.</p>
              <p style={{fontSize:"14px",margin:"0"}}>If it was you, then confirm the password change by clicking the button below.</p>
              <button style={{padding:"10px",backgroundColor:"#DC5620",color:"white", border:"none", marginTop:"3%"}}>Reset password</button>
                </div>
                
            </div>

        </div>
        </>
    )
}