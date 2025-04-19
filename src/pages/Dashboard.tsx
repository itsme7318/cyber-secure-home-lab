
import { 
  AlertCircle, 
  BarChart3, 
  FileText, 
  Flame, 
  PieChartIcon, 
  Shield, 
  Terminal
} from "lucide-react";
import MainLayout from "@/components/layout/MainLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import StatCard from "@/components/dashboard/StatCard";
import { 
  dashboardMetrics, 
  eventTimeSeriesData, 
  alertSeverityDistribution, 
  securityAlerts 
} from "@/lib/data";
import { 
  Area, 
  AreaChart, 
  Bar, 
  BarChart, 
  CartesianGrid, 
  Cell, 
  Legend, 
  Pie, 
  PieChart, 
  ResponsiveContainer, 
  Tooltip, 
  XAxis, 
  YAxis 
} from "recharts";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

// Custom tooltip for charts
const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-popover p-3 border rounded-md shadow-md">
        <p className="text-sm text-popover-foreground">{`${label} : ${payload[0].value}`}</p>
      </div>
    );
  }
  return null;
};

export default function Dashboard() {
  return (
    <MainLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Security Dashboard</h1>
          <p className="text-muted-foreground">
            Real-time overview of your security posture and current threats.
          </p>
        </div>

        {/* Stats row */}
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <StatCard
            title="Security Events"
            value={dashboardMetrics.totalEvents.toLocaleString()}
            icon={<FileText />}
            trend={{ value: 12, isPositive: true }}
          />
          <StatCard
            title="Active Alerts"
            value={dashboardMetrics.totalAlerts.toLocaleString()}
            icon={<AlertCircle />}
            trend={{ value: 8, isPositive: false }}
          />
          <StatCard
            title="Critical Threats"
            value={dashboardMetrics.criticalAlerts}
            icon={<Flame />}
            trend={{ value: 23, isPositive: false }}
          />
          <StatCard
            title="Threat Score"
            value={`${dashboardMetrics.threatScore}/100`}
            icon={<Shield />}
            trend={{ value: 5, isPositive: true }}
          />
        </div>

        {/* Charts row */}
        <div className="grid gap-4 grid-cols-1 lg:grid-cols-2">
          {/* Events timeline chart */}
          <Card>
            <CardHeader>
              <CardTitle>Event Activity (24h)</CardTitle>
              <CardDescription>Security events captured across all systems</CardDescription>
            </CardHeader>
            <CardContent className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={eventTimeSeriesData}
                  margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
                >
                  <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                  <XAxis dataKey="time" />
                  <YAxis />
                  <Tooltip content={<CustomTooltip />} />
                  <Area
                    type="monotone"
                    dataKey="count"
                    stroke="hsl(var(--primary))"
                    fill="hsl(var(--primary) / 0.3)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Alert severity distribution */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <PieChartIcon className="h-5 w-5" />
                Alert Severity Distribution
              </CardTitle>
              <CardDescription>Breakdown of alerts by severity level</CardDescription>
            </CardHeader>
            <CardContent className="h-80 flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={alertSeverityDistribution}
                    cx="50%"
                    cy="50%"
                    innerRadius={80}
                    outerRadius={110}
                    paddingAngle={2}
                    dataKey="value"
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    labelLine={false}
                  >
                    {alertSeverityDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>
        
        {/* Top threats row */}
        <div className="grid gap-4 grid-cols-1 lg:grid-cols-2">
          {/* Top attacked systems */}
          <Card>
            <CardHeader>
              <CardTitle>Top Attacked Systems</CardTitle>
              <CardDescription>Systems with the most security events</CardDescription>
            </CardHeader>
            <CardContent className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={dashboardMetrics.topAttackedSystems}
                  layout="vertical"
                  margin={{ top: 10, right: 10, left: 30, bottom: 0 }}
                >
                  <CartesianGrid strokeDasharray="3 3" opacity={0.2} horizontal={false} />
                  <XAxis type="number" />
                  <YAxis type="category" dataKey="name" />
                  <Tooltip content={<CustomTooltip />} />
                  <Bar dataKey="count" fill="hsl(var(--primary))" radius={[0, 4, 4, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Top attack types */}
          <Card>
            <CardHeader>
              <CardTitle>Top Attack Types</CardTitle>
              <CardDescription>Most common attack techniques observed</CardDescription>
            </CardHeader>
            <CardContent className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={dashboardMetrics.topAttackTypes}
                  layout="vertical"
                  margin={{ top: 10, right: 10, left: 30, bottom: 0 }}
                >
                  <CartesianGrid strokeDasharray="3 3" opacity={0.2} horizontal={false} />
                  <XAxis type="number" />
                  <YAxis type="category" dataKey="name" />
                  <Tooltip content={<CustomTooltip />} />
                  <Bar dataKey="count" fill="#FF6B33" radius={[0, 4, 4, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Recent alerts table */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Security Alerts</CardTitle>
            <CardDescription>Latest alerts that require attention</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="px-4 py-3 text-left font-medium">Alert</th>
                    <th className="px-4 py-3 text-left font-medium">Severity</th>
                    <th className="px-4 py-3 text-left font-medium">Source</th>
                    <th className="px-4 py-3 text-left font-medium">Time</th>
                    <th className="px-4 py-3 text-left font-medium">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {securityAlerts.map((alert) => (
                    <tr key={alert.id} className="border-b">
                      <td className="px-4 py-3">{alert.name}</td>
                      <td className="px-4 py-3">
                        <Badge
                          className={cn(
                            alert.severity === "Critical" && "bg-cyber-alert-critical",
                            alert.severity === "High" && "bg-cyber-alert-high",
                            alert.severity === "Medium" && "bg-cyber-alert-medium"
                          )}
                        >
                          {alert.severity}
                        </Badge>
                      </td>
                      <td className="px-4 py-3">{alert.source}</td>
                      <td className="px-4 py-3">{alert.timestamp}</td>
                      <td className="px-4 py-3">
                        <Badge variant="outline">{alert.status}</Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Terminal card */}
        <Card className="bg-cyber-dark border-cyber-darkBlue">
          <CardHeader className="border-b border-cyber-darkBlue">
            <CardTitle className="text-cyber-terminal flex items-center gap-2">
              <Terminal size={18} /> SIEM Console
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0 font-mono text-sm">
            <div className="p-4 text-cyber-terminal">
              <div className="mb-1">$ siem-status</div>
              <div className="mb-3">
                <span className="text-green-400">✓</span> All collectors active<br />
                <span className="text-green-400">✓</span> Log ingestion operational<br />
                <span className="text-green-400">✓</span> Correlation engine running<br />
                <span className="text-green-400">✓</span> Alert system active<br />
                <span className="text-green-400">✓</span> Database storage: 42% utilized
              </div>
              <div className="mb-1">$ threat-intel-update</div>
              <div className="mb-3">
                <span className="text-blue-400">→</span> Fetching latest threat intelligence...<br />
                <span className="text-blue-400">→</span> Updating IOC database...<br />
                <span className="text-green-400">✓</span> Threat intelligence updated (1432 new indicators)
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
}
