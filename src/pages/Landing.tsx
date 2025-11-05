import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { GraduationCap, Users, BookOpen, DollarSign, Calendar, BarChart3 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Users,
      title: "Student Management",
      description: "Comprehensive student profiles, admissions, and class allocation"
    },
    {
      icon: BookOpen,
      title: "Academic Administration",
      description: "Class scheduling, subject management, and curriculum planning"
    },
    {
      icon: Calendar,
      title: "Attendance Tracking",
      description: "Real-time attendance marking and comprehensive reports"
    },
    {
      icon: DollarSign,
      title: "Fee Management",
      description: "Fee structures, payment tracking, and automated receipts"
    },
    {
      icon: GraduationCap,
      title: "Staff Management",
      description: "Teacher profiles, department allocation, and role management"
    },
    {
      icon: BarChart3,
      title: "Analytics & Reports",
      description: "Insightful data visualization and performance tracking"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-10 w-10 rounded-lg bg-primary flex items-center justify-center">
              <GraduationCap className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">Evolve School Manager</span>
          </div>
          <Button onClick={() => navigate("/auth")} className="bg-primary hover:bg-primary/90">
            Sign In
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Modern School Management for Kenyan Institutions
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Streamline your school administration with our comprehensive management system. 
            Built for efficiency, designed for excellence.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" onClick={() => navigate("/auth")} className="bg-primary hover:bg-primary/90 shadow-lg">
              Get Started
              <GraduationCap className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-2">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Everything You Need to Manage Your School</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow bg-card border-border">
                <feature.icon className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your School?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join hundreds of Kenyan schools already using Evolve School Manager
          </p>
          <Button size="lg" onClick={() => navigate("/auth")} className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg">
            Start Free Trial
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8 px-4 bg-card">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>© 2024 Evolve School Manager. Built for Kenyan Educational Institutions.</p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
