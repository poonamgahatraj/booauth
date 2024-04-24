export default function Adduser (){
    return(
        <>
        <div style={{height:"100vh", width:"100%", backgroundColor:"rgba(128, 128, 128, 0.5)",display:"flex", justifyContent:"center",alignItems:"center"}}>

<div style={{height:"47%", width:"30%", backgroundColor:"white", borderRadius:"2%"}}>
    <div style={{margin:"25px"}}>

   
    <div style={{display:"flex",justifyContent:"space-between", alignItems:"center"}}>
        <p style={{fontWeight:'500'}}>Add User</p>
        <img src=".\cross btn.svg"></img>
    </div>
    <hr></hr>
   

    <div>
        <form>
            <label style={{fontSize:"14px",fontWeight:"500"}}>Name of user</label><br></br>
            <input type="text" placeholder="Enter name of user" style={{height:"45px", width:"100%",boxSizing:"border-box",marginTop:"10px",marginBottom:"15px",padding:"15px",border:"1px solid #1C1C1C26"}}></input><br></br>
            <label style={{fontSize:"14px",fontWeight:"500"}}>Email address</label><br></br>
            <input type="text" placeholder="Enter email address" style={{height:"45px", width:"100%",boxSizing:"border-box",marginTop:"10px",marginBottom:"15px" ,padding:"15px",border:"1px solid #1C1C1C26"}}></input><br></br>
            <label style={{fontSize:"14px",fontWeight:"500"}}>Role</label><br></br>
            <div style={{display:"flex",marginTop:"10px",marginBottom:"20px"}}>
                <div style={{height:"40px", width:"25%",border:"1px solid #1C1C1C26",display:"flex",justifyContent:"center",alignItems:"center",marginRight:"5%",fontWeight:"500"}}> Manager</div>
                <div style={{height:"40px", width:"45%",border:"1px solid #1C1C1C26",display:"flex",justifyContent:"center",alignItems:"center",fontWeight:"500"}}>Staff/Member</div>

            </div>
            
        </form>
    </div>
    <hr style={{border:"1px solid #1C1C1C26"}}></hr>

    <div style={{display:"flex",justifyContent:"flex-end",marginTop:"20px"}}>
        <button style={{border:"none", backgroundColor:"#F1F1F1",height:"35px",width:"20%",borderRadius:"5px"}}>Cancel</button>
        <button style={{border:"none", backgroundColor:"#DD5106",height:"35px",width:"30%",marginLeft:"20px",color:"white",borderRadius:"5px"}}>Create user</button>
    </div>
    </div>
</div>

</div>
        </>
    )
}