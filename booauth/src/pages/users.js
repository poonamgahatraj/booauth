import Sidenav from './sidenav'
import  './users.css'
export default function Users (){
    return(
        <>
        <div style={{display:"flex"}}>
        <Sidenav/>
        <div style={{border:"1px solid #DDDDDD", width:"100%",height:"100vh",borderLeft:"none"}}>
            <div style={{display:"flex", justifyContent:"space-between",paddingLeft:"2%",paddingRight:"2%"}}>
            <div>
            <button style={{border: "none", height:"60px", width:"70px", borderBottom:" 2px solid #DD5106",backgroundColor:'white',fontWeight:'500'}}>Users</button>
            </div>

            <div style={{display:"flex",alignItems:"center",width:"15%"}}>
                    <div>
                        <div style={{border:"1 px solid #DD5106", height:"60px",width:"60px", borderRadius:"50px", display:"flex", justifyContent:"center", alignItems:"center"}}>
                        <div style={{border:"4 px solid white", height:"40px",width:"40px", borderRadius:"50px", display:"flex", justifyContent:"center", alignItems:"center" }}>
                        <div style={{border:"1 px solid #DD5106", height:"35px",width:"35px", borderRadius:"50px", backgroundColor:"#DD5106", display:"flex", justifyContent:"center", alignItems:"center" }}>
                                <p style={{color:"white"}}><b>BK</b></p>
                            
                            </div>
                        </div>
                        </div>
                    </div>

                    <div style={{marginRight:"7%"}}>
                    <p style={{margin:"0"}}>Bibash Khadka</p>
                    <p style={{margin:"0"}}>Admin</p>
                    </div>
                    <div>
                        <img src=".\dropdown.png" style={{height:'10px'}}></img>
                    </div>
                    
                </div>


            </div>
            <div style={{border:"1px solid #EAEAEA", height:"90%", paddingLeft:"2%",paddingRight:"2%",borderBottom:"none"}}>
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:"2%"}}>
                <div style={{lineHeight:"1.5"}}>
                <p style={{marginBottom:"0",fontWeight:"500"}}>Manage users</p>
                <p style={{marginTop:"0",fontSize:'14px'}}>You can manage,add or remove the users here</p>
                </div>
                <div>
                    <button style={{padding:"10px",backgroundColor:'#DD5106',border:"none", color:"white"}}> Add user</button>
                </div>
                </div>

                <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",fontSize:"13px"}}>
                <div style={{display:"flex",alignItems:"center",width:"22%"}}>
                    <p style={{margin:"0",fontWeight:"500",borderRight:"2px solid grey",width:"30%"}}>Users (3)</p>
                <img src=".\Path 320.svg" style={{height:"11px", marginRight:"10px",marginLeft:"10px"}}></img>
                <p style={{margin:"0"}}>Search users here...</p>
                
                </div>
                <div style={{display:"flex",alignItems:"center",justifyContent:'center'}}>
                    <p style={{padding:"5px",margin:"0"}}>Recent</p>
                    <img src=".\dropdown.png" style={{height:"10px"}}></img>
                    
                   
                </div>
                </div>

                <hr style={{border:'1px solid #EAEAEA'}}></hr>
                   <div>
<table>
    <tr  >
        <th className="TableHeading" >Name</th>
        <th className="TableHeading">Email</th>
        <th className="TableHeading">Application access</th>
        <th className="TableHeading">Role</th>
    </tr>


    <tr>
    <td className="TableHeading"> Bibash khadka</td>
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
<div style={{display:"flex", justifyContent:"space-between",alignItems:'center'}}>


<p style={{fontWeight:"500",color:"#3F3532"}}>Showing 1-1 of 3 users</p>
<div style={{display:"flex",justifyContent:"space-between",alignItems:'center',width:"24%",color:"#393A60",fontWeight:'normal'}}>
    <p>The page you,re on</p>
    <div style={{border:"1px solid grey",height:"20px",width:"45px",display:"flex",justifyContent:"center",alignItems:"center",marginRight:'8%'}}>10 <img src='.\dropdown1.jpg' style={{height:"15px", width:'12px',marginLeft:"5px"}}></img></div>
    <div style={{border:"1px solid grey",height:"20px"}}><img src='.\backIcon.jpg' style={{height:"15px",marginRight:"3%"}}></img></div>
    <div style={{border:"1px solid grey",height:"20px"}}><img src='.\frontIcon.jpg'style={{height:"15px"}}></img></div>
</div>
</div>

                   </div>
                       
                       
                    </div>
                
                
               

            </div>
            </div>
           
            
           
       
        </>
        
    )
}