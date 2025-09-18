import { Trophy, Users, Target, Clock, Star, Gamepad2 } from 'lucide-react';
import Layout from '@/components/Layout';

const Games = () => {
  const games = [
    {
      name: 'FIFA 24',
      category: 'Sports',
      players: '1v1 & 2v2',
      skill: 'All Levels',
      tournaments: 'Weekly',
      description: 'Experience the beautiful game with realistic gameplay and stunning graphics. Compete in our weekly FIFA tournaments.',
      features: ['Ultimate Team', 'Career Mode', 'Online Seasons', 'Pro Clubs'],
      color: 'from-primary to-secondary',
      icon: '⚽',
    },
    {
      name: 'Call of Duty: Modern Warfare III',
      category: 'FPS',
      players: '6v6 Teams',
      skill: 'Intermediate+',
      tournaments: 'Bi-weekly',
      description: 'Tactical first-person shooter requiring strategy, teamwork, and quick reflexes. Join our competitive teams.',
      features: ['Search & Destroy', 'Domination', 'Team Deathmatch', 'Ranked Play'],
      color: 'from-accent to-gaming-purple',
      icon: '🔫',
    },
    {
      name: 'Tekken 8',
      category: 'Fighting',
      players: '1v1',
      skill: 'All Levels',
      tournaments: 'Monthly',
      description: 'Master the art of martial arts combat in this legendary fighting game series.',
      features: ['King of Iron Fist', 'Ranked Matches', 'Character Customization', 'Story Mode'],
      color: 'from-secondary to-primary',
      icon: '🥊',
    },
    {
      name: 'F1 24',
      category: 'Racing',
      players: '1v1 & Teams',
      skill: 'All Levels',
      tournaments: 'Monthly',
      description: 'Experience the thrill of Formula 1 racing with authentic tracks and realistic physics.',
      features: ['Grand Prix', 'Time Trials', 'Career Mode', 'MyTeam'],
      color: 'from-gaming-purple to-accent',
      icon: '🏎️',
    },
    {
      name: 'WWE 2K24',
      category: 'Sports Entertainment',
      players: '1v1 & Royal Rumble',
      skill: 'All Levels',
      tournaments: 'Quarterly',
      description: 'Step into the ring and experience the spectacle of professional wrestling.',
      features: ['MyRise Career', 'Universe Mode', 'Creation Suite', 'Showcase'],
      color: 'from-primary to-gaming-purple',
      icon: '🤼',
    },
    {
      name: 'League of Legends',
      category: 'MOBA',
      players: '5v5 Teams',
      skill: 'Intermediate+',
      tournaments: 'Seasonal',
      description: 'Strategic multiplayer online battle arena requiring teamwork and tactical thinking.',
      features: ['Ranked Solo/Duo', 'Flex Queue', 'ARAM', 'Tournament Draft'],
      color: 'from-secondary to-accent',
      icon: '⚔️',
    },
    {
      name: 'Valorant',
      category: 'Tactical FPS',
      players: '5v5 Teams',
      skill: 'All Levels',
      tournaments: 'Weekly',
      description: 'Character-based tactical shooter combining precise gunplay with unique agent abilities.',
      features: ['Unrated', 'Competitive', 'Spike Rush', 'Deathmatch'],
      color: 'from-accent to-primary',
      icon: '🎯',
    },
    {
      name: 'Rocket League',
      category: 'Sports',
      players: '3v3 Teams',
      skill: 'All Levels',
      tournaments: 'Monthly',
      description: 'Soccer meets racing in this high-octane sports game that\'s easy to learn but hard to master.',
      features: ['Casual', 'Competitive', 'Extra Modes', 'Training'],
      color: 'from-gaming-purple to-secondary',
      icon: '🚗',
    },
    {
      name: 'Street Fighter 6',
      category: 'Fighting',
      players: '1v1',
      skill: 'All Levels',
      tournaments: 'Monthly',
      description: 'The legendary fighting game series returns with new mechanics and classic characters.',
      features: ['World Tour', 'Fighting Ground', 'Battle Hub', 'Ranked Matches'],
      color: 'from-primary to-accent',
      icon: '👊',
    },
    {
      name: 'Overwatch 2',
      category: 'Hero Shooter',
      players: '5v5 Teams',
      skill: 'All Levels',
      tournaments: 'Bi-weekly',
      description: 'Team-based multiplayer shooter featuring diverse heroes with unique abilities.',
      features: ['Quick Play', 'Competitive', 'Arcade', 'Mystery Heroes'],
      color: 'from-secondary to-gaming-purple',
      icon: '🦸',
    },
    {
      name: 'Apex Legends',
      category: 'Battle Royale',
      players: '3v3 Teams',
      skill: 'All Levels',
      tournaments: 'Weekly',
      description: 'Fast-paced battle royale with unique character abilities and squad-based gameplay.',
      features: ['Battle Royale', 'Arenas', 'Ranked', 'Control'],
      color: 'from-accent to-secondary',
      icon: '👑',
    },
    {
      name: 'Mortal Kombat 1',
      category: 'Fighting',
      players: '1v1',
      skill: 'All Levels',
      tournaments: 'Quarterly',
      description: 'Brutal fighting game with iconic characters and legendary fatalities.',
      features: ['Story Mode', 'Klassic Towers', 'Online', 'Krypt'],
      color: 'from-gaming-purple to-primary',
      icon: '💀',
    },
  ];

  const categories = ['All', 'FPS', 'Sports', 'Fighting', 'Racing', 'MOBA', 'Battle Royale'];
  
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 cyber-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-orbitron font-black text-5xl md:text-6xl mb-6">
            <span className="text-glow-blue">Games</span>{' '}
            <span className="text-glow-green">We Play</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From competitive FPS to strategic MOBAs, we excel across multiple gaming genres. 
            Join our teams and compete at the highest levels.
          </p>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-2 rounded-lg bg-muted/20 text-muted-foreground hover:bg-primary/20 hover:text-primary transition-all duration-300 hover:shadow-glow-blue"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Games Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {games.map((game) => (
              <div key={game.name} className="card-cyber group hover:scale-105 transition-transform duration-300">
                <div className="space-y-4">
                  {/* Game Header */}
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="text-3xl">{game.icon}</div>
                      <div>
                        <h3 className="font-orbitron font-bold text-xl">{game.name}</h3>
                        <span className="text-sm text-muted-foreground">{game.category}</span>
                      </div>
                    </div>
                    <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${game.color}`}></div>
                  </div>

                  {/* Game Info */}
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div className="space-y-1">
                      <Users className="h-4 w-4 text-primary mx-auto" />
                      <div className="text-xs text-muted-foreground">Players</div>
                      <div className="text-sm font-medium">{game.players}</div>
                    </div>
                    <div className="space-y-1">
                      <Target className="h-4 w-4 text-secondary mx-auto" />
                      <div className="text-xs text-muted-foreground">Skill</div>
                      <div className="text-sm font-medium">{game.skill}</div>
                    </div>
                    <div className="space-y-1">
                      <Trophy className="h-4 w-4 text-accent mx-auto" />
                      <div className="text-xs text-muted-foreground">Tournaments</div>
                      <div className="text-sm font-medium">{game.tournaments}</div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm">{game.description}</p>

                  {/* Features */}
                  <div className="space-y-3">
                    <h4 className="font-orbitron font-bold text-sm text-primary">Key Features:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {game.features.map((feature) => (
                        <div key={feature} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-secondary rounded-full"></div>
                          <span className="text-xs text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Button */}
                  <button className="w-full btn-neon text-sm">
                    Join {game.name} Team
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Competition Levels */}
      <section className="py-20 bg-muted/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="font-orbitron font-bold text-4xl text-glow-green">
              Competition Levels
            </h2>
            <p className="text-lg text-muted-foreground">
              We offer competitive opportunities for every skill level
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card-cyber text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-secondary/20 to-primary/20">
                <Star className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="font-orbitron font-bold text-xl text-secondary">Casual</h3>
              <p className="text-muted-foreground text-sm">
                Perfect for beginners and those looking to have fun while learning the basics.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• No pressure environment</li>
                <li>• Skill-building focus</li>
                <li>• Community events</li>
                <li>• Mentorship available</li>
              </ul>
            </div>

            <div className="card-cyber text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-orbitron font-bold text-xl text-primary">Competitive</h3>
              <p className="text-muted-foreground text-sm">
                For players ready to test their skills in structured tournaments and leagues.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Regular tournaments</li>
                <li>• Team formations</li>
                <li>• Strategy sessions</li>
                <li>• Performance tracking</li>
              </ul>
            </div>

            <div className="card-cyber text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-accent/20 to-gaming-purple/20">
                <Trophy className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-orbitron font-bold text-xl text-accent">Professional</h3>
              <p className="text-muted-foreground text-sm">
                Elite level competition with coaching, sponsorships, and championship opportunities.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Professional coaching</li>
                <li>• Sponsorship opportunities</li>
                <li>• National competitions</li>
                <li>• Scholarship potential</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Games;