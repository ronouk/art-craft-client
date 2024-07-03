import axios from "axios";
import { useEffect, useState } from "react";
import CraftItemsSection from "../CraftItemsSection";
import { Helmet } from "react-helmet-async";
import { VITE_BACKEND_URL } from "../../main";
import { Link } from "react-router-dom";
import Banner from "../Banner";
import Ribbon from "../Ribbon";
import PricingPlan from "../PricingPlan";

const Home = () => {

    const [crafts, setCrafts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const getAllCrafts = async () => {
        try {
            setIsLoading(true);
            const response = await axios.get(`${VITE_BACKEND_URL}/all-crafts/`);

            console.log(response.data);
            setCrafts(response.data);

            setIsLoading(false);

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getAllCrafts();
    }, [])

    return (
        <div className="w-11/12 mx-auto">
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Banner></Banner>
            <Ribbon></Ribbon>
            {
                isLoading ?
                    "Loading" :
                    (crafts.length > 0 ?
                        <>
                            {/* {
                                crafts.map(craft => <h2>
                                    {craft.item_name}
                                </h2>)
                            } */}
                            <CraftItemsSection crafts={crafts}></CraftItemsSection>
                        </>
                        :
                        <div>
                            <h2>No product available</h2>
                        </div>
                    )

            }


            {
                !isLoading &&
                <div className="text-center mb-12">

                    <Link to="/all-crafts" className="btn bg-red-500 text-white">Show All</Link>

                </div>
            }

            <PricingPlan></PricingPlan>

        </div>
    );
};

export default Home;