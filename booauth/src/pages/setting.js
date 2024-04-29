
export default function Setting (){
    return(
        <>
        <div style={{border:"1px solid #DDDDDD", width:"100%"}}>
            <div style={{display:"flex", justifyContent:"space-between",paddingLeft:"2%",paddingRight:"2%"}}>
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
            <div style={{border:"1px solid grey", height:"90%", paddingLeft:"2%",paddingRight:"2%"}}>
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                <div>
                <p>Manage your account</p>
                <p>You can manage,edit or delete your account here</p>
                </div>

               

                </div>
                <div style={{display:"flex"}}>
                <div style={{width:"20%",padding:"15px"}}>
                <div style={{border:"1px solid grey", display:"flex", justifyContent:"space-between",alignItems:'center',padding:"10px"}}>
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

                <div style={{padding:"12px"}}>General Information</div>
                <div style={{padding:"12px"}}>Two-Factor authentication</div>
                <div style={{padding:"12px"}}>Update password</div>
                </div>
                
                
               

           
           
            
           
        </div>

        <div style={{width:"80%", border:"1px solid grey"}}>
          <p>General Information</p>

          <div style={{display:"flex", alignItems:"center"}}>
                    <div style={{border:"1 px solid #DD5106", height:"80px",width:"80px", borderRadius:"50px", display:"flex", justifyContent:"center", alignItems:"center"}}>
                        <div style={{border:"4 px solid white", height:"40px",width:"40px", borderRadius:"50px", display:"flex", justifyContent:"center", alignItems:"center" }}>
                        <div style={{border:"1 px solid #DD5106", height:"35px",width:"35px", borderRadius:"50px", backgroundColor:"#DD5106", display:"flex", justifyContent:"center", alignItems:"center" }}>
                                <p style={{color:"white"}}><b>BK</b></p>
                            
                            </div>
                        </div>
                        </div>

                        <div >
                    <button>Upload</button>
                   
                    </div>
                    </div>

                    <div style={{width:"60%"}}>

                        <form>
                            <label>Full name</label><br></br>
                            <input type="text" placeholder="BooStudio" style={{padding:"10px",width:"100%"}}></input><br></br>
                            <label>Email address</label><br></br>
                            <input type="text" placeholder="testing@gmail.com" style={{padding:"10px",width:"100%"}}></input>
                        </form>
                       
                    </div>

                    <hr></hr>

                    <p>Two-Factor authentication</p>
                    <p>Keep your account secure by enabling 2FA via temporary one-time passcode (TOTP) from an authenticator app.</p>
                    <div style={{display:"flex",padding:"10px",alignItems:"center"}}>
                        <img src=".\auth_icon.webp" style={{height:"15px"}}></img>
                        <div>
                            <p>Authenticator App (TOTP)</p>
                            <p>USe a app to  receive a temporary one-time passcode each time you log in. </p>
                        </div>
                    </div>

                    <hr></hr>

                    <p>Update password</p>
                    <p>To change your password,verify your current password that you haven't use elsewhere.</p>

                    <div style={{width:"60%"}}>

                        <form>
                            <label>Old password (to verify it's you)</label><br></br>
                            <input type="text" placeholder="Enter your email here" style={{padding:"10px",width:"100%"}}></input><br></br>
                            <label>New password</label><br></br>
                            <input type="password" placeholder="Enter your password here" style={{padding:"10px",width:"100%"}}></input>
                            <label>Must contain 8 characters.</label>
                            <label>Confirm password</label><br></br>
                            <input type="password" placeholder="Enter your password here" style={{padding:"10px",width:"100%"}}></input>
                        </form>


                    </div>
                    <div style={{display:'flex', justifyContent:"space-between", alignItems:"center"}}>
                        <button>Update password</button>
                        <a>Forget Password?</a>
                    </div>
        </div>

        </div>
        </div>
        </div>
        </>
    )
}