import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { FaGithub, FaGoogle, FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const Register = () => {

    const [showPassword, setShowPassword] = useState(false)

    return (
        <div className="mb-12">
            <Helmet>
                <title>Register</title>
            </Helmet>
            
            <div>
                <div className="">
                    <div className="flex flex-col items-center gap-6">
                        <div className="text-center">
                            <h1 className="text-3xl font-bold">Register now!</h1>
                        </div>
                        <div className="card shrink-0 w-full max-w-sm border border-red-500">
                            <form className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name="name" placeholder="Your Name" className="input input-bordered" required />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name="email" placeholder="Your email" className="input input-bordered" required />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo Url</span>
                                    </label>
                                    <input type="url" name="photoUrl" placeholder="Profile photo link" className="input input-bordered" required />
                                </div>

                                <div className="form-control relative">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        name="password"
                                        placeholder="password"
                                        className="input input-bordered"
                                        required />
                                    <span onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-[52px]">
                                        {
                                            showPassword ?
                                            <FaRegEye /> : <FaRegEyeSlash />
                                        }
                                    </span>
                                </div>

                                <div className="form-control my-6">
                                    <button className="btn bg-red-500 text-white hover:bg-green-600">Register</button>
                                </div>

                                <div className="flex items-center">
                                    <p className="font-semibold">Register with:</p>
                                    <div className="flex gap-4">
                                        <p className="cursor-pointer text-xl hover:text-[#4081EC] transition">
                                            <FaGoogle />
                                        </p>
                                        <p className="cursor-pointer text-xl">
                                            <FaGithub />
                                        </p>
                                    </div>
                                </div>

                                <div className="mt-6 text-center font-semibold">
                                    <p>Already an user?<Link to='/sign-in' className="ml-2 underline text-red-500">Sign In</Link></p>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    );
};

export default Register;