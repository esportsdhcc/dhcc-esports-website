import { Calendar, Clock, MapPin, ChevronRight } from 'lucide-react';
import Layout from '@/components/Layout';
import heroImg from '@/assets/hero-esports.jpg';

const Tournaments = () => {
  const upcomingTournament = {
    id: 1,
    name: 'DHCC Semester 1 FIFA Tournament',
    game: 'EA FC (25)',
    date: 'TBA',
    time: 'TBA',
    location: 'TBA',
    status: 'Coming Soon',
    description:
      'Our biggest FIFA tournament of the semester featuring intense 1v1 matches.',
    image: heroImg,
  };

  const pastTournaments = [
    {
      tournament: 'EA FC24 (FIFA) Tournament',
      winner: 'Farhan, Osama, Solankar',
      date: '9 November 2024',
      time: '5:00 PM - 10:00 PM',
      location: 'JCSV3',
      description: 'Season-ending FIFA tournament with thrilling knockout rounds.',
      image: "src/assets/eafc24.png",
    },
    {
      tournament: 'Tekken 8 Tournament',
      winner: 'David (Dongwoo Kang)',
      date: '10 February 2023',
      time: '5:00 PM - 8:00 PM',
      location: 'JCSV3',
      description: 'High-intensity Tekken 8 bracket with clutch plays throughout.',
      image: "https://lh3.googleusercontent.com/_v1FqkrpwKXkuQC3bcXcWmMsmN13kpbOe-xVSJJK30Yq-lE1szkUPu4X2GQc-NT0vz1w3M75LTxn7gdftW6-QMwnMZpYjYLwbFTBDIB8Rb6JsSBAgXzLWL2BlbupM6u5Vm-mDX7QLOCTsp9ATa2HXtwCWUOBMdUXFwNN0aPxuDYV8IfoVgcsEg=w1280",
    },
    {
      tournament: 'FIFA Tournament 1v1',
      winner: 'Ahmad Khan',
      date: '10 November 2023',
      time: '5:00 PM - 10:00 PM',
      location: 'JCSV3',
      description: 'Crowning the combo king in a packed fight night.',
      image: "src/assets/fifa23.png",
    },
    {
      tournament: 'FIFA Tournament 2v2',
      winner: 'Ben, Lawrence, Joshua',
      date: '10 November 2022',
      time: '5:00 PM - 11:00 PM',
      location: 'JCSV3',
      description: 'Crowning the combo king in a packed FIFA tournament.',
      image: "src/assets/fifa22.png",
    }
  ];

  // Removed leaderboard as per requirements

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

      {/* Upcoming Tournament (Single, Large) */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="font-orbitron font-bold text-4xl text-glow-blue">Upcoming Tournament</h2>
            <p className="text-lg text-muted-foreground">Don’t miss our next big competition</p>
          </div>

          <div className="card-cyber overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
              <div className="md:col-span-1">
                <div className="h-full w-full md:h-[520px] overflow-hidden">
                  <img
                    src={upcomingTournament.image}
                    alt={upcomingTournament.name}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              <div className="md:col-span-2 p-6 md:p-10 space-y-6">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-orbitron font-bold text-2xl">{upcomingTournament.name}</h3>
                    <div className="text-sm text-muted-foreground">{upcomingTournament.game}</div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(upcomingTournament.status)}`}>
                    {upcomingTournament.status}
                  </span>
                </div>

                <p className="text-muted-foreground">{upcomingTournament.description}</p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-5 w-5 text-primary" />
                    <span className="text-sm">{upcomingTournament.date}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-5 w-5 text-secondary" />
                    <span className="text-sm">{upcomingTournament.time}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-5 w-5 text-accent" />
                    <span className="text-sm">{upcomingTournament.location}</span>
                  </div>
                </div>

                {(upcomingTournament.status === 'Registration Open' || upcomingTournament.status === 'Coming Soon') && (
                  <button className={`w-full md:w-auto ${upcomingTournament.status === 'Registration Open' ? 'btn-cyber' : 'btn-neon'} inline-flex items-center justify-center`}>
                    {upcomingTournament.status === 'Registration Open' ? 'Register Now' : 'Coming Soon'}
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Past Tournaments */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="font-orbitron font-bold text-4xl text-glow-green">Past Tournaments</h2>
            <p className="text-lg text-muted-foreground">Highlights from recent competitions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pastTournaments.map((item, idx) => (
              <div key={idx} className="card-cyber overflow-hidden">
                <div className="grid grid-cols-3 gap-0">
                  <div className="col-span-1">
                    <div className="h-full w-full md:h-64 overflow-hidden">
                      <img src={item.image} alt={item.tournament} className="h-full w-full object-cover" />
                    </div>
                  </div>
                  <div className="col-span-2 p-6 space-y-4">
                    <h3 className="font-orbitron font-bold text-lg">{item.tournament}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4 text-primary" />
                        <span className="text-xs">{item.date}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4 text-secondary" />
                        <span className="text-xs">{item.time}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-4 w-4 text-accent" />
                        <span className="text-xs">{item.location}</span>
                      </div>
                    </div>
                    <div className="text-sm">
                      <span className="text-muted-foreground">Winner: </span>
                      <span className="font-medium">{item.winner}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Removed leaderboard and recent results sections as requested */}
    </Layout>
  );
};

export default Tournaments;