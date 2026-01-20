import { useEffect, useState } from "react";
const plans = [
  {
    title: "Bali Vacation",
    saved: 1950,
    target: 4000,
    targetDate: "August 25 2022",
  },
  {
    title: "New Gadget",
    saved: 790,
    target: 1000,
    targetDate: "August 25 2022",
  },
  {
    title: "Charity",
    saved: 2900,
    target: 3000,
    targetDate: "August 25 2022",
  },
];
const SavingPlanCard = () => {
  const [progress, setProgress] = useState(plans.map(() => 0));

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) =>
        prev.map((p, i) => {
          const targetPercent = Math.round(
            (plans[i].saved / plans[i].target) * 100
          );
          if (p < targetPercent) return p + 1;
          return p;
        })
      );
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="md:absolute bg-base-100 animate__animated animate__fadeInUp md:left-1/2 md:top-1/2 lg:top-12 transform md:-translate-x-1/5 rounded-xl w-full h-fit max-w-xs shadow p-5 mx-auto">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Saving Plan</h3>
        <button className="text-primary text-sm font-medium hover:underline">
          See All
        </button>
      </div>
      <hr className="mt-4 text-gray-300" />
      <div className="mt-4 space-y-6">
        {plans.map((plan, index) => {
          const currentSaved = Math.round(
            (progress[index] / 100) * plan.target
          );

          const barColors = [
            "progress-success",
            "progress-secondary",
            "progress-primary",
          ];
          const barColor = barColors[index % barColors.length];

          return (
            <div key={index}>
              <div className="flex justify-between">
                <h4 className="font-medium">{plan.title}</h4>
                <p className="text-xs text-gray-500">
                  Target: {plan.targetDate}
                </p>
              </div>

              <p className="text-xl font-semibold">
                ${currentSaved.toLocaleString()}{" "}
                <span className="text-gray-500 text-sm">/ ${plan.target}</span>
              </p>

              <div className="flex justify-end text-sm font-medium mt-1">
                <span className="text-primary">{progress[index]}%</span>
              </div>

              <progress
                className={`progress ${barColor} w-full`}
                value={progress[index]}
                max={100}
              ></progress>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SavingPlanCard;
