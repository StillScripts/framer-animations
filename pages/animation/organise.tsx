import Head from 'next/head'
import Home from '../../src/templates/Home'
import Animation from '../../src/templates/Animation'
import BoxAnimation from '../../src/components/molecules/BoxAnimation'

const OrganisePage:React.FC = () => {
	return (
		<div className='page-container'>
			<Head>
				<title>Organise, an animation that illustrates organising shapes</title>
			</Head>
			<div>
				<Animation text='hey' >
					<BoxAnimation />
				</Animation>
			</div>
		</div>
	)
}
 
export default OrganisePage