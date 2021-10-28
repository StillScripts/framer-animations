import Link from "next/link";

const LinkCard: React.FC<{ href: string }> = ({ href, children }) => {
  return (
    <Link href={href}>
      <a>
        <div className="cursor-pointer bg-gradient-to-br from-yellow-100 to-blue-100 rounded-2xl p-4 shadow hover:shadow-xl">
					<p className='text-primary-main hover:text-primary-dark'>
          {children}
					</p>
        </div>
      </a>
    </Link>
  );
};

export default LinkCard;
