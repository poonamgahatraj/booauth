export default function Add_application (){
    return(
        <>
        <div style={{height:"100%", width:"100%", backgroundColor:"rgba(128, 128, 128, 0.5)",display:"flex", justifyContent:"center",alignItems:"center"}}>

            <div style={{ width:"30%",height:"65%", backgroundColor:"white", borderRadius:"2%", marginTop:"3%", marginBottom:"3%"}}>
                <div style={{margin:"25px"}}>

               
                <div style={{display:"flex",justifyContent:"space-between", alignItems:"center"}}>
                    <p style={{fontWeight:'500'}}>Add Application</p>
                    <img src=".\cross btn.svg"></img>
                </div>
                <hr></hr>
                <div style={{display:"flex",alignItems:"center"}}>
                    <div style={{height:"100px", width:"100px", borderRadius:"50px",backgroundColor:"#F1F1F1",marginRight:"25px",display:"flex",justifyContent:"center",alignItems:"center"}}>
                        <p style={{fontWeight:"480",fontSize:"14px"}} >Logo</p>
                    </div>
                    <button style={{border:"1px solid #E1E1E1",height:"40px", width:"25%", backgroundColor:"white"}}>Upload</button>

                </div>

                <div>
                    <form>
                        <label style={{fontSize:"14px",fontWeight:"500"}}>Name of application</label><br></br>
                        <input type="text" placeholder="Enter name of application" style={{height:"40px", width:"100%",boxSizing:"border-box",marginTop:"10px",marginBottom:"15px",padding:"15px",border:"1px solid #1C1C1C26"}}></input><br></br>
                        <label style={{fontSize:"14px",fontWeight:"500"}}>Certificate application</label><br></br>
                        <input type="text" placeholder="Enter certificate" style={{height:"40px", width:"100%",boxSizing:"border-box",marginTop:"10px",marginBottom:"15px" ,padding:"15px",border:"1px solid #1C1C1C26"}}></input><br></br>
                        <label style={{fontSize:"14px",fontWeight:"500"}}>ACL URL</label><br></br>
                        <input type="text" placeholder="Enter Access control list URL" style={{height:"40px", width:"100%",boxSizing:"border-box" ,marginTop:"10px",marginBottom:"15px" ,padding:"15px",border:"1px solid #1C1C1C26"}}></input><br></br>
                        <label style={{fontSize:"14px",fontWeight:"500"}}>SLS URL</label><br></br>
                        <input type="text" placeholder="Enter SLS URL" style={{height:"40px", width:"100%",boxSizing:"border-box",marginTop:"10px",marginBottom:"15px" ,padding:"15px",border:"1px solid #1C1C1C26"}}></input><br></br>
                        <label style={{fontSize:"14px",fontWeight:"500"}}>Developed by</label><br></br>
                        <input type="text" placeholder="Enter SLS URL" style={{height:"40px", width:"100%",boxSizing:"border-box",marginTop:"10px",marginBottom:"15px" ,padding:"15px",border:"1px solid #1C1C1C26"}}></input><br></br>
                    </form>
                </div>
                <hr></hr>

                <div style={{display:"flex",justifyContent:"flex-end",marginTop:"20px"}}>
                    <button style={{border:"none", backgroundColor:"#F1F1F1",height:"35px",width:"20%",borderRadius:"5px"}}>Cancel</button>
                    <button style={{border:"none", backgroundColor:"#DD5106",height:"35px",width:"30%",marginLeft:"20px",color:"white",borderRadius:"5px"}}>Create application</button>
                </div>
                </div>
            </div>

        </div>
        </>
    )
}