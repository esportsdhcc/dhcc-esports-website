import { Crown, Trophy, Users, Star, Gamepad2, Target, Mail, MessageCircle } from 'lucide-react';
import Layout from '@/components/Layout';

const GameMasters = () => {
  const gameMasters = [
    {
      id: 1,
      name: 'Marcus "Lightning" Rodriguez',
      role: 'Head Game Master',
      specialties: ['FIFA', 'F1', 'General Strategy'],
      experience: '5 Years',
      achievements: ['Regional FIFA Champion 2023', 'Club Founder', 'Tournament Director'],
      bio: 'Marcus founded the DHC E-Sports Club and has been leading competitive gaming initiatives for over 5 years. His strategic mind and leadership skills have helped build our championship-winning teams.',
      avatar: '👑',
      color: 'primary',
      stats: { tournamentsWon: 28, studentsCoached: 150, yearsActive: 5 },
    },
    {
      id: 2,
      name: 'Sarah "Phoenix" Chen',
      role: 'FPS Team Captain',
      specialties: ['Call of Duty', 'Valorant', 'Tactical Training'],
      experience: '4 Years',
      achievements: ['MW III Regional Champion', 'Valorant Masters Winner', 'Team Strategy Innovator'],
      bio: 'Sarah leads our FPS division with precision and tactical excellence. Her innovative strategies have revolutionized how our teams approach competitive shooting games.',
      avatar: '🎯',
      color: 'accent',
      stats: { tournamentsWon: 22, studentsCoached: 89, yearsActive: 4 },
    },
    {
      id: 3,
      name: 'David "Combo King" Wilson',
      role: 'Fighting Game Specialist',
      specialties: ['Tekken', 'Street Fighter', 'Mortal Kombat'],
      experience: '6 Years',
      achievements: ['Multiple Fighting Game Tournaments', 'Combo Master', 'Technical Analyst'],
      bio: 'David is our resident fighting game expert, known for his incredible combo execution and deep understanding of frame data. He trains the next generation of fighting game champions.',
      avatar: '🥊',
      color: 'secondary',
      stats: { tournamentsWon: 35, studentsCoached: 67, yearsActive: 6 },
    },
    {
      id: 4,
      name: 'Alex "Clutch" Thompson',
      role: 'MOBA & Strategy Leader',
      specialties: ['League of Legends', 'Team Coordination', 'Strategy Development'],
      experience: '4 Years',
      achievements: ['LoL Collegiate Champion', 'Strategy Innovation Award', 'Team Building Expert'],
      bio: 'Alex specializes in team-based strategy games and is known for incredible clutch plays. Their leadership in MOBA games has earned multiple championship titles.',
      avatar: '⚔️',
      color: 'gaming-purple',
      stats: { tournamentsWon: 19, studentsCoached: 95, yearsActive: 4 },
    },
    {
      id: 5,
      name: 'Jamie "Speedster" Kim',
      role: 'Racing & Sports Coordinator',
      specialties: ['F1', 'Rocket League', 'Sports Games'],
      experience: '3 Years',
      achievements: ['F1 Championship Winner', 'Rocket League Pro', 'Sports Gaming Innovator'],
      bio: 'Jamie brings incredible speed and precision to racing and sports games. Their technical knowledge of vehicle dynamics and sports strategies is unmatched.',
      avatar: '🏎️',
      color: 'secondary',
      stats: { tournamentsWon: 16, studentsCoached: 72, yearsActive: 3 },
    },
    {
      id: 6,
      name: 'Taylor "Ace" Brooks',
      role: 'Content & Community Manager',
      specialties: ['Content Creation', 'Social Media', 'Community Building'],
      experience: '3 Years',
      achievements: ['Community Growth Expert', 'Content Creator', 'Social Media Strategist'],
      bio: 'Taylor manages our online presence and creates engaging content for our community. Their creative vision helps showcase our achievements and attract new members.',
      avatar: '📱',
      color: 'accent',
      stats: { tournamentsWon: 8, studentsCoached: 45, yearsActive: 3 },
    },
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'primary':
        return 'from-primary/20 to-secondary/20 border-primary/30 text-primary';
      case 'secondary':
        return 'from-secondary/20 to-primary/20 border-secondary/30 text-secondary';
      case 'accent':
        return 'from-accent/20 to-gaming-purple/20 border-accent/30 text-accent';
      case 'gaming-purple':
        return 'from-gaming-purple/20 to-accent/20 border-gaming-purple/30 text-gaming-purple';
      default:
        return 'from-primary/20 to-secondary/20 border-primary/30 text-primary';
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 cyber-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-orbitron font-black text-5xl md:text-6xl mb-6">
            <span className="text-glow-blue">Game</span>{' '}
            <span className="text-glow-green">Masters</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Meet the legendary leaders who guide our champions to victory. 
            Our Game Masters bring years of experience, strategic brilliance, and unmatched dedication.
          </p>
        </div>
      </section>

      {/* Leadership Stats */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center space-y-3">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20">
                <Crown className="h-8 w-8 text-primary" />
              </div>
              <div>
                <div className="font-orbitron font-bold text-3xl text-primary">6</div>
                <div className="text-muted-foreground text-sm">Game Masters</div>
              </div>
            </div>
            <div className="text-center space-y-3">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-secondary/20 to-accent/20">
                <Trophy className="h-8 w-8 text-secondary" />
              </div>
              <div>
                <div className="font-orbitron font-bold text-3xl text-secondary">128</div>
                <div className="text-muted-foreground text-sm">Total Tournament Wins</div>
              </div>
            </div>
            <div className="text-center space-y-3">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-accent/20 to-gaming-purple/20">
                <Users className="h-8 w-8 text-accent" />
              </div>
              <div>
                <div className="font-orbitron font-bold text-3xl text-accent">500+</div>
                <div className="text-muted-foreground text-sm">Students Coached</div>
              </div>
            </div>
            <div className="text-center space-y-3">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-gaming-purple/20 to-primary/20">
                <Star className="h-8 w-8 text-gaming-purple" />
              </div>
              <div>
                <div className="font-orbitron font-bold text-3xl text-gaming-purple">25</div>
                <div className="text-muted-foreground text-sm">Years Combined Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Game Masters Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {gameMasters.map((master) => (
              <div key={master.id} className="card-cyber space-y-6 hover:scale-105 transition-transform duration-300">
                {/* Header */}
                <div className="flex items-start space-x-4">
                  <div className={`flex items-center justify-center w-16 h-16 rounded-xl text-3xl bg-gradient-to-br ${getColorClasses(master.color).split(' ')[0]} ${getColorClasses(master.color).split(' ')[1]}`}>
                    {master.avatar}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-orbitron font-bold text-xl">{master.name}</h3>
                    <p className={`text-sm font-medium ${getColorClasses(master.color).split(' ')[2]}`}>
                      {master.role}
                    </p>
                    <p className="text-xs text-muted-foreground">{master.experience} Experience</p>
                  </div>
                  <div className="flex flex-col items-end space-y-1">
                    <Crown className={`h-5 w-5 ${getColorClasses(master.color).split(' ')[2]}`} />
                    <span className="text-xs text-muted-foreground">Leader</span>
                  </div>
                </div>

                {/* Bio */}
                <p className="text-muted-foreground text-sm">{master.bio}</p>

                {/* Specialties */}
                <div className="space-y-3">
                  <h4 className="font-orbitron font-bold text-sm flex items-center space-x-2">
                    <Gamepad2 className="h-4 w-4" />
                    <span>Specialties</span>
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {master.specialties.map((specialty) => (
                      <span 
                        key={specialty}
                        className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getColorClasses(master.color).split(' ')[0]} ${getColorClasses(master.color).split(' ')[1]} border ${getColorClasses(master.color).split(' ')[2]}`}
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                <div className="space-y-3">
                  <h4 className="font-orbitron font-bold text-sm flex items-center space-x-2">
                    <Trophy className="h-4 w-4" />
                    <span>Key Achievements</span>
                  </h4>
                  <ul className="space-y-1">
                    {master.achievements.map((achievement) => (
                      <li key={achievement} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-secondary rounded-full"></div>
                        <span className="text-xs text-muted-foreground">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-muted/20">
                  <div className="text-center">
                    <div className={`font-orbitron font-bold text-lg ${getColorClasses(master.color).split(' ')[2]}`}>
                      {master.stats.tournamentsWon}
                    </div>
                    <div className="text-xs text-muted-foreground">Tournaments Won</div>
                  </div>
                  <div className="text-center">
                    <div className={`font-orbitron font-bold text-lg ${getColorClasses(master.color).split(' ')[2]}`}>
                      {master.stats.studentsCoached}
                    </div>
                    <div className="text-xs text-muted-foreground">Students Coached</div>
                  </div>
                  <div className="text-center">
                    <div className={`font-orbitron font-bold text-lg ${getColorClasses(master.color).split(' ')[2]}`}>
                      {master.stats.yearsActive}
                    </div>
                    <div className="text-xs text-muted-foreground">Years Active</div>
                  </div>
                </div>

                {/* Contact */}
                <div className="flex space-x-2 pt-4">
                  <button className="flex-1 btn-neon text-sm flex items-center justify-center">
                    <Mail className="h-4 w-4 mr-2" />
                    Contact
                  </button>
                  <button className="flex-1 btn-cyber text-sm flex items-center justify-center">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Message
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Game Masters Do */}
      <section className="py-20 bg-muted/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="font-orbitron font-bold text-4xl text-glow-green">
              What Our Game Masters Do
            </h2>
            <p className="text-lg text-muted-foreground">
              Beyond just playing games, our leaders shape champions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card-cyber text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-orbitron font-bold text-xl text-primary">Strategic Training</h3>
              <p className="text-muted-foreground text-sm">
                Develop game strategies, analyze opponent tactics, and create winning game plans for competitions.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Advanced game mechanics</li>
                <li>• Meta analysis and adaptation</li>
                <li>• Team coordination drills</li>
                <li>• Performance analysis</li>
              </ul>
            </div>

            <div className="card-cyber text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-secondary/20 to-accent/20">
                <Users className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="font-orbitron font-bold text-xl text-secondary">Mentorship</h3>
              <p className="text-muted-foreground text-sm">
                Guide new players, provide emotional support, and help develop both gaming skills and leadership qualities.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• One-on-one coaching sessions</li>
                <li>• Mental resilience training</li>
                <li>• Career guidance</li>
                <li>• Personal development</li>
              </ul>
            </div>

            <div className="card-cyber text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-accent/20 to-gaming-purple/20">
                <Trophy className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-orbitron font-bold text-xl text-accent">Tournament Leadership</h3>
              <p className="text-muted-foreground text-sm">
                Organize competitions, manage teams during tournaments, and ensure fair play and sportsmanship.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Tournament organization</li>
                <li>• Team captain duties</li>
                <li>• Rules and regulations</li>
                <li>• Community events</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Become a Game Master */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="card-cyber p-8 space-y-6">
            <div className="flex items-center justify-center">
              <Crown className="h-12 w-12 text-accent" />
            </div>
            <h2 className="font-orbitron font-bold text-3xl text-glow-blue">
              Become a Game Master
            </h2>
            <p className="text-lg text-muted-foreground">
              Think you have what it takes to lead and inspire the next generation of gamers? 
              We're always looking for passionate, skilled players to join our leadership team.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div className="space-y-3">
                <h4 className="font-orbitron font-bold text-lg text-secondary">Requirements:</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Exceptional skill in at least one game</li>
                  <li>• 2+ years of competitive experience</li>
                  <li>• Strong leadership and communication skills</li>
                  <li>• Commitment to club values and sportsmanship</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="font-orbitron font-bold text-lg text-gaming-purple">Benefits:</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Leadership development opportunities</li>
                  <li>• Priority tournament registration</li>
                  <li>• Mentorship from current Game Masters</li>
                  <li>• Recognition and club achievements</li>
                </ul>
              </div>
            </div>
            <button className="btn-gaming">
              Apply to be a Game Master
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default GameMasters;