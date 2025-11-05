import Layout from "@/components/Layout";
import { Card } from "@/components/ui/card";

const Classes = () => {
  return (
    <Layout>
      <div className="p-6 lg:p-8">
        <h1 className="text-3xl font-bold mb-2">Classes & Subjects</h1>
        <p className="text-muted-foreground mb-6">Manage classes, streams, and subject allocation</p>
        <Card className="p-12 text-center">
          <p className="text-muted-foreground">Class management features coming soon...</p>
        </Card>
      </div>
    </Layout>
  );
};

export default Classes;
