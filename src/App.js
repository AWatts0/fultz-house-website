import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CommHistory from './components/commHistory/commHistory';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/history" element={<CommHistory/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;