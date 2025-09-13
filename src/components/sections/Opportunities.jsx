import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Progress } from '../ui/progress';
import { 
  DollarSign, 
  TrendingUp, 
  Globe, 
  Gamepad2, 
  Building, 
  Truck, 
  Banknote, 
  Leaf 
} from 'lucide-react';

const Opportunities = () => {
  const opportunities = [
    {
      id: 1,
      title: 'Cross-Border Payments & Remittances',
      icon: Globe,
      marketSize: '$1 Quadrillion',
      growth: '5% annually',
      priority: 'Immediate',
      description: 'Leverage stablecoins for faster, cheaper, and more transparent international payments.',
      keyPoints: [
        'Instant settlement vs. 1-5 business days traditional rails',
        'Near-zero transaction costs vs. multiple intermediary fees',
        'Digital remittances: $24.5B → $60.1B by 2030',
        'Target high-remittance corridors (Asia, Africa, Latin America)'
      ],
      revenueModel: 'Transaction fees (0.5-1.5%) + FX spread',
      timeframe: '6-12 months'
    },
    {
      id: 2,
      title: 'DeFi Payment Infrastructure',
      icon: TrendingUp,
      marketSize: '60-70% institutional allocation',
      growth: 'Institutional adoption',
      priority: 'Immediate',
      description: 'Provide regulated on-ramps to DeFi protocols and yield-bearing products.',
      keyPoints: [
        'Compliance-first DeFi access for institutions',
        'Automated yield optimization services',
        'Risk management and monitoring tools',
        'Enterprise-grade DeFi integration APIs'
      ],
      revenueModel: 'Management fees (1-2%) + performance fees (10-20%)',
      timeframe: '6-12 months'
    },
    {
      id: 3,
      title: 'Web3 Gaming & Metaverse Payments',
      icon: Gamepad2,
      marketSize: '33.23% CAGR',
      growth: 'Through 2025',
      priority: 'Medium-term',
      description: 'Offer in-game payment solutions, NFT marketplace integrations, and virtual world payment rails.',
      keyPoints: [
        'In-game economies and crypto-to-game currency conversion',
        'NFT marketplace payment infrastructure',
        'Cross-game interoperability and universal payment rails',
        'Creator economy monetization tools'
      ],
      revenueModel: 'Transaction fees + revenue sharing with game developers',
      timeframe: '12-24 months'
    },
    {
      id: 4,
      title: 'B2B Payment Automation & Treasury',
      icon: Building,
      marketSize: 'CFO adoption trend',
      growth: 'Stablecoin treasury',
      priority: 'Immediate',
      description: 'Provide B2B treasury APIs for automated payment processing and yield optimization.',
      keyPoints: [
        'Real-time settlement and automated payment processing',
        'Multi-chain treasury operations',
        'Capital efficiency and float risk reduction',
        'Integration with ERP systems (SAP, Oracle, NetSuite)'
      ],
      revenueModel: 'API subscriptions + asset management fees (0.25-0.5%)',
      timeframe: '6-12 months'
    },
    {
      id: 5,
      title: 'Supply Chain Finance & Trade Finance',
      icon: Truck,
      marketSize: 'Blockchain transformation',
      growth: 'Smart contracts',
      priority: 'Medium-term',
      description: 'Offer blockchain-based invoice financing, automated supplier payments, and digital trade documentation.',
      keyPoints: [
        'End-to-end supply chain transparency',
        'Smart contract-based payment automation',
        'Deep-tier financing for sub-suppliers',
        'Paperless trade documentation and letters of credit'
      ],
      revenueModel: 'Transaction fees + financing spread + setup fees',
      timeframe: '12-24 months'
    },
    {
      id: 6,
      title: 'Embedded Finance & Banking-as-a-Service',
      icon: Banknote,
      marketSize: 'API-first banking',
      growth: 'Embedded payments',
      priority: 'Medium-term',
      description: 'Provide embedded crypto payment functionality and white-label solutions.',
      keyPoints: [
        'Payment functionality within non-financial apps',
        'White-label crypto wallet solutions',
        'SDK development for easy integration',
        'Partner revenue sharing programs'
      ],
      revenueModel: 'Revenue sharing (20-30%) + setup fees + subscriptions',
      timeframe: '12-24 months'
    },
    {
      id: 7,
      title: 'Central Bank Digital Currencies (CBDCs)',
      icon: DollarSign,
      marketSize: 'Government adoption',
      growth: 'Digital currencies',
      priority: 'Long-term',
      description: 'Infrastructure for government digital currencies and cross-CBDC payment systems.',
      keyPoints: [
        'CBDC gateway services for digital currency adoption',
        'Cross-CBDC payment routing and interoperability',
        'Government partnerships and public sector solutions',
        'CBDC-specific compliance and reporting tools'
      ],
      revenueModel: 'Government contracts + transaction fees + licensing',
      timeframe: '24-60 months'
    },
    {
      id: 8,
      title: 'Sustainability & ESG Payments',
      icon: Leaf,
      marketSize: 'ESG compliance',
      growth: 'Green finance',
      priority: 'Long-term',
      description: 'Carbon credit trading, automated offset transactions, and ESG-compliant payment solutions.',
      keyPoints: [
        'Automated carbon offset transactions',
        'ESG reporting and impact measurement',
        'Green finance APIs for sustainable investments',
        'Real-time sustainability metrics tracking'
      ],
      revenueModel: 'Transaction fees + ESG reporting subscriptions + carbon credits',
      timeframe: '24-60 months'
    }
  ];

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'Immediate': return 'bg-red-500';
      case 'Medium-term': return 'bg-yellow-500';
      case 'Long-term': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  const getPriorityProgress = (priority) => {
    switch (priority) {
      case 'Immediate': return 90;
      case 'Medium-term': return 60;
      case 'Long-term': return 30;
      default: return 0;
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-foreground mb-4">Emerging Opportunities</h2>
        <p className="text-lg text-muted-foreground mb-6">
          Eight strategic opportunities beyond traditional crypto on-ramp solutions, categorized by implementation timeline and market readiness.
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          <Badge className="bg-red-500 text-white">Immediate (6-12 months)</Badge>
          <Badge className="bg-yellow-500 text-white">Medium-term (1-2 years)</Badge>
          <Badge className="bg-green-500 text-white">Long-term (2-5 years)</Badge>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {opportunities.map((opportunity) => {
          const Icon = opportunity.icon;
          return (
            <Card key={opportunity.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{opportunity.title}</CardTitle>
                      <div className="flex items-center space-x-2 mt-1">
                        <Badge variant="outline">{opportunity.marketSize}</Badge>
                        <Badge variant="outline">{opportunity.growth}</Badge>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className={`inline-block px-2 py-1 rounded-full text-xs text-white ${getPriorityColor(opportunity.priority)}`}>
                      {opportunity.priority}
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">{opportunity.timeframe}</div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">{opportunity.description}</p>
                
                <div>
                  <h4 className="font-medium mb-2">Key Value Propositions</h4>
                  <ul className="text-sm space-y-1">
                    {opportunity.keyPoints.map((point, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <span className="text-primary mt-1">•</span>
                        <span className="text-muted-foreground">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium mb-2">Revenue Model</h4>
                  <p className="text-sm text-muted-foreground">{opportunity.revenueModel}</p>
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Implementation Priority</span>
                    <span>{getPriorityProgress(opportunity.priority)}%</span>
                  </div>
                  <Progress value={getPriorityProgress(opportunity.priority)} className="h-2" />
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Strategic Recommendations */}
      <Card>
        <CardHeader>
          <CardTitle>Strategic Implementation Recommendations</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-4">
              <h4 className="font-semibold text-red-600">Immediate Focus (6-12 months)</h4>
              <div className="space-y-2">
                <div className="p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
                  <div className="font-medium">Stablecoin Payment Rails</div>
                  <div className="text-sm text-muted-foreground">Enterprise cross-border infrastructure</div>
                </div>
                <div className="p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
                  <div className="font-medium">B2B Treasury APIs</div>
                  <div className="text-sm text-muted-foreground">Automated treasury management</div>
                </div>
                <div className="p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
                  <div className="font-medium">DeFi Gateway Services</div>
                  <div className="text-sm text-muted-foreground">Compliant DeFi access</div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-yellow-600">Medium-Term Expansion (1-2 years)</h4>
              <div className="space-y-2">
                <div className="p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                  <div className="font-medium">Web3 Gaming Integration</div>
                  <div className="text-sm text-muted-foreground">Gaming payment infrastructure</div>
                </div>
                <div className="p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                  <div className="font-medium">Supply Chain Finance</div>
                  <div className="text-sm text-muted-foreground">Trade finance automation</div>
                </div>
                <div className="p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                  <div className="font-medium">Embedded Finance</div>
                  <div className="text-sm text-muted-foreground">Banking-as-a-Service</div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-green-600">Long-Term Vision (2-5 years)</h4>
              <div className="space-y-2">
                <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <div className="font-medium">CBDC Infrastructure</div>
                  <div className="text-sm text-muted-foreground">Government digital currencies</div>
                </div>
                <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <div className="font-medium">Sustainability Finance</div>
                  <div className="text-sm text-muted-foreground">ESG-compliant solutions</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-accent rounded-lg">
            <h4 className="font-semibold text-accent-foreground mb-2">Competitive Advantages for RidM</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <span className="font-medium">Regulatory Expertise:</span> Strong compliance foundation with MiCA readiness
              </div>
              <div>
                <span className="font-medium">Technical Infrastructure:</span> Proven gateway technology and architecture
              </div>
              <div>
                <span className="font-medium">Market Position:</span> Established crypto on-ramp presence in Europe
              </div>
              <div>
                <span className="font-medium">Partnership Network:</span> Existing relationships with banks and merchants
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Opportunities;

