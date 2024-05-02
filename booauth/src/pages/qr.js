import './VerifyPage.css'


export default function Scan_Qr(){
    return(
        <>
          
        <div style={{height:"100vh", width:"100%", backgroundColor:"rgba(128, 128, 128, 0.5)",display:"flex", justifyContent:"center",alignItems:"center"}}>

<div style={{width:"34%", backgroundColor:"white", borderRadius:"2%"}}>
    <div style={{margin:"25px"}}>

   
    <div style={{display:"flex",justifyContent:"flex-end", alignItems:"center"}}>
        
    <button style={{border:"none", backgroundColor:"white"}}>x</button>
    </div>
   
   

    <div>
        <p style={{fontWeight:"500"}}>Scan the QR code using authentication app</p>
        <img src ="./QR_Code.jpg" style={{height:"150px"}}></img>
        <p style={{fontSize:"14px",fontWeight:"500"}}>Trouble scanning?Enter this key in your app instead:</p>
        <p style={{color:"blue",fontSize:"10px"}}>NM4XUTZZN46DY62GGBECEZLSH47SKW2XNZLVIQ3NNEYFIVLZFB2A</p>
        <p>Enter verfication code</p>
        <div style={{display:"flex",justifyContent:"space-between"}}>
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>

            </div>
    </div>
  

    

    <div style={{display:"flex",justifyContent:"flex-end",marginTop:"8%"}}>
        <button style={{border:"none", backgroundColor:"#F1F1F1",height:"35px",width:"20%",borderRadius:"5px"}}>Cancel</button>
        <button style={{border:"none", backgroundColor:"#DD5106",height:"35px",width:"30%",marginLeft:"20px",color:"white",borderRadius:"5px"}}>Set Up</button>
    </div>
    </div>
</div>

</div>
        
        </>
    )
}