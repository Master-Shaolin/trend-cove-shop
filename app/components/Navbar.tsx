const Navbar = () => {
  return (
    <nav className="fixed z-20 w-full h-16 px-4 text-gray-700 transition duration-200 ease-in-out bg-white innerSticky body-font sm:h-20 lg:h-24 md:px-8 lg:px-6 shadow-[0px_2px_3px_0px_#00000014]">
      <div className="container mx-auto">
        <ul className="ml-8 space-x-4">
          <li className="inline-block">
            <a href="/" className="hover:text-gray-300">
              Home
            </a>
          </li>
          <li className="inline-block">
            <a
              href="https://www.geeksforgeeks.org/explore"
              className="hover:text-gray-300"
            >
              Practice
            </a>
          </li>
          <li className="inline-block">
            <a
              href="https://www.geeksforgeeks.org/complete-guide-to-dsa-for-beginners/?ref=ghm"
              className="hover:text-gray-300"
            >
              Tutorials
            </a>
          </li>
          <li className="inline-block">
            <a
              href="https://www.geeksforgeeks.org/about/contact-us/"
              className="hover:text-gray-300"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
