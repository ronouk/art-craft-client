import axios from "axios";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { VITE_BACKEND_URL } from "../../main";

const AddProduct = () => {

    const [image, setImage] = useState('');
    const [item_name, setItem_name] = useState('');
    const [subcategory_name, setSubcategory_name] = useState('');
    const [short_description, setShort_description] = useState('');
    const [price, setPrice] = useState('');
    const [rating, setRating] = useState('');
    const [customization, setCustomization] = useState('');
    const [processing_time, setProcessing_time] = useState('');
    const [stock_status, setStock_status] = useState('');
    // const [user_email, setUser_email] = useState('');

    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate();

    const addCraft = async (e) => {
        e.preventDefault();

        try {
            setIsLoading(true);

            const response = await axios.post(`${VITE_BACKEND_URL}/all-crafts/`, {
                image: image,
                item_name: item_name,
                subcategory_name: subcategory_name,
                short_description: short_description,
                price: price,
                rating: rating,
                customization: customization,
                processing_time: processing_time,
                stock_status: stock_status
            })

            toast.success(`Saved ${response.data.item_name} successfully`);
            setIsLoading(false);
            navigate("/")

        } catch (error) {
            toast.error(error.message)
            setIsLoading(false)
        }
    }
    return (
        <div className="w-11/12 mx-auto mb-12">
            <Helmet>
                <title>Add Craft</title>
            </Helmet>


            <div className="hero bg-base-200 min-h-screen rounded-lg">

                <div className="card bg-base-100 w-10/12 md:w-3/4 shrink-0 shadow-2xl my-12">
                    <form onSubmit={addCraft} className="card-body">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Image Url</span>
                            </label>
                            <input type="url" placeholder="Image Url" className="input input-bordered" onChange={(e) => setImage(e.target.value)} required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Item Name</span>
                            </label>
                            <input type="text" placeholder="Item name" className="input input-bordered" onChange={(e) => setItem_name(e.target.value)} required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Subcategory Name</span>
                            </label>
                            <input type="text" placeholder="Subcategory name" className="input input-bordered" onChange={(e) => setSubcategory_name(e.target.value)} required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Short Description</span>
                            </label>
                            <input type="text" placeholder="Short Description" className="input input-bordered" onChange={(e) => setShort_description(e.target.value)} required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="number" placeholder="Price" className="input input-bordered" onChange={(e) => setPrice(e.target.value)} required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <input type="number" placeholder="Rating" className="input input-bordered" onChange={(e) => setRating(e.target.value)} required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Customization</span>
                            </label>
                            <input type="text" placeholder="Customization" className="input input-bordered" onChange={(e) => setCustomization(e.target.value)} required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Processing Time</span>
                            </label>
                            <input type="text" placeholder="Processing time" className="input input-bordered" onChange={(e) => setProcessing_time(e.target.value)} required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Stock Status</span>
                            </label>
                            <input type="text" placeholder="Stock Status" className="input input-bordered" onChange={(e) => setStock_status(e.target.value)} required />
                        </div>

                        <div className="form-control mt-6">
                            {
                                !isLoading && (
                                    <button type="submit" className="btn btn-primary">Add</button>
                                )
                            }
                        </div>
                    </form>
                </div>

            </div>


        </div>
    );
};

export default AddProduct;