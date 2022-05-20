import Feature from "./Feature";

/**
 * React component that runs through four animations to illustrate the concepts of
 * fast, user-friendly, secure, and social. 
 */
const FourFeatures: React.FC = () => {
  return (
		<div className="w-96 h-96 p-16">
			<div className="w-full h-full border border-black relative">
				<div className="absolute left-0 top-0"><Feature delay={1}/></div>
				<div className="absolute right-16 top-0"><Feature delay={2}/></div>
				<div className="absolute left-0 bottom-16"><Feature delay={3}/></div>
				<div className="absolute right-16 bottom-16"><Feature delay={4}/></div>
			</div>
		</div>
	);
};

export default FourFeatures;
