import axios from "axios";
import { useEffect, useState } from "react";
import CraftItemsSection from "../CraftItemsSection";
import { Helmet } from "react-helmet-async";

const Home = () => {

    const [crafts, setCrafts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const getAllCrafts = async () => {
        try {
            setIsLoading(true);
            const response = await axios.get("http://localhost:5000/all-crafts/");

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
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>
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
                            <CraftItemsSection crafts = {crafts}></CraftItemsSection>
                        </>
                        :
                        <div>
                            <h2>No product available</h2>
                        </div>
                    )

            }
        </div>
    );
};

export default Home;