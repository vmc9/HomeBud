import Header from './components/UI/Header'
import MainBanner from './components/Landing/MainBanner';
import MainCarousel from './components/Landing/Carousel/MainCarousel'
import MainInfo from './components/Landing/MainInfo';
import Footer from './components/UI/Footer';
import { AuthProvider } from './store/auth-context'
import { Box } from '@mui/material';

function App() {
  return (
    <AuthProvider>
      <Header />
      <Box sx={{width: '80%', m: 'auto'}}>
        <MainBanner />
        <MainCarousel />
        <MainInfo />
        <Footer />
      </Box>
    </AuthProvider>
  );
}

export default App;
