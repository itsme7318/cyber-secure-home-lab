
import MainLayout from "@/components/layout/MainLayout";
import { securityLogs } from "@/lib/data";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Download, Filter, Search } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export default function LogAnalysis() {
  return (
    <MainLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Log Analysis</h1>
          <p className="text-muted-foreground">
            Review, search, and analyze security logs from all sources.
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Security Log Explorer</CardTitle>
            <CardDescription>Search and filter security logs across all systems</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="flex-1 relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search logs by keyword, IP, user..."
                  className="pl-8"
                />
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="icon">
                  <Filter className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <Download className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="px-4 py-3 text-left font-medium">Timestamp</th>
                    <th className="px-4 py-3 text-left font-medium">Source</th>
                    <th className="px-4 py-3 text-left font-medium">Source IP</th>
                    <th className="px-4 py-3 text-left font-medium">Destination IP</th>
                    <th className="px-4 py-3 text-left font-medium">Action</th>
                    <th className="px-4 py-3 text-left font-medium">Message</th>
                  </tr>
                </thead>
                <tbody>
                  {securityLogs.map((log) => (
                    <tr key={log.id} className="border-b">
                      <td className="px-4 py-3 whitespace-nowrap">{log.timestamp}</td>
                      <td className="px-4 py-3">{log.source}</td>
                      <td className="px-4 py-3 font-mono text-xs">{log.sourceIp}</td>
                      <td className="px-4 py-3 font-mono text-xs">{log.destinationIp}</td>
                      <td className="px-4 py-3">
                        <Badge
                          className={cn(
                            log.action === "BLOCK" && "bg-destructive",
                            log.action === "ALERT" && "bg-cyber-alert-high",
                            log.action === "FAILURE" && "bg-cyber-alert-medium"
                          )}
                        >
                          {log.action}
                        </Badge>
                      </td>
                      <td className="px-4 py-3 max-w-md truncate">{log.message}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="mt-4 flex items-center justify-end gap-2">
              <Button variant="outline" size="sm">Previous</Button>
              <Button variant="outline" size="sm">Next</Button>
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-4 grid-cols-1 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Query Builder</CardTitle>
              <CardDescription>Build complex queries to search across logs</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Quick Query Templates</label>
                  <div className="flex flex-wrap gap-2">
                    <Button variant="outline" size="sm">Failed Logins</Button>
                    <Button variant="outline" size="sm">Blocked Traffic</Button>
                    <Button variant="outline" size="sm">Malware Detections</Button>
                    <Button variant="outline" size="sm">Admin Actions</Button>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Query Editor</label>
                  <div className="relative">
                    <div className="font-mono text-sm bg-muted p-3 rounded-md border min-h-32">
                      <span className="text-blue-500">SELECT</span> * <br />
                      <span className="text-blue-500">FROM</span> security_logs <br />
                      <span className="text-blue-500">WHERE</span> action = <span className="text-green-500">'BLOCK'</span> <br />
                      <span className="text-blue-500">AND</span> timestamp &gt; <span className="text-green-500">'2023-04-18'</span> <br />
                      <span className="text-blue-500">ORDER BY</span> timestamp <span className="text-blue-500">DESC</span>;
                    </div>
                  </div>
                </div>

                <div className="flex justify-end">
                  <Button>Run Query</Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Log Analysis Tips</CardTitle>
              <CardDescription>Best practices for effective log analysis</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-1">Establish a Baseline</h4>
                <p className="text-sm text-muted-foreground">
                  Understand what "normal" looks like for your environment before hunting for anomalies.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-1">Use Contextual Information</h4>
                <p className="text-sm text-muted-foreground">
                  Correlate logs with threat intelligence and asset information for better insights.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-1">Focus on Critical Assets</h4>
                <p className="text-sm text-muted-foreground">
                  Prioritize analysis of logs from critical systems and sensitive data repositories.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-1">Look for Patterns</h4>
                <p className="text-sm text-muted-foreground">
                  Identify sequences of events that might indicate sophisticated attack chains.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-1">Document Findings</h4>
                <p className="text-sm text-muted-foreground">
                  Keep detailed notes of your analysis process and findings for future reference.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
}
