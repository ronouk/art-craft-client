import { Helmet } from "react-helmet-async";

const ErrorPage = () => {
    return (
        <div>
            <Helmet>
                <title>Error</title>
            </Helmet>
            <h2>Nothing found</h2>
        </div>
    );
};

export default ErrorPage;