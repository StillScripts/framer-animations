import React from 'react'
 
type HeaderProps = {
	text: string;
}
 
const Header:React.FC<HeaderProps> = ({ text }) => {
	return (
		<div className='w-full bg-primary-dark'>
			{text}
		</div>
	)
}
 
export default Header