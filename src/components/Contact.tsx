import React from "react";
import { Mail, Github, Linkedin, FileText } from "lucide-react";

const Contact: React.FC = () => {
  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/neelpatel8837",
      color: "hover:text-foreground",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://www.linkedin.com/in/neel-patel-2a2925337",
      color: "hover:text-blue-600",
    },
    {
      name: "Email",
      icon: Mail,
      href: "mailto:patelneel0742@gmail.com",
      color: "hover:text-red-500",
    },
    {
      name: "Resume",
      icon: FileText,
      href: "#",
      color: "hover:text-green-600",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="w-full max-w-6xl mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-20 h-1 gradient-primary mx-auto rounded-full"></div>
        </div>

        {/* two equal columns: left = Let's Connect, right = Find Me Online */}
        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          {/* Left: Let's Connect */}
          <div className="glass-card p-8 rounded-2xl animate-fade-in-up h-full flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Let's Connect</h3>
              <p className="text-muted-foreground mb-6">
                I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 gradient-primary rounded-lg">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <a
                      href="mailto:patelneel0742@gmail.com"
                      className="font-medium hover:text-primary transition-colors"
                    >
                      patelneel0742@gmail.com
                    </a>
                  </div>
                </div>

                {/* You can add more contact rows here (phone, location, etc.) */}
              </div>
            </div>

            {/* Optional small footer or CTA to keep both cards visually balanced */}
            <div className="mt-6 text-sm text-muted-foreground">Reach out and I'll reply as soon as I can.</div>
          </div>

          {/* Right: Find Me Online */}
          <div className="glass-card p-8 rounded-2xl animate-fade-in-up h-full flex flex-col">
            <h3 className="text-2xl font-semibold mb-6">Find Me Online</h3>

            <div className="grid grid-cols-2 gap-4 flex-1">
              {socialLinks.map((link) => {
                const Icon = link.icon as any;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-3 p-4 bg-background/50 rounded-xl border border-border/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${link.color}`}
                  >
                    <Icon className="h-5 w-5" />
                    <span className="font-medium">{link.name}</span>
                  </a>
                );
              })}
            </div>

            {/* keep consistent spacing at bottom so both columns look balanced */}
            <div className="mt-6 text-sm text-muted-foreground">Or find me on GitHub and LinkedIn for projects and updates.</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

