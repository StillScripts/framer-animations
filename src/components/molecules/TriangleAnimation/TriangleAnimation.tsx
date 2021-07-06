import React from 'react'
import { AnimationControls, motion } from 'framer-motion'
import { Icon } from '../../atoms'
import { Features } from '../../../types/MoleculeTypes'
 
type IconAnimationProps = {
	currentIndex: number;
	typedWords: Features[];
}

type Position = 'current'|'next'|'nextNext'|'previous';
type Positions = 'Centre'|'Top'|'Left'|'Right';
type TrianglePosition = Record<Positions, {x:number; y:number;}>;
type FindPosition = (id: number) => Position;
type FindIndex = (position: Position) => number;
 
const IconAnimation:React.FC<IconAnimationProps> = ({ currentIndex, typedWords }) => {

	const positions: {x:number; y:number}[] = [
		{ x: 0, y: 0 },
		{ x: 0, y: -120 },
		{ x: 104, y: 60 },
		{ x: -104, y: 60 },
	]

	const findPosition: FindPosition = (id) => {
		let position: Position  = 'current';
		switch (id) {
			// works for all
			case currentIndex:
				position='current';
				break;
			// PREVIOUS
			// works for 0, 1, 2
			case currentIndex-1:
				position='previous';
				break;
			// works for 3
			case currentIndex+3:
				position='previous';
				break;
			// NEXT
			// works for 1, 2, 3
			case currentIndex+1:
				position='next';
				break;
			// works for 0
			case currentIndex-3:
				position='next';
				break;
			// NEXT NEXT
			// works for 2, 3
			case currentIndex+2:
				position='nextNext';
				break;	
			// works for 0, 1
			case currentIndex-2:
				position='nextNext';
				break;	
			default:
				break;
		}
		return position
	}

	const findIndex: FindIndex = (position: Position) => {
		let index: number = 0;
		switch (position) {
			case 'current':
				index = 0;
				break;
			case 'next':
				index = 1;
				break;
			case 'nextNext':
				index = 2;
				break;
			case 'previous':
				index= 3;
				break;		
			default:
				break;
		}
		return index;
	}

	return (
		<div className='w-64 h-72 relative'>
			<div className='absolute w-64 h-72 bottom-0 left-0 rounded-full filter blur bg-gradient-to-bl from-primary-main to-primary-dark'></div>
			{typedWords.map((typedWord, id)=>{
				let currentPosition: Position = findPosition(id);
				let positionIndex: number = findIndex(currentPosition);

				return (
					<motion.div
						animate={{
							//rotateX: currentPosition==='current'? 0: 90,
							scale: currentPosition==='current'? 1: 0.4,
							opacity: currentPosition==='current'? 1: 0.5,
							x: positions[positionIndex].x,
							y: positions[positionIndex].y
						}}
						transition={{
							duration: 1
						}}
						key={`${typedWord} ${id}`}
						className={'absolute left-20 bottom-24 center-children w-8 h-8 p-6 sm:w-24 sm:h-24 '}
					>
						<Icon className="w-24 h-24 sm:w-24 sm:h-24" iconColor='text-secondary-main' option={typedWord} />
					</motion.div>
				)
			})}
		</div>
	)
}
 
export default IconAnimation