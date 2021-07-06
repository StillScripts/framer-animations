import React from 'react'
import { motion } from 'framer-motion'

 
type SquareProps = {
	background: string;
	top: string;
	left: string;
	transparent: boolean;
	blur?: boolean;
	scale: number;
	x: number;
	y: number;
}
 
const Square:React.FC<SquareProps> = ({ background, top, left, transparent, blur, scale, x, y }) => {
	return (
		<motion.div 
			variants={{
				blurred: {
					scale: scale,
					rotateZ: 30,
					x: x,
					y: y
				},
				clear: {
					scale: 1,
					rotateZ: 0,
					x: 0, 
					y: 0
				}
			}}
			transition={{duration: 1}}
			initial={false}
			className={`
				absolute border border-black w-16 h-16 ${top} ${left}
				${transparent? ' bg-transparent ': background}
				${blur? ' filter blur-sm border-2 ': ''}
			`}
		></motion.div>
	)
}
 
export default Square