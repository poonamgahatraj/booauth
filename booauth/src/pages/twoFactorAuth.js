import './VerifyPage.css'

export default function VerifyPage(){
    return(
        <>
         <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
        <img src=".\boohub_logo.png" ></img>
        </div>
       

        <div style={{border:"1px solid #DDDDDD", width:"663px",height:"650px",margin:"auto",borderRadius:"5px",display:"flex",flexDirection:"column", marginTop:"5%",marginBottom:"5%"}}>
            <div style={{display:"flex",justifyContent:"center",alignItems:"center", marginTop:"5%"}}>
            <div style={{backgroundColor:"#FCEEE8",borderRadius:"50px",height:"60px",width:"60px",display:"flex",justifyContent:"center",alignItems:"center"}}>
            <div style={{backgroundColor:"#DC5620",borderRadius:"50px",height:"40px",width:"40px",display:"flex",justifyContent:"center",alignItems:"center"}}>
                <div>
                    <img src=".\Path 258.png" style={{height:"15px",width:"15px"}}></img>
                </div>

            </div>
            </div>
            </div>
            
            <div style={{padding:"5%"}}>
            <div>
                <p style={{fontSize:"26px",textAlign:"center"}}>Two-factor authentication</p>
                <div style={{display:"flex",justifyContent:"center"}}>
                <p style={{fontSize:"20px",textAlign:"center", width:"70%"}}>To continue, Enter the code the two-factor app on your mobile device.</p>
                </div>
               
            </div>
            
            <p><b>Enter your code here</b></p>
            <div style={{display:"flex",justifyContent:"space-between"}}>
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>

            </div>

            <button style={{color:"white",backgroundColor:"#DC5620",height:"50px",width:"100%",borderRadius:"5px", border:"none",marginTop:"5%", marginBottom:"5%",fontSize:"20px"}}>Verify code</button>

            
          <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
            <img src='.\Path 259.png' style={{color:"black"}}></img>
            <p style={{width:"90%", display:"flex",justifyContent:"center",color:"black",fontSize:"18px"}}>Back to login</p>
          </div>
            
            </div>
           
            
         
            

            
             
            
        </div>
        </>
    )
}