import { useState } from "react";
import { Users, MessageSquare, Heart, Zap, X, CheckCircle } from "lucide-react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Footer } from "../Footer";
import { motion, AnimatePresence } from "motion/react";
import { toast } from "sonner@2.0.3";

interface CommunityPageProps {
  onNavigate: (page: string) => void;
}

export function CommunityPageSimple({ onNavigate }: CommunityPageProps) {
  const [showJoinModal, setShowJoinModal] = useState(false);
  const [joinData, setJoinData] = useState({
    name: '',
    email: '',
    expertise: '',
    interests: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const communityStats = [
    { label: "Active Members", value: "12.5K+", icon: <Users className="h-6 w-6" /> },
    { label: "Discussions", value: "3.2K+", icon: <MessageSquare className="h-6 w-6" /> },
    { label: "Projects Shared", value: "850+", icon: <Heart className="h-6 w-6" /> },
    { label: "Solutions Created", value: "1.8K+", icon: <Zap className="h-6 w-6" /> }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setJoinData(prev => ({ ...prev, [name]: value }));
  };

  const handleJoinSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Mock community join functionality
    const joinRequest = {
      to: 'community@harzino.com',
      subject: 'New Community Member Request',
      body: `
        New Community Join Request:
        Name: ${joinData.name}
        Email: ${joinData.email}
        Expertise: ${joinData.expertise}
        Interests: ${joinData.interests}
        
        Please add this member to the Harzino community.
      `
    };

    // Simulate sending join request
    setTimeout(() => {
      console.log('Community join request would be sent to:', joinRequest);
      toast.success("Welcome to the Harzino community! Check your email for next steps.");
      setIsSubmitted(true);
      setJoinData({ name: '', email: '', expertise: '', interests: '' });
    }, 1000);
  };

  const handleGetStarted = () => {
    setShowJoinModal(true);
  };

  const closeModal = () => {
    setShowJoinModal(false);
    setIsSubmitted(false);
    setJoinData({ name: '', email: '', expertise: '', interests: '' });
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-white">Join Our </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#dc0073] to-purple-600">
              Community
            </span>
          </h1>
          <p className="text-xl text-[#bebebc] max-w-3xl mx-auto mb-8 leading-relaxed">
            Connect with developers, designers, and innovators from around the world. Share your projects, get feedback, and collaborate on exciting new ideas.
          </p>
          <Button 
            onClick={handleGetStarted}
            className="bg-gradient-to-r from-[#dc0073] to-purple-600 hover:from-[#b8005f] hover:to-purple-700 text-white px-8 py-3 text-lg rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-[#dc0073]/25"
          >
            Get Started
          </Button>
        </div>
      </section>

      {/* Community Stats */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Community at a Glance</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {communityStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <Card className="bg-[#0f0f0f] border-[#2a2a2a] hover:border-[#dc0073]/30 transition-all duration-300 p-6 text-center">
                  <div className="flex justify-center mb-4 text-[#dc0073]">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-[#bebebc]">{stat.label}</div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Why Join Harzino Community?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-[#0f0f0f] border-[#2a2a2a] p-6">
              <Users className="h-12 w-12 text-[#dc0073] mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Connect & Network</h3>
              <p className="text-[#bebebc]">Meet like-minded professionals and build lasting relationships in the tech community.</p>
            </Card>
            <Card className="bg-[#0f0f0f] border-[#2a2a2a] p-6">
              <MessageSquare className="h-12 w-12 text-[#dc0073] mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Share & Learn</h3>
              <p className="text-[#bebebc]">Share your projects, get feedback, and learn from the experiences of others.</p>
            </Card>
            <Card className="bg-[#0f0f0f] border-[#2a2a2a] p-6">
              <Zap className="h-12 w-12 text-[#dc0073] mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Collaborate</h3>
              <p className="text-[#bebebc]">Find collaborators for your next big project and contribute to open-source initiatives.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Join Modal */}
      <AnimatePresence>
        {showJoinModal && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-[#0a0a0a] border border-[#2a2a2a] rounded-2xl p-8 w-full max-w-md relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-[#6b7280] hover:text-white transition-colors"
              >
                <X className="h-6 w-6" />
              </button>

              {!isSubmitted ? (
                <>
                  <h2 className="text-2xl font-bold text-white mb-6 text-center">
                    Join Our Community
                  </h2>
                  <form onSubmit={handleJoinSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="joinName" className="block text-sm font-medium text-[#bebebc] mb-2">
                        Full Name *
                      </label>
                      <Input
                        id="joinName"
                        name="name"
                        type="text"
                        required
                        value={joinData.name}
                        onChange={handleInputChange}
                        className="bg-[#181818] border-[#353535] text-[#bebebc] placeholder-[#6b7280]"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="joinEmail" className="block text-sm font-medium text-[#bebebc] mb-2">
                        Email *
                      </label>
                      <Input
                        id="joinEmail"
                        name="email"
                        type="email"
                        required
                        value={joinData.email}
                        onChange={handleInputChange}
                        className="bg-[#181818] border-[#353535] text-[#bebebc] placeholder-[#6b7280]"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="expertise" className="block text-sm font-medium text-[#bebebc] mb-2">
                        Your Expertise
                      </label>
                      <Input
                        id="expertise"
                        name="expertise"
                        type="text"
                        value={joinData.expertise}
                        onChange={handleInputChange}
                        className="bg-[#181818] border-[#353535] text-[#bebebc] placeholder-[#6b7280]"
                        placeholder="e.g., React Developer, UI Designer"
                      />
                    </div>
                    <div>
                      <label htmlFor="interests" className="block text-sm font-medium text-[#bebebc] mb-2">
                        Interests
                      </label>
                      <Textarea
                        id="interests"
                        name="interests"
                        rows={3}
                        value={joinData.interests}
                        onChange={handleInputChange}
                        className="bg-[#181818] border-[#353535] text-[#bebebc] placeholder-[#6b7280]"
                        placeholder="What are you interested in learning or discussing?"
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-[#dc0073] to-purple-600 hover:from-[#b8005f] hover:to-purple-700 text-white py-3 rounded-full transition-all duration-300"
                    >
                      Join Community
                    </Button>
                  </form>
                </>
              ) : (
                <motion.div
                  className="text-center py-8"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                >
                  <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-4">Welcome!</h3>
                  <p className="text-[#bebebc] mb-6">
                    You've successfully joined the Harzino community. Check your email for next steps.
                  </p>
                  <Button
                    onClick={closeModal}
                    className="bg-[#dc0073] hover:bg-[#b8005f] text-white px-6 py-2 rounded-full"
                  >
                    Close
                  </Button>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer onNavigate={onNavigate} />
    </div>
  );
}