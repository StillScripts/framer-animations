import React from 'react'
import { motion } from 'framer-motion'
 
type CircleProps = {
	className: string;
	top: number;
	left: number;
	delay: number;
}
 
const Circle:React.FC<CircleProps> = ({ className, top, left, delay }) => {
	return (
		<motion.div
			animate={{
				scale: [1, 1, 0.25, 0.25, 1, 1],
				x: [0, 0, top/8, top/4, 0, 0],
				y: [0, 0, left/4, left/8, 0, 0]
			}}
			transition={{ 
				delay: delay,
				repeat: Infinity, repeatType: 'reverse', 
				duration: 4
			}}
			className={`
				absolute rounded-full border-2 border-black mix-blend-multiply ${className}
			`}
			style={{
				width:104, height: 104, top: top, left: left
			}}
		>
		</motion.div>
	)
}
 
export default Circle