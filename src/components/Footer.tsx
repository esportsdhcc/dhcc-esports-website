import { Link } from 'react-router-dom';
import { Gamepad2, Trophy, Users, Phone, Mail, MapPin, Calendar, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import clubLogo from '@/assets/club-logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About Us', href: '/about', icon: Users },
    { name: 'Games', href: '/games', icon: Gamepad2 },
    { name: 'Tournaments', href: '/tournaments', icon: Trophy },
    { name: 'Join Us', href: '/join', icon: Users },
  ];

  const contactInfo = [
    { label: 'Meeting Times', value: 'Every Friday 4:00 PM - 8:00 PM', icon: Calendar },
    { label: 'Location', value: 'D.H. Chen College Computer Lab', icon: MapPin },
    { label: 'Email', value: 'esports@dhchen.edu', icon: Mail },
    { label: 'Phone', value: '+1 (555) 123-GAME', icon: Phone },
  ];

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#' },
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' },
    { name: 'YouTube', icon: Youtube, href: '#' },
  ];

  return (
    <footer className="bg-dark-gradient border-t border-primary/20 cyber-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Club Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src={clubLogo} 
                alt="D.H. Chen E-Sports Club" 
                className="h-10 w-10"
              />
              <div className="font-orbitron font-bold text-lg text-glow-blue">
                DHC E-SPORTS
              </div>
            </div>
            <p className="text-muted-foreground text-sm">
              The premier e-sports club at D.H. Chen College. Join us for competitive gaming, 
              tournaments, and an amazing community of gamers.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className="p-2 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 hover:shadow-glow-blue transition-all duration-300"
                    aria-label={social.name}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-orbitron font-bold text-lg text-secondary text-glow-green">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors group"
                    >
                      <Icon className="h-4 w-4 group-hover:text-primary" />
                      <span>{link.name}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-orbitron font-bold text-lg text-accent text-glow-pink">
              Contact Info
            </h3>
            <ul className="space-y-3">
              {contactInfo.map((info) => {
                const Icon = info.icon;
                return (
                  <li key={info.label} className="flex items-start space-x-3">
                    <Icon className="h-5 w-5 text-gaming-purple mt-0.5" />
                    <div>
                      <div className="text-sm font-medium text-foreground">{info.label}</div>
                      <div className="text-sm text-muted-foreground">{info.value}</div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="font-orbitron font-bold text-lg text-gaming-purple">
              Stay Updated
            </h3>
            <p className="text-muted-foreground text-sm">
              Get the latest updates on tournaments, events, and club news.
            </p>
            <div className="space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 bg-muted/50 border border-primary/20 rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:shadow-glow-blue transition-all duration-300"
              />
              <button className="w-full btn-cyber text-sm">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              © {currentYear} D.H. Chen College E-Sports Club. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-primary transition-colors">Code of Conduct</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;