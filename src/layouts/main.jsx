import navbar from "../components/navbar"

const Main = ({ children }) => {
    return(
        <>
            <navbar /> 
            {children}
        </>
    )
}

export default Main 