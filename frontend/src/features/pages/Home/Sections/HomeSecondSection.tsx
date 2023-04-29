import {useInView} from 'react-intersection-observer';
import CountUp from 'react-countup';
import {motion} from 'framer-motion';
import {NavLink} from "react-router-dom";
import {fadeIn} from "../../../../variants";
import DishSecond from '../../../../assets/images/dish-2.jpg';

const HomeSecondSection = () => {

    const [ref, inView] = useInView({
        threshold: 0.5
    });

    return (
        <section
            ref={ref}
            id="secondSection"
            className="min-h-[95vh] lg:min-h-[90vh] flex item-center pt-[200px]"
        >
            <div className="container mx-auto">
                <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
                    <motion.div
                        variants={fadeIn('right', 0.6)}
                        initial="hidden"
                        whileInView={'show'}
                        viewport={{once: false, amount: 0.7}}
                        className="lg:flex flex-1 rounded-3xl overflow-hidden"
                    >
                        <img src={DishSecond} alt="Dish"/>
                    </motion.div>
                    <div className="flex-1 text-center font-secondary lg:text-left">
                        <motion.h2
                            variants={fadeIn('left', 0.3)}
                            initial="hidden"
                            whileInView={'show'}
                            viewport={{once: false, amount: 0.7}}
                            className="text-[35px] font-bold leading-[0.8] lg:text-[80px] mb-8"
                        >
                            Take care of your health with us!
                        </motion.h2>
                        <motion.p
                            variants={fadeIn('up', 0.5)}
                            initial="hidden"
                            whileInView={'show'}
                            viewport={{once: false, amount: 0.7}}
                            className="mb-8 max-w-lg mx-auto lg:mx-0 text-[16px] lg:text-[40px]"
                        >
                            Make up your diet, choosing only those dishes that you like!
                        </motion.p>
                        <motion.div
                            variants={fadeIn('up', 0.4)}
                            initial="hidden"
                            whileInView={'show'}
                            viewport={{once: false, amount: 0.7}}
                            className="mb-8 flex gap-2 items-center justify-center lg:justify-start text-gray-700 text-[26px] lg:text-[50px] font-secondary font-semibold leading-[1]">
                            <div className="text-center">
                                <p>
                                    {inView ? <CountUp start={0} end={99} duration={4}/> : null }k+&nbsp;dishes
                                </p>
                            </div>
                            &#47;
                            <div>
                                <p>
                                    {inView ? <CountUp start={0} end={999} duration={4}/> : null }k+&nbsp;followers
                                </p>
                            </div>
                        </motion.div>
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
                </div>
            </div>
        </section>
    );
};

export default HomeSecondSection;