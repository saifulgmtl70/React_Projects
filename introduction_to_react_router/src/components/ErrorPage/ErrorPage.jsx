import { useNavigate, useRouteError } from "react-router-dom";


const ErrorPage = () => {

    const error = useRouteError();
    // console.log(error);

    const navigate = useNavigate();
    const backHomeBtn = () =>{
        navigate(`/`);
    }

    return (
        <div>
            <h2>OOPS!!!! Something Went Wrong</h2>
            <p>{error.statusText || error.message}</p>
            {
                error.status === 404 && <div>
                    <h3>Page Not found</h3>
                    <p>Go back to Home</p>
                    <button onClick={backHomeBtn}>Back to Home</button>
                </div>
            }
        </div>
    );
};

export default ErrorPage;