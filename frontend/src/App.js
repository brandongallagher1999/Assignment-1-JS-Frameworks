import './css/App.css';
import React, { useState, useEffect} from 'react';
import NavBar from "./modules/NavBar";
import 'bulma/css/bulma.css';


function App() {
  
  const [name, setName] = useState("");

  useEffect(() => {
    setName("Brandon");
  }, []);



  return (
    <div className="App">
      <NavBar>
      </NavBar>
    </div>
  
  
  );
}

export default App;
