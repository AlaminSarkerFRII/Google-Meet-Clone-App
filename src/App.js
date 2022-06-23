// import logo from './logo.svg';
import {Route,Routes} from "react-router-dom"
// import './App.scss';
import CallPage from "./components/CallPage/CallPage";
import HomePage from "./components/HomePage/HomePage";
import NotFound from "./components/NotFound/NotFound";

function App() {
  return (
   <>
    <Routes>
        <Route exact path="/" element={<HomePage/>}></Route>
        <Route path="/:id" element={<CallPage/>}></Route>
        <Route path="*" element={<NotFound/>}></Route>
    </Routes>
   
   </>
  );
}

export default App;
