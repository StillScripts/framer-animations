import React from 'react'
import { Frame, Header } from '../../components/structures'
 
type AnimationProps = {
	text: string;
}
 
const Animation:React.FC<AnimationProps> = ({ children }) => {
	return (
		<div>
			<Header text='hey' />
			<Frame>
				{children}
			</Frame>

		</div>
	)
}
 
export default Animation