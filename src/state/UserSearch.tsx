import React, { useState, useRef, useEffect } from 'react';

const users = [
	{ name: 'John', age: 13 },
	{ name: 'Bau', age: 19 },
	{ name: 'Duma', age: 19 },
	{ name: 'Nike', age: 19 },
	{ name: 'Jemo', age: 19 },
];

const UserSearch: React.FC = () => {
	const inputRef = useRef<HTMLInputElement | null>(null);
	const [name, setName] = useState('');
	const [searched, setSearched] = useState<
		{ name: string; age: number } | undefined
	>();

	useEffect(() => {
		inputRef?.current?.focus();
	}, []);
	const handleSubmit = () => {
		setName('');
		const searchedUser = users.find(user => user.name === name);

		setSearched(searchedUser);
	};
	return (
		<div>
			<div className='form-input'>
				<>
					<h3> Find user</h3>
					<input
						ref={inputRef}
						type='text'
						value={name}
						onChange={e => setName(e.target.value)}
					/>

					<button onClick={handleSubmit}> Search</button>
					{searched && (
						<li>
							{searched?.name}
							{searched?.age}
						</li>
					)}
				</>
			</div>
		</div>
	);
};
export default UserSearch;
