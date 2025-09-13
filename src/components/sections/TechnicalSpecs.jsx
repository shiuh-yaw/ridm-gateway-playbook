import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { 
  Code, 
  Database, 
  Shield, 
  Zap, 
  Globe, 
  ExternalLink,
  Download,
  Play
} from 'lucide-react';
import InteractiveDemo from '../InteractiveDemo';
import { useState } from 'react';

const TechnicalSpecs = () => {
  const [showDemo, setShowDemo] = useState(false);
  const architectureComponents = [
    {
      layer: 'API Gateway Layer',
      components: ['RESTful APIs', 'GraphQL Endpoints', 'WebSocket Connections', 'Rate Limiting'],
      description: 'Handles all external communications and API management'
    },
    {
      layer: 'Business Logic Layer',
      components: ['Payment Processing', 'Compliance Engine', 'Risk Management', 'Treasury Operations'],
      description: 'Core business logic and processing capabilities'
    },
    {
      layer: 'Blockchain Layer',
      components: ['Multi-chain Support', 'Smart Contracts', 'Transaction Monitoring', 'Wallet Management'],
      description: 'Blockchain interactions and cryptocurrency operations'
    },
    {
      layer: 'Data Layer',
      components: ['Transaction Database', 'User Management', 'Compliance Records', 'Analytics Store'],
      description: 'Data persistence and management systems'
    },
    {
      layer: 'Infrastructure Layer',
      components: ['Cloud Services', 'Load Balancers', 'Security Services', 'Monitoring Tools'],
      description: 'Underlying infrastructure and operational services'
    }
  ];

  const apiEndpoints = [
    {
      category: 'Payment Operations',
      endpoints: [
        { method: 'POST', path: '/api/v1/payments', description: 'Create new payment' },
        { method: 'GET', path: '/api/v1/payments/{id}', description: 'Get payment status' },
        { method: 'POST', path: '/api/v1/payments/{id}/cancel', description: 'Cancel payment' },
        { method: 'GET', path: '/api/v1/payments', description: 'List payments with filters' }
      ]
    },
    {
      category: 'Treasury Management',
      endpoints: [
        { method: 'GET', path: '/api/v1/treasury/balances', description: 'Get account balances' },
        { method: 'POST', path: '/api/v1/treasury/transfer', description: 'Internal transfer' },
        { method: 'GET', path: '/api/v1/treasury/yield', description: 'Get yield opportunities' },
        { method: 'POST', path: '/api/v1/treasury/optimize', description: 'Optimize liquidity' }
      ]
    },
    {
      category: 'DeFi Operations',
      endpoints: [
        { method: 'GET', path: '/api/v1/defi/protocols', description: 'List supported protocols' },
        { method: 'POST', path: '/api/v1/defi/stake', description: 'Stake in DeFi protocol' },
        { method: 'GET', path: '/api/v1/defi/positions', description: 'Get DeFi positions' },
        { method: 'POST', path: '/api/v1/defi/harvest', description: 'Harvest DeFi rewards' }
      ]
    },
    {
      category: 'Compliance & Reporting',
      endpoints: [
        { method: 'POST', path: '/api/v1/compliance/kyc', description: 'Submit KYC information' },
        { method: 'GET', path: '/api/v1/compliance/status', description: 'Get compliance status' },
        { method: 'GET', path: '/api/v1/reports/transactions', description: 'Generate transaction reports' },
        { method: 'GET', path: '/api/v1/reports/compliance', description: 'Generate compliance reports' }
      ]
    }
  ];

  const securityFeatures = [
    {
      category: 'Authentication & Authorization',
      features: [
        'OAuth 2.0 / OpenID Connect',
        'Multi-factor Authentication (MFA)',
        'Role-based Access Control (RBAC)',
        'API Key Management'
      ]
    },
    {
      category: 'Data Protection',
      features: [
        'End-to-end Encryption (AES-256)',
        'TLS 1.3 for Data in Transit',
        'Hardware Security Modules (HSM)',
        'Zero-knowledge Architecture'
      ]
    },
    {
      category: 'Operational Security',
      features: [
        'Real-time Fraud Detection',
        'Automated Threat Response',
        'Security Information and Event Management (SIEM)',
        'Regular Penetration Testing'
      ]
    },
    {
      category: 'Compliance & Auditing',
      features: [
        'Immutable Audit Logs',
        'Automated Compliance Monitoring',
        'Regulatory Reporting Automation',
        'Data Retention Policies'
      ]
    }
  ];

  const performanceMetrics = [
    { metric: 'API Response Time', target: '<100ms', current: '85ms avg' },
    { metric: 'Transaction Throughput', target: '10,000 TPS', current: '8,500 TPS' },
    { metric: 'System Uptime', target: '99.9%', current: '99.95%' },
    { metric: 'Settlement Speed', target: '<30 seconds', current: '18s avg' },
    { metric: 'Error Rate', target: '<0.1%', current: '0.05%' },
    { metric: 'Concurrent Users', target: '100,000', current: '75,000' }
  ];

  const getMethodColor = (method) => {
    switch (method) {
      case 'GET': return 'bg-green-500';
      case 'POST': return 'bg-blue-500';
      case 'PUT': return 'bg-yellow-500';
      case 'DELETE': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-foreground mb-4">Technical Specifications</h2>
        <p className="text-lg text-muted-foreground mb-6">
          Comprehensive technical architecture, API documentation, security framework, and performance specifications for the RidM Gateway platform.
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          <Badge variant="default">Microservices Architecture</Badge>
          <Badge variant="secondary">Multi-chain Support</Badge>
          <Badge variant="secondary">API-First Design</Badge>
          <Badge variant="secondary">Enterprise Security</Badge>
        </div>
      </div>

      {/* System Architecture */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Database className="h-5 w-5" />
            <span>System Architecture</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <p className="text-muted-foreground">
              The RidM Gateway employs a modern microservices architecture designed for scalability, resilience, and maintainability. 
              Each layer is independently deployable and scalable, ensuring optimal performance and reliability.
            </p>
            
            <div className="space-y-4">
              {architectureComponents.map((layer, index) => (
                <div key={index} className="border border-border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-semibold text-lg">{layer.layer}</h4>
                    <Badge variant="outline">{layer.components.length} Components</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{layer.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {layer.components.map((component, componentIndex) => (
                      <Badge key={componentIndex} variant="secondary">{component}</Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-accent rounded-lg">
              <h4 className="font-semibold mb-2">Architecture Principles</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="font-medium">Scalability:</span> Horizontal scaling with auto-scaling capabilities
                </div>
                <div>
                  <span className="font-medium">Resilience:</span> Circuit breakers, retry mechanisms, and graceful degradation
                </div>
                <div>
                  <span className="font-medium">Security:</span> Zero-trust architecture with end-to-end encryption
                </div>
                <div>
                  <span className="font-medium">Observability:</span> Comprehensive monitoring, logging, and tracing
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* API Documentation */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Code className="h-5 w-5" />
            <span>API Documentation</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <p className="text-muted-foreground">
                RESTful APIs with comprehensive OpenAPI 3.0 specification, supporting JSON and XML formats with real-time WebSocket connections.
              </p>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm">
                  <Download className="h-4 w-4 mr-2" />
                  OpenAPI Spec
                </Button>
                <Button variant="outline" size="sm">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  API Docs
                </Button>
              </div>
            </div>

            {apiEndpoints.map((category, index) => (
              <div key={index} className="border border-border rounded-lg p-4">
                <h4 className="font-semibold text-lg mb-3">{category.category}</h4>
                <div className="space-y-2">
                  {category.endpoints.map((endpoint, endpointIndex) => (
                    <div key={endpointIndex} className="flex items-center justify-between p-2 bg-accent rounded">
                      <div className="flex items-center space-x-3">
                        <Badge className={`${getMethodColor(endpoint.method)} text-white`}>
                          {endpoint.method}
                        </Badge>
                        <code className="text-sm font-mono">{endpoint.path}</code>
                      </div>
                      <span className="text-sm text-muted-foreground">{endpoint.description}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="p-3 bg-accent rounded-lg">
                <h5 className="font-medium mb-2">Authentication</h5>
                <p className="text-sm text-muted-foreground">OAuth 2.0, API Keys, JWT tokens</p>
              </div>
              <div className="p-3 bg-accent rounded-lg">
                <h5 className="font-medium mb-2">Rate Limiting</h5>
                <p className="text-sm text-muted-foreground">1000 requests/minute per API key</p>
              </div>
              <div className="p-3 bg-accent rounded-lg">
                <h5 className="font-medium mb-2">SDKs Available</h5>
                <p className="text-sm text-muted-foreground">JavaScript, Python, PHP, Java</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Security Framework */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Shield className="h-5 w-5" />
            <span>Security Framework</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <p className="text-muted-foreground">
              Enterprise-grade security framework implementing industry best practices, regulatory compliance, and zero-trust architecture principles.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {securityFeatures.map((category, index) => (
                <div key={index} className="border border-border rounded-lg p-4">
                  <h4 className="font-semibold text-lg mb-3">{category.category}</h4>
                  <ul className="space-y-2">
                    {category.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-2 text-sm">
                        <span className="text-green-500 mt-1">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="p-4 bg-accent rounded-lg">
              <h4 className="font-semibold mb-2">Compliance Certifications</h4>
              <div className="flex flex-wrap gap-2">
                <Badge variant="default">SOC 2 Type II</Badge>
                <Badge variant="default">ISO 27001</Badge>
                <Badge variant="default">PCI DSS Level 1</Badge>
                <Badge variant="default">MiCA Compliant</Badge>
                <Badge variant="default">GDPR Compliant</Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Performance Specifications */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Zap className="h-5 w-5" />
            <span>Performance Specifications</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <p className="text-muted-foreground">
              High-performance infrastructure designed to handle enterprise-scale transaction volumes with sub-second response times and 99.9% uptime guarantees.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {performanceMetrics.map((metric, index) => (
                <div key={index} className="p-4 bg-accent rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium">{metric.metric}</h4>
                    <Zap className="h-4 w-4 text-primary" />
                  </div>
                  <div className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Target:</span>
                      <span className="font-medium">{metric.target}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Current:</span>
                      <span className="font-medium text-green-600">{metric.current}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div className="p-4 bg-accent rounded-lg">
                <h4 className="font-semibold mb-3">Scalability Features</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Auto-scaling based on demand</li>
                  <li>• Load balancing across multiple regions</li>
                  <li>• Database sharding and replication</li>
                  <li>• CDN for global content delivery</li>
                </ul>
              </div>
              <div className="p-4 bg-accent rounded-lg">
                <h4 className="font-semibold mb-3">Monitoring & Alerting</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Real-time performance monitoring</li>
                  <li>• Automated alerting and incident response</li>
                  <li>• Comprehensive logging and analytics</li>
                  <li>• Custom dashboards and reporting</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Interactive Demo */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Play className="h-5 w-5" />
            <span>Interactive Demo</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <p className="text-muted-foreground">
              Experience the RidM Gateway in action with our interactive demo showcasing payment processing, real-time status tracking, and user interface design.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 bg-accent rounded-lg">
                <h4 className="font-semibold mb-3">Demo Features</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start space-x-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Payment creation form with amount and currency selection</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Real-time payment status tracking with auto-refresh</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Simulated payment processing (70% success rate)</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Professional UI using modern design components</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Responsive design for desktop and mobile</span>
                  </li>
                </ul>
              </div>

              <div className="p-4 bg-accent rounded-lg">
                <h4 className="font-semibold mb-3">Technical Implementation</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start space-x-2">
                    <span className="text-primary mt-1">•</span>
                    <span>React-based frontend with TypeScript</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Tailwind CSS for responsive design</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Mock API backend for demonstration</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Real-time WebSocket connections</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Deployment-ready build configuration</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex justify-center">
              <Button 
                size="lg" 
                className="flex items-center space-x-2"
                onClick={() => setShowDemo(true)}
              >
                <Play className="h-5 w-5" />
                <span>Launch Interactive Demo</span>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Development Resources */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Globe className="h-5 w-5" />
            <span>Development Resources</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 bg-accent rounded-lg text-center">
              <Code className="h-8 w-8 text-primary mx-auto mb-2" />
              <h4 className="font-semibold mb-1">API Documentation</h4>
              <p className="text-sm text-muted-foreground">Complete OpenAPI specification</p>
            </div>
            <div className="p-4 bg-accent rounded-lg text-center">
              <Download className="h-8 w-8 text-primary mx-auto mb-2" />
              <h4 className="font-semibold mb-1">SDK Downloads</h4>
              <p className="text-sm text-muted-foreground">Multiple language support</p>
            </div>
            <div className="p-4 bg-accent rounded-lg text-center">
              <Play className="h-8 w-8 text-primary mx-auto mb-2" />
              <h4 className="font-semibold mb-1">Interactive Demo</h4>
              <p className="text-sm text-muted-foreground">Live payment processing</p>
            </div>
            <div className="p-4 bg-accent rounded-lg text-center">
              <ExternalLink className="h-8 w-8 text-primary mx-auto mb-2" />
              <h4 className="font-semibold mb-1">Developer Portal</h4>
              <p className="text-sm text-muted-foreground">Guides and tutorials</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Interactive Demo Modal/Overlay */}
      {showDemo && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-background rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Interactive Payment Demo</h2>
                <Button 
                  variant="outline" 
                  onClick={() => setShowDemo(false)}
                  className="flex items-center space-x-2"
                >
                  <span>Close</span>
                </Button>
              </div>
              <InteractiveDemo />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TechnicalSpecs;

