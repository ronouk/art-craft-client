import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="flex">
            <div className="flex gap-6 mx-auto">
                <Link to="/">Home</Link>
                <Link to="/all-crafts">All Crafts</Link>
                <Link to="/add-craft">Add Craft</Link>
            </div>
        </div>
    );
};

export default NavBar;