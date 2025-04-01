import { Component } from "react";

class ErrorBoundary extends Component {
	constructor(props) {
		super(props);

		this.state = {
			hasError: false,
		}
	}

	static getDerivedStateFromError(error) {
		console.log("### Error: ", error.message);
		return {
			hasError: true,
		}
	}

	componentDidCatch (error, info) {
		console.log("### Error: ", error.message);
		console.log("### Info: ", info);
	}

	render () {
		if (this.state.hasError) {
			return <h4>Something went wrong</h4>
		}

		return this.props.children;
	}
}

export default ErrorBoundary;