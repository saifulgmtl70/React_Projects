import { useEffect, useState } from "react";
import Donation from "../Donation/Donation";



const Donation_Feature = () => {

    const [donations, setDonations] = useState([]);
   
     useEffect(() => {
        fetch('donation.json')
        .then(res => res.json())
        .then(data => setDonations(data))

        
     }, []);
    

    return (
        <section className="px-12 py-10 mt-10 mx-auto">


        
            <div className="grid grid-cols-1 mx-auto md:mx-auto lg:mx-0 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {
                    donations.map((donation) =>( <Donation key={donation.id}  donation={donation}></Donation>
                ))}
            </div>

            {/* <div className="text-center mt-12">
                <PieChart width={400} height={400}>
                    <Pie dataKey="value" data={[
                        {name: "Donated By me", value: totalDonated},

                        {name: "Rest of the Donation", value: totalAvailable - totalDonated},
                    ]}
                    cx ="50%"
                    cy = "50%"
                    outerRadius={80}
                    fill="#8884d8"
                    label
                    >
                        <Cell fill="#FF444A"></Cell>
                        <Cell fill="#0052FF"></Cell>
                    </Pie>
                    <Tooltip></Tooltip>
                </PieChart>
            </div> */}


        </section>
    );
};

export default Donation_Feature;