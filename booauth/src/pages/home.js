import { useState } from 'react'
import './home.css'
import Sidenav from './sidenav'
import Add_application from './Addappli';


export default function Home (){
const [show_application, setShow_application]=useState(false);


    function show_Application(){
        console.log("hello")
     setShow_application(true);
     document.body.style.overflow =  'hidden';
    }
    return(



        <>
        <div style={{display:"flex",height:"100%", width:"100%",flexDirection:"column",position:'relative'}}>
            <div style={{display:"flex",height:"100%", width:"100%"}}>
            <Sidenav/>
       
       <div style={{border:"1px solid #1C1C1C1A", width:"95%"}}>
           <div style={{display:"flex", justifyContent:"space-between",paddingLeft:"2%",paddingRight:"2%"}}>
           <div>
           <button style={{border: "none", height:"60px", width:"70px", borderBottom:" 2px solid #DD5106",backgroundColor:'white',fontWeight:"500"}}>Home</button>
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

                   <div style={{marginRight:"10px",fontSize:"12px",lineHeight:"1.5"}} >
                   <p style={{margin:"0"}}>Bibash Khadka</p>
                   <p style={{margin:"0"}}>Admin</p>
                   </div>
                   <div>
                       <img src=".\dropdown.png" style={{height:'10px'}}></img>
                   </div>
                   
               </div>


           </div>
           <div style={{border:"1px solid #1C1C1C1A",borderBottom:"none",borderLeft:"none",  paddingLeft:"2%",paddingRight:"2%"}}>
               <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
               <div>
               <p style={{fontWeight:"500",marginBottom:"1%"}}>Manage your application</p>
               <p style={{marginTop:"0",fontSize:'14px'}}>You can manage,add or remove the application here</p>
               </div>
               <div>
                   <button onClick={show_Application} style={{padding:"10px",backgroundColor:'#DD5106',border:"none", color:"white" }}>+ Add application</button>
               </div>
               </div>

               <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
               <div style={{display:"flex",alignItems:"center",color:"#393A60"}}>
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
                   <div className="Box1">
                       <div style={{padding:"15px"}}>
                           <button style={{border:"none",backgroundColor:"#FFF7F3",height:"30px", width:"55%"}}>by BOOSoft</button>
                           <div style={{display:"flex", justifyContent:"center", alignItems:"center",margin:"25px"}}>
                               <img src='.\box1.png'></img>
                           </div>
                           <div style={{textAlign:"center"}}>
                           <p style={{fontSize:"11px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                           </div>
                           
                       </div>
                   </div>
               <div className="Box1">

               <div style={{padding:"15px"}}>
                           <button style={{border:"none",backgroundColor:"#FFF7F3",height:"30px", width:"55%"}}>by BOOSoft</button>
                           <div style={{display:"flex", justifyContent:"center", alignItems:"center",margin:"25px"}}>
                               <img src='.\box2.png'style={{height:"45px"}}></img>
                           </div>
                           <div style={{textAlign:"center"}}>
                           <p style={{fontSize:"11px"}}>Lorem ipsum dolor sit amet, consectetur </p>
                           </div>
                           
                       </div>
               </div>
               <div className="Box1">
               <div style={{padding:"15px"}}>
                           <button style={{border:"none",backgroundColor:"#FFF7F3",height:"30px", width:"55%"}}>by BOOSoft</button>
                           <div style={{display:"flex", justifyContent:"center", alignItems:"center",margin:"25px"}}>
                               <img src='.\box3.png' style={{height:"45px"}}></img>
                           </div>
                           <div style={{textAlign:"center"}}>
                           <p style={{fontSize:"11px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                           </div>
                           
                       </div>
               </div>
               <div className="Box1">
               <div style={{padding:"15px"}}>
                           <button style={{border:"none",backgroundColor:"#FFF7F3",height:"30px", width:"55%"}}>by BOOSoft</button>
                           <div style={{display:"flex", justifyContent:"center", alignItems:"center",margin:"25px"}}>
                               <img src='.\box4.png' style={{height:"45px"}}></img>
                           </div>
                           <div style={{textAlign:"center"}}>
                           <p style={{fontSize:"11px"}}>Lorem ipsum dolor sit amet, consectetur </p>
                           </div>
                           
                       </div>
               </div>
                   </div>

                   <div style={{display:"flex"}}>
                       <div className='Box2'> <p>Chromebook In-store</p></div>
                       <div className='Box2'> <p>BAM</p></div>
                       <div className='Box2'>
                       <p>BOOChat</p></div>
                       <div className='Box2'> <p>QR Generator</p></div>
                      
                      
                   </div>
               
               
              

           </div>
          
           
          
       </div>
        </div>
        {show_application &&
            <div style={{ position:"relative",bottom:"655px"}}>
                <Add_application/>
       </div>
        }
        
        
        </div>
       
      
        </>


        
 
    )
}