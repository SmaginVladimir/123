import {motion} from 'framer-motion';
import {NavLink} from "react-router-dom";
import {fadeIn} from "../../../../variants";
import DishThird from '../../../../assets/images/dish-3.jpg';

const HomeThirdSection = () => {
    return (
        <section
            className="min-h-[85vh] lg:min-h-[78vh] flex item-center pt-[100px]"
        >
            <div className="container mx-auto">
                <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
                    <div className="flex-1 text-center font-secondary lg:text-left">
                        <motion.h2
                            variants={fadeIn('down', 0.3)}
                            initial="hidden"
                            whileInView={'show'}
                            viewport={{once: false, amount: 0.7}}
                            className="text-[35px] font-bold leading-[0.8] lg:text-[80px] mb-8"
                        >
                            Become a cool cook now!
                        </motion.h2>
                        <motion.p
                            variants={fadeIn('up', 0.5)}
                            initial="hidden"
                            whileInView={'show'}
                            viewport={{once: false, amount: 0.7}}
                            className="mb-8 max-w-lg mx-auto lg:mx-0 text-[16px] lg:text-[40px]"
                        >
                            Delight your loved ones with masterpieces made with your own hands!
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
                        <img src={DishThird} alt="Dish"/>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default HomeThirdSection;