'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Send, User, MessageSquare } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Create mailto link with form data
      const subject = encodeURIComponent(`Portfolio Contact: Message from ${formData.name}`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      );
      
      // Open email client
      window.location.href = `mailto:nkvk@seas.upenn.edu?subject=${subject}&body=${body}`;
      
      // Analytics event
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'contact_form_submit', {
          event_category: 'engagement',
          event_label: 'contact_section'
        });
      }

      setSubmitStatus('success');
      
      // Reset form after successful submission
      setTimeout(() => {
        setFormData({ name: '', email: '', message: '' });
        setSubmitStatus('idle');
      }, 3000);

    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen h-screen flex items-center justify-center py-8 bg-bg relative z-10"
      aria-label="Contact Form"
    >
      <div className="container-custom w-full">
        <div className="text-center mb-8">
          <h2 className="text-2xl lg:text-3xl font-bold mb-3">
            Get In Touch
          </h2>
          <p className="text-base text-text-2 max-w-xl mx-auto">
            Have a project in mind? Send me a message and I'll get back to you soon.
          </p>
        </div>

        <div className="max-w-xl mx-auto">
          <Card className="surface">
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-xl text-accent flex items-center justify-center gap-2">
                <Mail className="w-5 h-5" />
                Contact Form
              </CardTitle>
            </CardHeader>
            
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name Field */}
                <div className="space-y-1">
                  <label htmlFor="name" className="flex items-center gap-2 text-sm font-medium text-text">
                    <User className="w-4 h-4" />
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 bg-surface border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-200 text-text placeholder-text-2"
                    placeholder="Enter your full name"
                  />
                </div>

                {/* Email Field */}
                <div className="space-y-1">
                  <label htmlFor="email" className="flex items-center gap-2 text-sm font-medium text-text">
                    <Mail className="w-4 h-4" />
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 bg-surface border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-200 text-text placeholder-text-2"
                    placeholder="your.email@example.com"
                  />
                </div>

                {/* Message Field */}
                <div className="space-y-1">
                  <label htmlFor="message" className="flex items-center gap-2 text-sm font-medium text-text">
                    <MessageSquare className="w-4 h-4" />
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={3}
                    className="w-full px-3 py-2 bg-surface border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-200 text-text placeholder-text-2 resize-vertical"
                    placeholder="Tell me about your project or opportunity..."
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <Button
                    type="submit"
                    disabled={isSubmitting || !formData.name || !formData.email || !formData.message}
                    className="w-full bg-accent text-bg hover:bg-accent/90 font-semibold px-6 py-2 btn-hover disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 mr-2 border-2 border-bg border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </div>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div className="p-3 bg-success/10 border border-success/30 rounded-lg text-success text-center">
                    <p className="font-medium text-sm">Message sent successfully!</p>
                    <p className="text-xs mt-1">Your email client should have opened. I'll get back to you soon.</p>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 text-center">
                    <p className="font-medium text-sm">Something went wrong.</p>
                    <p className="text-xs mt-1">Please try again or email me directly at nkvk@seas.upenn.edu</p>
                  </div>
                )}
              </form>
            </CardContent>
          </Card>

          {/* Direct Contact Info */}
          <div className="text-center mt-4">
            <p className="text-xs text-text-2">
              Prefer email? Reach me directly at{' '}
              <a
                href="mailto:nkvk@seas.upenn.edu"
                className="text-accent hover:text-accent-light transition-colors"
              >
                nkvk@seas.upenn.edu
              </a>
            </p>
          </div>
        </div>

        {/* Honeypot field for spam protection (hidden) */}
        <input 
          type="text" 
          name="website" 
          style={{ display: 'none' }} 
          tabIndex={-1} 
          autoComplete="off"
          aria-hidden="true"
        />
      </div>
    </section>
  );
}
