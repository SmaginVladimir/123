import HomeFirstSection from "./Sections/HomeFirstSection";
import HomeSecondSection from "./Sections/HomeSecondSection";
import HomeThirdSection from "./Sections/HomeThirdSection";
import Nav from "./Nav";

const WrapperHome = () => {
    return (
        <div>
            <div>
                <HomeFirstSection />
                <HomeSecondSection />
                <HomeThirdSection />
            </div>
            <Nav />
        </div>
    );
};

export default WrapperHome;