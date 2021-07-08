import Head from 'next/head'
import Animation from '../../src/templates/Animation'
import TriangleAnimation from '../../src/components/molecules/TriangleAnimation'

const TriangleAnimationPage:React.FC = () => {
	return (
		<div className='page-container'>
			<Head>
				<title>Triangle Layout, a simple animation that organises circles in a trangle formation</title>
			</Head>
			<Animation text='Triangle Layout Animation' >
				<TriangleAnimation />
			</Animation>
		</div>
	)
}
 
export default TriangleAnimationPage