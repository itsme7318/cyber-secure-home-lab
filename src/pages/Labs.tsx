
import MainLayout from "@/components/layout/MainLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { trainingScenarios, learningModules } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpenText, GraduationCap, Play, Shield, Terminal, Trophy } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Labs() {
  return (
    <MainLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Training Labs</h1>
          <p className="text-muted-foreground">
            Hands-on cybersecurity training with realistic scenarios and interactive labs.
          </p>
        </div>

        <Tabs defaultValue="scenarios">
          <TabsList className="grid w-full max-w-md grid-cols-2 mb-6">
            <TabsTrigger value="scenarios">Practice Scenarios</TabsTrigger>
            <TabsTrigger value="modules">Learning Modules</TabsTrigger>
          </TabsList>
          
          <TabsContent value="scenarios" className="mt-0">
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {trainingScenarios.map((scenario) => (
                <Card key={scenario.id} className="overflow-hidden">
                  <div className="h-2 bg-primary"></div>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle>{scenario.title}</CardTitle>
                      <Badge variant="outline">{scenario.difficulty}</Badge>
                    </div>
                    <CardDescription>{scenario.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between text-sm mb-4">
                      <div className="flex items-center">
                        <Shield className="mr-2 h-4 w-4 text-muted-foreground" />
                        <span className="text-muted-foreground">{scenario.category}</span>
                      </div>
                      <div className="flex items-center">
                        <Trophy className="mr-2 h-4 w-4 text-muted-foreground" />
                        <span className="text-muted-foreground">{scenario.duration}</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="text-xs font-medium">Skills you'll practice:</div>
                      <div className="flex flex-wrap gap-1">
                        {scenario.category === "Web Security" && (
                          <>
                            <Badge variant="secondary">SQL Injection</Badge>
                            <Badge variant="secondary">XSS Detection</Badge>
                            <Badge variant="secondary">WAF Tuning</Badge>
                          </>
                        )}
                        {scenario.category === "Incident Response" && (
                          <>
                            <Badge variant="secondary">Containment</Badge>
                            <Badge variant="secondary">Evidence Collection</Badge>
                            <Badge variant="secondary">Forensics</Badge>
                          </>
                        )}
                        {scenario.category === "Threat Hunting" && (
                          <>
                            <Badge variant="secondary">IOC Detection</Badge>
                            <Badge variant="secondary">MITRE ATT&CK</Badge>
                            <Badge variant="secondary">Pattern Analysis</Badge>
                          </>
                        )}
                        {scenario.category === "Email Security" && (
                          <>
                            <Badge variant="secondary">Header Analysis</Badge>
                            <Badge variant="secondary">Link Investigation</Badge>
                            <Badge variant="secondary">User Training</Badge>
                          </>
                        )}
                        {scenario.category === "Network Security" && (
                          <>
                            <Badge variant="secondary">Traffic Analysis</Badge>
                            <Badge variant="secondary">Segmentation</Badge>
                            <Badge variant="secondary">Protocol Review</Badge>
                          </>
                        )}
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">
                      <Play className="mr-2 h-4 w-4" /> Start Scenario
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="modules" className="mt-0">
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
              {learningModules.map((module) => (
                <Card key={module.id}>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle>{module.title}</CardTitle>
                      <Badge variant="outline">{module.level}</Badge>
                    </div>
                    <CardDescription>{module.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center mb-4">
                      <GraduationCap className="mr-2 h-4 w-4 text-muted-foreground" />
                      <span className="text-muted-foreground">{module.duration}</span>
                    </div>
                    <div className="space-y-3">
                      <h4 className="text-sm font-medium">Topics covered:</h4>
                      <div className="flex flex-wrap gap-1">
                        {module.topics.map((topic, index) => (
                          <Badge key={index} variant="secondary">{topic}</Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex gap-2">
                    <Button className="flex-1">
                      <BookOpenText className="mr-2 h-4 w-4" /> Start Learning
                    </Button>
                    <Button variant="outline" className="flex-1">
                      <Terminal className="mr-2 h-4 w-4" /> Practice Lab
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <Card>
          <CardHeader>
            <CardTitle>SIEM Learning Path</CardTitle>
            <CardDescription>Follow this path to master SIEM concepts and operations</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="relative">
              <div className="absolute top-0 bottom-0 left-6 border-l border-dashed border-muted-foreground"></div>
              
              <div className="relative pl-12 pb-10">
                <div className="absolute left-0 rounded-full bg-primary w-12 h-12 flex items-center justify-center text-primary-foreground">
                  1
                </div>
                <h3 className="text-lg font-semibold">Foundations</h3>
                <p className="text-muted-foreground mb-2">Start with the basics of security monitoring</p>
                <div className="flex gap-2">
                  <Badge variant="secondary">SIEM Fundamentals</Badge>
                  <Badge variant="secondary">Log Types</Badge>
                  <Badge variant="secondary">Security Basics</Badge>
                </div>
              </div>
              
              <div className="relative pl-12 pb-10">
                <div className="absolute left-0 rounded-full bg-muted w-12 h-12 flex items-center justify-center text-muted-foreground">
                  2
                </div>
                <h3 className="text-lg font-semibold">Analysis Techniques</h3>
                <p className="text-muted-foreground mb-2">Learn methods for effective log analysis</p>
                <div className="flex gap-2">
                  <Badge variant="secondary">Log Analysis</Badge>
                  <Badge variant="secondary">Correlation</Badge>
                  <Badge variant="secondary">Query Building</Badge>
                </div>
              </div>
              
              <div className="relative pl-12 pb-10">
                <div className="absolute left-0 rounded-full bg-muted w-12 h-12 flex items-center justify-center text-muted-foreground">
                  3
                </div>
                <h3 className="text-lg font-semibold">Incident Response</h3>
                <p className="text-muted-foreground mb-2">Develop skills to respond to security incidents</p>
                <div className="flex gap-2">
                  <Badge variant="secondary">Alert Triage</Badge>
                  <Badge variant="secondary">Investigation Process</Badge>
                  <Badge variant="secondary">Containment Strategies</Badge>
                </div>
              </div>
              
              <div className="relative pl-12">
                <div className="absolute left-0 rounded-full bg-muted w-12 h-12 flex items-center justify-center text-muted-foreground">
                  4
                </div>
                <h3 className="text-lg font-semibold">Advanced Topics</h3>
                <p className="text-muted-foreground mb-2">Master advanced SIEM capabilities</p>
                <div className="flex gap-2">
                  <Badge variant="secondary">Threat Hunting</Badge>
                  <Badge variant="secondary">Rule Creation</Badge>
                  <Badge variant="secondary">Threat Intelligence</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
}
