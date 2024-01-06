import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveDonationAppl } from "../../Utilites/localStorage";


const ShowDetails = () => {

    const donations = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id)
    const donation = donations.find(donation => donation.id === idInt);
    // console.log(donation);

    const donationParcentange = 100 / parseInt(donation.donate);
    console.log(donationParcentange);
    
    const handledonateBtn = () =>{
        saveDonationAppl(idInt);
        toast("You Successfully Donated");
    }

    return (
        <main>
            <ToastContainer></ToastContainer>
            <section className="mb-20 mt-10 px-14 py-5">
                <div className="w-full lg:w-9/12 mx-auto bg-slate-200 relative">
                    <img src={donation.image} className="w-full rounded-md h-full lg:h-auto" />
                    <div className="absolute bottom-0 w-full bg-gray-700 opacity-90 py-4 lg:py-7">
                        <button  onClick={handledonateBtn} className="text-white ms-5 bg-rose-500 font-extrabold px-8 py-2 rounded text-2xl -z-50">Donate {donation.donate} </button>
                    </div>

                
                </div>
                <div className="w-9/12 mx-auto mt-12">
                    <h2 className="text-2xl font-bold mb-4"> {donation.campaign_name} </h2>
                    <p className="text-lg font-normal"> {donation.description} </p>
                </div>
                
            </section>
        </main>
    );
};

export default ShowDetails;