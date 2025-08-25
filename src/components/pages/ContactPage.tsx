import { motion } from 'motion/react';
import { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle, Calendar, Phone } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Card, CardContent } from '../ui/card';
import { Footer } from '../Footer';
import { toast } from "sonner@2.0.3";

interface ContactPageProps {
  onNavigate?: (page: string) => void;
}

export function ContactPage({ onNavigate }: ContactPageProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [callData, setCallData] = useState({
    name: '',
    email: '',
    phone: '',
    reason: '',
    preferredTime: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCallSubmitted, setIsCallSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCallInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setCallData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Mock email sending functionality
    const emailContent = {
      to: 'contact.harzino@gmail.com',
      subject: formData.subject,
      body: `
        Name: ${formData.name}
        Email: ${formData.email}
        Subject: ${formData.subject}
        Message: ${formData.message}
      `
    };

    // Simulate sending email
    setTimeout(() => {
      console.log('Email would be sent to:', emailContent);
      toast.success("Message sent successfully! We'll get back to you within 24 hours.");
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1000);
  };

  const handleCallSchedule = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Mock call scheduling functionality
    const callRequest = {
      to: 'support@harzino.com',
      subject: 'Call Request - ' + callData.reason,
      body: `
        Call Request Details:
        Name: ${callData.name}
        Email: ${callData.email}
        Phone: ${callData.phone}
        Reason for Call: ${callData.reason}
        Preferred Time: ${callData.preferredTime}
        
        Please contact this person to schedule a call.
      `
    };

    // Simulate sending call request
    setTimeout(() => {
      console.log('Call request would be sent to:', callRequest);
      toast.success("Call request sent! We'll contact you within 24 hours to schedule.");
      setIsCallSubmitted(true);
      setCallData({ name: '', email: '', phone: '', reason: '', preferredTime: '' });
    }, 1000);
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: 'Email Us',
      details: 'support@harzino.com',
      description: 'Send us an email and we\'ll respond within 24 hours'
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: 'Our Location',
      details: 'Vadodara, Gujarat',
      description: 'We operate digitally from Gujarat, India'
    }
  ];

  return (
    <div className="min-h-screen bg-[#050505]">
      <div className="pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#dc0073] to-purple-500 bg-clip-text text-transparent">
                Get In Touch
              </span>
            </h1>
            <p className="text-xl text-[#bebebc] max-w-2xl mx-auto">
              Have a project in mind? We'd love to hear from you. Let's discuss how we can help 
              bring your ideas to life.
            </p>
          </motion.div>

          {/* Contact Info Cards */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="bg-[#0a0a0a] border-[#2a2a2a] hover:border-[#dc0073]/30 transition-all duration-300 h-full">
                  <CardContent className="p-6 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-[#dc0073]/10 text-[#dc0073] rounded-full mb-4">
                      {info.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{info.title}</h3>
                    <p className="text-[#dc0073] font-medium mb-2">{info.details}</p>
                    <p className="text-[#bebebc] text-sm">{info.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Form and Call Scheduling */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <Card className="bg-[#0a0a0a] border-[#2a2a2a]">
                <CardContent className="p-8">
                  {!isSubmitted ? (
                    <>
                      <h2 className="text-2xl font-bold text-white mb-6 text-center">
                        Send us a message
                      </h2>
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-[#bebebc] mb-2">
                            Name *
                          </label>
                          <Input
                            id="name"
                            name="name"
                            type="text"
                            required
                            value={formData.name}
                            onChange={handleInputChange}
                            className="bg-[#181818] border-[#353535] text-[#bebebc] placeholder-[#6b7280]"
                            placeholder="Your full name"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-[#bebebc] mb-2">
                            Email *
                          </label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={handleInputChange}
                            className="bg-[#181818] border-[#353535] text-[#bebebc] placeholder-[#6b7280]"
                            placeholder="your@email.com"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="subject" className="block text-sm font-medium text-[#bebebc] mb-2">
                            Subject *
                          </label>
                          <Input
                            id="subject"
                            name="subject"
                            type="text"
                            required
                            value={formData.subject}
                            onChange={handleInputChange}
                            className="bg-[#181818] border-[#353535] text-[#bebebc] placeholder-[#6b7280]"
                            placeholder="Project inquiry, consultation, etc."
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="message" className="block text-sm font-medium text-[#bebebc] mb-2">
                            Message *
                          </label>
                          <Textarea
                            id="message"
                            name="message"
                            required
                            rows={4}
                            value={formData.message}
                            onChange={handleInputChange}
                            className="bg-[#181818] border-[#353535] text-[#bebebc] placeholder-[#6b7280]"
                            placeholder="Tell us about your project, goals, and how we can help..."
                          />
                        </div>
                        
                        <motion.div
                          className="text-center"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Button
                            type="submit"
                            className="bg-gradient-to-r from-[#dc0073] to-purple-600 hover:from-[#b8005f] hover:to-purple-700 text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-[#dc0073]/25"
                          >
                            <Send className="h-5 w-5 mr-2" />
                            Send Message
                          </Button>
                        </motion.div>
                      </form>
                    </>
                  ) : (
                    <motion.div
                      className="text-center py-12"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                      <h3 className="text-2xl font-bold text-white mb-4">Message Sent!</h3>
                      <p className="text-[#bebebc] mb-6">
                        Thank you for reaching out. We'll get back to you within 24 hours.
                      </p>
                      <Button
                        onClick={() => setIsSubmitted(false)}
                        variant="outline"
                        className="border-[#dc0073] text-[#dc0073] hover:bg-[#dc0073] hover:text-white"
                      >
                        Send Another Message
                      </Button>
                    </motion.div>
                  )}
                </CardContent>
              </Card>
            </motion.div>

            {/* Schedule a Call */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <Card className="bg-[#0a0a0a] border-[#2a2a2a]">
                <CardContent className="p-8">
                  {!isCallSubmitted ? (
                    <>
                      <h2 className="text-2xl font-bold text-white mb-6 text-center">
                        Schedule a Call
                      </h2>
                      <form onSubmit={handleCallSchedule} className="space-y-6">
                        <div>
                          <label htmlFor="callName" className="block text-sm font-medium text-[#bebebc] mb-2">
                            Name *
                          </label>
                          <Input
                            id="callName"
                            name="name"
                            type="text"
                            required
                            value={callData.name}
                            onChange={handleCallInputChange}
                            className="bg-[#181818] border-[#353535] text-[#bebebc] placeholder-[#6b7280]"
                            placeholder="Your full name"
                          />
                        </div>
                        <div>
                          <label htmlFor="callEmail" className="block text-sm font-medium text-[#bebebc] mb-2">
                            Email *
                          </label>
                          <Input
                            id="callEmail"
                            name="email"
                            type="email"
                            required
                            value={callData.email}
                            onChange={handleCallInputChange}
                            className="bg-[#181818] border-[#353535] text-[#bebebc] placeholder-[#6b7280]"
                            placeholder="your@email.com"
                          />
                        </div>
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-[#bebebc] mb-2">
                            Phone Number *
                          </label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            required
                            value={callData.phone}
                            onChange={handleCallInputChange}
                            className="bg-[#181818] border-[#353535] text-[#bebebc] placeholder-[#6b7280]"
                            placeholder="+1 (555) 123-4567"
                          />
                        </div>
                        <div>
                          <label htmlFor="preferredTime" className="block text-sm font-medium text-[#bebebc] mb-2">
                            Preferred Time
                          </label>
                          <Input
                            id="preferredTime"
                            name="preferredTime"
                            type="text"
                            value={callData.preferredTime}
                            onChange={handleCallInputChange}
                            className="bg-[#181818] border-[#353535] text-[#bebebc] placeholder-[#6b7280]"
                            placeholder="e.g., Mon-Fri 2-4 PM EST"
                          />
                        </div>
                        <div>
                          <label htmlFor="reason" className="block text-sm font-medium text-[#bebebc] mb-2">
                            Reason for Call *
                          </label>
                          <Textarea
                            id="reason"
                            name="reason"
                            required
                            rows={3}
                            value={callData.reason}
                            onChange={handleCallInputChange}
                            className="bg-[#181818] border-[#353535] text-[#bebebc] placeholder-[#6b7280]"
                            placeholder="Brief description of what you'd like to discuss..."
                          />
                        </div>
                        
                        <motion.div
                          className="text-center"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Button
                            type="submit"
                            className="bg-gradient-to-r from-purple-600 to-[#dc0073] hover:from-purple-700 hover:to-[#b8005f] text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-purple-600/25"
                          >
                            <Calendar className="h-5 w-5 mr-2" />
                            Request Call
                          </Button>
                        </motion.div>
                      </form>
                    </>
                  ) : (
                    <motion.div
                      className="text-center py-12"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Phone className="h-16 w-16 text-green-500 mx-auto mb-4" />
                      <h3 className="text-2xl font-bold text-white mb-4">Call Requested!</h3>
                      <p className="text-[#bebebc] mb-6">
                        We've received your call request. We'll contact you within 24 hours to schedule.
                      </p>
                      <Button
                        onClick={() => setIsCallSubmitted(false)}
                        variant="outline"
                        className="border-[#dc0073] text-[#dc0073] hover:bg-[#dc0073] hover:text-white"
                      >
                        Schedule Another Call
                      </Button>
                    </motion.div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Additional Info */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <div className="bg-gradient-to-r from-[#dc0073]/10 to-purple-600/10 rounded-2xl p-8 border border-[#dc0073]/20">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Start Your Project?</h3>
              <p className="text-[#bebebc] mb-6 max-w-2xl mx-auto">
                Whether you're looking to build a new application, redesign your website, or explore 
                innovative solutions, we're here to help turn your vision into reality.
              </p>
              <Button 
                variant="outline" 
                className="border-[#dc0073] text-[#dc0073] hover:bg-[#dc0073] hover:text-white px-8 py-3"
                onClick={() => onNavigate?.('blogs')}
              >
                View Our Work
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Footer */}
      <Footer onNavigate={onNavigate} />
    </div>
  );
}