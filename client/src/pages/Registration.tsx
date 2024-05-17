import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";

type Inputs = {
    email: string,
    password: string,
    confirmPassword: string,
}

export default function Registration() {
    const API_URL = import.meta.env.VITE_API_URL

    const {
        register,
        handleSubmit,
    } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        if(data.password !== data.confirmPassword){
            return toast.error('Passwords did not match!');
        }

        await axios.post(`${API_URL}/auth/register`, data);
        console.log(data);
    };

    return (
        <section className="bg-gray-50">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div
                    className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                            Create an account
                        </h1>
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 md:space-y-6" action="#">
                            <div>
                                <label htmlFor="email"
                                       className="block mb-2 text-sm font-medium text-gray-900">Your
                                    email</label>
                                <input type="email"
                                       {...register('email', { required: true })}
                                       id="email"
                                       className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                       placeholder="name@company.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="password"
                                       className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                                <input
                                    {...register('password', { required: true })}
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="••••••••"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                />
                            </div>
                            <div>
                                <label htmlFor="confirm-password"
                                       className="block mb-2 text-sm font-medium text-gray-900">Confirm
                                    password</label>
                                <input
                                    type="confirm-password"
                                    id="confirm-password"
                                    placeholder="••••••••"
                                    {...register('confirmPassword', { required: true })}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                />
                            </div>
                            <button type="submit"
                                    className="w-full text-white bg-black hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Create
                                an account
                            </button>
                            <p className="text-sm font-light text-gray-500">
                                Already have an account? <Link to="/login"
                                                            className="font-medium text-primary-600 hover:underline">Login
                                here</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}