import Header from "./Header.jsx"
import Footer from "./Footer.jsx";
import Food from "./Food.jsx";
import Card from "./Card.jsx";
import Student from "./Student.jsx";

function App() {
  
  return(
    <>
      <Header/>

      <Food/>
      <Card></Card>
      <Card></Card>
      <Student name="Spongebob" age={30} isStudent={true}></Student>
      <Student name="Patrick" age={35} isStudent={false}></Student>
      <Student name="Squidward" age={40} isStudent={false}></Student>
      <Student name="Sandy" age={30} isStudent={true}></Student>
      <Student name="Larry"> </Student>
      <Footer/>
    </>
  );
}

export default App
