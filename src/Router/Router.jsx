import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loader from "../About Page/Loader";
const Home = lazy(()=>import("../Home/Home"))
const Header = lazy(()=> import("../Header/Header")) 
const Footer = lazy(()=> import("../Footer/Footer")) 
const About = lazy(()=> import("../About Page/About")) 
const RoomsPage = lazy(()=> import("../Rooms/RoomsPage")) 
const Gallery = lazy(()=> import("../Gallery")) 
const ContactPage = lazy(()=> import("../Contact/ContactPage")) 
const BookingPage = lazy(()=> import("../BookingPage")) 
const UserInformation = lazy(()=> import("../UserInformation")) ;
const ViewDetail = lazy(()=> import("../User/ViewDetail")) 
const LoginPage = lazy(()=> import("../Login & Register/LoginPage")) 
const RegisterPage = lazy(()=> import("../Login & Register/RegisterPage")) 
const UserRegisterTable = lazy(()=> import ("../Login & Register/UserRegisterTable"))

export default function Router() {
  return (
    <div>
      <BrowserRouter>
       <Suspense fallback={<Loader/>}>

        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/room" element={<RoomsPage />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* ============ User ===============  */}
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/userinfo" element={<UserInformation/>}/>
          <Route path="viewDetails" element={<ViewDetail/>}/>

          {/* =============== Login ==============  */}
          <Route path="/register" element={<RegisterPage/>}/>
          <Route path="/login" element={<LoginPage/>}/>
           <Route path="/userRegister" element={<UserRegisterTable/>}/>
        </Routes>
       </Suspense>

      </BrowserRouter>
      <Footer />
    </div>
  );
}
