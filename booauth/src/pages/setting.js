import Sidenav from "./sidenav";

export default function Setting (){
    return(
        <>
        <div style={{display:"flex"}}>
        <Sidenav/>
        <div style={{border:"1px solid #DDDDDD", width:"95%"}}>
           
            <div style={{display:"flex", justifyContent:"space-between",paddingLeft:"2%",paddingRight:"2%", marginTop:"1%"}}>
            <div>
            <button style={{border: "none", height:"60px", width:"70px", borderBottom:" 2px solid #DD5106",backgroundColor:'white'}}>Settings</button>
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
            <div style={{borderTop:"1px solid grey", height:"90%", paddingLeft:"2%",paddingRight:"2%"}}>
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                <div>
                <p style={{fontWeight:"500"}}>Manage your account</p>
                <p>You can manage,edit or delete your account here .</p>
                </div>

               

                </div>
                <div style={{display:"flex"}}>
                <div style={{width:"20%",padding:"15px"}}>
                <div style={{border:"1px solid #3F35321A", display:"flex", justifyContent:"space-between",alignItems:'center',padding:"10px"}}>
                    <div style={{display:"flex", alignItems:"center"}}>
                    <div style={{border:"1 px solid #DD5106", height:"60px",width:"60px", borderRadius:"50px", display:"flex", justifyContent:"center", alignItems:"center"}}>
                        <div style={{border:"4 px solid white", height:"40px",width:"40px", borderRadius:"50px", display:"flex", justifyContent:"center", alignItems:"center" }}>
                        <div style={{border:"1 px solid #DD5106", height:"35px",width:"35px", borderRadius:"50px", backgroundColor:"#DD5106", display:"flex", justifyContent:"center", alignItems:"center" }}>
                                <p style={{color:"white"}}><b>BK</b></p>
                            
                            </div>
                        </div>
                        </div>

                        <div >
                    <p style={{margin:"0"}}>Bibash Khadka</p>
                   
                    </div>
                    </div>
                    <div>Admin</div>
                </div>

                <div style={{marginTop:"20%"}}>

                <div style={{padding:"12px",color:"#F97031", fontWeight:"500", borderLeft:"2px solid #F97031"}}>General Information</div>
                <div style={{padding:"12px"}}>Two-Factor authentication</div>
                <div style={{padding:"12px"}}>Update password</div>
                </div>
                
                
               

           
           
            
           
        </div>

        <div style={{width:"80%",paddingLeft:"4%",paddingRight:"10%",marginBottom:"5%"}}>
          <p style={{fontWeight:"500"}}>General Information</p>
          <hr></hr>

          <div style={{display:"flex", alignItems:"center"}}>
                    <div style={{border:"1 px solid #DD5106", height:"100px",width:"100px", borderRadius:"50px", display:"flex", justifyContent:"center", alignItems:"center"}}>
                        <div style={{border:"4 px solid white", height:"100px",width:"100px", borderRadius:"50px", display:"flex", justifyContent:"center", alignItems:"center" }}>
                        <div style={{border:"1 px solid #DD5106", height:"75px",width:"75px", borderRadius:"50px", backgroundColor:"#DD5106", display:"flex", justifyContent:"center", alignItems:"center" }}>
                                <p style={{color:"white"}}><b>BK</b></p>
                            
                            </div>
                        </div>
                        </div>

                        <div >
                    <button style={{padding:"8px", width:"90px", border:"0.8px solid #E1E1E1"}}>Upload</button>
                   
                    </div>
                    </div>

                    <div style={{width:"50%"}}>

                        <form>
                            <label style={{marginBottom:"10%"}}>Full name</label><br></br>
                            <input type="text" placeholder="BooStudio" style={{padding:"10px",width:"100%", marginTop:"2%"}}></input><br></br><br></br>
                            <label>Email address</label><br></br>
                            <input type="text" placeholder="testing@gmail.com" style={{padding:"10px",width:"100%", marginTop:"2%"}}></input><br></br><br></br>
                        </form>
                       
                    </div>

                    <hr></hr>
                    <div style={{marginTop:"8%"}}>
                    <p style={{fontWeight:"500"}}>Two-Factor authentication</p>
                    <p>Keep your account secure by enabling 2FA via temporary one-time passcode (TOTP) from an authenticator app.</p>

                    <hr></hr>
                    <div style={{display:"flex",padding:"10px",alignItems:"center", border:"1px solid #E1E1E7",marginTop:"3%", marginBottom:"3%", width:"80%"}}>
                        <img src=".\auth_icon.webp" style={{height:"15px", marginRight:"2%"}}></img>
                        <div>
                            <p style={{marginBottom:"8px",margin:"0"}}>Authenticator App (TOTP)</p>
                            <p  style={{marginTop:"0",margin:"0"}}>USe a app to  receive a temporary one-time passcode each time you log in. </p>
                        </div>
                    </div>

                    <hr></hr>

                    </div>
                    <div style={{marginTop:"8%"}}>
                    <p style={{fontWeight:"500"}}>Update password</p>
                    <p>To change your password,verify your current password that you haven't use elsewhere.</p><br></br>
                        <hr></hr>

                    <div style={{width:"50%", marginTop:"4%", marginBottom:"5%"}}>

                        <form>
                            <label>Old password (to verify it's you)</label><br></br>
                            <input type="text" placeholder="Enter your email here" style={{padding:"10px",width:"100%", marginTop:"1.5%"}}></input><br></br><br></br>
                            <label>New password</label><br></br>
                            <input type="password" placeholder="Enter your password here" style={{padding:"10px",width:"100%",marginTop:"1.5%"}}></input><br></br>
                            <p>Must contain 8 characters.</p>
                            <label>Confirm password</label><br></br>
                            <input type="password" placeholder="Enter your password here" style={{padding:"10px",width:"100%",marginTop:"1.5%"}}></input><br></br><br></br><br></br>
                        </form>
                        <div style={{display:'flex', justifyContent:"space-between", alignItems:"center"}}>
                        <button style={{padding:"10px", backgroundColor:"#FCEEE8", border:"none", color:"#676767"}}>Update password</button>
                        <a href="ForgetPassword" style={{color:"black"}}>Forget Password?</a>
                    </div>

                    </div>
                    

                    </div>
        </div>

        </div>
        </div>
        </div>
        </div>
        </>
    )
}