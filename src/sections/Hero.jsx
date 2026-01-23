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
    badge: "Retirement & Savings",
    titleMain: "Secure ",
    titleHighlight: "Retirement Life",
    suffix: " with Ease",
    description:
      "Automate your savings and secure your post-work life. Track every penny with our advanced growth engine designed for long-term stability.",
  },
];

const Hero = () => {
  return (
    <div className="bg-primary/5 dark:bg-[#0b0b0f] py-10 transition-colors duration-500">
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
              <div className="flex flex-col lg:flex-row items-center justify-between overflow-hidden">
                {/* Slide Content */}
                <div className="w-full lg:w-1/2 text-center lg:text-left space-y-8">
                  <p
                    className="inline-block bg-primary/10 dark:bg-primary/20 border border-primary/30 
                    text-primary dark:text-primary-light px-4 py-2 rounded-full 
                    text-sm font-semibold tracking-wide"
                  >
                    {s.badge}
                  </p>

                  <h1 className="text-4xl md:text-7xl font-bold leading-[1.1] text-gray-900 dark:text-white">
                    {s.titleMain}
                    <span className="text-primary">
                      {s.titleHighlight}
                    </span>
                    {s.suffix}
                  </h1>

                  <p className="max-w-xl mx-auto lg:mx-0 text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
                    {s.description}
                  </p>

                  <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                    <Link
                      to="/"
                      className="btn rounded-xl bg-black text-white hover:bg-primary border-0 duration-500 
                      dark:bg-primary dark:text-white dark:hover:bg-white dark:hover:text-black 
                      flex items-center gap-2 group"
                    >
                      Get Started
                      <FaArrowRightLong className="translate-x-0 group-hover:translate-x-2 duration-500" />
                    </Link>

                    <a target="_blank" href="https://www.youtube.com/watch?v=A9Xq3FGjpZA"
                      className="btn rounded-xl btn-outline border-gray-300 text-gray-700 hover:bg-black hover:text-white 
                      dark:border-gray-700 dark:text-gray-300 dark:hover:bg-white dark:hover:text-black 
                      duration-500 font-semibold"
                    >
                      <MdSlowMotionVideo size={22} className="mr-2" /> Watch
                      Demo
                    </a>
                  </div>
                </div>

                {/* Slide Image */}
                <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
                  <img
                    className="max-h-[400px] md:max-h-[550px] object-contain"
                    src={s.image}
                    alt={s.titleMain}
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </div>
  );
};

export default Hero;
