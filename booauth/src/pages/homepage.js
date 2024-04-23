export default function Homepage (){
    return(
        <>
        <div style={{display:"flex", justifyContent:"space-between", border:"2px solid #DDDDDD", padding:"15px"}}>
                <div style={{ display:"flex",  alignItems:"center"}}>
                    <img src=".\boohub_logo.png"></img>
                    <p style={{borderBottom:"2px solid #DD5106", marginLeft:"15%", fontSize:"20px"}}>Home</p>
                </div>

                <div style={{display:"flex",alignItems:"center"}}>
                    <div>
                        <div style={{border:"1 px solid #DD5106", height:"60px",width:"60px", borderRadius:"50px", display:"flex", justifyContent:"center", alignItems:"center"}}>
                        <div style={{border:"4 px solid white", height:"40px",width:"40px", borderRadius:"50px", display:"flex", justifyContent:"center", alignItems:"center" }}>
                        <div style={{border:"1 px solid #DD5106", height:"35px",width:"35px", borderRadius:"50px", backgroundColor:"#DD5106", display:"flex", justifyContent:"center", alignItems:"center" }}>
                                <p style={{color:"white"}}><b>BK</b></p>
                            
                            </div>
                        </div>
                        </div>
                    </div>

                    <div >
                    <p style={{margin:"0"}}>Bibash Khadka</p>
                    <p style={{margin:"0"}}>Admin</p>
                    </div>
                    
                </div>
        </div>
        <div style={{display:"flex"}}>


        </div>
        </>
    )
}