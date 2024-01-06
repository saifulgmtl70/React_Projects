import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { useEffect, useState } from "react";
import Webinar from "./Webinar";


const Webinarss = () => {

    const [webinars, setWebinars] = useState([]);

    const [seeMore, setSeemore] = useState(null);
    const [dataLength, setDataLength] = useState(4);

    const handleSeMore = () => {
        setDataLength(webinars.length);
        setSeemore(true);
    };

    useEffect(() =>{
        fetch('Webinars.json')
        .then(res => res.json())
        .then(data => setWebinars(data))
    }, [])



    return (
        <section>
            <Header></Header>


            <section className="">
                <div className="hero h-96" style={{backgroundImage: 'url(https://i.ibb.co/SBctgMQ/pngtree-education-training-cartoon-illustrator-style-image-20669.jpg)'}}>
                    <div className="hero-overlay bg-opacity-70"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="text-3xl lg:text-6xl font-bold mb-5">Webiner</h1>
                            <p className="text-xl"><Link className="font-bold text-green-600" to="/">Home</Link> / Webinar</p>

                            

                        </div>
                    </div>
                </div>

            </section>


            <section className="px-12 py-10">
                <h2 className="text-4xl text-center text-cyan-950 font-bold mb-10">Our Upcoming Webinars</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {
                        webinars.slice(0, seeMore ? webinars.length : dataLength).map(webinar => <Webinar key={webinar.id} webinar={webinar}></Webinar>)
                    }
                </div>
                {!seeMore && webinars.length > 4 && (
                    <div className="text-center mt-10">
                        <button onClick={handleSeMore} className="bg-rose-600 px-5 py-3 rounded text-white">See More</button>
                    </div>
                )}
            </section>



            <section className="px-12 bg-neutral text-neutral-content">
                <Footer></Footer>
            </section>
        </section>
    );
};

export default Webinarss;