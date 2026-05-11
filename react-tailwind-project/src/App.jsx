import {Navbar, Hero, Features, Pricing,Testimonials, Footer} from './components' ;

function App() {

  return <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
    <Navbar />
    <Hero />
    <Features />
    <Pricing />
    <Testimonials />
    <Footer />
  </div> 
}

export default App
