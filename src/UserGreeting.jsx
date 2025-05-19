import PropTypes from "prop-types";

function UserGreeting(props) {
    // This component will display a greeting message based on the user's login status
    // If the user is logged in, it will display a welcome message with the username

    const welcomeMessage = <h2 className="welcome-message">
                            Welcome{props.username}!</h2>

    const loginMessage = <h2 className="login-message">
                            Please log in.</h2>

    return(props.isLoggedIn ? welcomeMessage : loginMessage);
    
}

// Define prop types for the UserGreeting component
UserGreeting.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
    username: PropTypes.string.isRequired
}

UserGreeting.defaultProps = {
    isLoggedIn: false,
    username: "Guest"
}

export default UserGreeting;