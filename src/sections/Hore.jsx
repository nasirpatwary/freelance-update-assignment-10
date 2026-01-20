import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import { FaArrowRightLong } from "react-icons/fa6";
import { MdSlowMotionVideo } from "react-icons/md";
import { Link } from "react-router";

import "swiper/css/effect-fade";
import "swiper/css/pagination";

// Assets
import hero1 from "../assets/hero-removebg-preview.png";
import hero2 from "../assets/one-removebg-preview.png";
import hero3 from "../assets/two-removebg-preview.png";
import Container from "../shared/Container";
// import SavingPlanCard from "./SavingPlanCard";

const slides = [
  {
    id: 1,
    image: hero1,
    badge: "Smart Wealth Management",
    titleMain: "Why ",
    titleHighlight: "Financial Planning",
    suffix: " Matters",
    description:
      "Financial planning helps you organize income, savings & investment to achieve long-term goals. It reduces stress and builds wealth.",
  },
  {
    id: 2,
    image: hero2,
    badge: "Retirement & Savings",
    titleMain: "Secure Your ",
    titleHighlight: "Future Savings",
    suffix: " Today",
    description:
      "Start building a safety net with our automated saving tools. Track every penny and watch your wealth grow consistently over time.",
  },
  {
    id: 3,
    image: hero3,
    badge: "Investment Insights",
    titleMain: "Master Your ",
    titleHighlight: "Investment Portfolio",
    suffix: "",
    description:
      "Analyze market trends and manage your diversified portfolio in one dashboard. Real-time data for smarter financial decisions.",
  },
];

const Hero = () => {
  return (
    <Container>
      <Swiper
        modules={[Autoplay, EffectFade]}
        slidesPerView={1}
        effect={"fade"}
        fadeEffect={{ crossFade: true }}
        loop={true}
        speed={1500}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
      >
        {slides.map((s) => (
          <SwiperSlide key={s.id}>
            <div className="lg:flex items-center justify-center md:justify-normal overflow-hidden space-y-12 lg:space-y-0">
              {/* Slide Content */}

              <div className="relative z-20 w-full">
                <Container className="space-y-6 text-center">
                  <p
                    className="inline-block

              bg-[#eeedfc] dark:bg-[#1e1d2a]

              border border-primary

              text-gray-700 dark:text-gray-300

              w-fit px-4 py-2 rounded-full

              text-sm font-medium

            "
                  >
                    {s.badge} {s.suffix}
                  </p>

                  <h1 className="text-3xl md:text-7xl font-bold leading-[1.1]">
                    {s.titleMain}{" "}
                    <span className="text-primary block lg:inline">
                      {s.titleHighlight}
                    </span>
                  </h1>

                  <p className="max-w-2xl mx-auto md:text-xl opacity-90 leading-relaxed">
                    {s.description}
                  </p>

                  <div className="flex flex-wrap justify-center gap-4">
                    <span className="group">
                      <Link
                        to="/"
                        className="

                    btn bg-black text-white hover:bg-primary border-0 duration-500

                    dark:bg-primary dark:text-white dark:hover:bg-black

                  "
                      >
                        Get Started
                        <FaArrowRightLong className="translate-x-0 group-hover:translate-x-2 duration-500" />
                      </Link>
                    </span>

                    <button
                      className="

                  btn btn-outline

                  hover:bg-black hover:text-white

                  duration-500 font-semibold

                  border-gray-300 text-gray-700

                  dark:border-gray-600 dark:text-gray-300

                  dark:hover:bg-white dark:hover:text-black

                "
                    >
                      <MdSlowMotionVideo size={20} /> Watch Track Now
                    </button>
                  </div>
                </Container>
              </div>
              <img className="mx-auto" src={s.image} alt={s.titleMain} placeholder="blur" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default Hero;
