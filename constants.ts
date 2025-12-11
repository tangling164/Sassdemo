import { Activity, Bell, Shield, Zap, BarChart3, Clock, Lock, Smartphone } from 'lucide-react';

export const FEATURES = [
  {
    icon: Activity,
    title: "Real-time Monitoring",
    description: "Our engines watch the market 24/7 so you don't have to. Millisecond precision on price feeds."
  },
  {
    icon: Bell,
    title: "Instant Alerts",
    description: "Get notified via Email, SMS, or Webhooks the second your strategy conditions are met."
  },
  {
    icon: Shield,
    title: "Bank-Grade Security",
    description: "Your data is encrypted. We never ask for withdrawal permissions on your exchange keys."
  },
  {
    icon: Zap,
    title: "No-Code Builder",
    description: "Build complex logic using our drag-and-drop interface. No Python or Pine Script required."
  },
  {
    icon: BarChart3,
    title: "Backtesting",
    description: "Validate your strategies against 5 years of historical data before going live."
  },
  {
    icon: Smartphone,
    title: "Mobile Optimized",
    description: "Manage your strategies and view active alerts on the go with our responsive dashboard."
  }
];

export const STEPS = [
  {
    number: "01",
    title: "Connect Exchange",
    description: "Securely link your favorite exchange via read-only API keys or use our simulated market data."
  },
  {
    number: "02",
    title: "Define Strategy",
    description: "Set up your triggers using indicators like RSI, MACD, or simple price action levels."
  },
  {
    number: "03",
    title: "Get Alerted",
    description: "Receive instant notifications when your setup triggers, allowing you to execute manually or automatically."
  }
];

export const TESTIMONIALS = [
  {
    quote: "TradePulse saved me from staring at charts all day. I set my levels, went to sleep, and woke up to a perfect entry alert.",
    author: "Alex Chen",
    role: "Day Trader",
    avatar: "https://picsum.photos/100/100?random=1"
  },
  {
    quote: "The backtesting feature is a game changer. I realized my old strategy was losing money before I risked a cent.",
    author: "Sarah Jenkins",
    role: "Algo Enthusiast",
    avatar: "https://picsum.photos/100/100?random=2"
  },
  {
    quote: "Simple, effective, and fast. The webhook integration allows me to trigger my bot instantly.",
    author: "Marcus Doi",
    role: "Quant Developer",
    avatar: "https://picsum.photos/100/100?random=3"
  }
];

export const FAQS = [
  {
    question: "Do I need to know how to code?",
    answer: "Not at all. Our visual strategy builder allows you to create complex triggers using a simple point-and-click interface."
  },
  {
    question: "Which exchanges do you support?",
    answer: "We support Binance, Coinbase Pro, Kraken, Bybit, and generic price feeds for over 5,000 assets."
  },
  {
    question: "Is it free to start?",
    answer: "Yes! We offer a 'Hobbyist' tier that allows you to monitor up to 3 active strategies completely free forever."
  },
  {
    question: "Can TradePulse execute trades for me?",
    answer: "By default, we are a monitoring and alerting tool. However, you can configure webhooks to trigger execution on external platforms if you choose."
  }
];