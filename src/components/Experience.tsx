import { Briefcase } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const Experience = () => {
  const experiences = [
    {
      role: "Quantitative Research Intern (Derivatives)",
      company: "Trado - Windigotrade Pvt. Ltd",
      location: "Research Park, IIT Gandhinagar",
      period: "June 2025 - August 2025",
      responsibilities: [
        "Conducted end-to-end research on derivatives markets, applying ML and statistical tools to develop trading strategies.",
        "Validated strategy performance through backtesting and documented research methodologies for broader team utility."
      ]
    },
    {
      role: "Summer Project Intern",
      company: "Dr. Puneet Pasricha, Assistant Professor, Dept. of Mathematics",
      location: "IIT Ropar, Rupnagar",
      period: "May 2024 - July 2024",
      responsibilities: [
        "Built ML models for stock price prediction and portfolio optimization; evaluated performance via backtesting."
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <Briefcase className="w-8 h-8 text-accent" />
          <h2 className="text-4xl font-bold text-foreground">Experience</h2>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index} className="shadow-lg border-border hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-foreground mb-2">
                      {exp.role}
                    </h3>
                    <p className="text-lg text-accent font-medium mb-1">
                      {exp.company}
                    </p>
                    <p className="text-muted-foreground">
                      {exp.location}
                    </p>
                  </div>
                  <span className="text-muted-foreground font-medium whitespace-nowrap">
                    {exp.period}
                  </span>
                </div>

                <ul className="space-y-2 mt-6">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-accent mt-1.5">•</span>
                      <span className="text-foreground leading-relaxed">{resp}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
