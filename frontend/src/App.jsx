import {React , lazy, Suspense} from 'react'
import {BrowserRouter as Router} from "react-router-dom"
// import Navbar from './components/Navbar'
// import Home from './components/Home'
// import WorkoutSession from './components/WorkoutSession'
// import Pricing from './components/Pricing'
// import Contact from './components/Contact'
// import BmiCalculator from './components/BmiCalculator'
// import Footer from './components/Footer'

const Navbar = lazy(()=>import("./components/Navbar"))
const Home = lazy(()=>import("./components/Home"))
const WorkoutSession = lazy(()=>import("./components/WorkoutSession"))
const Pricing = lazy(()=>import("./components/Pricing"))
const Contact = lazy(()=>import("./components/Contact"))
const BmiCalculator = lazy(()=>import("./components/BmiCalculator"))
const Footer = lazy(()=>import("./components/Footer"))




const App = () => {
  return (
    <>
    <Router>
    <Suspense>
    <Navbar/>
    <Home/>
    <WorkoutSession/>
    <Pricing/>
    <Contact/>
    <BmiCalculator/>
    <Footer/>
    </Suspense>

    </Router>
    </>
  )
}

export default App