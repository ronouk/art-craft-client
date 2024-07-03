import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { VITE_BACKEND_URL } from "../../main";

const CraftItemDetails = () => {

    const [craft, setCraft] = useState([]);
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const { id } = useParams();

    const getCraft = async () => {
        try {
            setIsLoading(true);
            const response = await axios.get(`http://localhost:5000/all-crafts/${id}`);

            console.log(response.data);
            setCraft(response.data);

            setIsLoading(false);

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getCraft();
    }, [])

    const { _id, image, item_name, subcategory_name, short_description, price, rating, customization, processing_time, stock_status } = craft

    const deleteCraft = async (id) => {

        const result = await Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        })
        if (result.isConfirmed) {

            try {
                setIsLoading(true);

                await axios.delete(`${VITE_BACKEND_URL}/all-crafts/${id}`);
                // toast.success(`${item_name} deleted successfully`);
                setIsLoading(false);

                navigate("/")

            } catch (error) {
                toast.error(error.message)
            }

            Swal.fire({

                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
            });
        }
    }


    return (
        <div>
            <div className="bg-gray-200 p-6 rounded-lg grid gap-2 h-full">

                <div className="">
                    <img className="h-full w-full bg-cover object-cover rounded-lg" src={image} alt="" />
                </div>

                <div className="">
                    <h2 className="text-xl font-bold">{item_name}</h2>
                    <p>{subcategory_name}</p>
                </div>

                <div>
                    <p>{short_description}</p>
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
                    <Link to={`/edit-craft/${_id}`} className="btn bg-gray-600 text-white hover:text-black">Edit Craft</Link>
                    {
                        !isLoading && (
                            <button onClick={() => deleteCraft(_id)} className="btn bg-gray-600 text-white hover:text-black">Delete</button>
                        )
                    }
                </div>

            </div>
        </div>
    );
};

export default CraftItemDetails;