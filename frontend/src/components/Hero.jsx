import styles from "../style";
import { bitcoin } from "../assets";

const Hero = () => {
    return (
        <section
            id="home"
            className={`flex md:flex-row flex-col ${styles.paddingY}`}
        >
            <div
                className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
            >

                <div className="flex flex-row items-center py-[6px] px-4  mb-4">
                    <p className={`${styles.paragraph} `}>
                        Hello, my name is: {" "}
                        <span className="text-white font-bold font-roboto"> Tadiwa Chawanda</span>{" "}
                    </p>
                </div>

                <div className="flex flex-row justify-between items-center w-full">
                    <h1 className="flex-1 font-roboto font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
                        <span className="text-crimson">Full Stack</span>
                        <br className="sm:block hidden" />{" "}
                        Web Developer
                    </h1>
                </div>

                <h1 className="font-roboto font-semibold ss:text-[30px] text-[36px] text-white ss:leading-[100.8px] leading-[75px] w-full">
                    Seamless Integration of <span className="text-crimson">Frontend</span> and <span className="text-crimson">Backend</span> {" "}
                </h1>
                <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                    Elevate your projects with my expertise in seamlessly blending frontend and backend technologies.
                    From crafting captivating user interfaces to managing databases with finesse, I've got you covered every step of the way."
                </p>
            </div>

            <div
                className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative flex-col`}
            >
                <div
                    
                    className="bottom-10 w-[70%] h-[70%] relative z-[5] rounded-full cursor-pointer transition-all duration-300 ease-in-out"
                >
                    <img src={bitcoin} alt="billing" className=" rounded-xl hover:scale-110 transition-all duration-300 ease-in-out"/>
                </div>
            </div>
        </section>
    );
};

export default Hero;
