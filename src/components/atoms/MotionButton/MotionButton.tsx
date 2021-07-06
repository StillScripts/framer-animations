import React from 'react'
import { motion } from 'framer-motion'
 
type MotionButtonProps = {
	className?: string;
	onClick: ()=>void;
}
 
const MotionButton:React.FC<MotionButtonProps> = ({ className, onClick, children }) => {
	return (
		<motion.button 
			className={
				'rounded-2xl hover:shadow-2xl focus:shadow-2xl focus:outline-none ' +
				`${className? className: ''}`
			}
			onClick={onClick}
			whileHover={{scale: 1.08}}
			whileTap={{scale: 0.92}}			
		>
			{children}
		</motion.button>
	)
}
 
export default MotionButton