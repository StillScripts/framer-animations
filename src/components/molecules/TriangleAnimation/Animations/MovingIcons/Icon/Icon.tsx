import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core';
 
type IconProps = {
	className?: string;
	icon: IconProp;
}
 
const Icon:React.FC<IconProps> = ({ className, icon }) => {
	return (
		<FontAwesomeIcon 
			className={className}
			icon={icon}
			style={{minWidth: 36, minHeight: 36}}
		/>
	)
}
 
export default Icon