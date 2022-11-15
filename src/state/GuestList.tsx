import React, { useState, useEffect, useRef } from 'react';

const GuestList: React.FC = () => {
	const [name, setName] = useState('');
	const [guests, setGuests] = useState<string[]>([]);
	const inputRef = useRef<HTMLInputElement | null>(null);

	useEffect(() => {
		inputRef?.current?.focus();
	}, [name]);

	const handleSubmit = () => {
		setName('');
		setGuests([...guests, name]);
	};
	return (
		<div className='form-input'>
			<h3>Guests</h3>
			<input
				ref={inputRef}
				value={name}
				type='text'
				onChange={e => setName(e.target.value)}
			/>
			<button onClick={handleSubmit}>Add</button>
			{guests?.map(el => (
				<li key={el}>{el}</li>
			))}
		</div>
	);
};
export default GuestList;
