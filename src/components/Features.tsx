import { Target, Inbox, Brain, FolderKanban } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Target,
      title: "Precision Time Management",
      description: "Optimizes your schedule with intelligent prioritization"
    },
    {
      icon: Inbox,
      title: "Smart Communication Filtering",
      description: "Cuts through noise to highlight what truly matters"
    },
    {
      icon: Brain,
      title: "Anticipates & Adapts",
      description: "Learns your preferences and predicts your needs"
    },
    {
      icon: FolderKanban,
      title: "Strategic Task Prioritization",
      description: "Organizes your workload for maximum impact"
    }
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl lg:text-5xl font-light mb-6">
            What Elira Does <span className="font-medium">Best</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Four core competencies that transform how you work
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`feature-card text-center space-y-4 fade-in-delay-${index + 1}`}
            >
              <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-sky-blue/20 to-blush/20 flex items-center justify-center">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-medium">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;