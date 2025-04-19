
import MainLayout from "@/components/layout/MainLayout";

export default function Incidents() {
  return (
    <MainLayout>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold tracking-tight">Security Incidents</h1>
        <p className="text-muted-foreground">Track and manage security incidents.</p>
      </div>
    </MainLayout>
  );
}
