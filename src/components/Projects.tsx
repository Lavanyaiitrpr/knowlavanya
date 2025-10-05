import { Code2, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

const Projects = () => {
  const projects = [
    {
      title: "Hybrid Option Pricing Using Black-Scholes-Merton and Heston with HMM Regime Detection",
      date: "June 2025",
      technologies: ["Python", "yfinance", "QuantLib", "hmmlearn", "pandas", "numpy", "scikit-learn", "matplotlib", "seaborn", "plotly"],
      description: [
        "Designed a hybrid option pricing framework combining Black-Scholes-Merton and Heston models, with dynamic switching based on market regimes detected via unsupervised Hidden Markov Models (HMM).",
        "Empirically validated model-switching logic, achieving a substantial RMSE reduction in volatile regimes (BSM: 44.97 → Heston: 39.21), while maintaining optimal performance in stable regimes (RMSE: 35.32)."
      ],
      github: "https://github.com/lahanelavanya/Hybrid-Option-Pricing"
    },
    {
      title: "Reinforcement Learning for Portfolio Optimisation",
      date: "April 2025",
      technologies: ["Python", "Stable-Baselines3", "Gym", "NumPy", "pandas", "PyPortfolioOpt", "yFinance", "Matplotlib"],
      description: [
        "Engineered a custom gym.Env for portfolio optimization and trained a Proximal Policy Optimization (PPO) agent via Stable-Baselines3, utilizing a Sortino ratio-based reward function to drive risk-adjusted outperformance.",
        "Achieved 19381% cumulative return over traditional benchmarks using a rolling-window backtesting framework (126-day training, 21-day testing) across historical market regimes."
      ],
      github: "https://github.com/lahanelavanya/RL-Portfolio-Optimization"
    },
    {
      title: "Black-Litterman Portfolio Optimisation with ML-Based View",
      date: "May 2025",
      technologies: ["Python", "scikit-learn", "scipy.optimize", "yfinance", "pandas", "numpy", "matplotlib"],
      description: [
        "Formulated an advanced Black-Litterman model with Random Forest regression, optimizing 30 NIFTY 50 stocks using a 5% risk-free rate and 0.1% transaction costs, achieving a 0.02 RMSE for accurate predictive views.",
        "Optimized portfolio weights via quadratic utility maximization, ensuring stable, diversified allocations with enhanced performance and market equilibrium balance."
      ],
      github: "https://github.com/lahanelavanya/Black-Litterman-ML"
    }
  ];

  const miscProjects = [
    "Currency Exchange Rate Forecasting Using SARIMA Model, validated using Ljung-Box and heteroskedasticity diagnostics.",
    "Stock Price Prediction Using Machine Learning, Developed Regression Model and Backtested on historical data.",
    "Algo-Trading Strategies for BTC and ETH Using Statistical Models, Achieved up to 3400% returns with sharpe > 1.6."
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <Code2 className="w-8 h-8 text-accent" />
          <h2 className="text-4xl font-bold text-foreground">Projects</h2>
        </div>

        <div className="space-y-6 mb-12">
          {projects.map((project, index) => (
            <Card key={index} className="shadow-lg border-border hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex items-start gap-3 flex-1">
                    <CardTitle className="text-xl md:text-2xl leading-tight flex-1">
                      {project.title}
                    </CardTitle>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:text-accent/80 transition-colors mt-1"
                      aria-label="View project on GitHub"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                  <span className="text-muted-foreground font-medium whitespace-nowrap">
                    {project.date}
                  </span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <ul className="space-y-3">
                  {project.description.map((desc, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-accent mt-1.5">•</span>
                      <span className="text-foreground leading-relaxed">{desc}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="shadow-lg border-border">
          <CardHeader>
            <CardTitle className="text-xl">Additional Projects</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {miscProjects.map((project, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-accent mt-1.5">•</span>
                  <span className="text-foreground leading-relaxed">{project}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Projects;
