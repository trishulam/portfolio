'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Mail, Send, User, MessageSquare, CheckCircle, AlertCircle } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [fieldErrors, setFieldErrors] = useState<{[key: string]: string}>({});

  const validateField = (name: string, value: string) => {
    const errors: {[key: string]: string} = {};
    
    switch (name) {
      case 'name':
        if (!value.trim()) errors.name = 'Name is required';
        else if (value.trim().length < 2) errors.name = 'Name must be at least 2 characters';
        break;
      case 'email':
        if (!value.trim()) errors.email = 'Email is required';
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) errors.email = 'Please enter a valid email address';
        break;
      case 'message':
        if (!value.trim()) errors.message = 'Message is required';
        else if (value.trim().length < 10) errors.message = 'Message must be at least 10 characters';
        break;
    }
    
    setFieldErrors(prev => ({ ...prev, [name]: errors[name] || '' }));
    return !errors[name];
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear field error when user starts typing
    if (fieldErrors[name]) {
      setFieldErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    validateField(name, value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Validate all fields
    const nameValid = validateField('name', formData.name);
    const emailValid = validateField('email', formData.email);
    const messageValid = validateField('message', formData.message);

    if (!nameValid || !emailValid || !messageValid) {
      setIsSubmitting(false);
      return;
    }

    try {
      // Create mailto link with form data
      const subject = encodeURIComponent(`Portfolio Contact: Message from ${formData.name}`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      );
      
      // Open email client
      window.location.href = `mailto:nkvk@engineering.upenn.edu?subject=${subject}&body=${body}`;
      
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

  const isFormValid = formData.name.trim() && formData.email.trim() && formData.message.trim() && 
                     !fieldErrors.name && !fieldErrors.email && !fieldErrors.message;

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-16 bg-bg relative z-10"
      aria-label="Contact Form"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 pattern-dots opacity-20 pointer-events-none" />
      
      <div className="container-custom w-full relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gradient">
            Let&apos;s Work Together
          </h2>
          <p className="text-lg text-text-2 max-w-2xl mx-auto leading-relaxed">
            Have a project in mind? I&apos;d love to hear about it. Send me a message and I&apos;ll get back to you within 24 hours.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Glassmorphism Contact Card */}
          <div className="relative">
            {/* Card Background with Glassmorphism */}
            <div className="absolute inset-0 bg-gradient-to-br from-surface/80 via-surface/60 to-surface-2/80 backdrop-blur-xl rounded-2xl border border-border-accent/30 shadow-2xl" />
            
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent/5 rounded-2xl blur-xl" />
            
            {/* Card Content */}
            <div className="relative bg-gradient-to-br from-surface/90 via-surface/70 to-surface-2/90 backdrop-blur-xl rounded-2xl border border-border-accent/20 p-8 lg:p-10">
              {/* Form Header */}
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-accent/20 to-accent/10 rounded-full mb-4 border border-accent/20">
                  <Mail className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-2xl font-semibold text-text mb-2">Send a Message</h3>
                <p className="text-text-2">Fill out the form below and I&apos;ll respond promptly</p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                {/* Name Field */}
                <div className="space-y-2">
                  <label htmlFor="name" className="flex items-center gap-2 text-sm font-semibold text-text">
                    <User className="w-4 h-4 text-accent" />
                    Full Name *
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      required
                      aria-describedby={fieldErrors.name ? "name-error" : undefined}
                      className={`w-full px-4 py-3 bg-surface/50 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all duration-300 text-text placeholder-text-3 backdrop-blur-sm ${
                        fieldErrors.name ? 'border-error' : 'border-border hover:border-border-light'
                      }`}
                      placeholder="Enter your full name"
                    />
                    {fieldErrors.name && (
                      <div className="absolute right-3 top-1/2 -translate-y-1/2">
                        <AlertCircle className="w-5 h-5 text-error" />
                      </div>
                    )}
                  </div>
                  {fieldErrors.name && (
                    <p id="name-error" className="text-sm text-error flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {fieldErrors.name}
                    </p>
                  )}
                </div>

                {/* Email Field */}
                <div className="space-y-2">
                  <label htmlFor="email" className="flex items-center gap-2 text-sm font-semibold text-text">
                    <Mail className="w-4 h-4 text-accent" />
                    Email Address *
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      required
                      aria-describedby={fieldErrors.email ? "email-error" : undefined}
                      className={`w-full px-4 py-3 bg-surface/50 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all duration-300 text-text placeholder-text-3 backdrop-blur-sm ${
                        fieldErrors.email ? 'border-error' : 'border-border hover:border-border-light'
                      }`}
                      placeholder="your.email@example.com"
                    />
                    {fieldErrors.email && (
                      <div className="absolute right-3 top-1/2 -translate-y-1/2">
                        <AlertCircle className="w-5 h-5 text-error" />
                      </div>
                    )}
                  </div>
                  {fieldErrors.email && (
                    <p id="email-error" className="text-sm text-error flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {fieldErrors.email}
                    </p>
                  )}
                </div>

                {/* Message Field */}
                <div className="space-y-2">
                  <label htmlFor="message" className="flex items-center gap-2 text-sm font-semibold text-text">
                    <MessageSquare className="w-4 h-4 text-accent" />
                    Message *
                  </label>
                  <div className="relative">
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      required
                      rows={5}
                      aria-describedby={fieldErrors.message ? "message-error" : undefined}
                      className={`w-full px-4 py-3 bg-surface/50 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all duration-300 text-text placeholder-text-3 backdrop-blur-sm resize-vertical min-h-[120px] ${
                        fieldErrors.message ? 'border-error' : 'border-border hover:border-border-light'
                      }`}
                      placeholder="Tell me about your project, opportunity, or just say hello..."
                    />
                    {fieldErrors.message && (
                      <div className="absolute right-3 top-3">
                        <AlertCircle className="w-5 h-5 text-error" />
                      </div>
                    )}
                  </div>
                  {fieldErrors.message && (
                    <p id="message-error" className="text-sm text-error flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {fieldErrors.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <Button
                    type="submit"
                    disabled={isSubmitting || !isFormValid}
                    className="w-full bg-gradient-to-r from-accent to-accent-light text-bg hover:from-accent-light hover:to-accent font-semibold px-8 py-4 rounded-xl text-lg transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg hover:shadow-accent/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none focus-enhanced"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 mr-3 border-2 border-bg border-t-transparent rounded-full animate-spin" />
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-3" />
                        Send Message
                      </>
                    )}
                  </Button>
                </div>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div className="p-4 bg-gradient-to-r from-success/10 to-success/5 border border-success/30 rounded-xl text-success text-center backdrop-blur-sm">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <CheckCircle className="w-5 h-5" />
                      <p className="font-semibold">Message Sent Successfully!</p>
                    </div>
                    <p className="text-sm text-success/80">Your email client should have opened. I&apos;ll get back to you within 24 hours.</p>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="p-4 bg-gradient-to-r from-error/10 to-error/5 border border-error/30 rounded-xl text-error text-center backdrop-blur-sm">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <AlertCircle className="w-5 h-5" />
                      <p className="font-semibold">Something went wrong</p>
                    </div>
                    <p className="text-sm text-error/80">Please try again or email me directly at nkvk@engineering.upenn.edu</p>
                  </div>
                )}
              </form>
            </div>
          </div>

          {/* Alternative Contact Methods */}
          <div className="text-center mt-8 space-y-4">
            <div className="flex items-center justify-center gap-4 text-sm text-text-2">
              <div className="h-px bg-border flex-1" />
              <span>Or reach out directly</span>
              <div className="h-px bg-border flex-1" />
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="mailto:nkvk@engineering.upenn.edu"
                className="inline-flex items-center gap-2 px-6 py-3 bg-surface/50 border border-border hover:border-accent/50 rounded-xl text-text-2 hover:text-accent transition-all duration-300 backdrop-blur-sm hover:bg-surface/70"
              >
                <Mail className="w-4 h-4" />
                nkvk@engineering.upenn.edu
              </a>
              
            </div>
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
