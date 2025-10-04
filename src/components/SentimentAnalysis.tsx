import { useState } from 'react';
import { TrendingUp, TrendingDown, Search, RefreshCw } from 'lucide-react';
import { Line } from 'react-chartjs-2';

interface SentimentStock {
  symbol: string;
  name: string;
  price: number;
  change: number;
  sentimentScore: number;
  volume: string;
  newsCount: number;
  socialMentions: number;
}

export const SentimentAnalysis = () => {
  const [searchSymbol, setSearchSymbol] = useState('');
  const [selectedStock, setSelectedStock] = useState<SentimentStock | null>(null);
  const [loading, setLoading] = useState(false);

  const [stocks] = useState<SentimentStock[]>([
    {
      symbol: 'AAPL',
      name: 'Apple Inc.',
      price: 175.43,
      change: 2.3,
      sentimentScore: 0.75,
      volume: '52.3M',
      newsCount: 145,
      socialMentions: 23400,
    },
    {
      symbol: 'TSLA',
      name: 'Tesla Inc.',
      price: 248.50,
      change: -1.2,
      sentimentScore: 0.62,
      volume: '98.7M',
      newsCount: 234,
      socialMentions: 45600,
    },
    {
      symbol: 'MSFT',
      name: 'Microsoft Corp.',
      price: 378.91,
      change: 1.8,
      sentimentScore: 0.81,
      volume: '31.2M',
      newsCount: 98,
      socialMentions: 12300,
    },
    {
      symbol: 'BTC',
      name: 'Bitcoin',
      price: 43250,
      change: 3.5,
      sentimentScore: 0.68,
      volume: '24.5B',
      newsCount: 567,
      socialMentions: 89200,
    },
    {
      symbol: 'ETH',
      name: 'Ethereum',
      price: 2280,
      change: 2.1,
      sentimentScore: 0.72,
      volume: '12.3B',
      newsCount: 345,
      socialMentions: 54300,
    },
  ]);

  const getSentimentColor = (score: number) => {
    if (score >= 0.7) return 'text-green-600';
    if (score >= 0.5) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getSentimentLabel = (score: number) => {
    if (score >= 0.7) return 'Bullish';
    if (score >= 0.5) return 'Neutral';
    return 'Bearish';
  };

  const handleSearch = () => {
    setLoading(true);
    const found = stocks.find(s => s.symbol.toLowerCase() === searchSymbol.toLowerCase());
    setTimeout(() => {
      setSelectedStock(found || null);
      setLoading(false);
    }, 500);
  };

  const priceChartData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    datasets: [
      {
        label: 'Price',
        data: selectedStock ? [
          selectedStock.price * 0.97,
          selectedStock.price * 0.99,
          selectedStock.price * 0.98,
          selectedStock.price * 1.01,
          selectedStock.price,
        ] : [],
        borderColor: '#3B82F6',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        tension: 0.4,
      },
    ],
  };

  const sentimentChartData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    datasets: [
      {
        label: 'Sentiment Score',
        data: selectedStock ? [
          selectedStock.sentimentScore - 0.1,
          selectedStock.sentimentScore - 0.05,
          selectedStock.sentimentScore + 0.02,
          selectedStock.sentimentScore - 0.03,
          selectedStock.sentimentScore,
        ] : [],
        borderColor: '#10B981',
        backgroundColor: 'rgba(16, 185, 129, 0.1)',
        tension: 0.4,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Market Sentiment Analysis</h1>

        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex gap-3">
            <input
              type="text"
              value={searchSymbol}
              onChange={(e) => setSearchSymbol(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
              placeholder="Enter stock symbol (e.g., AAPL, TSLA, BTC)"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
            />
            <button
              onClick={handleSearch}
              disabled={loading}
              className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
            >
              <Search className="w-5 h-5" />
              Search
            </button>
            <button
              onClick={() => setLoading(true)}
              className="flex items-center gap-2 bg-gray-200 text-gray-700 px-4 py-3 rounded-lg hover:bg-gray-300 transition-colors"
            >
              <RefreshCw className="w-5 h-5" />
            </button>
          </div>
        </div>

        {selectedStock && (
          <div className="space-y-6 mb-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">{selectedStock.symbol}</h2>
                  <p className="text-gray-600">{selectedStock.name}</p>
                </div>
                <div className="text-right">
                  <p className="text-3xl font-bold text-gray-800">${selectedStock.price.toLocaleString()}</p>
                  <p className={`flex items-center gap-1 ${selectedStock.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {selectedStock.change >= 0 ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                    {selectedStock.change >= 0 ? '+' : ''}{selectedStock.change}%
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-4 gap-4 pt-4 border-t border-gray-200">
                <div>
                  <p className="text-sm text-gray-600">Sentiment</p>
                  <p className={`text-xl font-bold ${getSentimentColor(selectedStock.sentimentScore)}`}>
                    {getSentimentLabel(selectedStock.sentimentScore)}
                  </p>
                  <p className="text-sm text-gray-500">{(selectedStock.sentimentScore * 100).toFixed(0)}%</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Volume</p>
                  <p className="text-xl font-bold text-gray-800">{selectedStock.volume}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">News Articles</p>
                  <p className="text-xl font-bold text-gray-800">{selectedStock.newsCount}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Social Mentions</p>
                  <p className="text-xl font-bold text-gray-800">{selectedStock.socialMentions.toLocaleString()}</p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Price Trend (5 Days)</h3>
                <div className="h-64">
                  <Line data={priceChartData} options={{ maintainAspectRatio: false, responsive: true }} />
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Sentiment Trend (5 Days)</h3>
                <div className="h-64">
                  <Line data={sentimentChartData} options={{ maintainAspectRatio: false, responsive: true, scales: { y: { min: 0, max: 1 } } }} />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Latest News Sentiment</h3>
              <div className="space-y-3">
                <div className="p-4 bg-green-50 border-l-4 border-green-500 rounded">
                  <p className="font-semibold text-gray-800">Positive: Strong Q4 earnings beat expectations</p>
                  <p className="text-sm text-gray-600 mt-1">Sentiment Score: +0.85 | 2 hours ago</p>
                </div>
                <div className="p-4 bg-green-50 border-l-4 border-green-500 rounded">
                  <p className="font-semibold text-gray-800">Positive: New product launch receives acclaim</p>
                  <p className="text-sm text-gray-600 mt-1">Sentiment Score: +0.72 | 5 hours ago</p>
                </div>
                <div className="p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded">
                  <p className="font-semibold text-gray-800">Neutral: Analysts maintain hold rating</p>
                  <p className="text-sm text-gray-600 mt-1">Sentiment Score: +0.15 | 8 hours ago</p>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Trending Stocks & Crypto</h3>
          <div className="space-y-3">
            {stocks.map((stock) => (
              <div
                key={stock.symbol}
                onClick={() => setSelectedStock(stock)}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <div className="text-center">
                    <p className="font-bold text-lg text-gray-800">{stock.symbol}</p>
                    <p className="text-xs text-gray-500">{stock.volume}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">{stock.name}</p>
                    <p className="text-sm text-gray-600">{stock.newsCount} news • {stock.socialMentions.toLocaleString()} mentions</p>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="text-right">
                    <p className="font-bold text-gray-800">${stock.price.toLocaleString()}</p>
                    <p className={`text-sm ${stock.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                      {stock.change >= 0 ? '+' : ''}{stock.change}%
                    </p>
                  </div>

                  <div className="text-center">
                    <p className={`font-bold text-lg ${getSentimentColor(stock.sentimentScore)}`}>
                      {getSentimentLabel(stock.sentimentScore)}
                    </p>
                    <p className="text-xs text-gray-500">{(stock.sentimentScore * 100).toFixed(0)}%</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
