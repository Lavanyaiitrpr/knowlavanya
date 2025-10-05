import { Mail, Phone, Github, Linkedin } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "2023epb1271@iitrpr.ac.in",
      href: "mailto:2023epb1271@iitrpr.ac.in"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91-9322821818",
      href: "tel:+919322821818"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "lahanelavanya",
      href: "https://github.com/lahanelavanya"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Lavanyaiitrpr",
      href: "https://linkedin.com/in/Lavanyaiitrpr"
    }
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Get in Touch</h2>
          <p className="text-lg text-muted-foreground">
            Feel free to reach out for collaborations, opportunities, or just a chat about quantitative finance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {contactInfo.map((contact, index) => (
            <Card key={index} className="shadow-lg border-border hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <Button
                  variant="ghost"
                  className="w-full h-auto p-0 hover:bg-transparent"
                  asChild
                >
                  <a
                    href={contact.href}
                    target={contact.href.startsWith('http') ? '_blank' : undefined}
                    rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-start gap-4 text-left"
                  >
                    <div className="p-3 bg-accent/10 rounded-lg">
                      <contact.icon className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">{contact.label}</p>
                      <p className="text-foreground font-medium hover:text-accent transition-colors">
                        {contact.value}
                      </p>
                    </div>
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
