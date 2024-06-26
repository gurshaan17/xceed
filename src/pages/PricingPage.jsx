import Pricing from "../components/Pricing";
import Header from "../components/Header";
import Footer from "../components/Footer";

const PricingPage = () => {
    return <div>
        <Header/>
        <div className="border-t-2 border-teal-500 w-full"></div>
        <Pricing/>
        <Footer />
    </div>
}

export default PricingPage;