import Head from 'next/head'
import Home from '../src/templates/Home'

const HomePage:React.FC = () => {
	return (
		<div className='page-container'>
			<Head>
				<title>Home | Framer Animations</title>
			</Head>
			<div>
				<Home text='hey' />
			</div>
		</div>
	)
}
 
export default HomePage