import './home.css'

export default function Home (){
    return(
        <>
        <div style={{border:"1px solid #DDDDDD", width:"100%",height:"100vh"}}>
            <div style={{display:"flex", justifyContent:"space-between",paddingLeft:"2%",paddingRight:"2%"}}>
            <div>
            <button style={{border: "none", height:"60px", width:"70px", borderBottom:" 2px solid #DD5106",backgroundColor:'white'}}>Home</button>
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
                <p>Manage your application</p>
                <p>You can manage,add or remove the application here</p>
                </div>
                <div>
                    <button style={{padding:"10px",backgroundColor:'#DD5106'}}>+ Add application</button>
                </div>
                </div>

                <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                <div style={{display:"flex",alignItems:"center"}}>
                <img src=".\Path 320.svg" style={{height:"11px", marginRight:"10px"}}></img>
                <p>Search apps here...</p>
                
                </div>
                <div style={{display:"flex",alignItems:"center"}}>
                    <p style={{padding:"5px"}}>Recent</p>
                    <img src=".\dropdown.png" style={{height:"10px",marginRight:"25px"}}></img>
                    <img src=".\Path 324.svg" style={{marginRight:"25px"}}></img>
                    <img src=".\Path 326.svg"></img>
                   
                </div>
                </div>
                    <div style={{display:"flex"}}>
                    <div className="Box1"></div>
                <div className="Box1"></div>
                <div className="Box1"></div>
                <div className="Box1"></div>
                    </div>
                
                
               

            </div>
           
            
           
        </div>
        </>
    )
}