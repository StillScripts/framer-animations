import React from 'react'
 
type FrameProps = {
	hey?: string;
}
 
const Frame:React.FC<FrameProps> = ({ children }) => {
	return (
		<div className='bg-white shadow p-4 m-4 rounded'>
			{children}
		</div>
	)
}
 
export default Frame