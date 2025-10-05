import { GraduationCap } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const Education = () => {
  const coursework = [
    "Probability",
    "Statistics",
    "Data Structures",
    "Behavioural Finance",
    "Stochastic Processes",
    "Reinforcement Learning",
    "Linear Algebra",
    "Group Theory"
  ];

  return (
    <section id="education" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <GraduationCap className="w-8 h-8 text-accent" />
          <h2 className="text-4xl font-bold text-foreground">Education</h2>
        </div>

        <Card className="shadow-lg border-border hover:shadow-xl transition-shadow">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-2">
                  Bachelor of Technology in Engineering Physics
                </h3>
                <p className="text-lg text-accent font-medium">
                  Indian Institute of Technology, Ropar
                </p>
              </div>
              <span className="text-muted-foreground font-medium">2023-2027</span>
            </div>

            <div className="mt-6">
              <h4 className="text-lg font-semibold text-foreground mb-4">Relevant Coursework</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {coursework.map((course) => (
                  <div
                    key={course}
                    className="px-4 py-2 bg-muted rounded-lg text-center text-sm font-medium text-foreground"
                  >
                    {course}
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Education;
