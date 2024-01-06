
// eslint-disable-next-line react/prop-types
const ShowGivenDonation = ({donation}) => {

    const {
        // eslint-disable-next-line react/prop-types
        donate, image, category: { name, cat_bg_color, text_color },
        // eslint-disable-next-line react/prop-types
        campaign_name, background_color}  = donation;
    
      const cardStyle = {
        backgroundColor: background_color,
      };
    
      const categoryStyle = {
        backgroundColor: cat_bg_color,
        color: text_color,
    };

    const categJustBg = {
        backgroundColor: text_color
    };

    const txtColors = {
        color: text_color
    };

   


    return (
        
        <div className="card card-side bg-base-100 h-full lg:h-72 rounded-md shadow-xl" style={cardStyle}>
            <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="">
                    <img className="h-72 w-full lg:w-80 rounded-md" src={image} alt="Movie"/>
                </div>

                <div className="card-body text-start">
                    <div className="inline-block w-20 py-1 rounded-md text-center" style={categoryStyle}>
                        <span className="font-medium mt-2"> {name} </span>
                    </div>
                    <h2 className="card-title mt-2 font-bold text-xl mb-5"> {campaign_name} </h2> 
                    <span style={txtColors} className="font-bold mt-2 mb-10"> ${donate}.00 </span>

                    <div className="card-actions justify-start ">

                        <button style={categJustBg} className=' px-5 py-3 rounded text-white'>View Details</button>

                    </div>

               

            </div>
            </div>
        </div>
            

        
    );
};

export default ShowGivenDonation;