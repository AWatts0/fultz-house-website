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
import Careers from './components/careers/careers'
import Facility from './components/facility/facility';
import Donations from './components/donations/donations';
import Governace from './components/governace/governace';
import Kids from './components/kids/kids';
import Presentations from './components/presentations/presentations';
import Programming from './components/programming/programming';
import Rentals from './components/rentals/rentals';
import Videos from './components/videos/videos';

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
          <Route path='/careers' element={<Careers />}></Route>
          <Route path='/volunteer' element={<Volunteer />}></Route>
          <Route path='/donations' element={<Donations />}></Route>
          <Route path='/facility' element={<Facility />}></Route>
          <Route path='/governance' element={<Governace />}></Route>
          <Route path='/kids' element={<Kids />}></Route>
          <Route path='/presentations' element={<Presentations />}></Route>
          <Route path='/programming' element={<Programming />}></Route>
          <Route path='/rentals' element={<Rentals />}></Route>
          <Route path='/videos' element={<Videos />}></Route>
        </Routes>
      </BrowserRouter>
        <Footer/>
    </div>
  );
}

export default App;