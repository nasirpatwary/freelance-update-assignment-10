import { CiShare2 } from "react-icons/ci";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaTwitter, FaFacebookF } from "react-icons/fa";

import team1 from "../assets/team1.png";
import team2 from "../assets/team2.png";
import team3 from "../assets/team3.png";
import team4 from "../assets/team4.png";
import Container from "../shared/Container";

const TeamMembers = () => {
  const teamData = [
    { img: team1, name: "A. Johnson", role: "Chief Financial Officer" },
    { img: team2, name: "L. Martinez", role: "Investment Strategist" },
    { img: team4, name: "R. Patel", role: "Risk Management Lead" },
    { img: team3, name: "S. Kim", role: "Financial Analyst" },
  ];

  return (
    <Container>
      <div className="space-y-3 md:text-center">
        <p
            className="inline-block

              bg-[#eeedfc] dark:bg-[#1e1d2a]

              border border-primary

              text-gray-700 dark:text-gray-300

              w-fit px-2 py-1 rounded-full

              text-sm font-medium"
          >
          Our Team
          </p>
        <h1 className="text-2xl mt-4 md:text-4xl font-bold text-gray-900 dark:text-white">
          Expert <span className="text-primary">Financial</span> Team
        </h1>
        <p className="text-gray-600 dark:text-gray-300 max-w-[56ch] mx-auto">
          Our finance team consists of highly skilled professionals dedicated to
          helping clients maximize profits, manage risks, and achieve
          sustainable financial growth through expert advice and innovative
          strategies.
        </p>
      </div>

      <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {teamData.map((member, idx) => (
          <div key={idx} className="relative group cursor-pointer">
            <img
              src={member.img}
              alt={member.name}
              className="rounded-xl w-full object-cover shadow-lg"
            />

            {/* Share Icon */}
            <div className="absolute top-4 right-4">
              <div className="relative">
                <span className="flex items-center justify-center size-8 bg-white dark:bg-primary rounded-full text-primary dark:text-white group-hover:bg-primary group-hover:text-white shadow-md transition">
                  <CiShare2 className="text-xl" />
                </span>

                {/* Social Icons */}
                <div className="absolute top-4 scale-y-0 group-hover:scale-y-100 transition-all duration-500 origin-top group-hover:top-10 space-y-2">
                  {[FaFacebookF, FaTwitter, FaLinkedinIn].map((Icon, i) => (
                    <span
                      key={i}
                      className="flex items-center justify-center size-8 bg-white dark:bg-primary/70 rounded-full text-primary dark:text-white shadow-md hover:bg-primary hover:text-white transition"
                    >
                      <Icon />
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Name & Role */}
            <div
              className="absolute scale-y-0 w-full group-hover:scale-y-100 origin-bottom bottom-0 
              rounded-b-xl bg-white/30 dark:bg-gray-900/30 backdrop-blur-sm transition-all py-1 text-center duration-500"
            >
              <h5 className="text-xl text-gray-900 dark:text-gray-200">
                {member.name}
              </h5>
              <p className="dark:text-gray-300">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default TeamMembers;
