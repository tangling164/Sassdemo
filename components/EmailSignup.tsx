import React, { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';

interface EmailSignupProps {
  className?: string;
  placeholder?: string;
  buttonText?: string;
}

const EmailSignup: React.FC<EmailSignupProps> = ({ 
  className = "", 
  placeholder = "Enter your email", 
  buttonText = "Start Monitoring Free" 
}) => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setStatus('loading');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setEmail("");
    }, 1500);
  };

  if (status === 'success') {
    return (
      <div className={`flex items-center justify-center p-4 bg-green-50 text-green-700 rounded-lg border border-green-200 ${className}`}>
        <Check className="h-5 w-5 mr-2" />
        <span className="font-medium">Thanks! You've been added to the list.</span>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`flex flex-col sm:flex-row gap-3 ${className}`}>
      <input
        type="email"
        placeholder={placeholder}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="flex-grow px-5 py-3.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
        required
      />
      <button
        type="submit"
        disabled={status === 'loading'}
        className="flex items-center justify-center px-8 py-3.5 rounded-lg bg-primary-600 text-white font-semibold hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-all shadow-lg hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed whitespace-nowrap"
      >
        {status === 'loading' ? 'Sending...' : (
          <>
            {buttonText} <ArrowRight className="ml-2 h-5 w-5" />
          </>
        )}
      </button>
    </form>
  );
};

export default EmailSignup;