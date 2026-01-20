import Container from "../shared/Container";
import serviceImg from "../assets/a-removebg-preview.png";
import { GiCrystalGrowth } from "react-icons/gi";
import { FaArrowRightLong, FaChartLine } from "react-icons/fa6";
import { TbBusinessplan } from "react-icons/tb";
import { MdOutlineRoofing } from "react-icons/md";
import { TbTax } from "react-icons/tb";
import { Link } from "react-router";
import Marquee from "react-fast-marquee";

const OurService = () => {
  return (
    <>
      <Container>
        <div className="text-center">
          <span
            className="uppercase shadow px-2 py-1 rounded text-xs font-medium 
            text-gray-700 dark:text-gray-300"
          >
            our services
          </span>

          <h2
            className="text-2xl mt-4 md:text-4xl font-bold max-w-[20ch] mx-auto 
            text-gray-900 dark:text-white"
          >
            Why choose us as your accountant consultant?
          </h2>
        </div>

        <div className="lg:flex justify-between mt-12 spyace-y-8 lg:space-y-0">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div
              className="space-y-2 shadow hover:shadow-2xl duration-500 p-4 
                bg-white dark:bg-gray-900 rounded-lg"
            >
              <GiCrystalGrowth size={28} className="text-primary" />
              <h4 className="text-2xl font-semibold text-gray-900 dark:text-white">
                Accelerate Business Growth
              </h4>
              <p className="max-w-[32ch] text-gray-600 dark:text-gray-300">
                Empower your business with data-driven strategies designed to
                increase profitability and ensure sustainable growth.
              </p>
            </div>

            {/* Card 2 */}
            <div
              className="space-y-2 shadow hover:shadow-2xl duration-500 p-4 
                bg-white dark:bg-gray-900 rounded-lg"
            >
              <FaChartLine size={24} className="text-primary" />
              <h4 className="text-2xl font-semibold text-gray-900 dark:text-white">
                Navigate Capital Markets
              </h4>
              <p className="max-w-[32ch] text-gray-600 dark:text-gray-300">
                Gain deeper insights into market trends and make smarter
                investment decisions through our expert financial analysis.
              </p>
            </div>

            {/* Card 3 */}
            <div
              className="space-y-2 shadow hover:shadow-2xl duration-500 p-4 
                bg-white dark:bg-gray-900 rounded-lg"
            >
              <TbBusinessplan size={28} className="text-primary" />
              <h4 className="text-2xl font-semibold text-gray-900 dark:text-white">
                Strategic Business Planning
              </h4>
              <p className="max-w-[32ch] text-gray-600 dark:text-gray-300">
                Build a solid foundation for your company’s future with
                customized planning and long-term financial roadmaps.
              </p>
            </div>

            {/* Card 4 */}
            <div
              className="space-y-2 shadow hover:shadow-2xl duration-500 p-4 
                bg-white dark:bg-gray-900 rounded-t-lg"
            >
              <TbTax size={28} className="text-primary" />
              <h4 className="text-2xl font-semibold text-gray-900 dark:text-white">
                Smart Financial Planning
              </h4>
              <p className="max-w-[32ch] text-gray-600 dark:text-gray-300">
                Achieve your financial goals through effective budgeting, smart
                saving strategies, and personalized investment plans.
              </p>
            </div>

            {/* Card 5 */}
            <div
              className="space-y-2 shadow hover:shadow-2xl duration-500 p-4 
                bg-white dark:bg-gray-900 rounded-t-lg"
            >
              <MdOutlineRoofing size={28} className="text-primary" />
              <h4 className="text-2xl font-semibold text-gray-900 dark:text-white">
                Personalized Investment Strategy
              </h4>
              <p className="max-w-[32ch] text-gray-600 dark:text-gray-300">
                Diversify your portfolio and maximize returns with our
                expert-backed, risk-adjusted investment approaches.
              </p>
            </div>

            {/* Card 6 */}
            <div
              className="space-y-4 shadow-2xl px-8 py-4 bg-white 
                dark:bg-gray-900 rounded-t-lg"
            >
              <h4
                className="text-2xl font-semibold max-w-[16ch] 
                  text-gray-900 dark:text-white"
              >
                Explore our all expertises we offer
              </h4>
              <span className="group">
                <Link
                  to="/"
                  className="btn bg-black text-white hover:bg-primary 
                    dark:bg-white dark:text-black border-0 duration-500"
                >
                  View All Services
                  <FaArrowRightLong className="translate-x-0 group-hover:translate-x-2 duration-500" />
                </Link>
              </span>
            </div>
          </div>

          <div>
            <img className="mx-auto" src={serviceImg} alt="Service Img" />
          </div>
        </div>
      </Container>
      <div className="bg-[#eeedfc] dark:bg-gray-800 py-4 cursor-pointer">
        <Marquee
          speed={50}
          pauseOnHover={true}
          className="text-xl md:text-2xl font-medium text-gray-700 dark:text-gray-200"
        >
          Expert Financial Guidance &nbsp; • &nbsp; 💼 Tailored Business
          Strategies &nbsp; • &nbsp; 📊 Transparent Reporting &nbsp; • &nbsp; 💡
          Smart Tax Optimization &nbsp; • &nbsp; 🕒 On-Time Service Delivery
          &nbsp; • &nbsp; 🤝 Trusted Client Relationships &nbsp; • &nbsp; 🚀
          Proven Growth Results &nbsp; • &nbsp; 🔒 Secure Data Handling
        </Marquee>
      </div>
    </>
  );
};

export default OurService;
