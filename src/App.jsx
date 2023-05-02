import { Drawer, Header, SubscribeModal } from './components';
import { Hero, About, Footer, Services, Contact, Teams } from './sections';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

function App() {
  return (
    <div className="relative overflow-hidden">
      <Header />
      <Drawer />
      <Hero />
      <About />
      <Services />
      <Teams />
      <Contact />
      <Footer />
      <SubscribeModal />
    </div>
  );
}

export default App;
