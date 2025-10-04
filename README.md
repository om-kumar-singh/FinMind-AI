# FinMind-AI 💰

[![React](https://img.shields.io/badge/React-18.2.0-blue)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0.0-blue)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-4.4.0-purple)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC)](https://tailwindcss.com/)

An AI-powered personal finance chatbot that leverages sentiment analysis to provide real-time financial insights and personalized recommendations.

## 🌟 Features

### 🤖 AI-Powered Chat
- **Natural Conversations**: Interactive chat interface for financial queries
- **Context-Aware Responses**: Maintains conversation context for better insights
- **Multi-turn Dialogues**: Support for complex financial discussions

### 📊 Sentiment Analysis
- **Market Sentiment**: Real-time analysis of financial news and social media
- **Trend Identification**: Detect emerging market trends and sentiments
- **Risk Assessment**: Evaluate investment risks based on market mood

### 💡 Personalized Insights
- **Tailored Recommendations**: Financial advice based on user profile and goals
- **Portfolio Analysis**: Personalized investment suggestions
- **Budget Planning**: Customized saving and spending recommendations

### 🔔 Real-time Features
- **Live Market Data**: Up-to-date stock prices and financial information
- **Smart Alerts**: Personalized notifications for market movements
- **News Integration**: Latest financial news with sentiment scoring

## 🛠 Tech Stack

### Frontend
- **React 18** - Modern UI library with hooks
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework

### AI & Analytics
- **OpenAI GPT-3.5/4** - Natural language processing
- **Custom Sentiment Analysis** - Market mood detection
- **Financial APIs** - Real-time market data

### Development Tools
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Husky** - Git hooks

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ 
- npm or yarn
- OpenAI API key

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/om-kumar-singh/FinMind-AI.git
cd FinMind-AI
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
```bash
cp .env.example .env
```
Edit `.env` and add your API keys:
```env
VITE_OPENAI_API_KEY=your_openai_api_key_here
VITE_FINANCIAL_API_KEY=your_financial_api_key
```

4. **Start development server**
```bash
npm run dev
```
Visit `http://localhost:5173`

### Build for Production
```bash
npm run build
npm run preview
```

## 📁 Project Structure

```
FinMind-AI/
├── src/
│   ├── components/         # React components
│   │   ├── Chat/          # Chat interface components
│   │   ├── Dashboard/     # Analytics dashboard
│   │   └── UI/            # Reusable UI components
│   ├── hooks/             # Custom React hooks
│   ├── services/          # API services
│   │   ├── openai/        # OpenAI integration
│   │   ├── sentiment/     # Sentiment analysis
│   │   └── financial/     # Financial data APIs
│   ├── types/             # TypeScript definitions
│   ├── utils/             # Utility functions
│   └── styles/            # Global styles
├── public/                # Static assets
└── docs/                 # Documentation
```

## 💬 Usage Examples

### Financial Queries
```
💬 User: "What's a good investment strategy for beginners?"
🤖 AI: "For beginners, I recommend starting with low-cost index funds..."

💬 User: "Analyze sentiment for Tesla stock today"
🤖 AI: "Based on recent news, Tesla sentiment is moderately positive..."
```

### Budget Planning
```
💬 User: "Help me create a monthly budget"
🤖 AI: "Let's start with your income and expenses. What's your monthly take-home pay?"
```

## 🛠 Development

### Available Scripts
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript compiler
```

### Contributing
We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a pull request

## 🔧 Configuration

### Environment Variables
- `VITE_OPENAI_API_KEY`: Your OpenAI API key
- `VITE_FINANCIAL_API_KEY`: Financial data provider API key
- `VITE_SENTIMENT_API_URL`: Sentiment analysis service endpoint

### Customization
- Modify `src/config/app.ts` for app settings
- Update `tailwind.config.js` for styling changes
- Add new financial APIs in `src/services/`

## 📊 API Integration

### Supported Data Sources
- **Market Data**: Real-time stock prices and indices
- **News Feeds**: Financial news with sentiment analysis
- **Social Media**: Market sentiment from social platforms
- **Economic Indicators**: Key economic data and reports

## 🤝 Support

- **Issues**: [Open an issue](https://github.com/om-kumar-singh/FinMind-AI/issues)
- **Discussions**: [GitHub Discussions](https://github.com/om-kumar-singh/FinMind-AI/discussions)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- OpenAI for GPT API
- Financial data providers
- Contributors and testers

---

<div align="center">

**Made with ❤️ by [Om Kumar Singh](https://github.com/om-kumar-singh)**

</div>
