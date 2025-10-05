import { Trophy } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const Achievements = () => {
  const achievements = [
    {
      title: "Stage 2 Qualifier, WorldQuant BRAIN International Quant Championship",
      description: "Top 20% worldwide performers",
      year: "2025"
    },
    {
      title: "Rank 13, Inter-IIT Tech Meet 13.0, IIT Bombay",
      description: "Across 23 IITs in Untrade - Zelta Labs Algotrading challenge",
      year: "2024"
    },
    {
      title: "National Talent Search Examination (NTSE)",
      description: "Secured merit-based scholarship (Top 0.17% of 1.2M+ applicants)",
      year: "2022"
    }
  ];

  const positions = [
    {
      role: "Secretary, FinCom - Finance, Consulting & Analytics Club",
      institution: "IIT Ropar",
      period: "May 2025 - Present"
    },
    {
      role: "Assistant Internship Coordinator, Career Development and Placement Cell",
      institution: "IIT Ropar",
      period: "May 2025 - Present"
    }
  ];

  return (
    <section id="achievements" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <Trophy className="w-8 h-8 text-accent" />
          <h2 className="text-4xl font-bold text-foreground">Achievements & Leadership</h2>
        </div>

        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-6">Achievements</h3>
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <Card key={index} className="shadow-lg border-border hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                      <div>
                        <h4 className="text-lg font-semibold text-foreground mb-2">
                          {achievement.title}
                        </h4>
                        <p className="text-muted-foreground">
                          {achievement.description}
                        </p>
                      </div>
                      <span className="text-accent font-semibold whitespace-nowrap">
                        {achievement.year}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-6">Positions of Responsibility</h3>
            <div className="space-y-4">
              {positions.map((position, index) => (
                <Card key={index} className="shadow-lg border-border hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                      <div>
                        <h4 className="text-lg font-semibold text-foreground mb-1">
                          {position.role}
                        </h4>
                        <p className="text-muted-foreground">
                          {position.institution}
                        </p>
                      </div>
                      <span className="text-muted-foreground font-medium whitespace-nowrap">
                        {position.period}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
