import Child from './Child';
import { ChildFC } from './Child';
const Parent = () => {
	return (
		<>
			<Child color='greenify' onClick={() => console.log('ts props')} />;
			<ChildFC color='yellowable' onClick={() => console.log('make it anota')}>
				Make it happen
			</ChildFC>
		</>
	);
};
export default Parent;
