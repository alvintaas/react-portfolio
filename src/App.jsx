import Header from "./Header.jsx"
import Footer from "./Footer.jsx";
import Food from "./Food.jsx";
import Card from "./Card.jsx";
import UserGreeting from "./UserGreeting.jsx";
import {studentData} from './data/studentData.js';
import GroceryList from './data/GroceryList.jsx';
import Button from "./Button.jsx";
import ProfilePicture from "./ProfilePicture.jsx";
import MyComponent from "./MyComponent.jsx";
import Counter from "./Counter.jsx";
import MyComponent2 from "./MyComponent2.jsx";
import MyComponent3 from "./MyComponent3.jsx";
import UpdateStateArray from "./UpdateStateArray.jsx";
import ToDoList from "./ToDoList.jsx";
import MyComponent4 from "./MyComponent4.jsx";
import DigitalClock from "./DigitalClock.jsx";
import ComponentA from "./ComponentA.jsx";
import RefComponent from "./RefComponent.jsx";
import Stopwatch from "./Stopwatch.jsx";

function App() {
  

  const fruits = [{id: 1, name:'Apples', calories: 95},
                  {id: 2, name:'Bananas', calories: 105},
                  {id: 4, name:'Dragonfruit', calories: 60},
                  {id: 3, name:'Coconut', calories: 283}];

  const vegetables = [{id: 1, name:'Potatoes', calories: 110},
                      {id: 2, name:'Celery', calories: 15},
                      {id: 4, name:'Carrot', calories: 25},
                      {id: 3, name:'Corn', calories: 63},
                      {id: 5, name:'Broccoli', calories: 50}];                  

  return(
    <>
      <Header/>
      <UserGreeting isLoggedIn={true} ></UserGreeting>
      
      <Food/>
      <div>
        <h2 className="welcome-message">Student List</h2>
        <div className="card-container">
          {studentData.map((student) => (
            <Card
              key={student.id}
              name={student.name}
              age={student.age}
              isStudent={student.isStudent}
            />
          ))}
        </div>
              {/*
            <Student name="Spongebob" age={30} isStudent={true}></Student>
            <Student name="Patrick" age={35} isStudent={false}></Student>
            <Student name="Squidward" age={40} isStudent={false}></Student>
            <Student name="Sandy" age={30} isStudent={true}></Student>
            */}
      </div>
      
      <div className="card">
        <h3 className="welcome-message">Grocery List</h3>
          {fruits.length > 0 && <GroceryList items={fruits} category="Fruits"><h3>Fruits</h3></GroceryList> }
          {vegetables.length > 0 && <GroceryList items={vegetables} category="Vegetables"><h3>Vegetables</h3></GroceryList>}

      </div>

      <div className="card">
        <ProfilePicture></ProfilePicture>
                <p>  </p>
        <Button> </Button>
      </div>
      
      <div className="card">
        <MyComponent></MyComponent>
      </div>

      <div className="card">
        <Counter> </Counter>
      </div>

      <div className="card">
        <MyComponent2> </MyComponent2>
      </div>

      <div className="card">
        <MyComponent3> </MyComponent3>
      </div>

      <div className="card">
        <UpdateStateArray></UpdateStateArray>
      </div>

      <div className="card">
        <ToDoList></ToDoList>
      </div>

      <div className="card">
        <MyComponent4></MyComponent4>
      </div>

               
      <div className="card">
      <h3 className="welcome-message">Digital Clock</h3>
        <DigitalClock></DigitalClock>
      </div>

      <div className="card">
        <h3 className="welcome-message">useContext() Hook</h3>
        <ComponentA></ComponentA>
      </div>

      <div className="card">
        <h3 className="welcome-message">useRef() Hook</h3>
        <RefComponent></RefComponent>
      </div>

      <div className="card">
        <h3 className="welcome-message">Stopwatch</h3>
        <Stopwatch></Stopwatch>
      </div>

      <Footer/>
    </>
  );
}

export default App;
