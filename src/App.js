import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './components/homepage';
import CommHistory from './components/commHistory/commHistory';
import NotablePeople from './components/notablePeople/notablePeople';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage/>}></Route>
          <Route path="/history" element={<CommHistory/>}></Route>
          <Route path='/notablepeople' element={<NotablePeople/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;