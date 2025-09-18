import { Link } from 'react-router-dom';
import { Trophy, Users, Gamepad2, Calendar, Star, Zap, Target, ChevronRight } from 'lucide-react';
import Layout from '@/components/Layout';
import heroImage from '@/assets/hero-esports.jpg';

const Index = () => {
  const stats = [
    { icon: Users, label: 'Active Members', value: '150+', color: 'text-primary' },
    { icon: Trophy, label: 'Tournaments Won', value: '45', color: 'text-secondary' },
    { icon: Gamepad2, label: 'Games Played', value: '12+', color: 'text-accent' },
    { icon: Star, label: 'Championships', value: '8', color: 'text-gaming-purple' },
  ];

  const featuredNews = [
    {
      title: 'Regional FIFA Championship 2024',
      date: 'March 15, 2024',
      excerpt: 'Our FIFA team secured first place in the regional championship!',
      category: 'Tournament',
    },
    {
      title: 'New Call of Duty Season Begins',
      date: 'March 10, 2024',
      excerpt: 'Registration now open for the upcoming Call of Duty tournament series.',
      category: 'Registration',
    },
    {
      title: 'Welcome New Game Masters',
      date: 'March 5, 2024',
      excerpt: 'Introducing our newest game masters who will lead competitive teams.',
      category: 'Club News',
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="E-Sports Arena" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/70 to-background"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="font-orbitron font-black text-5xl md:text-7xl lg:text-8xl">
                <span className="text-glow-blue">DHC</span>
                <br />
                <span className="text-glow-green">E-SPORTS</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
                Welcome to the premier gaming community at D.H. Chen College. 
                Where legends are born and champions rise.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/join" className="btn-cyber inline-flex items-center">
                Join the Club
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
              <Link to="/tournaments" className="btn-neon inline-flex items-center">
                View Tournaments
                <Trophy className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 animate-pulse">
          <Zap className="h-8 w-8 text-primary opacity-50" />
        </div>
        <div className="absolute bottom-20 right-10 animate-pulse delay-1000">
          <Target className="h-6 w-6 text-secondary opacity-50" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-muted/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="text-center space-y-3">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-gaming-purple/20 ${stat.color}`}>
                    <Icon className="h-8 w-8" />
                  </div>
                  <div>
                    <div className={`font-orbitron font-bold text-3xl ${stat.color}`}>
                      {stat.value}
                    </div>
                    <div className="text-muted-foreground text-sm">
                      {stat.label}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="font-orbitron font-bold text-4xl text-glow-blue">
                Elite Gaming Community
              </h2>
              <p className="text-lg text-muted-foreground">
                At D.H. Chen College E-Sports Club, we're more than just gamers – we're a 
                family united by our passion for competitive gaming. From casual matches to 
                professional tournaments, we provide the platform for every skill level.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Trophy className="h-6 w-6 text-accent" />
                  <span>Competitive tournaments and leagues</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="h-6 w-6 text-secondary" />
                  <span>Welcoming community for all skill levels</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Gamepad2 className="h-6 w-6 text-primary" />
                  <span>State-of-the-art gaming equipment</span>
                </div>
              </div>
              <Link to="/about" className="btn-gaming inline-flex items-center">
                Learn More About Us
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="card-cyber space-y-3">
                <Gamepad2 className="h-8 w-8 text-primary" />
                <h3 className="font-orbitron font-bold">12+ Games</h3>
                <p className="text-sm text-muted-foreground">
                  From FIFA to Call of Duty, we compete in all major e-sports titles.
                </p>
              </div>
              <div className="card-neon space-y-3">
                <Trophy className="h-8 w-8 text-secondary" />
                <h3 className="font-orbitron font-bold">Weekly Tournaments</h3>
                <p className="text-sm text-muted-foreground">
                  Regular competitions with prizes and rankings.
                </p>
              </div>
              <div className="card-neon space-y-3">
                <Users className="h-8 w-8 text-secondary" />
                <h3 className="font-orbitron font-bold">Team Training</h3>
                <p className="text-sm text-muted-foreground">
                  Professional coaching and team strategy sessions.
                </p>
              </div>
              <div className="card-cyber space-y-3">
                <Star className="h-8 w-8 text-primary" />
                <h3 className="font-orbitron font-bold">Championship Level</h3>
                <p className="text-sm text-muted-foreground">
                  Compete at regional and national tournaments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-20 bg-muted/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="font-orbitron font-bold text-4xl text-glow-green">
              Latest News & Updates
            </h2>
            <p className="text-lg text-muted-foreground">
              Stay updated with the latest happenings in our gaming community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredNews.map((news, index) => (
              <article key={index} className="card-cyber space-y-4 hover:scale-105 transition-transform duration-300">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 bg-primary/20 text-primary text-xs font-medium rounded-full">
                    {news.category}
                  </span>
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                </div>
                <h3 className="font-orbitron font-bold text-xl">{news.title}</h3>
                <p className="text-muted-foreground">{news.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">{news.date}</span>
                  <ChevronRight className="h-4 w-4 text-primary" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
