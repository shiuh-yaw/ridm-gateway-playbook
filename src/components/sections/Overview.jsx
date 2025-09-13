import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { TrendingUp, Users, Globe, Shield } from 'lucide-react';

const Overview = () => {
  const highlights = [
    {
      icon: TrendingUp,
      title: 'Market Growth',
      value: '30.10% CAGR',
      description: 'Crypto market growth through 2030'
    },
    {
      icon: Users,
      title: 'Target Revenue',
      value: '$25-40M ARR',
      description: 'Within 12 months across 3 opportunities'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      value: '25+ Countries',
      description: 'Initial market coverage'
    },
    {
      icon: Shield,
      title: 'Compliance',
      value: 'MiCA Ready',
      description: 'Full regulatory compliance framework'
    }
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-foreground mb-4">
          RidM Gateway Product Playbook
        </h1>
        <p className="text-xl text-muted-foreground mb-6">
          Comprehensive Product Requirements Document and Strategic Roadmap for the next phase of RidM Gateway development.
        </p>
        <div className="flex flex-wrap gap-2">
          <Badge variant="default">Product Strategy</Badge>
          <Badge variant="secondary">Market Analysis</Badge>
          <Badge variant="secondary">Technical Specifications</Badge>
          <Badge variant="secondary">Implementation Roadmap</Badge>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {highlights.map((item, index) => {
          const Icon = item.icon;
          return (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-center space-x-2">
                  <Icon className="h-5 w-5 text-primary" />
                  <CardTitle className="text-sm font-medium">{item.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-primary mb-1">{item.value}</div>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Executive Summary</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            This playbook outlines RidM's strategic expansion beyond traditional crypto on-ramp solutions into high-growth adjacent markets. 
            The analysis identifies three immediate opportunities with combined revenue potential of $25-40M ARR within 12 months.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-accent rounded-lg">
              <h4 className="font-semibold text-accent-foreground mb-2">Stablecoin Payment Rails</h4>
              <p className="text-sm text-muted-foreground">Enterprise cross-border payment infrastructure targeting $15M ARR</p>
            </div>
            <div className="p-4 bg-accent rounded-lg">
              <h4 className="font-semibold text-accent-foreground mb-2">B2B Treasury APIs</h4>
              <p className="text-sm text-muted-foreground">Automated treasury management solutions targeting $8M ARR</p>
            </div>
            <div className="p-4 bg-accent rounded-lg">
              <h4 className="font-semibold text-accent-foreground mb-2">DeFi Gateway Services</h4>
              <p className="text-sm text-muted-foreground">Compliant institutional DeFi access targeting $5M ARR</p>
            </div>
          </div>

          <p>
            The roadmap leverages RidM's existing gateway infrastructure and regulatory expertise to capture multiple high-growth markets 
            while establishing a foundation for medium and long-term expansion into Web3 gaming, supply chain finance, and emerging payment technologies.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Overview;

