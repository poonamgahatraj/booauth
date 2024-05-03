import logo from './logo.svg';

import Login from './pages/loginpage';
import VerifyPage from './pages/twoFactorAuth';
import Homepage from './pages/homepage';
import ForgetPage from './pages/forgetpage';
import EmailCheck from './pages/EmailCheck';
import NewPassword from './pages/newpassword';
import Password_success from './pages/passwordsucc';
import Add_application from './pages/Addappli';
import Adduser from './pages/adduser';
import Authentic_App from './pages/authenticapp';
import Scan_Qr from './pages/qr';
import RemoveApp from './pages/removeapp';
import Remove_User from './pages/removeuser';
import Home from './pages/home';
import Users from './pages/users';
import Setting from './pages/setting';
import Sidenav from './pages/sidenav';
import InvitationPage from './pages/invitation';
import PassChangeReq from './pages/passwordChangeReq';
function App() {
  return (
    <div className="App">
     
    
    

<Login/>
<VerifyPage/>
 <InvitationPage/>
<Home/>

<Users/>
<Setting/>
<ForgetPage/> 
<Adduser/>
<Authentic_App/>
<Scan_Qr/>
<EmailCheck/>
<RemoveApp/>
<PassChangeReq/>
<Remove_User/>
<NewPassword/>
<Password_success/>

   
   </div>
  );
}

export default App;
