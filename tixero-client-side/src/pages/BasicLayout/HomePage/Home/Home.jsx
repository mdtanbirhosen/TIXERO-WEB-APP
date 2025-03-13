import Section from "../../../../components/Section/Section";
import Banner from "../Banner/Banner";
import FlashDeals from "../FlashDeals/FlashDeals";

const Home = () => {
    return (
        <div className="space-y-10">
            {/* banner is here  */}
            <section>
            <Banner/>
            </section>
            {/*  */}
            <Section>
                <FlashDeals/>
            </Section>
        </div>
    );
};

export default Home;