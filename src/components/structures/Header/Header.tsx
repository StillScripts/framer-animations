import  Link from "next/link";
 
const Header:React.FC = () => {
	return (
		<div className='w-full px-4 py-2 bg-primary-dark'>
			<Link href="/"><a className="text-white text-lg font-medium hover:text-secondary-main focus:underline">Home</a></Link>
		</div>
	)
}
 
export default Header