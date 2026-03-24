import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import AppTheme from '../shared-theme/AppTheme';
import AppAppBar from './components/AppAppBar';
import Hero from './components/Hero';
import LogoCollection from './components/LogoCollection';
import Highlights from './components/Highlights';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import ProductListing from './components/ProductListing';
import ContactSection from './components/Contact';

export default function MarketingPage(props: { disableCustomTheme?: boolean }) {
  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />

      <AppAppBar />
      <Hero />
      <div>
        <LogoCollection />
        <ProductListing/>
        <Divider/>
        <Highlights />
        {/* <Divider />
        <Features /> */}
        <Divider />
        <ContactSection/>
        <Divider/>
        {/* <Testimonials />
        <Divider /> */}
        {/* <Pricing />
        <Divider /> */}
        <FAQ />
        <Divider />
        <Footer />
      </div>
    </AppTheme>
  );
}
