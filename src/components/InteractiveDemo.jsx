import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { CheckCircle, XCircle, Clock, CreditCard, RefreshCw } from 'lucide-react';

const InteractiveDemo = () => {
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState('USD');
  const [paymentStatus, setPaymentStatus] = useState('idle'); // idle, processing, success, failed
  const [progress, setProgress] = useState(0);
  const [paymentId, setPaymentId] = useState('');

  const currencies = [
    { value: 'USD', label: 'USD - US Dollar' },
    { value: 'EUR', label: 'EUR - Euro' },
    { value: 'GBP', label: 'GBP - British Pound' },
    { value: 'BTC', label: 'BTC - Bitcoin' },
    { value: 'ETH', label: 'ETH - Ethereum' },
  ];

  const simulatePayment = async () => {
    if (!amount || isNaN(amount) || parseFloat(amount) <= 0) {
      alert('Please enter a valid amount');
      return;
    }

    setPaymentStatus('processing');
    setProgress(0);
    setPaymentId(`PAY_${Date.now()}`);

    // Simulate payment processing with progress
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          // 70% success rate as mentioned in the demo features
          const success = Math.random() < 0.7;
          setPaymentStatus(success ? 'success' : 'failed');
          return 100;
        }
        return prev + Math.random() * 20;
      });
    }, 200);
  };

  const resetDemo = () => {
    setAmount('');
    setCurrency('USD');
    setPaymentStatus('idle');
    setProgress(0);
    setPaymentId('');
  };

  const getStatusIcon = () => {
    switch (paymentStatus) {
      case 'processing':
        return <RefreshCw className="h-5 w-5 animate-spin text-blue-500" />;
      case 'success':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'failed':
        return <XCircle className="h-5 w-5 text-red-500" />;
      default:
        return <Clock className="h-5 w-5 text-gray-500" />;
    }
  };

  const getStatusBadge = () => {
    switch (paymentStatus) {
      case 'processing':
        return <Badge variant="secondary" className="bg-blue-100 text-blue-800">Processing</Badge>;
      case 'success':
        return <Badge variant="default" className="bg-green-100 text-green-800">Success</Badge>;
      case 'failed':
        return <Badge variant="destructive">Failed</Badge>;
      default:
        return <Badge variant="outline">Ready</Badge>;
    }
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <CreditCard className="h-5 w-5" />
            <span>Payment Demo</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Payment Form */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Amount</label>
              <Input
                type="number"
                placeholder="0.00"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                disabled={paymentStatus === 'processing'}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Currency</label>
              <Select value={currency} onValueChange={setCurrency} disabled={paymentStatus === 'processing'}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {currencies.map((curr) => (
                    <SelectItem key={curr.value} value={curr.value}>
                      {curr.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-3">
            <Button 
              onClick={simulatePayment} 
              disabled={paymentStatus === 'processing'}
              className="flex-1"
            >
              {paymentStatus === 'processing' ? 'Processing...' : 'Process Payment'}
            </Button>
            <Button 
              variant="outline" 
              onClick={resetDemo}
              disabled={paymentStatus === 'processing'}
            >
              Reset
            </Button>
          </div>

          {/* Payment Status */}
          {paymentStatus !== 'idle' && (
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      {getStatusIcon()}
                      <span className="font-medium">Payment Status</span>
                    </div>
                    {getStatusBadge()}
                  </div>

                  {paymentId && (
                    <div className="text-sm text-muted-foreground">
                      Payment ID: <code className="bg-muted px-2 py-1 rounded">{paymentId}</code>
                    </div>
                  )}

                  {paymentStatus === 'processing' && (
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Processing payment...</span>
                        <span>{Math.round(progress)}%</span>
                      </div>
                      <Progress value={progress} className="w-full" />
                    </div>
                  )}

                  {paymentStatus === 'success' && (
                    <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                      <p className="text-green-800 font-medium">Payment Successful!</p>
                      <p className="text-green-600 text-sm">
                        {amount} {currency} has been processed successfully.
                      </p>
                    </div>
                  )}

                  {paymentStatus === 'failed' && (
                    <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                      <p className="text-red-800 font-medium">Payment Failed</p>
                      <p className="text-red-600 text-sm">
                        The payment could not be processed. Please try again.
                      </p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          )}
        </CardContent>
      </Card>

      {/* Demo Info */}
      <Card>
        <CardContent className="pt-6">
          <div className="text-center space-y-2">
            <p className="text-sm text-muted-foreground">
              This is a simulated payment processing demo. No real transactions are processed.
            </p>
            <p className="text-xs text-muted-foreground">
              Success rate: ~70% | Processing time: 1-3 seconds
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default InteractiveDemo;
