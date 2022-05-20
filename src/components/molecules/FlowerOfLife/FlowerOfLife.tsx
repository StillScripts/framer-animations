import Circle from "../FlowerOfLifeOld/Animations/MorphingCircles/Circle";
import FlowerCircle from "./FlowerCircle"

const topArray = [0, 45, 90, 135, 180, 225, 270]
const leftArrayOdd = [0, 52, 104, 156, 208, 260]
const leftArrayEven = [26, 78, 130, 182, 234]

const FlowerOfLife = () => {
	let delay=0.01;
	return (
		<div className='relative w-96 h-96 bg-white'>
			{topArray.map((top,id)=>{
				delay+=0.02
				if (id%2===0) {
					return leftArrayEven.map((left)=>{
						delay+=0.01
						return (
						<FlowerCircle
							key={`${top}-${left}`} 
							top={top} 
							left={left}  
							delay={delay}
						/>
					)})
				}
				else {
					return leftArrayOdd.map((left)=>{
						delay+=0.01
						return (
						<FlowerCircle
							key={`${top}-${left}`} 
							top={top} 
							left={left}  
							delay={delay}
						/>
					)})
				}
			})}
		</div>
	)
}

export default FlowerOfLife;