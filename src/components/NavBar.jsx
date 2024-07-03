import { Link } from "react-router-dom";

const NavBar = () => {

    const menuItems =
        <div className="flex flex-col lg:flex-row gap-3 lg:gap-6 font-bold text-white p-2">
            <Link className="bg-red-500 px-4 py-2 rounded-lg hover:bg-green-400 hover:text-black transition" to="/">Home</Link>
            <Link className="bg-red-500 px-4 py-2 rounded-lg hover:bg-green-400 hover:text-black transition" to="/all-crafts">All Crafts</Link>
            <Link className="bg-red-500 px-4 py-2 rounded-lg hover:bg-green-400 hover:text-black transition" to="/add-craft">Add Craft</Link>
        </div>
    return (
        <div className=" bg-[#1d1f1f]">

            <div className="navbar w-11/12 mx-auto py-4 mb-12">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn mr-4 bg-red-500 border-none lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {menuItems}
                        </ul>
                    </div>
                    <a href="/" className="text-xl font-bold uppercase logo text-white">Craft Haven</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {menuItems}
                    </ul>
                </div>
                <div className="navbar-end flex gap-4">
                    <Link className="btn" to='/register'>Register</Link>
                    <Link className="btn" to='/sign-in'>Sign In</Link>
                </div>
            </div>


        </div>
    );
};

export default NavBar;