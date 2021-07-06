import React, { useState } from 'react'
import { AnimatedShapes, BasicSquares } from './Animations'
import { MotionButton } from '../../atoms'
 
const BoxAnimation:React.FC = () => {
	const [blur, setBlur] = useState(true)
	const [transparent, setTransparent] = useState(true)
	const [index, setIndex] = useState(0)

	const handleTransitions = () => {
		switch (index) {
			// Stage 1: modify blur
			case 0:
				setBlur(false)
				setIndex(index+1)
				break;
			// Stage 2: modify transparency
			case 1: 
				setTransparent(false)
				setIndex(index+1)
				break;
			// Stage 3: animate
			case 2: 
				setIndex(index+1)
				break;
			// Stage 4: reset
			case 3: 
				setIndex(0)
				setBlur(true),
				setTransparent(true)
			default:
				break;
		}
	}

	return (
	<div className='flex flex-col max-w-3xl sm:flex-row p-8 pb-16 pt-6 sm:px-16 sm:pt-16'>
		<div className='w-full mb-16 sm:w-52 sm:mb-0 sm:mr-16'>
			<h6 
				//text-transparent bg-clip-text bg-gradient-to-br 
				className={`tagline flex items-center text-2xl  sm:text-4xl mb-4 
				${index===0? 'text-black': 
				index===1? 'text-green-700':
				index===2? 'text-purple-700': 
				'text-red-700'}`}
			>
				<span>{index<3? `Step ${index+1}`: 'Finished'}</span>
			</h6>
			<MotionButton
				className={`px-4 py-3 flex items-center text-white font-light shadow-xl bg-gradient-to-br
				${index===0? 'from-gray-700 to-black': 
				index===1? 'from-green-500 to-green-700':
				index===2? 'from-purple-500 to-purple-700': 
				'from-red-500 to-red-700'}`}
				onClick={handleTransitions}
			>	
				{/*<span>
					<Icon className='mr-4 w-5 h-5 sm:w-6 sm:h-6' 
					option={
						index===0? 'Structure':
						index===1? 'Theme': 
						index===2? 'Animate':
						'Reset'
					}
					iconColor='text-inherit' 
					/>
				</span> */}
				<span>
					{index===0? 'Organise': 
					index===1? 'Add Theme': 
					index===2? 'Go Wild!': 'Reset'}
				</span>
			</MotionButton>
		</div>
		<div className='ml-4'>
			{index > 2? 
			<AnimatedShapes />:
			<BasicSquares blur={blur} transparent={transparent} />}
		</div>
	</div>
	)
}
 
export default BoxAnimation