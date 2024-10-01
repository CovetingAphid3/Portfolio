import React from 'react';
import { motion } from 'framer-motion';
import styles from "../styles/Hero.module.css";
import { logo2 } from "../assets";

const Hero = () => {
    return (
        <section id="home" className={` ${styles.heroSection} ${styles.paddingY}`}>
            <div className={`${styles.heroContent} ${styles.flexStart}`}>
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className={styles.introduction}
                >
                    <p className={styles.greeting}>
                        Hello, I'm <span className={styles.name}>T. Chawanda</span>
                    </p>
                </motion.div>
                <motion.h1 
                    className={styles.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <span className={styles.highlight}>Full Stack</span>
                    <br className={styles.breakpoint} />
                    Developer
                </motion.h1>
                <motion.h2 
                    className={styles.subtitle}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    Seamless Integration of <span className={styles.highlight}>Front</span> and <span className={styles.highlight}>Backend</span>
                </motion.h2>
                <motion.p 
                    className={styles.description}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    I combine creativity with technical expertise to deliver exceptional digital solutions.
                    With a focus on both frontend elegance and backend functionality, I create intuitive user interfaces while ensuring robust data management.
                </motion.p>
            </div>
            <div className={styles.imageContainer}>
                <motion.div 
                    className={styles.imageWrapper}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                >
                    <img src={logo2} alt="T. Chawanda" className={styles.profileImage} />
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
