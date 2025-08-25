import { motion } from 'motion/react';
import { Users, Target, Lightbulb, Award } from 'lucide-react';
import { Card, CardContent } from '../ui/card';
import { Footer } from '../Footer';
import hetavImage from 'figma:asset/5c78d02392d77c3bb8cc47724f4a7f43b2daba0d.png';

interface AboutPageProps {
  onNavigate?: (page: string) => void;
}

export function AboutPage({ onNavigate }: AboutPageProps) {
  const values = [
    {
      icon: <Target className="h-8 w-8" />,
      title: 'Innovation',
      description: 'We constantly push boundaries and explore new technologies to deliver cutting-edge solutions.'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Collaboration',
      description: 'Our diverse team brings together different perspectives to create exceptional results.'
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: 'Creativity',
      description: 'We believe in the power of creative thinking to solve complex problems and inspire change.'
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: 'Excellence',
      description: 'We are committed to delivering the highest quality in everything we do.'
    }
  ];

  const founder = {
    name: 'Hetav Shah',
    role: 'Founder & CEO',
    description: 'Visionary leader driving innovation in digital solutions and transforming ideas into reality through technology.',
    image: hetavImage
  };

  return (
    <div className="min-h-screen bg-[#050505]">
      <div className="pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <motion.div
            className="mb-20 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              About Harzino
            </h1>
            <p className="text-xl text-[#bebebc] max-w-3xl mx-auto leading-relaxed">
              We are a team of passionate innovators, designers, and developers dedicated to transforming 
              ideas into digital reality through cutting-edge technology and creative solutions.
            </p>
          </motion.div>

          {/* Mission Statement */}
          <motion.section
            className="mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <div className="bg-gradient-to-r from-[#dc0073]/10 to-purple-600/10 rounded-2xl p-8 md:p-12 border border-[#dc0073]/20">
              <h2 className="text-3xl font-bold text-center mb-6 text-white">Our Mission</h2>
              <p className="text-lg text-[#bebebc] text-center max-w-4xl mx-auto leading-relaxed">
                To bridge the gap between imagination and implementation, creating innovative digital solutions 
                that empower businesses and individuals to achieve their goals. We believe in the transformative 
                power of technology when combined with human creativity and strategic thinking.
              </p>
            </div>
          </motion.section>

          {/* Values */}
          <motion.section
            className="mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-center mb-12 text-white">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.6 }}
                >
                  <Card className="bg-[#0a0a0a] border-[#2a2a2a] hover:border-[#dc0073]/30 transition-all duration-300 h-full">
                    <CardContent className="p-6 text-center">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-[#dc0073]/10 text-[#dc0073] rounded-full mb-4">
                        {value.icon}
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                      <p className="text-[#bebebc] leading-relaxed">{value.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Founder */}
          <motion.section
            className="mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-center mb-12 text-white">Meet Our Founder</h2>
            <div className="flex justify-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
                className="max-w-sm"
              >
                <Card className="bg-[#0a0a0a] border-[#2a2a2a] hover:border-[#dc0073]/30 transition-all duration-300 overflow-hidden">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={founder.image}
                      alt={founder.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6 text-center">
                    <h3 className="text-xl font-semibold text-white mb-1">{founder.name}</h3>
                    <p className="text-[#dc0073] font-medium mb-3">{founder.role}</p>
                    <p className="text-[#bebebc] text-sm leading-relaxed">{founder.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.section>

          {/* Story Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <div className="bg-[#0a0a0a] rounded-2xl p-8 md:p-12 border border-[#2a2a2a]">
              <h2 className="text-3xl font-bold text-center mb-8 text-white">Our Story</h2>
              <div className="max-w-4xl mx-auto space-y-6 text-[#bebebc] leading-relaxed">
                <p>
                  Founded in 2020, Harzino emerged from a shared vision to democratize access to cutting-edge 
                  digital solutions. Under the leadership of founder Hetav Shah, and as part of the Harkeswanen 
                  ecosystem, we recognized the growing gap between innovative ideas and their practical implementation.
                </p>
                <p>
                  What started as a small team of passionate individuals has grown into a dynamic organization 
                  that serves clients across various industries, from startups to Fortune 500 companies. Our 
                  approach combines deep technical expertise with creative problem-solving, ensuring that every 
                  solution we deliver is both innovative and practical.
                </p>
                <p>
                  Today, we continue to push the boundaries of what's possible in digital innovation, always 
                  staying ahead of technological trends while maintaining our core focus on human-centered 
                  design and sustainable development practices.
                </p>
              </div>
            </div>
          </motion.section>
        </div>
      </div>
      
      {/* Footer */}
      <Footer onNavigate={onNavigate} />
    </div>
  );
}