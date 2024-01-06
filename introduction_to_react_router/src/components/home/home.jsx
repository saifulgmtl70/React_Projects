import { Outlet, useLocation, useNavigation } from "react-router-dom";
import Header from "../Header/header";
import Footer from "../footer/footer";


const Home = () => {

    const navigation = useNavigation();
    const location = useLocation();
    console.log(location);

    return (
        <div style={{textAlign:"start"}}>
            <Header></Header>
            {
                navigation.state === 'loading' ? 
                <p>Loading.....</p>
                        :
                <Outlet></Outlet>
            }

            <Footer></Footer>
            

        </div>
    );
};

export default Home;