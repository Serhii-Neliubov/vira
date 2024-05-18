import {SubmitHandler, useForm} from "react-hook-form";
import {Link} from "react-router-dom";
import axios from "axios";

type Inputs = {
    email: string,
    password: string,
}

export default function Login() {
    const API_URL = import.meta.env.VITE_API_URL

    const {
        register,
        handleSubmit,
    } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        await axios.post(`${API_URL}/auth/login`, data);
        // cleanup form

        console.log(data);
    };

    return (
        <section className="bg-gray-50">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                            Sign in to your account
                        </h1>
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 md:space-y-6" action="#">
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Your
                                    email</label>
                                <input
                                    type="email"
                                    id="email"
                                    {...register("email", {required: true})}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                    placeholder="name@company.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="password"
                                       className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                                <input
                                    type="password"
                                    id="password"
                                    placeholder="••••••••"
                                    {...register("password", {required: true})}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                />
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input id="remember" aria-describedby="remember" type="checkbox"
                                               className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300"
                                               required/>
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label htmlFor="remember" className="text-gray-500">Remember me</label>
                                    </div>
                                </div>
                                <Link to="/account-recovery"
                                      className="text-sm font-medium text-primary-600 hover:underline">Forgot
                                    password?</Link>
                            </div>
                            <button type="submit"
                                    className="w-full text-white bg-black hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Sign
                                in
                            </button>
                            <p className="text-sm font-light text-gray-500">
                                Don’t have an account yet? <Link to="/register"
                                                                 className="font-medium text-gray-500 hover:underline">Sign
                                up</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}