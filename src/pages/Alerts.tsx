
import MainLayout from "@/components/layout/MainLayout";
import { securityAlerts } from "@/lib/data";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Filter, Search, Bell, ShieldAlert } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Alerts() {
  return (
    <MainLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Security Alerts</h1>
          <p className="text-muted-foreground">
            Monitor and respond to security alerts across your systems.
          </p>
        </div>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Alert Management</CardTitle>
                <CardDescription>Review and respond to security alerts</CardDescription>
              </div>
              <div className="flex gap-2">
                <Button>
                  <ShieldAlert className="mr-2 h-4 w-4" />
                  Create Alert Rule
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="all">
              <div className="flex justify-between items-center mb-4">
                <TabsList>
                  <TabsTrigger value="all">All Alerts</TabsTrigger>
                  <TabsTrigger value="open">Open</TabsTrigger>
                  <TabsTrigger value="investigating">Investigating</TabsTrigger>
                  <TabsTrigger value="resolved">Resolved</TabsTrigger>
                </TabsList>
                
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search alerts..."
                    className="pl-8 w-60"
                  />
                </div>
              </div>

              <TabsContent value="all" className="m-0">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="px-4 py-3 text-left font-medium">Alert</th>
                        <th className="px-4 py-3 text-left font-medium">Severity</th>
                        <th className="px-4 py-3 text-left font-medium">Source</th>
                        <th className="px-4 py-3 text-left font-medium">Time</th>
                        <th className="px-4 py-3 text-left font-medium">Status</th>
                        <th className="px-4 py-3 text-left font-medium">Assigned To</th>
                        <th className="px-4 py-3 text-right font-medium">Actions</th>
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
                          <td className="px-4 py-3 whitespace-nowrap">{alert.timestamp}</td>
                          <td className="px-4 py-3">
                            <Badge variant="outline">{alert.status}</Badge>
                          </td>
                          <td className="px-4 py-3">{alert.assignedTo}</td>
                          <td className="px-4 py-3 text-right">
                            <Button variant="ghost" size="sm">View</Button>
                            <Button variant="ghost" size="sm">Assign</Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </TabsContent>
              <TabsContent value="open" className="m-0">
                <div className="p-4 text-center text-muted-foreground">
                  Use the tabs to filter alerts by their status
                </div>
              </TabsContent>
              <TabsContent value="investigating" className="m-0">
                <div className="p-4 text-center text-muted-foreground">
                  Use the tabs to filter alerts by their status
                </div>
              </TabsContent>
              <TabsContent value="resolved" className="m-0">
                <div className="p-4 text-center text-muted-foreground">
                  Use the tabs to filter alerts by their status
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <div className="grid gap-4 grid-cols-1 lg:grid-cols-3">
          <Card className="col-span-2">
            <CardHeader>
              <CardTitle>Alert Workflow</CardTitle>
              <CardDescription>Standard operating procedure for alert handling</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="border rounded-md p-4 flex-1">
                  <div className="text-center mb-2">
                    <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white mb-2">1</div>
                    <h3 className="font-medium">Triage</h3>
                  </div>
                  <ul className="text-sm space-y-2">
                    <li>• Assess severity and priority</li>
                    <li>• Check for false positives</li>
                    <li>• Classify alert type</li>
                  </ul>
                </div>
                <div className="border rounded-md p-4 flex-1">
                  <div className="text-center mb-2">
                    <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white mb-2">2</div>
                    <h3 className="font-medium">Investigation</h3>
                  </div>
                  <ul className="text-sm space-y-2">
                    <li>• Gather related evidence</li>
                    <li>• Analyze affected systems</li>
                    <li>• Document findings</li>
                  </ul>
                </div>
                <div className="border rounded-md p-4 flex-1">
                  <div className="text-center mb-2">
                    <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white mb-2">3</div>
                    <h3 className="font-medium">Response</h3>
                  </div>
                  <ul className="text-sm space-y-2">
                    <li>• Contain security incident</li>
                    <li>• Implement remediation</li>
                    <li>• Document resolution</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Alert Statistics</CardTitle>
              <CardDescription>Alert metrics for this month</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Total Alerts</span>
                    <span className="font-medium">175</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="bg-primary h-full" style={{ width: "100%" }}></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Critical Alerts</span>
                    <span className="font-medium">24 (14%)</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="bg-cyber-alert-critical h-full" style={{ width: "14%" }}></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">High Severity</span>
                    <span className="font-medium">63 (36%)</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="bg-cyber-alert-high h-full" style={{ width: "36%" }}></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Medium Severity</span>
                    <span className="font-medium">88 (50%)</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="bg-cyber-alert-medium h-full" style={{ width: "50%" }}></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Resolution Rate</span>
                    <span className="font-medium">81%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="bg-cyber-alert-info h-full" style={{ width: "81%" }}></div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
}
