import { useReducer } from 'react';
const reducer = (state, action) => {
	if (action.increment) {
		return { count: state.count + 1 }
	} else {
		return { count: state.count - 1 }
	}
}

function Counter() {
	const [counterState, dispatch] = useReducer(reducer, { count: 0 });
	return (
		<div>
			<button onClick={() => dispatch({ increment: true })}>Increment</button>
			<button onClick={() => dispatch({ increment: false })}>Decrement</button>
			<h5>{counterState.count}</h5>
		</div>
	)
}

export default Counter;