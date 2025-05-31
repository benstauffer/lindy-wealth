'use client'

import React, { useState } from 'react';
import { FiArrowRight } from 'react-icons/fi';

export function SubscribeForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('loading');
    setMessage('');

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong.');
      }

      setStatus('success');
      setMessage('Thank you for subscribing!');
      setEmail(''); // Clear input on success
    } catch (error: any) {
      setStatus('error');
      setMessage(error.message || 'Failed to subscribe. Please try again.');
    }
  };

  return (
    <div className="w-full max-w-sm mx-auto"> 
      <form onSubmit={handleSubmit} className="flex items-center border border-neutral-300 rounded-full p-1 focus-within:border-neutral-900 focus-within:ring-1 focus-within:ring-neutral-900 transition-all duration-200">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          className="flex-grow px-4 py-2 text-sm bg-transparent border-none focus:outline-none focus:ring-0 placeholder-neutral-500 text-neutral-900"
          disabled={status === 'loading'}
        />
        <button 
          type="submit"
          className="group inline-flex items-center justify-center px-4 py-2 text-sm border border-neutral-900 text-white bg-neutral-900 hover:bg-neutral-700 rounded-full transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={status === 'loading'}
        >
          {status === 'loading' ? 'Subscribing...' : 
            <>
              Subscribe
              <FiArrowRight className="ml-2 transform transition-transform duration-200 group-hover:translate-x-1" />
            </>
          }
        </button>
      </form>
      {message && (
        <p className={`mt-3 text-center text-sm ${status === 'success' ? 'text-green-600' : 'text-red-600'}`}>
          {message}
        </p>
      )}
    </div>
  );
}
