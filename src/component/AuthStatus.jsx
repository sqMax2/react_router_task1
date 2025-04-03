import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/ContextAuthProvider";

export function AuthStatus({}) {
	const auth = useAuth();
	const navigate = useNavigate();

	const handleSignOut = () => {
		auth.signout(() => {
			navigate('/');
		})
	};

	if (auth.user === null) {
		return (
			<>
				<h1>You are not logged in.</h1>
				<p>Please, <NavLink to="/login">login</NavLink></p>
			</>
		)
	}

	return (
		<>
			<h1>
				Welcome user {auth.user}
				
			</h1>
			<button onClick={handleSignOut}>Sign out</button>
		</>
	)

}