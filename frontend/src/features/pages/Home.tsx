import {TypeAnimation} from 'react-type-animation';

// import {motion} from 'framer-motion';

import DishFirst from '../../assets/images/dish-1.jpg';
import {NavLink} from "react-router-dom";

const Home = () => {
    return (
        <section className="min-h-[80vh] lg:min-h-[72vh] flex item-center py-24">
            <div className="container mx-auto">
                <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
                    <div className="flex-1 text-center font-secondary lg:text-left">
                        <h1 className="text-[45px] font-bold leading-[0.8] lg:text-[90px]">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h1>
                        <div className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]">
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
                        </div>
                        <p className="mb-8 max-w-lg mx-auto lg:mx-0">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis est excepturi nobis repellendus vel! Dicta ducimus harum nam perspiciatis quae.
                        </p>
                        <div>
                            <NavLink
                                to="/"
                                className="rounded-md bg-gray-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Read more
                            </NavLink>
                        </div>
                    </div>
                    <div className="flex-1 ">
                        <img className="rounded-full" src={DishFirst} alt="Dish"/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;