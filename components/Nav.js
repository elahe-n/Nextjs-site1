import Link from "next/link";
import Image from "next/image";

export default function Nav() {
  return (
  <div className='navbar'>
      <Image
          className="logo"
          src="/img/EliWeb.png"
          alt=""
          width="100"
          height="100"
        />
    <nav className='navbarNav'>
      <ul className='navbarListItems'>
        <li className='navbarListItem'>
          <Link href="/">
            <a className="nav-a">Home</a>
          </Link>
        </li>

        <li>
          <Link href="/services">
            <a className="nav-a">Services</a>
          </Link>
        </li>

        <li>
          <Link href="/contact">
            <a className="nav-a">Contact Us</a>
          </Link>
        </li>
      </ul>
    </nav>
    </div>
   
  );
}
