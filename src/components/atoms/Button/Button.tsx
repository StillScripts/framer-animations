import React, { ButtonHTMLAttributes } from 'react'
 
type ButtonProps = {
	className?: string;
	attributes?: ButtonHTMLAttributes<HTMLButtonElement>;
}
 
const Button:React.FC<ButtonProps> = ({ className, attributes, children }) => {
	return (
		<button 
			className={'px-4 py-2 rounded-lg ' + `${className? className: ''}`}
			{...attributes}
		>
			{children}
		</button>
	)
}
 
export default Button