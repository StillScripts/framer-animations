import React from 'react'
import { motion } from 'framer-motion'
 
type CircleProps = {
	top: number;
	left: number;
	delay: number;
}
 
const Circle:React.FC<CircleProps> = ({ top, left, delay }) => {
	return (
		<motion.div
			animate={{
				scale: [0, 1, 1],
			}}
			transition={{ 
				delay: delay,
				repeat: Infinity, repeatType: 'loop', 
				duration: 3
			}}
			className={`
				absolute rounded-full border-2 border-black bg-blue-200 mix-blend-multiply
			`}
			style={{
				width:104, height: 104, top: top, left: left
			}}
		>
		</motion.div>
	)
}
 
export default Circle