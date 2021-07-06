import React from 'react'
import { Header } from '../../components/structures'
 
type HomeProps = {
	text: string;
}
 
const Home:React.FC<HomeProps> = ({ text }) => {
	return (
		<div>
			<Header text='hey' />
			{text}
		</div>
	)
}
 
export default Home