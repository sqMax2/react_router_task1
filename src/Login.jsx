import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "./context/ContextAuthProvider";

export function Login () {
	const navigate = useNavigate();
	const auth = useAuth();
	const location = useLocation();

	const from = location.state?.from || "/";

	const handleSubmit = (event) => {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		const username = data.get("username");
		auth.signin(username, () => {
			navigate(from, {replace: true});
		});
	}

	return (
		<>
		<form onSubmit={handleSubmit}>
			<label>
				Username: <input type="text" name="username" />
			</label>
			<button type="submit">Login</button>
		</form>
		</>
	)
}
