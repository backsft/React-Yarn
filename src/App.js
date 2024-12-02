import './App.css';
import StudentInfo from './Components/StudentInfo';

function App() {

  //console.log();

  //pass a object as props

  const testObject1 = {
    "stId": 100,
    "stName": "Mr Test1",
    "stAge": 9,
    "stAdrress": "dhaka",
    "stPhone": 19122265888
  }

  const testObject2 = {
    "stId": 101,
    "stName": "Mr Test2",
    "stAge": 10,
    "stAdrress": "khulna",
    "stPhone": 656592212
  }

  return (
    <div className="App">

      {/* <StudentInfo testObject1={(testObject1)} testObject2={(testObject2)}/> */}

      {/* <StudentInfo testObject1={{testObject1,testObject2}}/> */}

      <div className="App h-screen grid place-items-center">

        <div className="bg-gray-200 p-8 rounded shadow">
          Centered Content

        </div>
      </div>

    </div>
  );
}

export default App;
