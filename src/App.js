import './App.css';
import Axios from "axios";
import { useState, useEffect } from "react"

function App() {
  const [excuseParty, setExcuse] = useState("");

  const fetchPartyExcuses = () => {
    Axios.get("https://excuser-three.vercel.app/v1/excuse/party").then((res) => {
      setExcuse(res.data[0].excuse);
    });
  };
  
  // const fetchPartyExcuses2 = async () => {
  //   try {
  //     const response = await fetch("https://excuser-three.vercel.app/v1/excuse/party");
  //     const data = await response.json();
  //     console.log(data..excuse)
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  

  useEffect(() => {
    fetchPartyExcuses();
  }, []);

  return (
    <div className="App">
      <h1>Generate An Excuse</h1>
      <button onClick={fetchPartyExcuses}>Party</button>
      <button>Family</button>
      <button>Office</button>
      <p>{excuseParty}</p>
    </div>
  );
}

export default App;
