const Navbar: React.FC = (title) => {
  return (
    <nav className="fixed top-0 left-0 w-full p-4 bg-black z-10 ">
      <ul className="flex justify-end space-x-4">
        <li><a href="#Home">Home</a></li>
        <li><a href="#About">About</a></li>
        <li><a href="#Projects">Projects</a></li>
        <li><a href="#Experience">Experience</a></li>
        <li><a href="#Contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
