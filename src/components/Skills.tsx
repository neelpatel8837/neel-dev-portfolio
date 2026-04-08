import { Code, Database, Layout, Server, Smartphone, Wrench } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend",
      icon: Layout,
      skills: ["React.js", "React Native", "Redux", "HTML5", "CSS3", "Tailwind CSS", "TypeScript"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      category: "Backend",
      icon: Server,
      skills: ["Node.js", "Express.js", "REST APIs", "JWT Auth", "Prisma ORM"],
      color: "from-green-500 to-emerald-500",
    },
    {
      category: "Database",
      icon: Database,
      skills: ["MongoDB", "Mongoose", "MySQL"],
      color: "from-purple-500 to-pink-500",
    },
    {
      category: "Mobile",
      icon: Smartphone,
      skills: ["React Native", "Android Studio", "AsyncStorage"],
      color: "from-orange-500 to-red-500",
    },
    {
      category: "Tools",
      icon: Wrench,
      skills: ["Git", "GitHub","Postman","Swagger","Jest"],
      color: "from-indigo-500 to-purple-500",
    },
    {
      category: "Other",
      icon: Code,
      skills: ["Devops","GCP","Problem Solving"],
      color: "from-pink-500 to-rose-500",
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <div className="w-20 h-1 gradient-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => {
            const Icon = category.icon;
            return (
              <div
                key={category.category}
                className="glass-card p-6 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-3 bg-gradient-to-br ${category.color} rounded-xl`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold">{category.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-background/50 rounded-lg text-sm font-medium border border-border/50 hover:bg-primary/10 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
