import React from 'react'
import { MovingIcons } from './Animations'
import { faAmbulance, faSatellite, faAtom, faBacterium } from '@fortawesome/free-solid-svg-icons'

 
const IconAnimation:React.FC = () => {
	return (
		<div className='w-72 h-72 relative'>
			<div className='absolute w-72 h-72 bottom-0 left-0 rounded-t-full rounded-b-3xl filter blur bg-gradient-to-br from-yellow-200 to-red-200 '></div>
			<MovingIcons 
				icons={[faAmbulance, faSatellite, faAtom, faBacterium]}
			/>
		</div>
	)
}
 
export default IconAnimation