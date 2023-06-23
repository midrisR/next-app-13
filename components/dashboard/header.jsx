"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";

const Header = ({ onClick }) => {
  const { data: session } = useSession();
  const user = session?.user;

  return (
    <header className="bg-white h-20 relative w-full">
      <nav className="h-full flex justify-between container items-center">
        <div className="flex justify-between items-center">
          <button onClick={onClick}>
            <FiMenu className="mr-3" />
          </button>
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
            <Link href="/example" className="text-ct-dark-600">
              example
            </Link>
          </li>
          {!user && (
            <>
              <li>
                <Link href="/login" className="text-ct-dark-600">
                  Login
                </Link>
              </li>
              <li>
                <Link href="/register" className="text-ct-dark-600">
                  Register
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
