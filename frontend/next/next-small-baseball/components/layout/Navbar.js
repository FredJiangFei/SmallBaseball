import Link from 'next/link';
import Image from 'next/image';
import Button from '../ui/button';
import { signOut } from 'next-auth/react';

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Image src="/logo.png" alt="site logo" width={128} height={77} />
      </div>
      <Link href="/">Home | </Link>
      <Link href="/about">About | </Link>
      <Link href="/todo/">Todo | </Link>
      <Link href="/events/">Events | </Link>
      <Link href="/products/">Products | </Link>
      <Link href="/feedback/">Feedback</Link>
      <span style={{ flex: 1 }}></span>
      <Button onClick={signOut}>Logout</Button>
    </nav>
  );
};

export default Navbar;
