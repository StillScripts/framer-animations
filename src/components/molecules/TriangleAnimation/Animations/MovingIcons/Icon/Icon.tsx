import React from 'react'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core';
 
type IconProps = {
	className?: string;
	icon: IconProp;
	index: number;
	setIndex: (index: number) => void;
}
 
const Icon:React.FC<IconProps> = ({ className, icon, index, setIndex }) => {
	return (
		<motion.div 
			className={className}
			onClick={()=>setIndex(index)}
			whileHover={{scale: 1.08}}
			whileTap={{scale: 0.92}}
		>
			<FontAwesomeIcon 
				className='w-16 h-16 text-white'
				icon={icon}
			/>
		</motion.div>
	)
}
 
export default Icon