import Container from "../shared/Container";
import { Rating } from "@smastrom/react-rating";
const reviews = [
  {
    name: "Aarav Hossain",
    role: "Investment Analyst",
    img: "https://i.pravatar.cc/150?img=12",
    rating: 5,
    feedback:
      "The financial advice I received was top-notch. My portfolio growth has improved significantly thanks to their strategic insights.",
  },
  {
    name: "Sadia Rahman",
    role: "Financial Advisor",
    img: "https://i.pravatar.cc/150?img=47",
    rating: 4.5,
    feedback:
      "Their budgeting strategies and tax planning services made managing finances so much easier. I feel more confident about my financial future.",
  },
  {
    name: "Rafi Ahmed",
    role: "Entrepreneur",
    img: "https://i.pravatar.cc/150?img=22",
    rating: 5,
    feedback:
      "Exceptional investment guidance! Their expertise helped me diversify my portfolio and maximize returns without taking unnecessary risks.",
  },
  {
    name: "Nusrat Jahan",
    role: "Corporate CFO",
    img: "https://i.pravatar.cc/150?img=15",
    rating: 4.5,
    feedback:
      "Their financial reporting and analysis services are outstanding. I get clear insights to make informed corporate decisions.",
  },
  {
    name: "Tanvir Islam",
    role: "Portfolio Manager",
    img: "https://i.pravatar.cc/150?img=36",
    rating: 4.8,
    feedback:
      "I highly recommend their investment and tax consulting services. Their strategies are practical, efficient, and truly profitable.",
  },
  {
    name: "Mim Akter",
    role: "Freelance Investor",
    img: "https://i.pravatar.cc/150?img=65",
    rating: 4.5,
    feedback:
      "Their guidance on risk management and financial planning is impeccable. I now feel secure about both short-term and long-term investments.",
  },
];
const Testimonials = () => {
  return (
    <Container className="mb-16">
      {/* Header */}
      <div className="text-center space-y-2">
        <p
            className="inline-block

              bg-[#eeedfc] dark:bg-[#1e1d2a]

              border border-primary

              text-gray-700 dark:text-gray-300

              w-fit px-2 py-1 rounded-full

              text-sm tracking-widest font-medium"
          >
          Feedback from Clients
        </p>
        <h2 className="text-2xl mt-4 md:text-4xl font-bold text-gray-900 dark:text-white">
          What Our Clients Say
        </h2>
        <p className="text-gray-500 dark:text-gray-300">
          Real feedback from our valued finance clients
        </p>
      </div>

      {/* Testimonials Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {reviews.map((client, i) => (
          <div
            key={i}
            className="space-y-4 testimonial-shadow p-5 rounded-2xl bg-white dark:bg-gray-800 shadow-lg dark:shadow-gray-700 cursor-pointer duration-300"
          >
            <div className="flex items-center gap-4">
              <img
                src={client.img}
                alt={client.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  {client.name}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {client.role}
                </p>
              </div>
            </div>
            <p className="text-gray-700 dark:text-gray-200">
              {client.feedback}
            </p>
            <div className="mt-4">
              <Rating style={{ maxWidth: 80 }} value={client.rating} readOnly />
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Testimonials;
