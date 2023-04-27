import {TypeAnimation} from 'react-type-animation';
import {motion} from 'framer-motion';
import {NavLink} from "react-router-dom";
import {fadeIn} from "../../../../variants";
import DishFirst from '../../../../assets/images/dish-1.jpg';

const HomeFirstSection = () => {
    return (
        <section
            className="min-h-[80vh] lg:min-h-[100vh] flex item-center py-24 bg-first-section"
        >
            <div className="container mx-auto snap-center">
                <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
                    <div className="flex-1 text-center font-secondary lg:text-left">
                        <motion.h1
                            variants={fadeIn('down', 0.3)}
                            initial="hidden"
                            whileInView={'show'}
                            viewport={{once: false, amount: 0.7}}
                            className="text-[35px] font-bold leading-[0.8] lg:text-[80px] mb-8"
                        >
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        </motion.h1>
                        <motion.div
                            variants={fadeIn('down', 0.4)}
                            initial="hidden"
                            whileInView={'show'}
                            viewport={{once: false, amount: 0.7}}
                            className="mb-6 text-[26px] lg:text-[55px] font-secondary
                            font-semibold uppercase leading-[1]">
                            <span>Lorem ipsum dolor - </span>
                            <TypeAnimation
                                sequence={[
                                    'ipsum',
                                    2000,
                                    'sit',
                                    2000,
                                    'amet',
                                    2000,
                                    'consectetur',
                                    2000,
                                    'adipisicing',
                                    2000,
                                ]}
                                speed={50}
                                className="text-black"
                                wrapper="span"
                                repeat={Infinity}
                            />
                        </motion.div>
                        <motion.p
                            variants={fadeIn('down', 0.5)}
                            initial="hidden"
                            whileInView={'show'}
                            viewport={{once: false, amount: 0.7}}
                            className="mb-8 max-w-lg mx-auto lg:mx-0 text-[16px] lg:text-[24px]"
                        >
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis est excepturi nobis
                            repellendus vel! Dicta ducimus harum nam perspiciatis quae.
                        </motion.p>
                        <motion.div
                            variants={fadeIn('down', 0.6)}
                            initial="hidden"
                            whileInView={'show'}
                            viewport={{once: false, amount: 0.7}}
                        >
                            <NavLink
                                to="/"
                                className="rounded-md bg-gray-700 px-3.5
                                py-2.5 text-sm font-semibold text-white
                                shadow-sm hover:bg-black focus-visible:outline
                                focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Read more
                            </NavLink>
                        </motion.div>
                    </div>
                    <motion.div
                        variants={fadeIn('up', 0.6)}
                        initial="hidden"
                        whileInView={'show'}
                        viewport={{once: false, amount: 0.7}}
                        className="flex-1"
                    >
                        <img className="rounded-3xl" src={DishFirst} alt="Dish"/>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default HomeFirstSection;