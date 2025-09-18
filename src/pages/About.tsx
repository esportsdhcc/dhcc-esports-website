import { Users, Target, Trophy, Heart, Shield, Zap } from 'lucide-react';
import Layout from '@/components/Layout';

const About = () => {
  const values = [
    {
      icon: Trophy,
      title: 'Excellence',
      description: 'We strive for the highest level of competitive play and sportsmanship.',
      color: 'text-primary',
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Building lasting friendships through our shared passion for gaming.',
      color: 'text-secondary',
    },
    {
      icon: Shield,
      title: 'Integrity',
      description: 'Fair play, respect, and ethical gaming practices define who we are.',
      color: 'text-accent',
    },
    {
      icon: Heart,
      title: 'Inclusivity',
      description: 'Welcoming gamers of all backgrounds, skills, and experience levels.',
      color: 'text-gaming-purple',
    },
  ];

  const milestones = [
    { year: '2022', event: 'First E-Sports Club in HKU Student Colleges', description: 'We started at JCSV3' },
    { year: '2023', event: 'First Tournament', description: 'Hosted the first Major E-Sports Tournament in HKU Student Colleges with 30 participants' },
    { year: '2024', event: 'Intercollege Tournament', description: 'Hosted the first Intercollege E-Sports Tournament in HKU Student Colleges with 50 participants' },
    { year: '2025', event: 'DHCC E-Sports Club Founded', description: 'DHCC E-Sports Club was founded to build upon the success of the previous club' },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 cyber-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-orbitron font-black text-5xl md:text-6xl mb-6">
            <span className="text-glow-blue">About</span>{' '}
            <span className="text-glow-green">DHCC E-Sports</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We are the premier e-sports community at D.H. Chen College, dedicated to 
            fostering competitive gaming excellence and building lifelong connections.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <Target className="h-8 w-8 text-primary" />
                <h2 className="font-orbitron font-bold text-3xl text-glow-blue">Our Mission</h2>
              </div>
              <p className="text-lg text-muted-foreground">
                To create an inclusive, competitive, and supportive environment where gamers 
                can develop their skills, compete at the highest levels, and form lasting 
                friendships through our shared passion for e-sports.
              </p>
              <p className="text-lg text-muted-foreground">
                We believe in the power of gaming to bring people together, teach valuable 
                life skills like teamwork and strategic thinking, and provide opportunities 
                for personal and competitive growth.
              </p>
            </div>
            
            <div className="card-cyber p-8">
              <div className="flex items-center space-x-3 mb-6">
                <Zap className="h-8 w-8 text-secondary" />
                <h3 className="font-orbitron font-bold text-2xl text-glow-green">Our Vision</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                To show others, gaming is not just a hobby, but a way of life.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm">Foster competitive excellence and teamwork</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <span className="text-sm">Build inclusive gaming community</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-sm">Have fun and make friends</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="font-orbitron font-bold text-4xl text-glow-green">
              Our Core Values
            </h2>
            <p className="text-lg text-muted-foreground">
              The principles that guide our community and define our culture
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={value.title} className="card-cyber text-center space-y-4 group hover:scale-105 transition-transform duration-300">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-gaming-purple/20 ${value.color}`}>
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="font-orbitron font-bold text-xl">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="font-orbitron font-bold text-4xl text-glow-blue">
              Our Journey
            </h2>
            <p className="text-lg text-muted-foreground">
              From humble beginnings to championship glory
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-secondary to-accent"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={milestone.year} className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <div className="card-cyber p-6 space-y-3">
                      <div className="font-orbitron font-bold text-2xl text-primary">
                        {milestone.year}
                      </div>
                      <h3 className="font-orbitron font-bold text-xl">{milestone.event}</h3>
                      <p className="text-muted-foreground">{milestone.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="relative">
                    <div className="w-4 h-4 bg-primary rounded-full border-4 border-background shadow-glow-blue"></div>
                  </div>
                  
                  <div className="w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Community Stats */}
      <section className="py-20 bg-muted/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="font-orbitron font-bold text-4xl text-glow-green">
              By the Numbers
            </h2>
            <p className="text-lg text-muted-foreground">
              Our community's impact and achievements
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center space-y-2">
              <div className="font-orbitron font-bold text-4xl text-primary">50+</div>
              <div className="text-muted-foreground">Active Members</div>
            </div>
            <div className="text-center space-y-2">
              <div className="font-orbitron font-bold text-4xl text-secondary">5</div>
              <div className="text-muted-foreground">Tournaments Hosted</div>
            </div>
            <div className="text-center space-y-2">
              <div className="font-orbitron font-bold text-4xl text-accent">15+</div>
              <div className="text-muted-foreground">Games Offered</div>
            </div>
            <div className="text-center space-y-2">
              <div className="font-orbitron font-bold text-4xl text-gaming-purple">4</div>
              <div className="text-muted-foreground">Years Strong</div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;