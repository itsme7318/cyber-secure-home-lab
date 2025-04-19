
import React, { useState } from "react";
import MainLayout from "@/components/layout/MainLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { AlertCircle, Shield, Save, Terminal } from "lucide-react";
import { toast } from "sonner";

export default function Settings() {
  // Exploit simulation settings
  const [enableSimulations, setEnableSimulations] = useState(true);
  const [simulationFrequency, setSimulationFrequency] = useState("medium");
  const [recordLogs, setRecordLogs] = useState(true);
  const [alertMode, setAlertMode] = useState("real-time");
  
  // Lab environment settings
  const [sandboxMode, setSandboxMode] = useState(true);
  const [collegeNetworkMode, setCollegeNetworkMode] = useState(false);
  
  const saveSettings = () => {
    toast.success("Settings saved successfully");
  };
  
  return (
    <MainLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">SIEM Settings</h1>
          <p className="text-muted-foreground">Configure your SIEM environment.</p>
        </div>
        
        <Tabs defaultValue="general" className="space-y-4">
          <TabsList>
            <TabsTrigger value="general">General</TabsTrigger>
            <TabsTrigger value="exploits">Exploit Simulations</TabsTrigger>
            <TabsTrigger value="environment">Environment</TabsTrigger>
          </TabsList>
          
          <TabsContent value="general" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>General Settings</CardTitle>
                <CardDescription>
                  Configure basic settings for your SIEM home lab
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="system-name">System Name</Label>
                  <Input id="system-name" defaultValue="SIEM Home Lab" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="data-retention">Data Retention Period (days)</Label>
                  <Input id="data-retention" type="number" defaultValue="30" />
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="enable-notifications" defaultChecked />
                  <Label htmlFor="enable-notifications">Enable Notifications</Label>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="exploits" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield size={18} />
                  Exploit Simulation Settings
                </CardTitle>
                <CardDescription>
                  Configure how exploit simulations behave in your lab environment
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="enable-simulations">Enable Exploit Simulations</Label>
                    <p className="text-sm text-muted-foreground">
                      Allow the system to run scheduled exploit simulations
                    </p>
                  </div>
                  <Switch
                    id="enable-simulations"
                    checked={enableSimulations}
                    onCheckedChange={setEnableSimulations}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label>Simulation Frequency</Label>
                  <div className="flex gap-4">
                    <div className="flex items-center space-x-2">
                      <input
                        type="radio"
                        id="freq-low"
                        name="frequency"
                        value="low"
                        checked={simulationFrequency === "low"}
                        onChange={() => setSimulationFrequency("low")}
                        className="h-4 w-4"
                      />
                      <Label htmlFor="freq-low">Low</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input
                        type="radio"
                        id="freq-medium"
                        name="frequency"
                        value="medium"
                        checked={simulationFrequency === "medium"}
                        onChange={() => setSimulationFrequency("medium")}
                        className="h-4 w-4"
                      />
                      <Label htmlFor="freq-medium">Medium</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input
                        type="radio"
                        id="freq-high"
                        name="frequency"
                        value="high"
                        checked={simulationFrequency === "high"}
                        onChange={() => setSimulationFrequency("high")}
                        className="h-4 w-4"
                      />
                      <Label htmlFor="freq-high">High</Label>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="record-logs">Record Simulation Logs</Label>
                    <p className="text-sm text-muted-foreground">
                      Save detailed logs for each simulation run
                    </p>
                  </div>
                  <Switch
                    id="record-logs"
                    checked={recordLogs}
                    onCheckedChange={setRecordLogs}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label>Alert Mode</Label>
                  <div className="flex gap-4">
                    <div className="flex items-center space-x-2">
                      <input
                        type="radio"
                        id="alert-real-time"
                        name="alert-mode"
                        value="real-time"
                        checked={alertMode === "real-time"}
                        onChange={() => setAlertMode("real-time")}
                        className="h-4 w-4"
                      />
                      <Label htmlFor="alert-real-time">Real-time</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input
                        type="radio"
                        id="alert-delayed"
                        name="alert-mode"
                        value="delayed"
                        checked={alertMode === "delayed"}
                        onChange={() => setAlertMode("delayed")}
                        className="h-4 w-4"
                      />
                      <Label htmlFor="alert-delayed">Delayed</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input
                        type="radio"
                        id="alert-disabled"
                        name="alert-mode"
                        value="disabled"
                        checked={alertMode === "disabled"}
                        onChange={() => setAlertMode("disabled")}
                        className="h-4 w-4"
                      />
                      <Label htmlFor="alert-disabled">Disabled</Label>
                    </div>
                  </div>
                </div>
                
                <div className="pt-4">
                  <Button onClick={saveSettings} className="gap-2">
                    <Save size={16} />
                    Save Simulation Settings
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="environment" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Terminal size={18} />
                  Lab Environment Configuration
                </CardTitle>
                <CardDescription>
                  Configure how the lab environment behaves
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="sandbox-mode">Sandbox Mode</Label>
                    <p className="text-sm text-muted-foreground">
                      Run all operations in an isolated sandbox environment
                    </p>
                  </div>
                  <Switch
                    id="sandbox-mode"
                    checked={sandboxMode}
                    onCheckedChange={setSandboxMode}
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="college-network">College Network Mode</Label>
                    <p className="text-sm text-muted-foreground">
                      Simulate a college network environment
                    </p>
                  </div>
                  <Switch
                    id="college-network"
                    checked={collegeNetworkMode}
                    onCheckedChange={setCollegeNetworkMode}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="log-sources">Log Sources (IP addresses or hostnames)</Label>
                  <Input id="log-sources" defaultValue="192.168.1.0/24" />
                  <p className="text-xs text-muted-foreground">
                    Enter comma-separated values
                  </p>
                </div>
                
                <div className="pt-4 flex justify-between">
                  <Button variant="outline">Reset to Default</Button>
                  <Button onClick={saveSettings} className="gap-2">
                    <Save size={16} />
                    Save Environment Settings
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
}
