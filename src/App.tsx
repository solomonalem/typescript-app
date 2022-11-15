import React from 'react';
import Parent from './props/Parent';
import GuestList from './state/GuestList';
import UserSearch from './state/UserSearch';

function App() {
	return (
		<>
			<GuestList />
			<UserSearch />
			<Parent />;
		</>
	);
}

export default App;
