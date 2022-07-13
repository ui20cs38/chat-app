
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Join from "./component/Join/Join";
import Chat from "./component/Chat/Chat"




function App() {




  return (


    <Router>
    <div className="App">
    <Routes>
          <Route exact path='/' element={< Join />}></Route>
          <Route exact path='/chat' element={< Chat />}></Route>


   </Routes>
   </div>
</Router>

  );
}

export default App;
