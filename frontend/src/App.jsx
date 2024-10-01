import styles from './style'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import About from './components/About'
function App() {
    return (
        <div className='bg-gray-900'>
            <div className={`${styles.paddingX} ${styles.flexCenter} sticky top-0 z-10`}>
                <div className={`${styles.boxWidth}`}>
                    <Navbar />
                </div>
            </div>
            <div className={ `${styles.flexStart}`}>
                <div className={`${styles.boxWidth}`}>
                    <Hero />
                </div>
            </div>
            <div className={`${styles.paddingX} ${styles.flexStart}`}>
                <div className={`${styles.boxWidth}`}>
                    <About/>
                    <Portfolio/>
                    <Contact/>
                    <Footer />
                </div>
            </div>
        </div>
    )
}
export default App
