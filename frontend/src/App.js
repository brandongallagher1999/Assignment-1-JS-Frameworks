import './css/App.css';
import React, { useState, useEffect} from 'react';
import NavBar from "./modules/NavBar";
import 'bulma/css/bulma.css';
import Profile from "./modules/Profile";


function App() {
  
  const [name, setName] = useState("");

  useEffect(() => {
    setName("Brandon");
  }, []);



  return (
    <Profile>
    </Profile>
  
  );
}

export default App;
