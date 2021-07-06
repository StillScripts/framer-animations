import React from 'react'
import { CircleMotion } from '../../../atoms'
 
 
const AnimatedShapes:React.FC = () => {
	return (
		<div className='w-48 h-48 relative'>
			<CircleMotion background='bg-red-300' top='top-0' left='left-0' x={-28} y={-28} />
			<CircleMotion background='bg-yellow-300' top='top-0' left='left-16' x={0} y={-40} />
			<CircleMotion background='bg-blue-300' top='top-0' left='left-32' x={28} y={-28} />
			<CircleMotion background='bg-red-300' top='top-16' left='left-0' x={-40} y={0} />
			<CircleMotion background='bg-yellow-300' top='top-16' left='left-16' x={0} y={0} />
			<CircleMotion background='bg-blue-300' top='top-16' left='left-32' x={40} y={0} />
			<CircleMotion background='bg-red-300' top='top-32' left='left-0' x={-28} y={28} />
			<CircleMotion background='bg-yellow-300' top='top-32' left='left-16' x={0} y={40} />
			<CircleMotion background='bg-blue-300' top='top-32' left='left-32' x={28} y={28} />
		</div>
	)
}
 
export default AnimatedShapes