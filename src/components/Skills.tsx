import { Lightbulb } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "C++", "R", "MATLAB", "Pine Script"]
    },
    {
      title: "Financial Engineering",
      skills: [
        "Derivative Pricing",
        "Volatility Modeling",
        "Algorithmic Trading",
        "Portfolio & Risk Management"
      ]
    },
    {
      title: "Analytical Skills",
      skills: [
        "Time Series Forecasting",
        "Stochastic Modeling",
        "Machine & Reinforcement Learning",
        "Convex Optimization",
        "Statistical Inference",
        "Numerical Techniques",
        "Financial Econometrics"
      ]
    },
    {
      title: "Soft Skills",
      skills: [
        "Analytical Thinking",
        "Problem Solving",
        "Effective Communication",
        "Team Collaboration"
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <Lightbulb className="w-8 h-8 text-accent" />
          <h2 className="text-4xl font-bold text-foreground">Skills</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="shadow-lg border-border hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-muted rounded-lg text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
