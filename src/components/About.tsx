import { Code2, Rocket, Heart } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 gradient-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in-up">
            <p className="text-lg leading-relaxed text-muted-foreground">
              I'm a passionate <span className="font-semibold text-foreground">MERN Stack Developer</span> with expertise in building modern, scalable web applications using <span className="font-semibold text-foreground">MongoDB, Express.js, React.js, and Node.js</span>.
            </p>
            
            <p className="text-lg leading-relaxed text-muted-foreground">
              My journey extends to mobile development with <span className="font-semibold text-foreground">React Native</span>, where I create performant Android applications with seamless user experiences.
            </p>
            
            <p className="text-lg leading-relaxed text-muted-foreground">
              With a strong foundation in <span className="font-semibold text-foreground">JavaScript, TypeScript and RESTful APIs</span>, I bring ideas to life through clean, maintainable code and intuitive UI/UX design.
            </p>
            
            <p className="text-lg leading-relaxed text-muted-foreground">
              I'm enthusiastic about solving complex problems, continuously learning new technologies, and building products that make a difference.
            </p>
          </div>

          <div className="grid gap-6 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="glass-card p-6 rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-start gap-4">
                <div className="p-3 gradient-primary rounded-xl">
                  <Code2 className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Full-Stack Expertise</h3>
                  <p className="text-muted-foreground">
                    End-to-end development from database design to polished user interfaces
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card p-6 rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-start gap-4">
                <div className="p-3 gradient-primary rounded-xl">
                  <Rocket className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Mobile Development</h3>
                  <p className="text-muted-foreground">
                    Native-like Android apps with React Native and modern tooling
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card p-6 rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-start gap-4">
                <div className="p-3 gradient-primary rounded-xl">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Problem Solver</h3>
                  <p className="text-muted-foreground">
                    Passionate about DSA, clean architecture, and continuous learning
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;