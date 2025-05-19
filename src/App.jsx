import Header from "./Header.jsx"
import Footer from "./Footer.jsx";
import Food from "./Food.jsx";
import Card from "./Card.jsx";
import UserGreeting from "./UserGreeting.jsx";
import {studentData} from './data/studentData.js';
import GroceryList from './data/GroceryList.jsx';

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
      
      <div>
        <h2 className="welcome-message">Grocery List</h2>
          <GroceryList items={fruits} category="Fruits"></GroceryList>
          <GroceryList items={vegetables} category="Vegetables"></GroceryList>

      </div>
      

      <Footer/>
    </>
  );
}

export default App;
