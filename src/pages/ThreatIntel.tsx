
import MainLayout from "@/components/layout/MainLayout";
import { threatIntelligence } from "@/lib/data";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Globe, Search, RefreshCw, AlertTriangle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function ThreatIntel() {
  return (
    <MainLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Threat Intelligence</h1>
          <p className="text-muted-foreground">
            Access and manage threat intelligence to enhance detection capabilities.
          </p>
        </div>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Indicators of Compromise</CardTitle>
                <CardDescription>Known malicious indicators from threat feeds</CardDescription>
              </div>
              <Button>
                <RefreshCw className="mr-2 h-4 w-4" />
                Update Feeds
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="flex-1 relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search IOCs by value or description..."
                  className="pl-8"
                />
              </div>
              <div className="flex gap-2">
                <Button variant="outline">Filter</Button>
                <Button variant="outline">Export</Button>
              </div>
            </div>

            <Tabs defaultValue="all">
              <TabsList className="mb-4">
                <TabsTrigger value="all">All IOCs</TabsTrigger>
                <TabsTrigger value="ip">IP Addresses</TabsTrigger>
                <TabsTrigger value="domain">Domains</TabsTrigger>
                <TabsTrigger value="hash">File Hashes</TabsTrigger>
                <TabsTrigger value="url">URLs</TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="m-0">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="px-4 py-3 text-left font-medium">Type</th>
                        <th className="px-4 py-3 text-left font-medium">Value</th>
                        <th className="px-4 py-3 text-left font-medium">Tags</th>
                        <th className="px-4 py-3 text-left font-medium">Confidence</th>
                        <th className="px-4 py-3 text-left font-medium">Source</th>
                        <th className="px-4 py-3 text-left font-medium">Last Seen</th>
                        <th className="px-4 py-3 text-right font-medium">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {threatIntelligence.map((ioc) => (
                        <tr key={ioc.id} className="border-b">
                          <td className="px-4 py-3">
                            <Badge variant="outline">{ioc.type}</Badge>
                          </td>
                          <td className="px-4 py-3 font-mono text-xs max-w-xs truncate">
                            {ioc.value}
                          </td>
                          <td className="px-4 py-3">
                            <div className="flex flex-wrap gap-1">
                              {ioc.tags.map((tag, index) => (
                                <Badge key={index} variant="secondary" className="text-xs">
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                          </td>
                          <td className="px-4 py-3">
                            <Badge
                              className={
                                ioc.confidence === "High"
                                  ? "bg-cyber-alert-critical"
                                  : ioc.confidence === "Medium"
                                  ? "bg-cyber-alert-medium"
                                  : "bg-cyber-alert-low"
                              }
                            >
                              {ioc.confidence}
                            </Badge>
                          </td>
                          <td className="px-4 py-3">{ioc.source}</td>
                          <td className="px-4 py-3">{ioc.lastSeen}</td>
                          <td className="px-4 py-3 text-right">
                            <Button variant="ghost" size="sm">View</Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </TabsContent>
              
              <TabsContent value="ip" className="m-0">
                <div className="p-4 text-center text-muted-foreground">
                  Use the tabs to filter IOCs by type
                </div>
              </TabsContent>
              
              <TabsContent value="domain" className="m-0">
                <div className="p-4 text-center text-muted-foreground">
                  Use the tabs to filter IOCs by type
                </div>
              </TabsContent>
              
              <TabsContent value="hash" className="m-0">
                <div className="p-4 text-center text-muted-foreground">
                  Use the tabs to filter IOCs by type
                </div>
              </TabsContent>
              
              <TabsContent value="url" className="m-0">
                <div className="p-4 text-center text-muted-foreground">
                  Use the tabs to filter IOCs by type
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="h-5 w-5" />
                Threat Feed Sources
              </CardTitle>
              <CardDescription>Connected threat intelligence sources</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-2 border rounded-md">
                  <div className="flex items-center gap-4">
                    <div className="bg-primary/10 w-10 h-10 rounded-full flex items-center justify-center">
                      <AlertTriangle className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">AlienVault OTX</h4>
                      <p className="text-xs text-muted-foreground">Last updated: 2 hours ago</p>
                    </div>
                  </div>
                  <Badge variant="outline" className="bg-green-500/10 text-green-500 border-green-500/20">Active</Badge>
                </div>

                <div className="flex items-center justify-between p-2 border rounded-md">
                  <div className="flex items-center gap-4">
                    <div className="bg-primary/10 w-10 h-10 rounded-full flex items-center justify-center">
                      <AlertTriangle className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">MISP</h4>
                      <p className="text-xs text-muted-foreground">Last updated: 1 day ago</p>
                    </div>
                  </div>
                  <Badge variant="outline" className="bg-green-500/10 text-green-500 border-green-500/20">Active</Badge>
                </div>

                <div className="flex items-center justify-between p-2 border rounded-md">
                  <div className="flex items-center gap-4">
                    <div className="bg-primary/10 w-10 h-10 rounded-full flex items-center justify-center">
                      <AlertTriangle className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">VirusTotal</h4>
                      <p className="text-xs text-muted-foreground">Last updated: 6 hours ago</p>
                    </div>
                  </div>
                  <Badge variant="outline" className="bg-green-500/10 text-green-500 border-green-500/20">Active</Badge>
                </div>

                <div className="flex items-center justify-between p-2 border rounded-md">
                  <div className="flex items-center gap-4">
                    <div className="bg-primary/10 w-10 h-10 rounded-full flex items-center justify-center">
                      <AlertTriangle className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">PhishTank</h4>
                      <p className="text-xs text-muted-foreground">Last updated: 12 hours ago</p>
                    </div>
                  </div>
                  <Badge variant="outline" className="bg-green-500/10 text-green-500 border-green-500/20">Active</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Using Threat Intelligence</CardTitle>
              <CardDescription>Best practices for implementing threat intel</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-1">1. Prioritize Relevance</h4>
                  <p className="text-sm text-muted-foreground">
                    Focus on threat intelligence that's relevant to your industry and technical environment.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-1">2. Establish Context</h4>
                  <p className="text-sm text-muted-foreground">
                    Add context to raw indicators to understand the threat actor's motivations and capabilities.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-1">3. Implement Actionable Intelligence</h4>
                  <p className="text-sm text-muted-foreground">
                    Convert intelligence into detection rules, blocklists, or hunting queries.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-1">4. Consider False Positives</h4>
                  <p className="text-sm text-muted-foreground">
                    Balance detection rates with acceptable false positive levels based on confidence scores.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-1">5. Stay Current</h4>
                  <p className="text-sm text-muted-foreground">
                    Regularly update and age out older indicators that are no longer valuable.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
}
