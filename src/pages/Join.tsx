import { Users, Trophy, Gamepad2, Star } from 'lucide-react';
import Layout from '@/components/Layout';

const Join = () => {
  return (
    <Layout>
      <section className="py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <a
            href="https://chat.whatsapp.com/D234WCouAg7H1vNmw8UP8i"
            className="btn-cyber inline-flex items-center justify-center"
            target="_blank"
            rel="noreferrer"
          >
            Join our WhatsApp Group
          </a>
          <p className="text-muted-foreground">
            Almost every Friday 7:00 PM - 10:30 PM. Location: Games Room (1st floor). Casual.
          </p>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="font-orbitron font-bold text-4xl text-glow-blue">
              Why Join DHCC E-Sports?
            </h2>
            <p className="text-lg text-muted-foreground">
              More than just a gaming club - we're a family of champions
            </p>
          </div>

          <div className="flex flex-col items-center justify-center gap-8 lg:flex-row">
            <div className="card-cyber text-center space-y-4 w-full max-w-xs">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 mx-auto">
                <Trophy className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-orbitron font-bold text-xl text-primary">Competitive Excellence</h3>
              <p className="text-muted-foreground text-sm">
                Compete in tournaments, compete with friends, and compete with the best.
              </p>
            </div>

            <div className="card-cyber text-center space-y-4 w-full max-w-xs">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-secondary/20 to-accent/20 mx-auto">
                <Users className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="font-orbitron font-bold text-xl text-secondary">Amazing Community</h3>
              <p className="text-muted-foreground text-sm">
                Connect with like-minded students, form lasting friendships, and be part of something bigger.
              </p>
            </div>

            <div className="card-cyber text-center space-y-4 w-full max-w-xs">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-accent/20 to-gaming-purple/20 mx-auto">
                <Gamepad2 className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-orbitron font-bold text-xl text-accent">Premium Equipment</h3>
              <p className="text-muted-foreground text-sm">
                We have plenty of gaming consoles, computers, and controllers for weekly sessions and tournaments.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Join;