import Head from 'next/head'
import Animation from '../../src/templates/Animation'
import FlowerOfLifeAnimation from '../../src/components/molecules/FlowerOfLifeOld'

const FlowerOfLifePage:React.FC = () => {
	return (
		<div className='page-container'>
			<Head>
				<title>Flower of life, an animation of the famous geometric pattern</title>
			</Head>
			<Animation text='Flower of Life Animation' >
				<FlowerOfLifeAnimation />
			</Animation>
		</div>
	)
}
 
export default FlowerOfLifePage