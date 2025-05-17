// propTypes = a mechanism that ensures that the data passed to a component is of
//           the correct type
//           age: PropTypes.number


import PropTypes from "prop-types";

function Student(props){
    return (
        <div className="student">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Student {props.isStudent ? "Yes" : "No"}</p>
        </div>
    );
}

Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool
};
Student.defaultProps = {
    name: "Guest",
    age: 0,
    isStudent: false,
};
console.log("Student component rendered");
export default Student;