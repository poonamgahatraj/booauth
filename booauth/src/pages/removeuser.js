export default function Remove_User(){
    return(
        <>
         <div style={{height:"100vh", width:"100%", backgroundColor:"rgba(128, 128, 128, 0.5)",display:"flex", justifyContent:"center",alignItems:"center"}}>

<div style={{ width:"32%", backgroundColor:"white", borderRadius:"2%"}}>
    <div style={{margin:"25px"}}>

   
    <div style={{display:"flex",justifyContent:"flex-end", alignItems:"center"}}>
        
       x
    </div>
   
   

    <div>
        <div style={{border:"1px solid #DD51060F ", backgroundColor:"#DD51060F", height:"45px", width:"45px", display:"flex", justifyContent:'center',alignItems:"center",borderRadius:"50px"}}>
    <div style={{border:"1px solid #FAE5DA ", backgroundColor:"#FAE5DA", height:"30px", width:"30px", display:"flex", justifyContent:'center',alignItems:"center",borderRadius:"50px",color:"#DC5620"}}>
        <img src=".\trash_can.webp" style={{height:"15px"}}></img>
    </div>
    </div>
        <p style={{fontWeight:"500"}}>Remove user?</p>
        
        <p style={{fontSize:"14px"}}>Are you sure you want to remove <b style={{fontWeight:"500"}}>Testing200@gmail.com</b> ?</p>
       <p style={{fontSize:"12px"}}>You can't undo this action</p>
    </div>
  

    

    <div style={{display:"flex",justifyContent:"flex-end",marginTop:"20px"}}>
        <button style={{border:"none", backgroundColor:"#F1F1F1",height:"35px",width:"20%",borderRadius:"5px"}}>Cancel</button>
        <button style={{border:"none", backgroundColor:"#DD5106",height:"35px",width:"30%",marginLeft:"20px",color:"white",borderRadius:"5px"}}>Remove access</button>
    </div>
    </div>
</div>

</div>
        
        </>
    )
}