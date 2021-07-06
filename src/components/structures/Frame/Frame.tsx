import React from 'react'
 
type FrameProps = {
	text: string;
}
 
const Frame:React.FC<FrameProps> = ({ text }) => {
	return (
		<div className='shadow p-4'>
			{text}
		</div>
	)
}
 
export default Frame