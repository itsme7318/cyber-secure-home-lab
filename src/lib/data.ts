
// Simulated data for the SIEM application

// Dashboard metrics
export const dashboardMetrics = {
  totalEvents: 26439,
  totalAlerts: 175,
  criticalAlerts: 24,
  highAlerts: 63,
  mediumAlerts: 88,
  resolvedAlerts: 142,
  threatScore: 76,
  systemHealth: 92,
  topAttackedSystems: [
    { name: "Web Server", count: 437 },
    { name: "Email Gateway", count: 312 },
    { name: "Database Server", count: 289 },
    { name: "Domain Controller", count: 187 },
    { name: "File Server", count: 143 }
  ],
  topAttackTypes: [
    { name: "Brute Force", count: 583 },
    { name: "SQL Injection", count: 421 },
    { name: "XSS", count: 376 },
    { name: "Phishing", count: 298 },
    { name: "Malware", count: 264 }
  ]
};

// Time series data for charts
export const eventTimeSeriesData = [
  { time: "00:00", count: 324 },
  { time: "01:00", count: 286 },
  { time: "02:00", count: 253 },
  { time: "03:00", count: 211 },
  { time: "04:00", count: 187 },
  { time: "05:00", count: 163 },
  { time: "06:00", count: 198 },
  { time: "07:00", count: 276 },
  { time: "08:00", count: 432 },
  { time: "09:00", count: 589 },
  { time: "10:00", count: 703 },
  { time: "11:00", count: 842 },
  { time: "12:00", count: 976 },
  { time: "13:00", count: 1053 },
  { time: "14:00", count: 1147 },
  { time: "15:00", count: 1092 },
  { time: "16:00", count: 986 },
  { time: "17:00", count: 873 },
  { time: "18:00", count: 742 },
  { time: "19:00", count: 657 },
  { time: "20:00", count: 543 },
  { time: "21:00", count: 487 },
  { time: "22:00", count: 416 },
  { time: "23:00", count: 378 }
];

export const alertSeverityDistribution = [
  { name: "Critical", value: 24, color: "#FF3A33" },
  { name: "High", value: 63, color: "#FF6B33" },
  { name: "Medium", value: 88, color: "#FFCC33" },
  { name: "Low", value: 106, color: "#33CCFF" },
  { name: "Info", value: 152, color: "#33FF99" }
];

// Sample security logs
export const securityLogs = [
  {
    id: "log-001",
    timestamp: "2023-04-19 08:23:47",
    source: "Firewall",
    sourceIp: "192.168.1.5",
    destinationIp: "203.0.113.42",
    action: "BLOCK",
    protocol: "TCP",
    port: 22,
    user: "system",
    message: "Attempted SSH connection blocked from external source"
  },
  {
    id: "log-002",
    timestamp: "2023-04-19 08:25:32",
    source: "IDS",
    sourceIp: "203.0.113.17",
    destinationIp: "192.168.1.100",
    action: "ALERT",
    protocol: "TCP",
    port: 80,
    user: "anonymous",
    message: "Possible SQL injection attempt detected"
  },
  {
    id: "log-003",
    timestamp: "2023-04-19 08:37:14",
    source: "Authentication",
    sourceIp: "192.168.1.57",
    destinationIp: "192.168.1.10",
    action: "FAILURE",
    protocol: "LDAP",
    port: 389,
    user: "admin",
    message: "Multiple failed login attempts for admin user"
  },
  {
    id: "log-004",
    timestamp: "2023-04-19 08:42:09",
    source: "Endpoint",
    sourceIp: "192.168.1.201",
    destinationIp: "198.51.100.23",
    action: "ALERT",
    protocol: "HTTP",
    port: 443,
    user: "jsmith",
    message: "Suspicious outbound connection to known malicious host"
  },
  {
    id: "log-005",
    timestamp: "2023-04-19 08:55:37",
    source: "WAF",
    sourceIp: "203.0.113.88",
    destinationIp: "192.168.1.80",
    action: "BLOCK",
    protocol: "HTTP",
    port: 80,
    user: "anonymous",
    message: "XSS attempt blocked in web application"
  }
];

// Sample alerts
export const securityAlerts = [
  {
    id: "alert-001",
    timestamp: "2023-04-19 08:42:09",
    name: "Suspicious Outbound Connection",
    severity: "Critical",
    source: "Network Monitor",
    sourceIp: "192.168.1.201",
    destinationIp: "198.51.100.23",
    status: "Open",
    assignedTo: "Unassigned",
    description: "Endpoint initiated connection to known command & control server"
  },
  {
    id: "alert-002",
    timestamp: "2023-04-19 08:25:32",
    name: "SQL Injection Attempt",
    severity: "High",
    source: "WAF",
    sourceIp: "203.0.113.17",
    destinationIp: "192.168.1.100",
    status: "Investigating",
    assignedTo: "Alice Chen",
    description: "SQL injection pattern detected in web application input"
  },
  {
    id: "alert-003",
    timestamp: "2023-04-19 08:37:14",
    name: "Brute Force Authentication",
    severity: "Medium",
    source: "Directory Service",
    sourceIp: "192.168.1.57",
    destinationIp: "192.168.1.10",
    status: "Resolved",
    assignedTo: "Marcus Johnson",
    description: "Multiple failed login attempts for privileged account"
  },
  {
    id: "alert-004",
    timestamp: "2023-04-19 07:18:22",
    name: "Malware Detection",
    severity: "Critical",
    source: "Endpoint Protection",
    sourceIp: "192.168.1.143",
    destinationIp: "N/A",
    status: "Mitigated",
    assignedTo: "Security Team",
    description: "Ransomware detected and quarantined on user workstation"
  },
  {
    id: "alert-005",
    timestamp: "2023-04-19 08:12:57",
    name: "Data Exfiltration Attempt",
    severity: "High",
    source: "DLP",
    sourceIp: "192.168.1.87",
    destinationIp: "203.0.113.75",
    status: "Open",
    assignedTo: "Priya Singh",
    description: "Large volume of data transfer to external destination flagged as suspicious"
  }
];

