import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const CourseCategory = ({ courses }) => {
  // eslint-disable-next-line react/prop-types
  const { image, Course_Name, id } = courses;

  return (
    <div className="p-4 w-full lg:w-80 h-auto bg-slate-50 rounded-sm shadow-xl">
      <div className="h-48"> 
        <img src={image} alt="" className="h-full w-full rounded-sm" />
      </div>
      <div className="text-start px-2 h-32">
        <h2 className="text-xl font-medium text-cyan-950 my-5">{Course_Name}</h2>
      </div>
      <div className="text-center flex-grow bg-rose-500 py-2 rounde-sm text-white font-medium">
        <button>
          <Link to={`/category/${id}`}>See Details</Link>
        </button>
      </div>
    </div>
  );
};

export default CourseCategory;
