import Blog from "../sections/Blog";
import Categories from "../sections/Categories";
import CTAHighlights from "../sections/CTAHighlights";
import Features from "../sections/Features";
import Hero from "../sections/Hore";
import Newsletter from "../sections/Newsletter";
import OurService from "../sections/OurService";
import Statistics from "../sections/Statistics";
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
        <Categories />
        </section>
        <section>
        <Statistics />
        </section>
        <section>
        <CTAHighlights />
        </section>
        <section>
        <Features />
        </section>
        <section>
        <Blog />
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
