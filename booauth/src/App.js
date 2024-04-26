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
function App() {
  return (
    <div className="App">
     
    <Homepage/>
    <Login/>
    <VerifyPage/>  
    <ForgetPage/>
    <EmailCheck/>
    <NewPassword/>
    <Password_success/>
    <Add_application/>
    <Adduser/>
    <Authentic_App/>
    <Scan_Qr/>
    <RemoveApp/>
    <Remove_User/>
    <Home/>
    </div>
  );
}

export default App;
