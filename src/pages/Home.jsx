import Blog from "../sections/Blog";
import Hero from "../sections/Hore";
import Newsletter from "../sections/Newsletter";
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
        <Blog />
        </section>
      <section>
        <TeamMebers />  
      </section>
      <section>
        <Pricing />
        </section> 
        <section>
        <Newsletter />
        </section>
        <section>
        <Testimonials />
        </section>
      </div>
    </>
  );
};

export default Home;
