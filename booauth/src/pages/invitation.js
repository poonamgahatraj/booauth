export default function InvitationPage (){
    return(
        <>
        <div style={{display:"flex", justifyContent:"center",alignItems:'center',backgroundColor:"#F9F9F9",height:"100vh", width:"100vw"}}>
            <div style={{ width:"52%", backgroundColor:"#FFFFFF"}}>
                <div style={{padding:"5%"}}>
                <img src=".\boohub_logo.png"></img>
                <p style={{fontWeight:"500", fontSize:"25px"}}>You're invited to BooHub Auth.</p>
                <div style={{width:"100%", backgroundColor:'#DD51060A', paddingTop:"5%",paddingBottom:"5%", marginBottom:"5%"}}>
                    <div style={{display:"flex", justifyContent:"center", marginTop:"5%"}}>

                    
                <div style={{border:"1px solid #DD5106", height:"50px",width:"50px", borderRadius:"50px", display:"flex", justifyContent:"center", alignItems:"center"}}>
                        <div style={{border:"1px solid white", height:"40px",width:"40px", borderRadius:"50px", display:"flex", justifyContent:"center", alignItems:"center" }}>
                        <div style={{border:"1px solid #DD5106", height:"39px",width:"39px", borderRadius:"50px", backgroundColor:"#DD5106", display:"flex", justifyContent:"center", alignItems:"center" }}>
                                <p style={{color:"white"}}><b>BK</b></p>
                            
                            </div>
                        </div>
                        </div>
                        </div>

                        <p style={{fontWeight:"500", textAlign:'center',marginBottom:"0", fontSize:"20px"}}>Bibash Khadka invited you</p>

                </div>
                </div>
                
            </div>

        </div>
        </>
    )
}