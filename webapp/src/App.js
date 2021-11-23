import Header from './components/UI/Header'
import MainBanner from './components/Landing/MainBanner';
import MainCarousel from './components/Landing/Carousel/MainCarousel'
import Footer from './components/UI/Footer';
import { AuthProvider } from './store/auth-context'

function App() {
  return (
    <AuthProvider>
      <Header />
      <MainBanner />
      <MainCarousel />
      <Footer />
    </AuthProvider>
  );
}

export default App;
