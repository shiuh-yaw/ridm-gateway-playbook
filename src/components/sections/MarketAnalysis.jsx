import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const MarketAnalysis = () => {
  const marketGrowthData = [
    { year: '2024', value: 2200 },
    { year: '2025', value: 2960 },
    { year: '2026', value: 3850 },
    { year: '2027', value: 5010 },
    { year: '2028', value: 6520 },
    { year: '2029', value: 8480 },
    { year: '2030', value: 7980 }
  ];

  const competitorData = [
    { name: 'MoonPay', users: 30, countries: 180, focus: 'B2B2C Integration' },
    { name: 'Transak', users: 8.3, countries: 160, focus: 'Developer APIs' },
    { name: 'BVNK', users: 'Enterprise', countries: 130, focus: 'Enterprise Stablecoins' },
    { name: 'Ramp Network', users: 8, countries: 'Global', focus: 'Consumer Experience' }
  ];

  const regulatoryData = [
    { region: 'EU (MiCA)', status: 'Active', color: '#22c55e' },
    { region: 'US (Fragmented)', status: 'Evolving', color: '#f59e0b' },
    { region: 'Asia-Pacific', status: 'Mixed', color: '#ef4444' },
    { region: 'Other', status: 'Developing', color: '#6b7280' }
  ];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-foreground mb-4">Market Analysis & Competitive Landscape</h2>
        <p className="text-lg text-muted-foreground">
          Comprehensive analysis of the global crypto payment gateway market, regulatory environment, and competitive positioning.
        </p>
      </div>

      {/* Market Size & Growth */}
      <Card>
        <CardHeader>
          <CardTitle>Global Crypto Market Growth</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={marketGrowthData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis />
                  <Tooltip formatter={(value) => [`$${value}B`, 'Market Size']} />
                  <Bar dataKey="value" fill="hsl(var(--primary))" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Key Market Metrics</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">2025 Market Size:</span>
                    <span className="font-medium">$2.96 Trillion</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">2030 Projection:</span>
                    <span className="font-medium">$7.98 Trillion</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">CAGR (2025-2030):</span>
                    <span className="font-medium text-green-600">30.10%</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Payment Gateway Market</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Current Size (2023):</span>
                    <span className="font-medium">$1.23 Billion</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">2032 Projection:</span>
                    <span className="font-medium">$5.37 Billion</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Gateway CAGR:</span>
                    <span className="font-medium text-green-600">17.8%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Competitive Landscape */}
      <Card>
        <CardHeader>
          <CardTitle>Competitive Landscape</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2">Competitor</th>
                  <th className="text-left py-2">User Base</th>
                  <th className="text-left py-2">Geographic Reach</th>
                  <th className="text-left py-2">Key Differentiator</th>
                </tr>
              </thead>
              <tbody>
                {competitorData.map((competitor, index) => (
                  <tr key={index} className="border-b">
                    <td className="py-3 font-medium">{competitor.name}</td>
                    <td className="py-3">
                      {typeof competitor.users === 'number' ? `${competitor.users}M+ users` : competitor.users}
                    </td>
                    <td className="py-3">
                      {typeof competitor.countries === 'number' ? `${competitor.countries} countries` : competitor.countries}
                    </td>
                    <td className="py-3">
                      <Badge variant="secondary">{competitor.focus}</Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Regulatory Environment */}
      <Card>
        <CardHeader>
          <CardTitle>Regulatory Landscape</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={regulatoryData}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    dataKey="status"
                    label={({ region }) => region}
                  >
                    {regulatoryData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-3">Key Regulatory Developments</h4>
                <div className="space-y-3">
                  <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                    <div className="font-medium text-green-800 dark:text-green-200">EU - MiCA Regulation</div>
                    <div className="text-sm text-green-600 dark:text-green-300">
                      Full implementation by December 30, 2024. CASP licensing required.
                    </div>
                  </div>
                  <div className="p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
                    <div className="font-medium text-yellow-800 dark:text-yellow-200">US - Fragmented Approach</div>
                    <div className="text-sm text-yellow-600 dark:text-yellow-300">
                      State-level licensing with federal oversight. Digital Asset Strategy evolving.
                    </div>
                  </div>
                  <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                    <div className="font-medium text-blue-800 dark:text-blue-200">Global Compliance</div>
                    <div className="text-sm text-blue-600 dark:text-blue-300">
                      Universal KYC/AML requirements. 22% increase in compliance costs (2024).
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Market Segmentation */}
      <Card>
        <CardHeader>
          <CardTitle>Market Segmentation & Trends</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-4 bg-accent rounded-lg">
              <h4 className="font-semibold text-accent-foreground mb-2">Regional Growth</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Europe: 24% crypto ownership (UK)</li>
                <li>• Asia-Pacific: Leading adoption</li>
                <li>• iOS segment: 22.6% CAGR</li>
                <li>• Europe region: 22.7% CAGR</li>
              </ul>
            </div>
            <div className="p-4 bg-accent rounded-lg">
              <h4 className="font-semibold text-accent-foreground mb-2">Platform Trends</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Web-based solutions</li>
                <li>• Mobile-first approach</li>
                <li>• API-driven integrations</li>
                <li>• White-label offerings</li>
              </ul>
            </div>
            <div className="p-4 bg-accent rounded-lg">
              <h4 className="font-semibold text-accent-foreground mb-2">Use Cases</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• E-commerce payments</li>
                <li>• Cross-border remittances</li>
                <li>• DeFi protocol access</li>
                <li>• Trading and exchanges</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MarketAnalysis;

