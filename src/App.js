import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './components/homepage';
import SideButtons from './components/sideButtons/sideButtons';
import CommHistory from './components/commHistory/commHistory';
import NotablePeople from './components/notablePeople/notablePeople';
import MyNavbar from './components/navbar';
import Footer from "./components/footer";
import ContactUs from './components/contactUs/contact';
import Photos from './components/gallery/photos/Photos.js';
import EventsPage from './components/events/events';
import Volunteer from './components/volunteer/volunteer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MyNavbar />
        <SideButtons/>
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/contact" element={<ContactUs />}></Route>
          <Route path="/history" element={<CommHistory />}></Route>
          <Route path='/notablepeople' element={<NotablePeople />}></Route>
          <Route path='/photo' element={<Photos />}></Route>
          <Route path='/events' element={<EventsPage />}></Route>
          <Route path='/volunteer' element={<Volunteer />}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;