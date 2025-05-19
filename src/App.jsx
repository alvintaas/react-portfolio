import Header from "./Header.jsx"
import Footer from "./Footer.jsx";
import Food from "./Food.jsx";
import Card from "./Card.jsx";
import UserGreeting from "./UserGreeting.jsx";
import {studentData} from './data/studentData.js';

function App() {
  
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
        
      </div>
      
      <Card></Card>
      {/*
      <Student name="Spongebob" age={30} isStudent={true}></Student>
      <Student name="Patrick" age={35} isStudent={false}></Student>
      <Student name="Squidward" age={40} isStudent={false}></Student>
      <Student name="Sandy" age={30} isStudent={true}></Student>
      */}

      <Footer/>
    </>
  );
}

export default App;
