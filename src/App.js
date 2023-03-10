import {useState} from "react"
import ListPersons from "./Components/ListPersons";
import "./index.css"
import data from "./Components/Data";
function App() {
  const [people, setPeople] = useState(data)

const clear = () => {
setPeople([])
}

  return (
    <div className="App">
       <h1 id="birthdayCount"> <span style={{fontSize:"1.8rem"
}}>{people.length} </span>Birthdays Today</h1>
      <ListPersons people = {people}/>

      <button id="clearBtn" onClick={clear}>Clear All</button>
    </div>
  );
}

export default App;
