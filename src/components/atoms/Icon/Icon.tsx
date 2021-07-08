import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 
type IconProps = {
	className?: string;
	icon: any;
}
 
const Icon:React.FC<IconProps> = ({ className, icon }) => {
	return (
		<FontAwesomeIcon 
			className={className}
			icon={icon}
		/>
	)
}
 
export default Icon