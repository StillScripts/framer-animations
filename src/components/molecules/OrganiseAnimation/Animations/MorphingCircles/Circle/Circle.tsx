import React from 'react'
import { motion } from 'framer-motion'
 
type CircleProps = {
	background: string;
	top: string;
	left: string;
	transparent?: boolean;
	x: number;
	y: number;
}
 
const Circle:React.FC<CircleProps> = ({ background, top, left, x, y, transparent }) => {
	return (
		<motion.div
			animate={{
				scale: [1, 0.6, 1, 2],
				x: [0, x, 0, 0],
				y: [0, y, 0, 0],
				borderRadius: ["0%", "50%", "0%", "50%"],
				rotateZ: [0, 0, 90, 0]
			}}
			transition={{ 
				repeat: Infinity, repeatType: 'loop', 
				duration: 5
			}}
			className={`
				absolute border border-black w-16 h-16 mix-blend-multiply ${top} ${left} ${background}
				${transparent? ' bg-transparent ': ''}
			`}
		>
		</motion.div>
	)
}
 
export default Circle