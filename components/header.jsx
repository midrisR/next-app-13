import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-white h-20 sticky top-0 w-full z-40 shadow-md px-4">
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
        </ul>
      </nav>
    </header>
  );
};

export default Header;