// Threat Intelligence data
export const threatIntelligence = [
  {
    id: "ioc-001",
    type: "IP",
    value: "203.0.113.42",
    source: "AlienVault OTX",
    confidence: "High",
    tags: ["C2", "Botnet", "Malware"],
    firstSeen: "2023-03-15",
    lastSeen: "2023-04-18",
    description: "Associated with Emotet botnet command and control"
  },
  {
    id: "ioc-002",
    type: "Domain",
    value: "malicious-payload.com",
    source: "VirusTotal",
    confidence: "High",
    tags: ["Phishing", "Malware"],
    firstSeen: "2023-04-01",
    lastSeen: "2023-04-17",
    description: "Phishing domain hosting malicious payloads"
  },
  {
    id: "ioc-003",
    type: "Hash",
    value: "a94bf485d559494873e8feed5fcef0331eb4e2ee92794903d038ac8b391838fb",
    source: "MISP",
    confidence: "Medium",
    tags: ["Ransomware", "BlackCat"],
    firstSeen: "2023-03-28",
    lastSeen: "2023-04-12",
    description: "BlackCat/ALPHV ransomware variant"
  },
  {
    id: "ioc-004",
    type: "URL",
    value: "https://legitimate-looking-site.com/download/invoice.pdf",
    source: "PhishTank",
    confidence: "High",
    tags: ["Phishing", "Credential Theft"],
    firstSeen: "2023-04-10",
    lastSeen: "2023-04-19",
    description: "Phishing URL mimicking invoice download"
  },
  {
    id: "ioc-005",
    type: "Email",
    value: "payment-notification@legitimate-looking-domain.net",
    source: "SpamHaus",
    confidence: "Medium",
    tags: ["Spam", "Phishing"],
    firstSeen: "2023-04-05",
    lastSeen: "2023-04-15",
    description: "Sender email used in phishing campaign"
  }
];

// Educational scenarios
export const trainingScenarios = [
  {
    id: "scenario-001",
    title: "Web Application Attack",
    difficulty: "Beginner",
    category: "Web Security",
    duration: "45 min",
    description: "Learn to identify and respond to common web application attacks including SQL injection and XSS"
  },
  {
    id: "scenario-002",
    title: "Ransomware Response",
    difficulty: "Intermediate",
    category: "Incident Response",
    duration: "60 min",
    description: "Practice detecting and responding to a ransomware attack across enterprise systems"
  },
  {
    id: "scenario-003",
    title: "APT Detection",
    difficulty: "Advanced",
    category: "Threat Hunting",
    duration: "90 min",
    description: "Hunt for indicators of an advanced persistent threat actor in system logs and network traffic"
  },
  {
    id: "scenario-004",
    title: "Phishing Campaign Analysis",
    difficulty: "Intermediate",
    category: "Email Security",
    duration: "45 min",
    description: "Analyze a phishing campaign, identify affected users, and implement countermeasures"
  },
  {
    id: "scenario-005",
    title: "Network Lateral Movement",
    difficulty: "Advanced",
    category: "Network Security",
    duration: "75 min",
    description: "Detect and analyze an attacker's lateral movement techniques through the network"
  }
];

// SIEM Learning modules
export const learningModules = [
  {
    id: "module-001",
    title: "SIEM Fundamentals",
    level: "Beginner",
    topics: ["Log Collection", "Normalization", "Correlation", "Alerting"],
    duration: "2 hours",
    description: "Introduction to core SIEM concepts and functionality"
  },
  {
    id: "module-002",
    title: "Security Log Analysis",
    level: "Intermediate",
    topics: ["Log Types", "Analysis Techniques", "Pattern Recognition"],
    duration: "3 hours",
    description: "Techniques for effective security log analysis and investigation"
  },
  {
    id: "module-003",
    title: "Threat Hunting with SIEM",
    level: "Advanced",
    topics: ["IOC Identification", "Behavioral Analysis", "Threat Intelligence"],
    duration: "4 hours",
    description: "Advanced techniques for proactive threat hunting using SIEM data"
  },
  {
    id: "module-004",
    title: "Incident Response Workflow",
    level: "Intermediate",
    topics: ["Alert Triage", "Investigation", "Containment", "Remediation"],
    duration: "3 hours",
    description: "End-to-end incident response workflow using SIEM tools"
  },
  {
    id: "module-005",
    title: "SIEM Rule Creation",
    level: "Advanced",
    topics: ["Detection Logic", "Correlation Rules", "Tuning", "Testing"],
    duration: "4 hours",
    description: "Developing effective detection rules for modern threats"
  }
];
