import { Link } from "react-router-dom";



// eslint-disable-next-line react/prop-types
const Donation = ({donation}) => {


    const {
        // eslint-disable-next-line react/prop-types
        id, image, category: { name, cat_bg_color, text_color },
        // eslint-disable-next-line react/prop-types
        campaign_name, background_color} = donation;
    
      const cardStyle = {
        backgroundColor: background_color,
      };
    
      const categoryStyle = {
        backgroundColor: cat_bg_color,
        color: text_color,
    };


    
    return (


        <Link to={`/donation/${id}`}>
            <div className="card card-compact md:mx-auto lg:mx-0 w-72 bg-slate-100 shadow-xl rounded-md"    style={cardStyle}>
                <img src={image} alt="" />
                <div className="card-body">
                    <div className="inline-block w-20 py-1 rounded-md text-center" style={categoryStyle}>
                        <span className="font-medium"> {name} </span>
                    </div>
                    <h2 className="card-title mt-1"> {campaign_name} </h2> 
                </div>
            </div>       
        </Link>
            

    );
};

export default Donation;