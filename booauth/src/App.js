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
    </div>
  );
}

export default App;
