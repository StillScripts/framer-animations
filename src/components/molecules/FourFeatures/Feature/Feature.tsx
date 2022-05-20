import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface FeatureProps {
	delay: number;
}
const Feature = ({delay}:FeatureProps) => {
	const [xPositions, setXPositions] = useState<number[]>([]);
	const [yPositions, setYPositions] = useState<number[]>([]);

	useEffect(()=>{
		const xS = [0];
		const yS = [0];
		for (let i=0; i<8; i++) {
			const x = Math.round(Math.random()*50);
			const y = Math.round(Math.random()*50);
			xS.push(x);
			yS.push(y);
		}
		setXPositions([...xS]);
		setYPositions([...yS]);
	},[])

  return (
    <motion.div
      animate={{
        x: xPositions,
        y: yPositions,
      }}
      transition={{
				delay: delay,
        repeat: Infinity,
        repeatType: "reverse",
        duration: 8,
      }}
      className="absolute w-16 h-16 p-2 bg-blue-300 rounded-full"
    >Icon</motion.div>
  );
};

export default Feature;
