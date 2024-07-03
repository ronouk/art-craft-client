import axios from "axios";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { VITE_BACKEND_URL } from "../../main";

const EditProduct = () => {

    const { id } = useParams();
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false);
    const [craft, setCraft] = useState({
        image: "",
        item_name: "",
        subcategory_name: "",
        short_description: "",
        price: "",
        rating: "",
        customization: "",
        processing_time: "",
        stock_status: ""

    });

    const getCraft = async () => {

        setIsLoading(true);

        try {
            const response = await axios.get(`http://localhost:5000/all-crafts/${id}`);

            console.log(response.data);
            setCraft({
                image: response.data.image,
                item_name: response.data.item_name,
                subcategory_name: response.data.subcategory_name,
                short_description: response.data.short_description,
                price: response.data.price,
                rating: response.data.rating,
                customization: response.data.customization,
                processing_time: response.data.processing_time,
                stock_status: response.data.stock_status
            });

            setIsLoading(false);

        } catch (error) {
            setIsLoading(false)
            toast.error(error.message)
        }
    }

    useEffect(() => {
        getCraft();
    }, [])

    const { image, item_name, subcategory_name, short_description, price, rating, customization, processing_time, stock_status } = craft;

    const updateCraft = async (e) => {
        e.preventDefault();
        setIsLoading(true)
        try {
            await axios.put(`${VITE_BACKEND_URL}/all-crafts/${id}`, craft)
            toast.success(`updated successfully`);
            navigate(`/craft-details/${id}`)
        } catch (error) {
            setIsLoading(false)
            toast.error(error.message)
        }

    }

    return (
        <div className="w-11/12 mx-auto mb-12">
            <Helmet>
                <title>Edit Craft</title>
            </Helmet>


            <div className="hero bg-base-200 min-h-screen rounded-lg">

                {
                    isLoading ? ("Loading")
                        :
                        (
                            <div className="card bg-base-100 w-10/12 md:w-3/4 shrink-0 shadow-2xl my-12">
                                <form onSubmit={updateCraft} className="card-body">

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Image Url</span>
                                        </label>
                                        <input type="url" placeholder="Image Url" value={image} className="input input-bordered" onChange={(e) => setCraft({ ...craft, image: e.target.value })} required />
                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Item Name</span>
                                        </label>
                                        <input type="text" placeholder="Item name" value={item_name} className="input input-bordered" onChange={(e) => setCraft({ ...craft, item_name: e.target.value })} required />
                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Subcategory Name</span>
                                        </label>
                                        <input type="text" placeholder="Subcategory name" value={subcategory_name} className="input input-bordered" onChange={(e) => setCraft({ ...craft, subcategory_name: e.target.value })} required />
                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Short Description</span>
                                        </label>
                                        <input type="text" placeholder="Short Description" value={short_description} className="input input-bordered" onChange={(e) => setCraft({ ...craft, short_description: e.target.value })} required />
                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Price</span>
                                        </label>
                                        <input type="number" placeholder="Price" value={price} className="input input-bordered" onChange={(e) => setCraft({ ...craft, price: e.target.value })} required />
                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Rating</span>
                                        </label>
                                        <input type="number" placeholder="Rating" value={rating} className="input input-bordered" onChange={(e) => setCraft({ ...craft, rating: e.target.value })} required />
                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Customization</span>
                                        </label>
                                        <input type="text" placeholder="Customization" value={customization} className="input input-bordered" onChange={(e) => setCraft({ ...craft, customization: e.target.value })} required />
                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Processing Time</span>
                                        </label>
                                        <input type="text" placeholder="Processing time" value={processing_time} className="input input-bordered" onChange={(e) => setCraft({ ...craft, processing_time: e.target.value })} required />
                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Stock Status</span>
                                        </label>
                                        <input type="text" placeholder="Stock Status" value={stock_status} className="input input-bordered" onChange={(e) => setCraft({ ...craft, stock_status: e.target.value })} required />
                                    </div>

                                    <div className="form-control mt-6">
                                        {
                                            !isLoading && (
                                                <button type="submit" className="btn btn-primary">Update</button>
                                            )
                                        }
                                    </div>
                                </form>
                            </div>
                        )
                }

            </div>

        </div>
    );
};

export default EditProduct;