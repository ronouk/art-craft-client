import PropTypes from "prop-types"
import { Link } from "react-router-dom";

const CraftItem = ({ craft }) => {

    const { _id, image, item_name, subcategory_name, short_description, price, rating, customization, processing_time, stock_status } = craft

    return (
        <div className="">
            <div className="bg-gray-200 p-6 rounded-lg grid gap-2 h-full">

                <div className="h-96">
                    <img className="h-full w-full bg-cover object-cover rounded-lg" src={image} alt="" />
                </div>

                <div className="">
                    <h2 className="text-xl font-bold">{item_name}</h2>
                    <p>{subcategory_name}</p>
                </div>

                <div className="text-md font-semibold text-red-500">
                    <h2>Price: $<span>{price}</span></h2>
                </div>

                <div className="flex justify-between">
                    <p>{stock_status}</p>
                    <p>Rating: <span>{rating}</span></p>
                </div>

                <div className="flex justify-between">
                    <p>Customization possible: <span>{customization}</span></p>
                    <p>Processing time: <span>{processing_time}</span></p>
                </div>
                <div className="mx-auto mt-6">
                    <Link to={`/craft-details/${_id}`} className="btn bg-gray-600 text-white hover:text-black">View Details</Link>
                </div>

            </div>
        </div>
    );
};

CraftItem.propTypes = {
    craft: PropTypes.object
}

export default CraftItem;