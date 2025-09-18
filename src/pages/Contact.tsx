import { MapPin, Phone, Mail, Calendar, Clock, Users, MessageCircle, Send, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import Layout from '@/components/Layout';

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: 'Email Us',
      value: 'esports@dhchen.edu',
      description: 'For general inquiries and membership questions',
      color: 'primary',
    },
    {
      icon: Phone,
      title: 'Call Us',
      value: '+1 (555) 123-GAME',
      description: 'Available during club hours and events',
      color: 'secondary',
    },
    {
      icon: MessageCircle,
      title: 'Discord',
      value: 'DHCC E-Sports Server',
      description: 'Join our active gaming community chat',
      color: 'accent',
    },
    {
      icon: Users,
      title: 'In Person',
      value: 'Fridays 4-8 PM',
      description: 'Visit us during regular club meetings',
      color: 'gaming-purple',
    },
  ];

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#', color: 'text-primary' },
    { name: 'Twitter', icon: Twitter, href: '#', color: 'text-secondary' },
    { name: 'Instagram', icon: Instagram, href: '#', color: 'text-accent' },
    { name: 'YouTube', icon: Youtube, href: '#', color: 'text-gaming-purple' },
  ];

  const clubOfficers = [
    {
      name: 'Marcus Rodriguez',
      role: 'Club President',
      email: 'president@dhcesports.com',
      specialties: ['FIFA', 'F1', 'Club Management'],
    },
    {
      name: 'Sarah Chen',
      role: 'Tournament Director',
      email: 'tournaments@dhcesports.com',
      specialties: ['Call of Duty', 'Valorant', 'Event Planning'],
    },
    {
      name: 'David Wilson',
      role: 'Training Coordinator',
      email: 'training@dhcesports.com',
      specialties: ['Fighting Games', 'Skill Development'],
    },
    {
      name: 'Taylor Brooks',
      role: 'Community Manager',
      email: 'community@dhcesports.com',
      specialties: ['Social Media', 'Member Relations'],
    },
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'primary':
        return 'text-primary border-primary/30 bg-primary/10';
      case 'secondary':
        return 'text-secondary border-secondary/30 bg-secondary/10';
      case 'accent':
        return 'text-accent border-accent/30 bg-accent/10';
      case 'gaming-purple':
        return 'text-gaming-purple border-gaming-purple/30 bg-gaming-purple/10';
      default:
        return 'text-primary border-primary/30 bg-primary/10';
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 cyber-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-orbitron font-black text-5xl md:text-6xl mb-6">
            <span className="text-glow-blue">Get In</span>{' '}
            <span className="text-glow-green">Touch</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to join the action? Have questions about our tournaments? 
            Want to learn more about our community? We're here to help!
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="font-orbitron font-bold text-4xl text-glow-blue">
              Multiple Ways to Connect
            </h2>
            <p className="text-lg text-muted-foreground">
              Choose the method that works best for you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method) => {
              const Icon = method.icon;
              return (
                <div key={method.title} className="card-cyber text-center space-y-4 hover:scale-105 transition-transform duration-300">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl border-2 ${getColorClasses(method.color)}`}>
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="font-orbitron font-bold text-xl">{method.title}</h3>
                  <div className={`font-medium ${method.color === 'primary' ? 'text-primary' : method.color === 'secondary' ? 'text-secondary' : method.color === 'accent' ? 'text-accent' : 'text-gaming-purple'}`}>
                    {method.value}
                  </div>
                  <p className="text-muted-foreground text-sm">{method.description}</p>
                  <button className="btn-neon text-sm w-full">
                    Contact via {method.title.split(' ')[0]}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Meeting Information */}
      <section className="py-20 bg-muted/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="font-orbitron font-bold text-4xl text-glow-green">
                Visit Us in Person
              </h2>
              <p className="text-lg text-muted-foreground">
                Come experience our gaming setup firsthand. Meet our members, try out our equipment, 
                and see if DHCC E-Sports is the right fit for you.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Calendar className="h-6 w-6 text-primary" />
                  <div>
                    <div className="font-orbitron font-bold">Regular Meetings</div>
                    <div className="text-muted-foreground">Every Friday</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Clock className="h-6 w-6 text-secondary" />
                  <div>
                    <div className="font-orbitron font-bold">Meeting Hours</div>
                    <div className="text-muted-foreground">4:00 PM - 8:00 PM</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <MapPin className="h-6 w-6 text-accent" />
                  <div>
                    <div className="font-orbitron font-bold">Location</div>
                    <div className="text-muted-foreground">D.H. Chen College Computer Lab, Room 205</div>
                  </div>
                </div>
              </div>

              <button className="btn-cyber flex items-center">
                Get Directions
                <MapPin className="ml-2 h-5 w-5" />
              </button>
            </div>

            <div className="card-cyber p-8">
              <h3 className="font-orbitron font-bold text-2xl mb-6 text-glow-blue">
                What to Expect
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <div className="font-medium">Welcome & Introduction</div>
                    <div className="text-sm text-muted-foreground">Meet our members and learn about our community</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2"></div>
                  <div>
                    <div className="font-medium">Equipment Demo</div>
                    <div className="text-sm text-muted-foreground">Try out our high-end gaming setups</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                  <div>
                    <div className="font-medium">Games & Activities</div>
                    <div className="text-sm text-muted-foreground">Participate in casual matches and tournaments</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gaming-purple rounded-full mt-2"></div>
                  <div>
                    <div className="font-medium">Q&A Session</div>
                    <div className="text-sm text-muted-foreground">Ask questions about membership and opportunities</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="font-orbitron font-bold text-4xl text-glow-blue">
              Send Us a Message
            </h2>
            <p className="text-lg text-muted-foreground">
              Have a specific question? Send us a message and we'll get back to you within 24 hours.
            </p>
          </div>

          <div className="card-cyber p-8">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">First Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-muted/50 border border-primary/20 rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:shadow-glow-blue transition-all duration-300"
                    placeholder="Enter your first name"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Last Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-muted/50 border border-primary/20 rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:shadow-glow-blue transition-all duration-300"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Email Address</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-muted/50 border border-primary/20 rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:shadow-glow-blue transition-all duration-300"
                  placeholder="Enter your email address"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Subject</label>
                <select className="w-full px-4 py-3 bg-muted/50 border border-primary/20 rounded-lg text-foreground focus:outline-none focus:border-primary focus:shadow-glow-blue transition-all duration-300">
                  <option>General Inquiry</option>
                  <option>Membership Question</option>
                  <option>Tournament Information</option>
                  <option>Equipment Access</option>
                  <option>Partnership Opportunity</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Message</label>
                <textarea
                  rows={6}
                  className="w-full px-4 py-3 bg-muted/50 border border-primary/20 rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:shadow-glow-blue transition-all duration-300 resize-none"
                  placeholder="Tell us about your interest in joining DHCC E-Sports, your gaming experience, or any questions you have..."
                ></textarea>
              </div>

              <button type="submit" className="w-full btn-cyber flex items-center justify-center">
                Send Message
                <Send className="ml-2 h-5 w-5" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Club Officers */}
      <section className="py-20 bg-muted/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="font-orbitron font-bold text-4xl text-glow-green">
              Contact Our Officers
            </h2>
            <p className="text-lg text-muted-foreground">
              Reach out to specific officers for specialized inquiries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {clubOfficers.map((officer, index) => (
              <div key={officer.name} className="card-cyber text-center space-y-4">
                <div className="space-y-2">
                  <h3 className="font-orbitron font-bold text-lg">{officer.name}</h3>
                  <div className="text-primary text-sm font-medium">{officer.role}</div>
                </div>
                
                <div className="space-y-2">
                  <div className="text-sm text-muted-foreground">Specialties:</div>
                  <div className="flex flex-wrap gap-1 justify-center">
                    {officer.specialties.map((specialty) => (
                      <span
                        key={specialty}
                        className="px-2 py-1 bg-secondary/20 text-secondary text-xs rounded-full"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                <button className="btn-neon text-sm w-full">
                  Email {officer.name.split(' ')[0]}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <h2 className="font-orbitron font-bold text-3xl text-glow-blue">
              Follow Our Journey
            </h2>
            <p className="text-lg text-muted-foreground">
              Stay connected and never miss an update from the DHCC E-Sports community
            </p>
            
            <div className="flex justify-center space-x-6">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className={`group p-4 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 hover:border-primary/40 hover:scale-110 transition-all duration-300 ${social.color}`}
                    aria-label={social.name}
                  >
                    <Icon className="h-8 w-8 group-hover:scale-110 transition-transform duration-300" />
                  </a>
                );
              })}
            </div>

            <div className="card-cyber p-6">
              <h3 className="font-orbitron font-bold text-xl mb-4">Quick Response Times</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div>
                  <div className="font-medium text-primary">Email</div>
                  <div className="text-muted-foreground">Within 24 hours</div>
                </div>
                <div>
                  <div className="font-medium text-secondary">Discord</div>
                  <div className="text-muted-foreground">Within 2 hours</div>
                </div>
                <div>
                  <div className="font-medium text-accent">In Person</div>
                  <div className="text-muted-foreground">Fridays 4-8 PM</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;