import navbar from "../components/navigationBar"

const Main = ({ children }) => {
    return(
        <>
            <navbar /> 
            {children}
        </>
    )
}

export default Main 