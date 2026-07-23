import { useState } from 'react';
import { Mail, CheckCircle } from 'lucide-react';
import BentoCard from '../UI/BentoCard';

export default function ContactCard() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    
    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          access_key: "00f5f66d-7f09-4ef9-80c7-a20853e618b6",
          name: formState.name,
          email: formState.email,
          message: formState.message,
          subject: `New Portfolio Message from ${formState.name}`
        })
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setIsSubmitted(true);
        setFormState({ name: '', email: '', message: '' });
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        setErrorMessage(result.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setErrorMessage('Failed to send message. Please check your connection and try again.');
      console.error('Contact Form Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e) => setFormState(prev => ({ ...prev, [e.target.name]: e.target.value }));

  return (
    <BentoCard id="contact" className="col-span-4 row-span-1 contact-card">
      <h3 className="card-title"><Mail size={20} /> Get in Touch</h3>
      {isSubmitted ? (
        <div className="form-success-message" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '80%' }}>
          <CheckCircle size={40} style={{ marginBottom: '1rem', color: '#4ade80' }} />
          <h4 style={{ color: '#4ade80', marginBottom: '0.5rem' }}>Message Sent!</h4>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Thank you for reaching out. I'll get back to you shortly.</p>
        </div>
      ) : (
        <form onSubmit={handleFormSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" value={formState.name} onChange={handleInputChange} required className="form-input" placeholder="Your Name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" value={formState.email} onChange={handleInputChange} required className="form-input" placeholder="your.email@example.com" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" value={formState.message} onChange={handleInputChange} required className="form-textarea" placeholder="Let's build something great..." />
          </div>
          {errorMessage && (
            <div className="form-error-message" style={{ color: '#f87171', fontSize: '0.85rem', marginTop: '0.25rem', marginBottom: '0.25rem', textAlign: 'center' }}>
              {errorMessage}
            </div>
          )}
          <button type="submit" disabled={isSubmitting} className="form-submit-btn">
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      )}
    </BentoCard>
  );
}