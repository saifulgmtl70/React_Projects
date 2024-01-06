import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import FeaturedJob from "../FeaturedJob/FeaturedJob";


const Home = () => {
    return (
        <div className="mx-auto px-12 py-12 bg-slate-100">
            <div className="max-w-7xl mx-auto">
                <Banner></Banner>
                <Category></Category>
                <FeaturedJob></FeaturedJob>
            </div>
        </div>
    );
};

export default Home;