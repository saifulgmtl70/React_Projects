import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <section className="bg-slate-200">
            <footer className="footer p-10 max-w-6xl mx-auto text-base-content">
                <aside>
                    <h2 className="text-3xl text-slate-800 font-bold mb-3"> <Link to="/">CareerHub</Link> </h2>
                    <p className="text-lg text-slate-600">There are many variations of passages <br /> of Lorem Ipsum , but the majority have <br /> suffered alteration in some form.</p>
                    <div className="flex items-center gap-2 mt-3">
                        <div className=" bg-rose-500 flex justify-center items-center w-8 h-8 leading-6 rounded-full">
                            <a href="#" className="fab fa-facebook-f text-white font-bold "></a>
                        </div>
                        <div className=" bg-rose-500 flex justify-center items-center w-8 h-8 leading-6 rounded-full">
                            <a href="#" className="fab fa-twitter text-white font-bold "></a>
                        </div>
                        <div className=" bg-rose-500 flex justify-center items-center w-8 h-8 leading-6 rounded-full">
                            <a href="#" className="fab fa-instagram text-white font-bold "></a>
                        </div>
                       
                    </div>
                </aside> 

                <nav>
                    <header className="text-2xl text-neutral-900 font-bold mb-2">Company </header> 
                    <a href="#" className="text-lg text-slate-900 font-normal">About Us</a> 
                    <a href="#" className="text-lg text-slate-800 font-normal">Work</a> 
                    <a href="#" className="text-lg text-slate-800 font-normal">Latest News</a> 
                    <a href="#" className="text-lg text-slate-800 font-normal">Careers</a> 

                </nav> 

                <nav>
                    <header className="text-2xl text-neutral-900 font-bold mb-2">Product</header> 
                    <a href="#" className="text-lg text-slate-800 font-normal">ProtoType</a> 
                    <a href="#" className="text-lg text-slate-800 font-normal">Plans & Pricing</a> 
                    <a href="#" className="text-lg text-slate-800 font-normal">Customers</a> 
                    <a href="#" className="text-lg text-slate-800 font-normal">Integrations</a> 
                </nav> 
            

                <nav>
                    <header className="text-2xl text-neutral-900 font-bold mb-2">Legal</header>
                    <a href="#" className="text-lg text-slate-800 font-normal">Help Desk</a> 
                    <a href="#" className="text-lg text-slate-800 font-normal">Sales</a> 
                    <a href="#" className="text-lg text-slate-800 font-normal">Become a Partner</a> 
                    <a href="#" className="text-lg text-slate-800 font-normal">Developers</a> 
                </nav>

                <nav>
                    <header className="text-2xl text-neutral-900 font-bold mb-2">Contact</header>
                    <p>524 Broadway , NYC</p>
                    <p>+1 777 - 978 - 5570</p>
                </nav>
            </footer>


            <div className="flex flex-col mx-auto w-10/12">

                <div className="divider"></div> 

            </div>

            <div className="footer p-10 max-w-6xl mx-auto text-base-content flex justify-between items-center">
                <h1>@2023 CareerHub. All Rights Reserved</h1>
                <h1>Powered by CareerHub</h1>
            </div>

        </section>
    );
};

export default Footer;