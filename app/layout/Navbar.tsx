import Link from "next/link";


const Navbar: React.FC = (title) => {
  return (
    <nav className="fixed top-0 left-0 w-full p-4 bg-black z-10 md:block hidden ">
      <ul className="flex justify-end space-x-4">
        <li><Link href="#Home">Home</Link></li>
        <li><Link href="#About">About</Link></li>
        <li><Link href="#Projects">Projects</Link></li>
        <li><Link href="#Experience">Experience</Link></li>
        <li><Link href="#Contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
