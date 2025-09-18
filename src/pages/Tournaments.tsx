import { Calendar, Trophy, Users, Clock, MapPin, Star, ChevronRight, Medal } from 'lucide-react';
import Layout from '@/components/Layout';

const Tournaments = () => {
  const upcomingTournaments = [
    {
      id: 1,
      name: 'Spring FIFA Championship',
      game: 'FIFA 24',
      date: 'March 25, 2024',
      time: '2:00 PM - 8:00 PM',
      location: 'Main Gaming Lab',
      prize: '$500 Prize Pool',
      participants: '32 Players',
      status: 'Registration Open',
      description: 'Our biggest FIFA tournament of the spring semester featuring intense 1v1 matches.',
      format: 'Single Elimination',
      entryFee: '$10',
      color: 'primary',
    },
    {
      id: 2,
      name: 'Call of Duty Team Championship',
      game: 'Call of Duty: MW III',
      date: 'April 8, 2024',
      time: '1:00 PM - 9:00 PM',
      location: 'E-Sports Arena',
      prize: '$1000 Prize Pool',
      participants: '16 Teams',
      status: 'Registration Open',
      description: 'Team-based tactical shooter tournament with Search & Destroy format.',
      format: 'Double Elimination',
      entryFee: '$15 per player',
      color: 'accent',
    },
    {
      id: 3,
      name: 'Tekken 8 Fight Night',
      game: 'Tekken 8',
      date: 'April 15, 2024',
      time: '6:00 PM - 11:00 PM',
      location: 'Fighting Game Corner',
      prize: '$300 Prize Pool',
      participants: '24 Players',
      status: 'Coming Soon',
      description: 'Monthly fighting game tournament featuring the latest Tekken installment.',
      format: 'Swiss System',
      entryFee: '$8',
      color: 'secondary',
    },
    {
      id: 4,
      name: 'Valorant Masters',
      game: 'Valorant',
      date: 'April 22, 2024',
      time: '12:00 PM - 8:00 PM',
      location: 'Main Gaming Lab',
      prize: '$750 Prize Pool',
      participants: '12 Teams',
      status: 'Registration Closed',
      description: 'Tactical FPS tournament showcasing the best Valorant teams in our region.',
      format: 'Round Robin + Playoffs',
      entryFee: '$12 per player',
      color: 'gaming-purple',
    },
  ];

  const pastResults = [
    {
      tournament: 'Winter FIFA League Finals',
      winner: 'Alex "Speed" Martinez',
      runnerUp: 'Jordan "Striker" Chen',
      date: 'February 18, 2024',
      prize: '$400',
      participants: 28,
    },
    {
      tournament: 'Call of Duty Winter Championship',
      winner: 'Team Domination',
      runnerUp: 'Elite Squad',
      date: 'February 10, 2024',
      prize: '$800',
      participants: 14,
    },
    {
      tournament: 'Tekken 7 Final Fight',
      winner: 'Sam "Combo" Wilson',
      runnerUp: 'Casey "Fighter" Kim',
      date: 'January 28, 2024',
      prize: '$250',
      participants: 20,
    },
  ];

  const leaderboard = [
    { rank: 1, player: 'Alex "Speed" Martinez', points: 2850, wins: 45, game: 'FIFA 24' },
    { rank: 2, player: 'Jordan "Striker" Chen', points: 2720, wins: 42, game: 'FIFA 24' },
    { rank: 3, player: 'Sam "Combo" Wilson', points: 2680, wins: 38, game: 'Tekken 8' },
    { rank: 4, player: 'Casey "Sniper" Kim', points: 2540, wins: 35, game: 'Call of Duty' },
    { rank: 5, player: 'Taylor "Ace" Brown', points: 2480, wins: 33, game: 'Valorant' },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Registration Open':
        return 'bg-secondary/20 text-secondary border-secondary/30';
      case 'Coming Soon':
        return 'bg-primary/20 text-primary border-primary/30';
      case 'Registration Closed':
        return 'bg-accent/20 text-accent border-accent/30';
      default:
        return 'bg-muted/20 text-muted-foreground border-muted/30';
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 cyber-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-orbitron font-black text-5xl md:text-6xl mb-6">
            <span className="text-glow-blue">Tournament</span>{' '}
            <span className="text-glow-green">Central</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Compete in epic tournaments, climb the leaderboards, and prove your skills 
            against the best gamers in our community.
          </p>
        </div>
      </section>

      {/* Tournament Stats */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center space-y-3">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20">
                <Trophy className="h-8 w-8 text-primary" />
              </div>
              <div>
                <div className="font-orbitron font-bold text-3xl text-primary">45+</div>
                <div className="text-muted-foreground text-sm">Tournaments Hosted</div>
              </div>
            </div>
            <div className="text-center space-y-3">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-secondary/20 to-accent/20">
                <Users className="h-8 w-8 text-secondary" />
              </div>
              <div>
                <div className="font-orbitron font-bold text-3xl text-secondary">500+</div>
                <div className="text-muted-foreground text-sm">Total Participants</div>
              </div>
            </div>
            <div className="text-center space-y-3">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-accent/20 to-gaming-purple/20">
                <Medal className="h-8 w-8 text-accent" />
              </div>
              <div>
                <div className="font-orbitron font-bold text-3xl text-accent">$15K+</div>
                <div className="text-muted-foreground text-sm">Prize Money Awarded</div>
              </div>
            </div>
            <div className="text-center space-y-3">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-gaming-purple/20 to-primary/20">
                <Star className="h-8 w-8 text-gaming-purple" />
              </div>
              <div>
                <div className="font-orbitron font-bold text-3xl text-gaming-purple">12</div>
                <div className="text-muted-foreground text-sm">Game Titles</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Tournaments */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="font-orbitron font-bold text-4xl text-glow-blue">
              Upcoming Tournaments
            </h2>
            <p className="text-lg text-muted-foreground">
              Register now for these exciting upcoming competitions
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {upcomingTournaments.map((tournament) => (
              <div key={tournament.id} className="card-cyber space-y-6 hover:scale-105 transition-transform duration-300">
                {/* Tournament Header */}
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <h3 className="font-orbitron font-bold text-xl">{tournament.name}</h3>
                    <div className="text-sm text-muted-foreground">{tournament.game}</div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(tournament.status)}`}>
                    {tournament.status}
                  </span>
                </div>

                {/* Tournament Details */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span className="text-sm">{tournament.date}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-secondary" />
                      <span className="text-sm">{tournament.time}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4 text-accent" />
                      <span className="text-sm">{tournament.location}</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Trophy className="h-4 w-4 text-gaming-purple" />
                      <span className="text-sm">{tournament.prize}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4 text-primary" />
                      <span className="text-sm">{tournament.participants}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Star className="h-4 w-4 text-secondary" />
                      <span className="text-sm">{tournament.format}</span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground text-sm">{tournament.description}</p>

                {/* Entry Fee */}
                <div className="flex items-center justify-between">
                  <div className="text-sm">
                    <span className="text-muted-foreground">Entry Fee: </span>
                    <span className="font-medium text-accent">{tournament.entryFee}</span>
                  </div>
                </div>

                {/* Action Button */}
                <button 
                  className={`w-full ${tournament.status === 'Registration Open' ? 'btn-cyber' : 'btn-neon'} flex items-center justify-center`}
                  disabled={tournament.status === 'Registration Closed'}
                >
                  {tournament.status === 'Registration Open' ? 'Register Now' : 
                   tournament.status === 'Coming Soon' ? 'Coming Soon' : 'Full'}
                  <ChevronRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leaderboard */}
      <section className="py-20 bg-muted/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="font-orbitron font-bold text-4xl text-glow-green">
              Top Players
            </h2>
            <p className="text-lg text-muted-foreground">
              Current season leaderboard rankings
            </p>
          </div>

          <div className="card-cyber">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="border-b border-primary/20">
                  <tr>
                    <th className="text-left py-4 px-4 font-orbitron text-primary">Rank</th>
                    <th className="text-left py-4 px-4 font-orbitron text-primary">Player</th>
                    <th className="text-left py-4 px-4 font-orbitron text-primary">Main Game</th>
                    <th className="text-left py-4 px-4 font-orbitron text-primary">Points</th>
                    <th className="text-left py-4 px-4 font-orbitron text-primary">Wins</th>
                  </tr>
                </thead>
                <tbody>
                  {leaderboard.map((player) => (
                    <tr key={player.rank} className="border-b border-muted/20 hover:bg-primary/5 transition-colors">
                      <td className="py-4 px-4">
                        <div className="flex items-center space-x-2">
                          {player.rank <= 3 && (
                            <Medal className={`h-5 w-5 ${
                              player.rank === 1 ? 'text-accent' : 
                              player.rank === 2 ? 'text-secondary' : 'text-gaming-purple'
                            }`} />
                          )}
                          <span className="font-orbitron font-bold text-lg">#{player.rank}</span>
                        </div>
                      </td>
                      <td className="py-4 px-4 font-medium">{player.player}</td>
                      <td className="py-4 px-4 text-muted-foreground">{player.game}</td>
                      <td className="py-4 px-4 font-orbitron font-bold text-primary">{player.points.toLocaleString()}</td>
                      <td className="py-4 px-4 text-secondary">{player.wins}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Past Results */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="font-orbitron font-bold text-4xl text-glow-blue">
              Recent Results
            </h2>
            <p className="text-lg text-muted-foreground">
              Celebrating our recent tournament champions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pastResults.map((result, index) => (
              <div key={index} className="card-cyber space-y-4">
                <div className="flex items-center space-x-3">
                  <Trophy className="h-6 w-6 text-accent" />
                  <h3 className="font-orbitron font-bold text-lg">{result.tournament}</h3>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Champion:</span>
                    <span className="font-medium text-accent">{result.winner}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Runner-up:</span>
                    <span className="font-medium text-secondary">{result.runnerUp}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Prize:</span>
                    <span className="font-medium text-gaming-purple">{result.prize}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Participants:</span>
                    <span className="font-medium">{result.participants}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Date:</span>
                    <span className="font-medium">{result.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Tournaments;