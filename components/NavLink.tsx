import Link from "next/link";

interface NavLinkProps {
  href: string,
  title: string
}

const NavLink = ({ href, title }: NavLinkProps) => {
  return (
    <Link
      href={href}
      className="block py-2 pl-3 pr-4 text-base rounded md:p-0 hover:text-gray-400"
      //scroll={false}
    >
      {title}
    </Link>
  );
};

export default NavLink;