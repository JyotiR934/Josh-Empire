import {BrowserRouter,Routes,Route, useParams} from "react-router-dom"
import {Home} from './pages/Home.jsx';
import {About} from './pages/About.jsx';
import { Contact } from "./pages/Contact";
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";
import { Navbar } from "./components/Navbar.jsx";
import { Service } from "./pages/Service.jsx";
import { Error } from "./pages/Error.jsx";
import { Footer } from "./components/Footer.jsx";
import { Logout } from "./pages/Logout.jsx";
import { Admin } from "./components/Layouts/Admin-Layout.jsx";
import { AdminUsers } from "./pages/AdminUsers.jsx";
import { AdminContacts } from "./pages/AdminContacts.jsx";
import { AdminUserUpdate } from "./pages/AdminUserUpdate.jsx";

//import TestToast from "./pages/TestToast.jsx"
const App=()=>{
  
  return (
  <>
  {/* <h1>Hello</h1>
  <TestToast></TestToast> */}
  <BrowserRouter>
  <Navbar></Navbar>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/register" element={<Register/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/service" element={<Service/>}/>
    <Route path="/logout" element={<Logout/>}/>
    <Route path="*" element={<Error/>}></Route>
    <Route path="/admin" element={<Admin/>}>
      <Route path="user/:id" element={<AdminUserUpdate/>}></Route>
      <Route path="users" element={<AdminUsers/>}></Route>
      <Route path="contacts" element={<AdminContacts/>}></Route>
    </Route>
  </Routes>
  <Footer></Footer>
  </BrowserRouter>
  
  </>)
}
export default App;