import styles from './style'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'
import Portfolio from './components/Portfolio'
import Timeline from './components/Timeline'
import Contact from './components/Contact'
import About from './components/About'

function App() {

    return (
        <div className='bg-primary'>
            <div className={`${styles.paddingX} ${styles.flexCenter} sticky top-0 z-10`}>
                <div className={`${styles.boxWidth}`}>
                    <Navbar />
                </div>
            </div>
            <div className={`bg-primary ${styles.flexStart}`}>
                <div className={`${styles.boxWidth}`}>
                    <Hero />
                </div>
            </div>
            <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
                <div className={`${styles.boxWidth}`}>
                    <About/>
                    <Portfolio/>
                    <Timeline/>
                    <Contact/>
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default App
