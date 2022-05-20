import React from 'react'
 
type FrameProps = {
 children: JSX.Element
}
 
const Frame:React.FC<FrameProps> = ({ children }) => {
	return (
		<div className='inline-block bg-white shadow p-4 rounded sm:w-auto'>
			{children}
		</div>
	)
}
 
export default Frame