import Head from 'next/head'
import Animation from '../../src/templates/Animation'
import OrganiseAnimation from '../../src/components/molecules/OrganiseAnimation'

const OrganisePage:React.FC = () => {
	return (
		<div className='page-container'>
			<Head>
				<title>Organise, a simple animation that illustrates organising shapes</title>
			</Head>
			<Animation text='Organise Animation' >
				<OrganiseAnimation />
			</Animation>
		</div>
	)
}
 
export default OrganisePage