import {TypeAnimation} from 'react-type-animation';
import {motion} from 'framer-motion';
import {NavLink} from "react-router-dom";
import {fadeIn} from "../../../../variants";
import DishFirst from '../../../../assets/images/dish-1.jpg';

const HomeFirstSection = () => {
    return (
        <section
            id="firstSection"
            className="min-h-[100vh] lg:min-h-[78vh] flex item-center pt-[200px]"
        >
            <div className="container mx-auto">
                <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
                    <div className="flex-1 text-center font-secondary lg:text-left">
                        <motion.h1
                            variants={fadeIn('down', 0.3)}
                            initial="hidden"
                            whileInView={'show'}
                            viewport={{once: false, amount: 0.7}}
                            className="text-[35px] font-bold leading-[1] lg:text-[80px] mb-8"
                        >
                            A great variety of dishes are collected here!
                        </motion.h1>
                        <motion.div
                            variants={fadeIn('down', 0.4)}
                            initial="hidden"
                            whileInView={'show'}
                            viewport={{once: false, amount: 0.7}}
                            className="mb-6 text-[26px] lg:text-[50px] font-secondary
                            font-semibold uppercase leading-[1]">
                            <TypeAnimation
                                sequence={[
                                    'Quickly!',
                                    2000,
                                    'Easy!',
                                    2000,
                                    'And it\'s delicious!',
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
                            Find dishes to suit your tastes and preferences!
                            Share recipes with friends! Add recipes to your favorites!
                        </motion.p>
                        <motion.div
                            variants={fadeIn('up', 0.6)}
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
                                Sing Up
                            </NavLink>
                        </motion.div>
                    </div>
                    <motion.div
                        variants={fadeIn('up', 0.6)}
                        initial="hidden"
                        whileInView={'show'}
                        viewport={{once: false, amount: 0.7}}
                        className="lg:flex flex-1 rounded-3xl overflow-hidden"
                    >
                        <img src={DishFirst} alt="Dish"/>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default HomeFirstSection;