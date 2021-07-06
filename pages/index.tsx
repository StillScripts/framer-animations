import Head from 'next/head'
import Home from '../src/templates/Homepage'

const HomePage:React.FC = () => {
	return (
		<div className='page-container'>
			<Head>
				<title>Home | Framer Animations</title>
			</Head>
			<div>
				<h1>
					Hey
				</h1>
			</div>
		</div>
	)
}
 
export default HomePage