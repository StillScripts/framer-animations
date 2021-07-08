import React from 'react'
import { Header } from '../../components/structures'
 
type HomeProps = {
	text: string;
}
 
const Home:React.FC<HomeProps> = ({ text }) => {
	return (
		<div>
			<Header text='hey' />
			<div className='w-full h-full flex flex-col justify-center items-center p-2'>
				<h3 className='mt-2 mb-4'>Explore Animations</h3>
				<div className='grid grid-cols-1 md:grid-cols-3'>
					<div>1</div>
					<div>2</div>
					<div>3</div>
				</div>
			</div>
		</div>
	)
}
 
export default Home