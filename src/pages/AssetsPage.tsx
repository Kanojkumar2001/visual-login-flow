
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AssetsPage = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-white mb-6">Assets</h1>
      
      <Card className="bg-dark-card text-white border-gray-700">
        <CardHeader>
          <CardTitle>Your Assets</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-400">
            This is the assets page. Here you can manage your owned vehicles and other assets.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default AssetsPage;
