import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Progress } from '../ui/progress';
import { 
  Calendar, 
  Target, 
  DollarSign, 
  Users, 
  TrendingUp,
  CheckCircle,
  Clock,
  AlertCircle
} from 'lucide-react';

const StrategicRoadmap = () => {
  const roadmapData = [
    {
      opportunity: 'Stablecoin Payment Rails',
      revenueTarget: '$15M ARR',
      marketGoal: '0.1% of stablecoin payment market',
      keyFocus: 'Cross-border payments with 24/7 settlement',
      phases: [
        {
          phase: 'Foundation',
          timeline: 'Months 1-3',
          status: 'planning',
          deliverables: [
            'Integrate USDC, USDT, and EURC stablecoin support',
            'Develop multi-chain infrastructure (Ethereum, Polygon, Arbitrum)',
            'Build real-time settlement engine with 24/7 operations',
            'Implement automated compliance checks (AML/KYC/sanctions)'
          ]
        },
        {
          phase: 'Market Entry',
          timeline: 'Months 4-6',
          status: 'planning',
          deliverables: [
            'Beta launch with 10 enterprise clients',
            'Cross-border payment corridors: EU-US, EU-Asia, EU-Latin America',
            'Real-time FX conversion (fiat ↔ stablecoin ↔ fiat)',
            'White-label payment widget for partner integration'
          ]
        },
        {
          phase: 'Scale & Optimize',
          timeline: 'Months 7-12',
          status: 'planning',
          deliverables: [
            'Full commercial launch across 25+ countries',
            'Support for 10+ stablecoins and 50+ fiat currencies',
            'Advanced treasury management features',
            'Enterprise-grade SLA guarantees (99.9% uptime)'
          ]
        }
      ]
    },
    {
      opportunity: 'B2B Treasury APIs',
      revenueTarget: '$8M ARR',
      marketGoal: '$100M assets under management',
      keyFocus: 'Automated treasury management with stablecoin yield',
      phases: [
        {
          phase: 'Product Development',
          timeline: 'Months 1-4',
          status: 'planning',
          deliverables: [
            'Multi-currency account management APIs',
            'Real-time balance and transaction APIs',
            'Automated payment scheduling and execution',
            'Liquidity optimization algorithms'
          ]
        },
        {
          phase: 'Market Validation',
          timeline: 'Months 5-8',
          status: 'planning',
          deliverables: [
            '20 enterprise treasury teams pilot program',
            'Integration with major ERP systems (SAP, Oracle, NetSuite)',
            'Treasury workflow automation',
            'Performance benchmarking and optimization'
          ]
        },
        {
          phase: 'Commercial Launch',
          timeline: 'Months 9-12',
          status: 'planning',
          deliverables: [
            'Enterprise sales and marketing campaign',
            'Self-service onboarding for mid-market',
            'Advanced analytics and reporting',
            'White-label treasury solutions'
          ]
        }
      ]
    },
    {
      opportunity: 'DeFi Gateway Services',
      revenueTarget: '$5M ARR',
      marketGoal: '$100M total value locked',
      keyFocus: 'Compliant institutional DeFi access',
      phases: [
        {
          phase: 'DeFi Infrastructure',
          timeline: 'Months 1-4',
          status: 'planning',
          deliverables: [
            'Integration with major DeFi protocols (Uniswap, Compound, Aave)',
            'Automated yield farming strategies',
            'Cross-chain DeFi access (Ethereum, Polygon, Arbitrum)',
            'Risk assessment and monitoring tools'
          ]
        },
        {
          phase: 'Product Launch',
          timeline: 'Months 5-8',
          status: 'planning',
          deliverables: [
            '15 institutional clients pilot program',
            'Managed DeFi portfolios',
            'Automated yield optimization',
            'Real-time risk monitoring and alerts'
          ]
        },
        {
          phase: 'Scale & Expansion',
          timeline: 'Months 9-12',
          status: 'planning',
          deliverables: [
            'Full institutional DeFi services',
            'Self-service DeFi access for qualified clients',
            'Advanced portfolio management tools',
            'Cross-protocol yield optimization'
          ]
        }
      ]
    }
  ];

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed': return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'in-progress': return <Clock className="h-4 w-4 text-yellow-500" />;
      case 'planning': return <AlertCircle className="h-4 w-4 text-blue-500" />;
      default: return <Clock className="h-4 w-4 text-gray-500" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return 'bg-green-500';
      case 'in-progress': return 'bg-yellow-500';
      case 'planning': return 'bg-blue-500';
      default: return 'bg-gray-500';
    }
  };

  const resourceRequirements = {
    team: [
      { role: 'Engineering', count: 15, description: 'Blockchain, backend, frontend developers' },
      { role: 'Product', count: 3, description: 'Product managers for each opportunity' },
      { role: 'Sales', count: 8, description: 'Enterprise sales representatives' },
      { role: 'Compliance', count: 4, description: 'Regulatory and compliance specialists' },
      { role: 'Operations', count: 6, description: 'Customer success and support staff' }
    ],
    investment: [
      { category: 'Infrastructure', amount: '$2M', description: 'Multi-chain and DeFi infrastructure' },
      { category: 'Security', amount: '$500K', description: 'Enhanced security and auditing' },
      { category: 'Compliance', amount: '$1M', description: 'Automated compliance systems' },
      { category: 'Integration', amount: '$1.5M', description: 'ERP and partner integrations' },
      { category: 'Sales & Marketing', amount: '$6.5M', description: 'Sales organization and demand generation' }
    ]
  };

  const successMetrics = [
    { metric: 'Combined Revenue Target', target: '$25-40M ARR', timeframe: '12 months' },
    { metric: 'Transaction Volume', target: '$200M monthly', timeframe: '12 months' },
    { metric: 'Enterprise Customers', target: '250+ clients', timeframe: '12 months' },
    { metric: 'Geographic Coverage', target: '25+ countries', timeframe: '12 months' },
    { metric: 'System Uptime', target: '99.9%', timeframe: 'Ongoing' },
    { metric: 'Compliance Rate', target: '100%', timeframe: 'Ongoing' }
  ];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-foreground mb-4">Strategic Roadmap (6-12 Months)</h2>
        <p className="text-lg text-muted-foreground mb-6">
          Detailed implementation plan for three immediate opportunities with combined revenue potential of $25-40M ARR.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <Target className="h-5 w-5 text-primary" />
                <div>
                  <div className="font-semibold">Total Revenue Target</div>
                  <div className="text-2xl font-bold text-primary">$28M ARR</div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-primary" />
                <div>
                  <div className="font-semibold">Team Scaling</div>
                  <div className="text-2xl font-bold text-primary">+36 Staff</div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <DollarSign className="h-5 w-5 text-primary" />
                <div>
                  <div className="font-semibold">Total Investment</div>
                  <div className="text-2xl font-bold text-primary">$11.5M</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Detailed Roadmap for Each Opportunity */}
      {roadmapData.map((opportunity, index) => (
        <Card key={index}>
          <CardHeader>
            <div className="flex items-start justify-between">
              <div>
                <CardTitle className="text-xl">{opportunity.opportunity}</CardTitle>
                <div className="flex items-center space-x-4 mt-2">
                  <Badge variant="default">{opportunity.revenueTarget}</Badge>
                  <Badge variant="secondary">{opportunity.marketGoal}</Badge>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm text-muted-foreground">Key Focus</div>
                <div className="font-medium">{opportunity.keyFocus}</div>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {opportunity.phases.map((phase, phaseIndex) => (
                <div key={phaseIndex} className="border-l-2 border-border pl-6 relative">
                  <div className="absolute -left-2 top-0">
                    <div className={`w-4 h-4 rounded-full ${getStatusColor(phase.status)}`}></div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        {getStatusIcon(phase.status)}
                        <h4 className="font-semibold">{phase.phase}</h4>
                      </div>
                      <Badge variant="outline">{phase.timeline}</Badge>
                    </div>
                    
                    <div>
                      <h5 className="font-medium mb-2">Key Deliverables</h5>
                      <ul className="space-y-1">
                        {phase.deliverables.map((deliverable, deliverableIndex) => (
                          <li key={deliverableIndex} className="flex items-start space-x-2 text-sm">
                            <span className="text-primary mt-1">•</span>
                            <span className="text-muted-foreground">{deliverable}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}

      {/* Resource Requirements */}
      <Card>
        <CardHeader>
          <CardTitle>Resource Requirements</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-4">Team Scaling</h4>
              <div className="space-y-3">
                {resourceRequirements.team.map((role, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-accent rounded-lg">
                    <div>
                      <div className="font-medium">{role.role}</div>
                      <div className="text-sm text-muted-foreground">{role.description}</div>
                    </div>
                    <div className="text-lg font-bold text-primary">+{role.count}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Investment Requirements</h4>
              <div className="space-y-3">
                {resourceRequirements.investment.map((investment, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-accent rounded-lg">
                    <div>
                      <div className="font-medium">{investment.category}</div>
                      <div className="text-sm text-muted-foreground">{investment.description}</div>
                    </div>
                    <div className="text-lg font-bold text-primary">{investment.amount}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Success Metrics */}
      <Card>
        <CardHeader>
          <CardTitle>Success Metrics & KPIs</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {successMetrics.map((metric, index) => (
              <div key={index} className="p-4 bg-accent rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <div className="font-medium">{metric.metric}</div>
                  <TrendingUp className="h-4 w-4 text-primary" />
                </div>
                <div className="text-2xl font-bold text-primary mb-1">{metric.target}</div>
                <div className="text-sm text-muted-foreground">{metric.timeframe}</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Implementation Timeline */}
      <Card>
        <CardHeader>
          <CardTitle>Integrated Implementation Timeline</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                <div className="font-semibold text-blue-800 dark:text-blue-200">Months 1-3: Foundation</div>
                <div className="text-sm text-blue-600 dark:text-blue-300 mt-2">
                  Technical architecture design, team scaling, core infrastructure development, regulatory framework enhancement
                </div>
              </div>
              <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
                <div className="font-semibold text-yellow-800 dark:text-yellow-200">Months 4-6: Development</div>
                <div className="text-sm text-yellow-600 dark:text-yellow-300 mt-2">
                  Beta product launches, pilot customer onboarding, feedback collection, partnership development
                </div>
              </div>
              <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                <div className="font-semibold text-green-800 dark:text-green-200">Months 7-9: Market Entry</div>
                <div className="text-sm text-green-600 dark:text-green-300 mt-2">
                  Commercial launches, sales team scaling, marketing campaigns, customer acquisition acceleration
                </div>
              </div>
              <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-800">
                <div className="font-semibold text-purple-800 dark:text-purple-200">Months 10-12: Scale</div>
                <div className="text-sm text-purple-600 dark:text-purple-300 mt-2">
                  Market expansion, feature enhancement, revenue optimization, next phase planning
                </div>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="font-semibold mb-3">Risk Mitigation Framework</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-3 bg-accent rounded-lg">
                  <div className="font-medium mb-2">Technical Risks</div>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Phased rollout and extensive testing</li>
                    <li>• Comprehensive auditing and insurance</li>
                    <li>• Cloud-native architecture and auto-scaling</li>
                    <li>• Multi-layer security and penetration testing</li>
                  </ul>
                </div>
                <div className="p-3 bg-accent rounded-lg">
                  <div className="font-medium mb-2">Market Risks</div>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Proactive regulatory engagement</li>
                    <li>• Compliance-first differentiation</li>
                    <li>• Pilot programs and gradual market entry</li>
                    <li>• Diversified revenue streams</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default StrategicRoadmap;

