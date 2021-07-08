import React from 'react'
import { motion } from 'framer-motion'
import Square from './Square'

type MorphingSquaresProps = {
	blur?: boolean;
	transparent?: boolean
}
 
const MorphingSquares:React.FC<MorphingSquaresProps> = ({ blur, transparent }) => {
	return (
		<motion.div 
			className=' w-48 h-48 relative'
			animate={blur ? 'blurred' : 'clear'}
		>
			<Square transparent={transparent} blur={blur} background='bg-red-300' top='top-0' left='left-0' scale={0.8} x={-8} y={-28} />
			<Square transparent={transparent} blur={blur} background='bg-yellow-300' top='top-0' left='left-16' scale={0.9}  x={-28} y={8} />
			<Square transparent={transparent} blur={blur} background='bg-blue-300' top='top-0' left='left-32' scale={0.9}  x={13} y={17} />
			<Square transparent={transparent} blur={blur} background='bg-red-300' top='top-16' left='left-0' scale={0.7}  x={18} y={8} />
			<Square transparent={transparent} blur={blur} background='bg-yellow-300' top='top-16' left='left-16' scale={0.8}  x={8} y={-18} />
			<Square transparent={transparent} blur={blur} background='bg-blue-300' top='top-16' left='left-32' scale={0.8}  x={13} y={-28} />
			<Square transparent={transparent} blur={blur} background='bg-red-300' top='top-32' left='left-0' scale={0.8}  x={-32} y={8} />
			<Square transparent={transparent} blur={blur} background='bg-yellow-300' top='top-32' left='left-16' scale={0.7}  x={18} y={-2} />
			<Square transparent={transparent} blur={blur} background='bg-blue-300' top='top-32' left='left-32' scale={0.8}  x={22} y={18} />
		</motion.div>
	)
}
 
export default MorphingSquares