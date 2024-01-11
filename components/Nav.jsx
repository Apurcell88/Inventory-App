import Image from "next/image";
import Link from "next/link";

const Nav = () => {
  return (
    <nav className="flex justify-between pt-5 px-3 bg-gray-800 h-20 sticky top-0 md:pb-20">
      <Link href='/'>
        <Image
          src='/assets/images/logo.png'
          alt='Store logo'
          width={40}
          height={40}
          className="md:w-14"
        />
      </Link>
      <article className="flex gap-3">
        <Link href='/products'>
          <p className="nav--link">Products</p>
        </Link>
        <Link href='/categories'>
          <p className="nav--link">Categories</p>
        </Link>
      </article>
    </nav>
  );
}
 
export default Nav;