import './App.css';
import Axios from "axios";
import { useState } from "react"

function App() {
  const [partyExcuse, setPartyExcuse] = useState("");
  const [familyExcuse, setFamilyExcuse] = useState("");
  const [officeExcuse, setOfficeExcuse] = useState("");

  const fetchPartyExcuses = () => {
    Axios.get("https://excuser-three.vercel.app/v1/excuse/party").then((res) => {
      setPartyExcuse(res.data[0].excuse);
    });
  };

  const fetchFamilyExcuses = () => {
    Axios.get("https://excuser-three.vercel.app/v1/excuse/family").then((res) => {
      setFamilyExcuse(res.data[0].excuse);
    });
  };

  const fetchOfficeExcuses = () => {
    Axios.get("https://excuser-three.vercel.app/v1/excuse/office/").then((res) => {
      setOfficeExcuse(res.data[0].excuse);
    });
  };

  return (
    <div className="App">
      <h1>Generate An Excuse</h1>
      <button onClick={fetchPartyExcuses}>Party</button>
      <button onClick={fetchFamilyExcuses}>Family</button>
      <button onClick={fetchOfficeExcuses}>Office</button>
      <p>Party excuse: {partyExcuse}</p>
      <p>Family excuse: {familyExcuse}</p>
      <p>Office excuse: {officeExcuse}</p>
    </div>
  );
}

export default App;
