import  './users.css'
export default function Users (){
    return(
        <>
        <div style={{border:"1px solid #DDDDDD", width:"100%",height:"100vh"}}>
            <div style={{display:"flex", justifyContent:"space-between",paddingLeft:"2%",paddingRight:"2%"}}>
            <div>
            <button style={{border: "none", height:"60px", width:"70px", borderBottom:" 2px solid #DD5106",backgroundColor:'white'}}>Users</button>
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
                    <div>
                        <img src=".\dropdown.png" style={{height:'10px'}}></img>
                    </div>
                    
                </div>


            </div>
            <div style={{border:"1px solid grey", height:"90%", paddingLeft:"2%",paddingRight:"2%"}}>
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                <div>
                <p>Manage users</p>
                <p>You can manage,add or remove the users here</p>
                </div>
                <div>
                    <button style={{padding:"10px",backgroundColor:'#DD5106',border:"none", color:"white"}}> Add user</button>
                </div>
                </div>

                <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                <div style={{display:"flex",alignItems:"center"}}>
                    <p>Users (3)</p>
                <img src=".\Path 320.svg" style={{height:"11px", marginRight:"10px"}}></img>
                <p>Search users here...</p>
                
                </div>
                <div style={{display:"flex",alignItems:"center"}}>
                    <p style={{padding:"5px"}}>Recent</p>
                    <img src=".\dropdown.png" style={{height:"10px",marginRight:"25px"}}></img>
                    
                   
                </div>
                </div>
                   <div>
<table>
    <tr  >
        <th className="TableHeading" >Name</th>
        <th className="TableHeading">Email</th>
        <th className="TableHeading">Application access</th>
        <th className="TableHeading">Role</th>
    </tr>


    <tr>
    <td className="TableHeading">Bibash khadka</td>
    <td className="TableHeading">Testing100@gmail.com</td>
    <td className="TableHeading">2 application</td>
    <td className="TableHeading">Admin </td>
  </tr>

  <tr>
    <td>Scott Singh</td>
    <td>Testing200@gmail.com</td>
    <td>2 application</td>
    <td>Manager </td>
  </tr>

  <tr>
    <td>Conor keogh</td>
    <td>Testing200@gmail.com</td>
    <td>2 application</td>
    <td>Manager </td>
  </tr>
</table>

<p>Showing 1-1 of 3 users</p>

                   </div>
                       
                       
                    </div>
                
                
               

            </div>
           
            
           
       
        </>
        
    )
}