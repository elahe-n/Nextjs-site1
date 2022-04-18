import Link from "next/link";

export default function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>

        <li>
          <Link href="/services">
            <a>Services</a>
          </Link>
        </li>

        <li>
          <Link href="/contact">
            <a>Contact Us</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
