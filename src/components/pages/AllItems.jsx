import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import CraftItem from "../CraftItem";

const AllItems = () => {

    const crafts = useLoaderData();
    console.log(crafts);

    return (
        <div className="w-11/12 mx-auto mb-12">
            <Helmet>
                <title>All Crafts</title>
            </Helmet>

            {
                crafts.length > 0 ?
                    <>
                        {/* {
                                crafts.map(craft => <h2>
                                    {craft.item_name}
                                </h2>)
                            } */}
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {
                                crafts.map((craft, index) => <CraftItem key={index} craft={craft}></CraftItem>)
                            }
                        </div>
                    </>
                    :
                    <div>
                        <h2>No product available</h2>
                    </div>

            }
        </div>
    );
};

export default AllItems;