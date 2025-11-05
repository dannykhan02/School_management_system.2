import Layout from "@/components/Layout";
import { Card } from "@/components/ui/card";

const Settings = () => {
  return (
    <Layout>
      <div className="p-6 lg:p-8">
        <h1 className="text-3xl font-bold mb-2">Settings</h1>
        <p className="text-muted-foreground mb-6">Configure school settings and preferences</p>
        <Card className="p-12 text-center">
          <p className="text-muted-foreground">Settings features coming soon...</p>
        </Card>
      </div>
    </Layout>
  );
};

export default Settings;
