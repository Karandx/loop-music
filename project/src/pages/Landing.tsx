import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Music, 
  Globe, 
  DollarSign, 
  BarChart3, 
  Users, 
  CheckCircle, 
  Star,
  ArrowRight,
  Play,
  Upload,
  TrendingUp
} from 'lucide-react';
import Button from '../components/ui/Button';
import Card, { CardContent } from '../components/ui/Card';

const Landing: React.FC = () => {
  const features = [
    {
      icon: <Globe className="h-8 w-8 text-purple-600" />,
      title: 'Global Distribution',
      description: 'Distribute your music to 150+ platforms worldwide including Spotify, Apple Music, and YouTube Music.'
    },
    {
      icon: <DollarSign className="h-8 w-8 text-green-600" />,
      title: 'Keep 100% Royalties',
      description: 'No hidden fees. Keep all your earnings with transparent royalty tracking and fast payouts.'
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-blue-600" />,
      title: 'Advanced Analytics',
      description: 'Track your performance with detailed analytics, streaming data, and audience insights.'
    },
    {
      icon: <Users className="h-8 w-8 text-pink-600" />,
      title: 'Artist Support',
      description: '24/7 support from our team of music industry experts to help grow your career.'
    }
  ];

  const steps = [
    {
      icon: <Upload className="h-6 w-6" />,
      title: 'Upload Your Music',
      description: 'Upload your tracks, artwork, and metadata through our simple interface.'
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: 'Quality Review',
      description: 'Our team reviews your submission to ensure it meets platform standards.'
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: 'Global Distribution',
      description: 'Your music goes live on all major streaming platforms worldwide.'
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: 'Track Performance',
      description: 'Monitor streams, downloads, and earnings through your dashboard.'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Independent Artist',
      content: 'Loop Music helped me reach millions of listeners worldwide. The analytics are incredible and the support team is amazing!',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&dpr=2'
    },
    {
      name: 'Marcus Johnson',
      role: 'Producer',
      content: 'Best distribution service I\'ve used. Fast approval times and excellent royalty tracking. Highly recommended!',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/1553783/pexels-photo-1553783.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&dpr=2'
    },
    {
      name: 'Luna Rodriguez',
      role: 'Singer-Songwriter',
      content: 'The platform is so easy to use and the global reach is impressive. My music is now on every major platform!',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&dpr=2'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-900 via-purple-800 to-pink-800 text-white py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg')] bg-cover bg-center opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl">
                <Music className="h-16 w-16 text-white" />
              </div>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Distribute Your Music
              <span className="block bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent">
                Worldwide
              </span>
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Get your music on Spotify, Apple Music, YouTube Music, and 150+ platforms. 
              Keep 100% of your royalties with transparent tracking and fast payouts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/login">
                <Button size="lg" className="w-full sm:w-auto">
                  Get Started Free
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="w-full sm:w-auto bg-white/10 border-white/20 text-white hover:bg-white/20">
                <Play className="mr-2 h-4 w-4" />
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Loop Music?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to distribute, promote, and monetize your music globally.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} hover className="text-center h-full">
                <CardContent className="py-8">
                  <div className="flex justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get your music live in just 4 simple steps.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                    {step.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 bg-purple-100 text-purple-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Trusted by Artists Worldwide
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join thousands of artists who've grown their careers with Loop Music.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} hover className="h-full">
                <CardContent className="py-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="w-10 h-10 rounded-full mr-3"
                    />
                    <div>
                      <p className="font-semibold text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Share Your Music with the World?
          </h2>
          <p className="text-xl mb-8 text-purple-100 max-w-2xl mx-auto">
            Join Loop Music today and start distributing your music globally. 
            No upfront costs, keep 100% royalties.
          </p>
          <Link to="/login">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
              Start Distributing Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
              <p className="text-gray-400 mb-8 text-lg">
                Have questions? Our team is here to help you succeed.
              </p>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold">Email Support</h3>
                  <p className="text-gray-400">support@loopmusic.com</p>
                </div>
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p className="text-gray-400">+1 (555) 123-4567</p>
                </div>
                <div>
                  <h3 className="font-semibold">Business Hours</h3>
                  <p className="text-gray-400">Mon-Fri 9AM-6PM EST</p>
                </div>
              </div>
            </div>
            <div>
              <Card className="bg-gray-800 border-gray-700">
                <CardContent className="py-6">
                  <form className="space-y-4">
                    <div>
                      <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        placeholder="Your Email"
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <textarea
                        placeholder="Your Message"
                        rows={4}
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      />
                    </div>
                    <Button className="w-full">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;