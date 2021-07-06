import React from 'react'
import { Header } from '../../components/structures'
 
type HomepageProps = {
	text: string;
}
 
const Homepage:React.FC<HomepageProps> = ({ text }) => {
	return (
		<div>
			<Header text='hey' />
			{text}
		</div>
	)
}
 
export default Homepage