import React from 'react'
import Circle from './Circle'
 
const Circles:React.FC = () => {
	return (
		<div className='w-48 h-48 relative'>
			<Circle background='bg-red-300' top='top-0' left='left-0' x={-28} y={-28} />
			<Circle background='bg-yellow-300' top='top-0' left='left-16' x={0} y={-40} />
			<Circle background='bg-blue-300' top='top-0' left='left-32' x={28} y={-28} />
			<Circle background='bg-red-300' top='top-16' left='left-0' x={-40} y={0} />
			<Circle background='bg-yellow-300' top='top-16' left='left-16' x={0} y={0} />
			<Circle background='bg-blue-300' top='top-16' left='left-32' x={40} y={0} />
			<Circle background='bg-red-300' top='top-32' left='left-0' x={-28} y={28} />
			<Circle background='bg-yellow-300' top='top-32' left='left-16' x={0} y={40} />
			<Circle background='bg-blue-300' top='top-32' left='left-32' x={28} y={28} />
		</div>
	)
}
 
export default Circles