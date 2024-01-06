import { useEffect, useState } from "react";
import { getStoredDonationAppl } from "../../Utilites/localStorage";
import { useLoaderData } from "react-router-dom";
import ShowGivenDonation from "../ShowGivenDonation/ShoGivenDonation";



const GivenDonation = () => {

    const donations = useLoaderData();

    const [givenDonations, setGivenDonations] = useState([]);
    const [dataLength, setDataLength] = useState(4);

    const [showAll, setShowAll] = useState(false);


    useEffect(() => {
        const storedDonation = getStoredDonationAppl();
        if(donations.length){

            const donationGiven = donations.filter(donation => storedDonation.includes(donation.id));
            console.log(donationGiven);

            setGivenDonations(donationGiven);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    const handleSeeAllClick = () => {
        setDataLength(givenDonations.length);
        setShowAll(true);
    };


    return (
        <section className="mx-auto text-center px-14 bg-slate-50 py-32">

          
            <div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-9">
                    {
                        givenDonations.slice(0, showAll ? givenDonations.length : dataLength).map(donation => <ShowGivenDonation key={donation.id} donation={donation}></ShowGivenDonation>)
                    }
                </div>

                {!showAll && givenDonations.length > 4 && (
                    <div className="text-center mt-10">
                        <button onClick={handleSeeAllClick} className="bg-green-700 px-5 py-3 rounded text-white">See All</button>
                    </div>
                )}
            </div>

        </section>
    );
};

export default GivenDonation;