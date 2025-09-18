import Layout from '@/components/Layout';
import { useState } from 'react';

const Games = () => {
  const games = [
    {
      name: 'EA FC (25)',
      category: 'Sports',
      color: 'from-primary to-secondary',
      icon: '⚽',
      image: 'https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/software/switch/70010000074799/ab3989c5c208683e007deb3327a1ce70a8fa6cb38b06cfb8c2c80d563b19cfc7',
    },
    {
      name: 'Call of Duty',
      category: 'FPS',
      color: 'from-accent to-gaming-purple',
      icon: '🔫',
      image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1938090/06107605348820087bb51ca89ed620c22fe559aa/header.jpg?t=1756159653',
    },
    {
      name: 'Tekken 8',
      category: 'Fighting',
      color: 'from-secondary to-primary',
      icon: '🥊',
      image: 'https://gmedia.playstation.com/is/image/SIEPDC/tekken-8-keyart-01-en-15may23?$native$',
    },
    {
      name: 'F1',
      category: 'Racing',
      color: 'from-gaming-purple to-accent',
      icon: '🏎️',
      image: 'https://image.api.playstation.com/vulcan/ap/rnd/202505/1521/ca36c3ae7641a273ff3f00e63732fb76e2850c57f577d6eb.jpg',
    },
    {
      name: 'WWE 2K',
      category: 'Sports',
      color: 'from-primary to-gaming-purple',
      icon: '🤼',
      image: 'https://image.api.playstation.com/vulcan/ap/rnd/202509/0103/eadb20f655700ea983a3f8d015dfa14d41e8c7e4599aef5c.jpg',
    },
    {
      name: 'Among Us',
      category: 'Other',
      color: 'from-gaming-purple to-secondary',
      icon: '👥',
      image: 'https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/software/switch/70010000036098/758ab0b61205081da2466386940752c70e0e5ea43bd39e8b9b13eaa455c69b7e',
    },
    {
      name: 'Injustice 2',
      category: 'Fighting',
      color: 'from-primary to-accent',
      icon: '👊',
      image: 'https://gaming-cdn.com/images/products/1525/orig/injustice-2-pc-game-steam-cover.jpg?v=1705328637',
    },
    {
      name: 'Mortal Kombat',
      category: 'Fighting',
      color: 'from-gaming-purple to-primary',
      icon: '💀',
      image: 'https://cdn2.unrealengine.com/egs-mortalkombat1defintiveedition-netherrealmstudiosqloc-editions-g1a-00-1920x1080-4de805dffaf7.jpg',
    },
  ];

  const categories = ['All', 'FPS', 'Sports', 'Fighting', 'Racing', 'Other'];

  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filteredGames = selectedCategory === 'All'
    ? games
    : games.filter((game) => game.category === selectedCategory);
  
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
            From competitive Sports Sims to Fighting, we host across multiple gaming genres. 
          </p>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => {
              const isActive = selectedCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-lg transition-all duration-300 ${
                    isActive
                      ? 'bg-primary/20 text-primary shadow-glow-blue'
                      : 'bg-muted/20 text-muted-foreground hover:bg-primary/20 hover:text-primary hover:shadow-glow-blue'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Games Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredGames.map((game) => (
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

                  {/* Game Image */}
                  <div className="relative w-full h-40 sm:h-48 overflow-hidden rounded-lg">
                    <img
                      src={game.image}
                      alt={`${game.name} cover`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
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

export default Games;