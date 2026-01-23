import { FaCircleCheck } from "react-icons/fa6";
import Container from "../shared/Container";
import { Link } from "react-router";
const CTAHighlights = () => (
  <div className="bg-linear-to-r from-secondary to-primary text-white py-16">
    <Container className="text-center space-y-3">
      <div className="flex flex-wrap justify-center gap-4">
        {["Free 30-Day Trial", "No Credit Card Required", "Cancel Anytime"].map(
          (item, i) => (
            <div
              key={i}
              className="flex items-center gap-2 text-white/80 text-sm font-medium"
            >
              <FaCircleCheck className="text-gray-900" />
              {item}
            </div>
          ),
        )}
      </div>
      <h2 className="text-2xl md:text-5xl leading-[1.1] font-bold">
        Ready to Take Your Business to the Next Level?
      </h2>
      <p className="max-w-[70ch] mx-auto text-lg">
        Join 50,000+ professionals who are already using our platform to grow
        their business and financial freedom.
      </p>
      <Link
        to="/register"
        className="btn rounded-xl bg-black text-white mt-3 border-0 duration-500 
        dark:bg-primary dark:text-white dark:hover:bg-white dark:hover:text-black 
      "
      >
        Get Started Now — It's Free
      </Link>
    </Container>
  </div>
);
export default CTAHighlights;
