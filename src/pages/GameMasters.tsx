import { Users, Phone, Mail } from 'lucide-react';
import Layout from '@/components/Layout';

const GameMasters = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 cyber-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-orbitron font-black text-5xl md:text-6xl mb-6">
            <span className="text-glow-blue">Games Master</span>{' '}
            <span className="text-glow-green">& Contact</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Key information about our club and how to reach us.
          </p>
        </div>
      </section>

      {/* About */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card-cyber p-8 space-y-4">
            <h2 className="font-orbitron font-bold text-3xl text-glow-blue">About</h2>
            <p className="text-muted-foreground">
              Welcome to SHC E-Sports Club, the premier gaming community at Shun Hing College, HKU! We are a passionate group of gamers dedicated to creating a vibrant and inclusive space for gaming enthusiasts to connect, compete, and have a blast together.
            </p>
            <p className="text-muted-foreground">
              Our club is built on the foundation of shared love and enthusiasm for gaming. Whether you're a seasoned pro or just starting out, we believe that gaming is a powerful medium that brings people together, fosters friendship, and cultivates teamwork.
            </p>
            <p className="text-muted-foreground">
              At DHCC E-Sports Club, we offer a wide range of gaming opportunities to cater to diverse interests and skill levels. From intense competitive battles to casual gaming sessions, we've got something for everyone. Our gaming repertoire includes popular titles like FIFA 23, Mortal Kombat 11, Call of Duty, as well as exciting VR and Sim Racing games.
            </p>
            <p className="text-muted-foreground">
              Joining our club means gaining access to a supportive and engaging community. Connect with like-minded gamers who share your passion, exchange strategies, and forge lasting friendships. Participate in our thrilling game nights, where you can showcase your skills, learn from others, and experience the adrenaline rush of competitive gaming.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card-cyber p-8 space-y-6">
            <h2 className="font-orbitron font-bold text-3xl text-glow-green">Contact</h2>
            <div className="space-y-4">
              <div className="flex items-start sm:items-center justify-between sm:justify-start gap-4">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="font-medium">Shahab (Shab)</div>
                  <a href="tel:+85268422674" className="text-sm text-muted-foreground hover:text-primary inline-flex items-center">
                    <Phone className="h-4 w-4 mr-2" /> +852 6842 2674
                  </a>
                </div>
              </div>

              <div className="flex items-start sm:items-center justify-between sm:justify-start gap-4">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="font-medium">Abdur Rahman</div>
                  <a href="tel:+85260410657" className="text-sm text-muted-foreground hover:text-primary inline-flex items-center">
                    <Phone className="h-4 w-4 mr-2" /> +852 6041 0657
                  </a>
                </div>
              </div>

              <div className="flex items-start sm:items-center justify-between sm:justify-start gap-4">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-secondary/20 to-accent/20">
                  <Mail className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <div className="font-medium">Email</div>
                  <a href="mailto:esports.dhcc@gmail.com" className="text-sm text-muted-foreground hover:text-secondary inline-flex items-center">
                    esports.dhcc@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start sm:items-center justify-between sm:justify-start gap-4">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-accent/20 to-gaming-purple/20">
                  <Users className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <div className="font-medium">Tutor In Charge</div>
                  <div className="text-sm text-muted-foreground">Mr. Samuel Twun Ampofo</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default GameMasters;