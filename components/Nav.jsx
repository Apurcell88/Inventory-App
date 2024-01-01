import Image from "next/image";
import Link from "next/link";

const Nav = () => {
  // going to need two different navs depending on if user is signed in. The one below will be if a user is signed in. Use conditional rendering.
  return (
    <nav>
      <Link href='/'>
        <Image
          src='../assets/logo.png'
          alt='Store logo'
          width={50}
          height={50}
        />
      </Link>
      <article>
        <Link href='/products'>
          <p>Products</p>
        </Link>
        <Link href='/categories'>
          <p>Categories</p>
        </Link>
      </article>
    </nav>
  );
}
 
export default Nav;