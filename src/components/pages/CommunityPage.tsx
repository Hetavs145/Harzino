import { motion } from "motion/react";
import { Users, MessageSquare, Heart, Zap, Github, Twitter, MessageCircle } from "lucide-react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Footer } from "../Footer";

interface CommunityPageProps {
  onNavigate: (page: string) => void;
}

export function CommunityPage({ onNavigate }: CommunityPageProps) {
  const communityStats = [
    { label: "Active Members", value: "12.5K+", icon: <Users className="h-6 w-6" /> },
    { label: "Discussions", value: "3.2K+", icon: <MessageSquare className="h-6 w-6" /> },
    { label: "Projects Shared", value: "850+", icon: <Heart className="h-6 w-6" /> },
    { label: "Solutions Created", value: "1.8K+", icon: <Zap className="h-6 w-6" /> }
  ];

  const communityChannels = [
    {
      name: "Discord Community",
      description: "Join our Discord server for real-time discussions, help, and collaboration.",
      icon: <MessageCircle className="h-8 w-8" />,
      members: "8.5K members",
      action: "Join Discord",
      color: "from-[#5865F2] to-[#7289DA]"
    },
    {
      name: "GitHub Community",
      description: "Contribute to open-source projects and share your code with the community.",
      icon: <Github className="h-8 w-8" />,
      members: "2.1K contributors",
      action: "View on GitHub",
      color: "from-[#24292e] to-[#586069]"
    },
    {
      name: "Twitter Community",
      description: "Follow us for updates, tips, and engage with the community on Twitter.",
      icon: <Twitter className="h-8 w-8" />,
      members: "15.2K followers",
      action: "Follow us",
      color: "from-[#1DA1F2] to-[#0d8bd9]"
    }
  ];

  const featuredTopics = [
    {
      title: "Web Development",
      description: "Discuss modern web technologies, frameworks, and best practices.",
      posts: 324,
      color: "bg-gradient-to-r from-[#dc0073]/10 to-purple-600/10"
    },
    {
      title: "UI/UX Design",
      description: "Share design insights, get feedback, and showcase your work.",
      posts: 186,
      color: "bg-gradient-to-r from-blue-600/10 to-cyan-600/10"
    },
    {
      title: "Career & Growth",
      description: "Career advice, job opportunities, and professional development.",
      posts: 98,
      color: "bg-gradient-to-r from-green-600/10 to-emerald-600/10"
    },
    {
      title: "Project Showcase",
      description: "Show off your latest projects and get valuable feedback.",
      posts: 142,
      color: "bg-gradient-to-r from-orange-600/10 to-red-600/10"
    }
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-white">Join Our </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#dc0073] to-purple-600">
                Community
              </span>
            </h1>
            <p className="text-xl text-[#bebebc] max-w-3xl mx-auto mb-8 leading-relaxed">
              Connect with developers, designers, and innovators from around the world. 
              Share knowledge, collaborate on projects, and grow together.
            </p>
            <Button 
              className="bg-gradient-to-r from-[#dc0073] to-purple-600 hover:from-[#b8005f] hover:to-purple-700 text-white px-8 py-3 text-lg rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-[#dc0073]/25"
            >
              Get Started
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Community Stats */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {communityStats.map((stat, index) => (
              <div key={stat.label}>
                <Card className="bg-[#0f0f0f] border-[#2a2a2a] p-6 text-center hover:border-[#dc0073]/30 transition-colors duration-300">
                  <div className="flex justify-center mb-4 text-[#dc0073]">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-[#bebebc]">{stat.label}</div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Channels */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Connect With Us</h2>
            <p className="text-xl text-[#bebebc] max-w-2xl mx-auto">
              Choose your preferred platform to join our growing community
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {communityChannels.map((channel, index) => (
              <div key={channel.name}>
                <Card className="bg-[#0f0f0f] border-[#2a2a2a] p-6 h-full hover:border-[#dc0073]/30 transition-all duration-300 hover:transform hover:scale-105">
                  <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${channel.color} mb-4`}>
                    <div className="text-white">
                      {channel.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{channel.name}</h3>
                  <p className="text-[#bebebc] mb-4 leading-relaxed">{channel.description}</p>
                  <div className="text-sm text-[#dc0073] mb-6">{channel.members}</div>
                  <Button 
                    className="w-full bg-transparent border border-[#dc0073] text-[#dc0073] hover:bg-[#dc0073] hover:text-white transition-all duration-300"
                  >
                    {channel.action}
                  </Button>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Topics */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Popular Topics</h2>
            <p className="text-xl text-[#bebebc] max-w-2xl mx-auto">
              Explore the most active discussions in our community
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredTopics.map((topic, index) => (
              <div key={topic.title}>
                <Card className={`bg-[#0f0f0f] border-[#2a2a2a] p-6 hover:border-[#dc0073]/30 transition-all duration-300 ${topic.color}`}>
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-white">{topic.title}</h3>
                    <span className="text-sm text-[#dc0073] bg-[#dc0073]/10 px-3 py-1 rounded-full">
                      {topic.posts} posts
                    </span>
                  </div>
                  <p className="text-[#bebebc] leading-relaxed">{topic.description}</p>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-[#dc0073]/10 to-purple-600/10 rounded-2xl p-8 border border-[#dc0073]/20"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-[#bebebc] mb-8 max-w-2xl mx-auto">
              Join thousands of developers and creators who are building the future together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-gradient-to-r from-[#dc0073] to-purple-600 hover:from-[#b8005f] hover:to-purple-700 text-white px-8 py-3 text-lg rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-[#dc0073]/25"
              >
                Join Community
              </Button>
              <Button 
                variant="outline"
                onClick={() => onNavigate('contact')}
                className="border-[#dc0073] text-[#dc0073] hover:bg-[#dc0073] hover:text-white px-8 py-3 text-lg rounded-full transition-all duration-300"
              >
                Contact Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer onNavigate={onNavigate} />
    </div>
  );
}