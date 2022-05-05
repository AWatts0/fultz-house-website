import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './components/homepage';
import CommHistory from './components/commHistory/commHistory';
import NotablePeople from './components/notablePeople/notablePeople';
import MyNavbar from './components/navbar';
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MyNavbar />
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/history" element={<CommHistory />}></Route>
          <Route path='/notablepeople' element={<NotablePeople />}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;