import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { user_login } from "../store/actions/userAction";
import { Link } from "react-router-dom";
import { Google } from "../components/Google";


const SignIn = () => {

    const store = useSelector(store => store.userReducer)
    console.log(store);

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const dispatch = useDispatch();

    const handleInput = (user) => {
        setFormData({
            ...formData,
            [user.target.name]: user.target.value
        })
    }

    console.log(formData);

    const handleSignIn = async (user) => {
        user.preventDefault();
        try{
            dispatch(user_login({
                data: formData
            }))
        }catch(error){
            console.log(error);
        }

    }
  return (
    <div className="grid justify-items-center">
        <h1 className="font-bold">Sign In</h1>
        <div className="grid gap-3">
            <form action="" className="m-3 p-3" onSubmit={handleSignIn}>
            <div className="grid py-2">
                <label htmlFor="UserEmail" className="block text-sm font-medium text-gray-900">
                    Email
                </label>

                <input
                    onChange={handleInput}
                    name="email"
                    type="email"
                    id="UserEmail"
                    placeholder="example@gmail.com"
                    className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                />
            </div>
            <div className="grid py-2">
                <label className="block text-sm font-medium text-gray-900">
                    Password
                </label>

                <input
                    onChange={handleInput}
                    name="password"
                    type="password"
                    id="UserPassword"
                    placeholder="hola123"
                    className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                />
            </div>
                
            <div className="grid">
                <button type="submit" className="inline-block rounded px-8 py-3 text-sm font-medium text-sky outline outline-offset-2 outline-1 focus:ring focus:ring-sky-400" onClick={handleSignIn}>
                        Sign in
                </button>
            </div>
            </form>
            <Google className="grid"/>
            <div>
                <p className="text-sm text-gray-500">
                    New account in 
                    <Link className="underline text-sm text-gray-500 m-2" to={'/signup'}>Sign up</Link>
                </p>
            </div>
        </div>
    </div>
  )
}

export default SignIn