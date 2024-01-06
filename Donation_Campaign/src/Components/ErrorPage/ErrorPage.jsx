import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="mx-auto text-center py-36 bg-slate-100">
            <h2>Ooops!!. Something went wrong</h2>
            <button className="btn mt-10 bg-rose-500 hover:bg-rose-600 px-12 py-3 rounded-md text-white"> <Link to="/">Back to Home</Link>  </button>
        </div>
    );
};

export default ErrorPage;