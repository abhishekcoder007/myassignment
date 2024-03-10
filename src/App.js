import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from './pages/home/home';
import User from './pages/userdetails/user';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/details" element={<User/>} />
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
