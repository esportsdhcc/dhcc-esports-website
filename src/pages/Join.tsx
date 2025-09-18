import { Users, Trophy, Gamepad2, Star, CheckCircle, Clock, MapPin, Calendar, Mail, Phone, ChevronRight } from 'lucide-react';
import Layout from '@/components/Layout';

const Join = () => {
  const membershipTiers = [
    {
      name: 'Casual Gamer',
      price: 'Free',
      description: 'Perfect for beginners and casual players',
      features: [
        'Access to club events',
        'Casual gaming sessions',
        'Basic mentorship',
        'Discord community access',
        'Monthly social events',
      ],
      color: 'secondary',
      popular: false,
    },
    {
      name: 'Competitive Player',
      price: '$25/semester',
      description: 'For serious gamers ready to compete',
      features: [
        'All Casual Gamer benefits',
        'Tournament participation',
        'Team placement assistance',
        'Advanced coaching sessions',
        'Equipment priority access',
        'Competition travel opportunities',
      ],
      color: 'primary',
      popular: true,
    },
    {
      name: 'Elite Champion',
      price: '$50/semester',
      description: 'Maximum support for aspiring pros',
      features: [
        'All Competitive Player benefits',
        'One-on-one coaching',
        'Professional equipment access',
        'Scholarship opportunities',
        'Tournament entry fee coverage',
        'Sponsored team placement',
        'Leadership development',
      ],
      color: 'accent',
      popular: false,
    },
  ];

  const requirements = [
    {
      title: 'Enrollment Status',
      description: 'Must be currently enrolled at D.H. Chen College',
      icon: '🎓',
    },
    {
      title: 'Good Academic Standing',
      description: 'Maintain a minimum 2.5 GPA to participate',
      icon: '📚',
    },
    {
      title: 'Code of Conduct',
      description: 'Agree to follow our gaming ethics and behavior standards',
      icon: '🤝',
    },
    {
      title: 'Time Commitment',
      description: 'Attend at least 2 club meetings per month',
      icon: '⏰',
    },
  ];

  const applicationSteps = [
    {
      step: 1,
      title: 'Fill Application',
      description: 'Complete our online membership application form',
      icon: '📝',
    },
    {
      step: 2,
      title: 'Skill Assessment',
      description: 'Optional gaming skill evaluation for team placement',
      icon: '🎮',
    },
    {
      step: 3,
      title: 'Meet & Greet',
      description: 'Attend a welcome session and meet current members',
      icon: '👋',
    },
    {
      step: 4,
      title: 'Start Gaming',
      description: 'Begin participating in events and tournaments',
      icon: '🚀',
    },
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'primary':
        return 'border-primary/50 bg-primary/10 text-primary shadow-glow-blue';
      case 'secondary':
        return 'border-secondary/50 bg-secondary/10 text-secondary shadow-glow-green';
      case 'accent':
        return 'border-accent/50 bg-accent/10 text-accent shadow-glow-pink';
      default:
        return 'border-primary/50 bg-primary/10 text-primary shadow-glow-blue';
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 cyber-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-orbitron font-black text-5xl md:text-6xl mb-6">
            <span className="text-glow-blue">Join</span>{' '}
            <span className="text-glow-green">The Elite</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to level up your gaming experience? Join the most prestigious e-sports 
            community at D.H. Chen College and unlock your competitive potential.
          </p>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="font-orbitron font-bold text-4xl text-glow-blue">
              Why Join DHC E-Sports?
            </h2>
            <p className="text-lg text-muted-foreground">
              More than just a gaming club - we're a family of champions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card-cyber text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20">
                <Trophy className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-orbitron font-bold text-xl text-primary">Competitive Excellence</h3>
              <p className="text-muted-foreground text-sm">
                Train with champions, compete in tournaments, and develop professional-level skills.
              </p>
            </div>

            <div className="card-cyber text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-secondary/20 to-accent/20">
                <Users className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="font-orbitron font-bold text-xl text-secondary">Amazing Community</h3>
              <p className="text-muted-foreground text-sm">
                Connect with like-minded gamers, form lasting friendships, and be part of something bigger.
              </p>
            </div>

            <div className="card-cyber text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-accent/20 to-gaming-purple/20">
                <Gamepad2 className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-orbitron font-bold text-xl text-accent">Premium Equipment</h3>
              <p className="text-muted-foreground text-sm">
                Access to high-end gaming rigs, professional peripherals, and the latest gaming technology.
              </p>
            </div>

            <div className="card-cyber text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-gaming-purple/20 to-primary/20">
                <Star className="h-8 w-8 text-gaming-purple" />
              </div>
              <h3 className="font-orbitron font-bold text-xl text-gaming-purple">Growth Opportunities</h3>
              <p className="text-muted-foreground text-sm">
                Develop leadership skills, gain scholarships, and explore career paths in the gaming industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Membership Tiers */}
      <section className="py-20 bg-muted/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="font-orbitron font-bold text-4xl text-glow-green">
              Membership Options
            </h2>
            <p className="text-lg text-muted-foreground">
              Choose the membership level that fits your gaming goals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {membershipTiers.map((tier) => (
              <div key={tier.name} className={`card-cyber relative ${tier.popular ? 'scale-105 ' + getColorClasses(tier.color) : ''}`}>
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-bold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="space-y-6">
                  <div className="text-center space-y-2">
                    <h3 className="font-orbitron font-bold text-2xl">{tier.name}</h3>
                    <div className="font-orbitron font-bold text-3xl text-primary">{tier.price}</div>
                    <p className="text-muted-foreground text-sm">{tier.description}</p>
                  </div>

                  <ul className="space-y-3">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full ${tier.popular ? 'btn-cyber' : 'btn-neon'}`}>
                    Choose {tier.name}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="font-orbitron font-bold text-4xl text-glow-blue">
              Membership Requirements
            </h2>
            <p className="text-lg text-muted-foreground">
              Simple requirements to ensure a positive experience for everyone
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {requirements.map((req) => (
              <div key={req.title} className="card-cyber text-center space-y-4">
                <div className="text-4xl">{req.icon}</div>
                <h3 className="font-orbitron font-bold text-lg">{req.title}</h3>
                <p className="text-muted-foreground text-sm">{req.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-muted/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="font-orbitron font-bold text-4xl text-glow-green">
              How to Join
            </h2>
            <p className="text-lg text-muted-foreground">
              Simple 4-step process to become part of our gaming family
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {applicationSteps.map((step) => (
              <div key={step.step} className="relative">
                <div className="card-cyber text-center space-y-4">
                  <div className="flex items-center justify-center space-x-3">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-orbitron font-bold">
                      {step.step}
                    </div>
                    <div className="text-3xl">{step.icon}</div>
                  </div>
                  <h3 className="font-orbitron font-bold text-lg">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </div>
                
                {step.step < 4 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ChevronRight className="h-6 w-6 text-primary" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Meeting Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h2 className="font-orbitron font-bold text-3xl text-glow-blue">
                Ready to Join?
              </h2>
              <p className="text-lg text-muted-foreground">
                Take the first step towards becoming part of the most elite gaming community 
                at D.H. Chen College. Fill out our application form or contact us directly.
              </p>
              <div className="space-y-4">
                <button className="btn-cyber w-full flex items-center justify-center">
                  Fill Out Application Form
                  <ChevronRight className="ml-2 h-5 w-5" />
                </button>
                <button className="btn-neon w-full flex items-center justify-center">
                  Schedule a Visit
                  <Calendar className="ml-2 h-5 w-5" />
                </button>
              </div>
            </div>

            <div className="card-cyber space-y-6">
              <h3 className="font-orbitron font-bold text-xl text-glow-green">
                Club Information
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Calendar className="h-5 w-5 text-primary" />
                  <div>
                    <div className="font-medium">Meeting Times</div>
                    <div className="text-sm text-muted-foreground">Every Friday 4:00 PM - 8:00 PM</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-secondary" />
                  <div>
                    <div className="font-medium">Location</div>
                    <div className="text-sm text-muted-foreground">D.H. Chen College Computer Lab, Room 205</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-accent" />
                  <div>
                    <div className="font-medium">Email</div>
                    <div className="text-sm text-muted-foreground">esports@dhchen.edu</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-gaming-purple" />
                  <div>
                    <div className="font-medium">Phone</div>
                    <div className="text-sm text-muted-foreground">+1 (555) 123-GAME</div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-muted/20">
                <h4 className="font-orbitron font-bold text-sm mb-3">Quick Stats</h4>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="font-orbitron font-bold text-lg text-primary">150+</div>
                    <div className="text-xs text-muted-foreground">Members</div>
                  </div>
                  <div>
                    <div className="font-orbitron font-bold text-lg text-secondary">45</div>
                    <div className="text-xs text-muted-foreground">Tournaments</div>
                  </div>
                  <div>
                    <div className="font-orbitron font-bold text-lg text-accent">12+</div>
                    <div className="text-xs text-muted-foreground">Games</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Join;