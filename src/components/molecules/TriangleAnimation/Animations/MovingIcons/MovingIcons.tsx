import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import Icon from './Icon'
 
type MovingIconsProps = {
	className?: string;
	icons: IconProp[];
}

type Position = 'current'|'next'|'nextNext'|'previous';
type Positions = 'Centre'|'Top'|'Left'|'Right';
type TrianglePosition = Record<Positions, {x:number; y:number;}>;
type FindPosition = (id: number) => Position;
type FindIndex = (position: Position) => number;
 
const MovingIcons:React.FC<MovingIconsProps> = ({ className, icons }) => {
	const [currentIndex, setCurrentIndex] = useState(0);

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
		<>
		{icons.map((icon, id)=>{
			let currentPosition: Position = findPosition(id);
			let positionIndex: number = findIndex(currentPosition);

			return (
				<motion.div
					key={`${icon} ${id}`}
					className='absolute left-24 bottom-20 w-20 h-20 p-4 cursor-pointer flex flex-col justify-center items-center rounded-full bg-blue-700 '
					animate={{
						scale: currentPosition==='current'? 1: 0.4,
						opacity: currentPosition==='current'? 1: 0.7,
						x: positions[positionIndex].x,
						y: positions[positionIndex].y
					}}
					transition={{
						duration: 1
					}}
					onClick={()=>setCurrentIndex(id)}
				>
					<Icon 
						className='text-white'
						icon={icon}
					/>
				</motion.div>
			)
		})}
		</>
	)
}
 
export default MovingIcons