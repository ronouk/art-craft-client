import { Outlet } from "react-router-dom";
import NavBar from "../NavBar";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Footer from "../Footer";

const Root = () => {
    return (
        <div>
            <ToastContainer></ToastContainer>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;