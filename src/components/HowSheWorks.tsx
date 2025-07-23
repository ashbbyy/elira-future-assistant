const HowSheWorks = () => {
  const workingPrinciples = [
    "Speaks clearly — never curt.",
    "Filters out noise, highlights what matters.",
    "Offers to help before you ask.",
    "Keeps your world running smoothly."
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl lg:text-5xl font-light mb-6">
            How She <span className="font-medium">Works</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {workingPrinciples.map((principle, index) => (
            <div
              key={index}
              className={`glass-card p-8 text-center fade-in-delay-${index + 1}`}
            >
              <p className="text-xl lg:text-2xl font-light leading-relaxed">
                {principle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowSheWorks;