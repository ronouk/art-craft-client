import { Helmet } from "react-helmet-async";
import NavBar from "../NavBar";
import Footer from "../Footer";
import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="flex flex-col h-screen">
            <Helmet>
                <title>Error</title>
            </Helmet>
            <NavBar></NavBar>
            <div className="flex flex-col gap-4 flex-1 justify-center items-center">
                <h2>Nothing found</h2>
                <Link to='/' className="btn btn-link">Go Home</Link>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ErrorPage;