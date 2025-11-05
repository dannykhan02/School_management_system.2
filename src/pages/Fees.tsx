import Layout from "@/components/Layout";
import { Card } from "@/components/ui/card";

const Fees = () => {
  return (
    <Layout>
      <div className="p-6 lg:p-8">
        <h1 className="text-3xl font-bold mb-2">Fee Management</h1>
        <p className="text-muted-foreground mb-6">Manage fee structures and payments</p>
        <Card className="p-12 text-center">
          <p className="text-muted-foreground">Fee management features coming soon...</p>
        </Card>
      </div>
    </Layout>
  );
};

export default Fees;
