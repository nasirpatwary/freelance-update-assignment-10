import Hero from "../sections/Hore";
import OurService from "../sections/OurService";
import Pricing from "../sections/Pricing";
import TeamMebers from "../sections/TeamMebers";
import Testimonials from "../sections/Testimonals";
const Home = () => {
  return (
    <>
      <title>Home || Financial</title>
      <div className="space-y-20 lg:space-y-24">
      <section>
        <Hero />
      </section>
      <section>
        <OurService />
      </section>
      <section>
        <TeamMebers />  
      </section>
      <section>
        <Pricing />
        </section> 
        <section>
        <Testimonials />
        </section>
      </div>
    </>
  );
};

export default Home;
