const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full p-4 bg-black z-10">
      <ul className="flex justify-end space-x-4">
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
