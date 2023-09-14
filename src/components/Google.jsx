import axios from "axios";
import { useEffect, useRef } from "react"

export const Google = () => {
    const googleButton = useRef();

    const handleCredentialResponse = async(response) => {
        // console.log("Encoded JWT ID token: " + response.credential);
        const data = {
            token_id: response.credential
        }

        const userResponse = await axios.post('http://localhost:8000/api/auth/google', data);

        console.log(userResponse)
    }

    useEffect(() => {
        if(window.google) {
            window.google.accounts.id.initialize({
                client_id: "5228161470-gfvihdh4ka8hv4qi6adshp83hfmdr85v.apps.googleusercontent.com",
                callback: handleCredentialResponse
            });
            window.google.accounts.id.renderButton(
                googleButton.current,
                { type: 'standard', shape: 'rectangular', theme: "outline", size: "medium", text: 'continue_with' }  // customization attributes
            );
        }

    }, [])

    return(
    <div ref={googleButton}>Google sign in</div>
    )
}