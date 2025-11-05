import Layout from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { Users, GraduationCap, DollarSign, Calendar } from "lucide-react";

const Dashboard = () => {
  const stats = [
    { title: "Total Students", value: "1,248", icon: Users, color: "text-primary" },
    { title: "Total Staff", value: "84", icon: GraduationCap, color: "text-accent" },
    { title: "Revenue (This Term)", value: "KES 4.2M", icon: DollarSign, color: "text-green-600" },
    { title: "Attendance Today", value: "94.5%", icon: Calendar, color: "text-blue-600" },
  ];

  const recentActivities = [
    { action: "New student admission", student: "Jane Wanjiru", time: "2 hours ago" },
    { action: "Fee payment received", student: "John Kamau", time: "3 hours ago" },
    { action: "Attendance marked", student: "Form 3A", time: "5 hours ago" },
    { action: "Staff member added", student: "Mr. Omondi", time: "1 day ago" },
  ];

  return (
    <Layout>
      <div className="p-6 lg:p-8 space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
          <p className="text-muted-foreground">Welcome back! Here's your school overview</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <stat.icon className={`h-10 w-10 ${stat.color}`} />
              </div>
              <h3 className="text-2xl font-bold mb-1">{stat.value}</h3>
              <p className="text-sm text-muted-foreground">{stat.title}</p>
            </Card>
          ))}
        </div>

        {/* Recent Activities */}
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Activities</h2>
          <div className="space-y-4">
            {recentActivities.map((activity, index) => (
              <div key={index} className="flex items-center justify-between py-3 border-b last:border-0">
                <div>
                  <p className="font-medium">{activity.action}</p>
                  <p className="text-sm text-muted-foreground">{activity.student}</p>
                </div>
                <span className="text-sm text-muted-foreground">{activity.time}</span>
              </div>
            ))}
          </div>
        </Card>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-6 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
            <h3 className="font-semibold mb-2">Quick Admission</h3>
            <p className="text-sm text-muted-foreground mb-4">Register a new student quickly</p>
            <button className="text-primary font-medium hover:underline">Add Student →</button>
          </Card>
          
          <Card className="p-6 bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20">
            <h3 className="font-semibold mb-2">Mark Attendance</h3>
            <p className="text-sm text-muted-foreground mb-4">Record today's attendance</p>
            <button className="text-accent-foreground font-medium hover:underline">Take Attendance →</button>
          </Card>
          
          <Card className="p-6 bg-gradient-to-br from-green-100 to-green-50 border-green-200">
            <h3 className="font-semibold mb-2">Record Payment</h3>
            <p className="text-sm text-muted-foreground mb-4">Process fee payments</p>
            <button className="text-green-700 font-medium hover:underline">Add Payment →</button>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
