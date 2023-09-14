import { useDispatch } from 'react-redux';
import { userLogOut } from "../store/actions/userAction.js"
import { useState } from 'react';


const SignOut = () => {

    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
      email: '',
      password: ''
  })
  
    const handleSignOut = async (user) => {
        setFormData({
            ...formData,
            [user.target.name]: user.target.value
        })
        user.preventDefault();
        try{
          dispatch(userLogOut({
              data: formData
          }))
      }catch(error){
          console.log(error);
      }
  
  }
  return(
    <div>
    <button
        className=" px-12 py-3 text-sm font-medium"
        onClick={handleSignOut}
        >
            Log out!
        </button>
  </div>
  )

}

export default SignOut