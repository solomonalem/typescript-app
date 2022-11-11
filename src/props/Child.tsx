import React from 'react';
interface ChildProps {
	color: String;
	onClick: () => void;
	children?: React.ReactNode;
}
const Child = (props: ChildProps) => {
	return (
		<>
			<h1>{props.color}</h1>
			<button onClick={props.onClick}>Submit</button>
		</>
	);
};

export const ChildFC: React.FC<ChildProps> = ({ color, children, onClick }) => {
	return (
		<>
			{color}
			{children}
			<button onClick={onClick}>onChange</button>
		</>
	);
};
export default Child;
