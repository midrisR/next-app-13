"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

const Header = () => {
  const { data: session } = useSession();
  const user = session?.user;

  return (
    <header className="bg-white h-20">
      <nav className="h-full flex justify-between container mx-auto items-center">
        <div>
          <Link href="/" className="text-ct-dark-600 text-2xl font-semibold">
            CodevoWeb
          </Link>
        </div>
        <ul className="flex items-center gap-4">
          <li>
            <Link href="/" className="text-ct-dark-600">
              Home
            </Link>
          </li>
          <li>
            <Link href="/products" className="text-ct-dark-600">
              Products
            </Link>
          </li>
          {!user && (
            <>
              <li>
                <Link href="/login" className="text-ct-dark-600">
                  Login
                </Link>
              </li>

            </>
          )}
          {user && (
            <>
              <li>
                <Link href="/profile" className="text-ct-dark-600">
                  Profile
                </Link>
              </li>
              <li className="cursor-pointer" onClick={() => signOut()}>
                Logout
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
