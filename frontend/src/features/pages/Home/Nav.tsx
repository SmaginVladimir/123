import {BiHomeAlt} from "react-icons/all";
import {BsHeart} from "react-icons/all";
import {BsChatSquare} from "react-icons/all";

interface scrollSetings {
    str: string;
    where: 'start' | 'center';
}

const Nav = () => {
    const scrollToElem = (arg: scrollSetings) => {
        const elem = document.getElementById(arg.str)!;
        elem.scrollIntoView({
            behavior: "smooth",
            block: arg.where
        });
    }

    return (
        <nav className="fixed bottom-24 lg:bottom-11 w-full overflow-hidden z-30">
            <div className="container mx-auto">
                <div className="w-full bg-black h-[56px]
                backdrop-blur-2xl rounded-full max-w-[460px]
                mx-auto px-5 flex justify-between text-2xl text-white/50
                border-solid border-2 border-white/70"
                >
                    <div onClick={() => scrollToElem({str: 'firstSection', where: 'start'})} className="cursor-pointer w-[53px] h-[53px] flex items-center justify-center hover:text-white">
                        <BiHomeAlt />
                    </div>
                    <div onClick={() => scrollToElem({str: 'secondSection', where: 'start'})} className="cursor-pointer w-[53px] h-[53px] flex items-center justify-center hover:text-white">
                        <BsHeart />
                    </div>
                    <div onClick={() => scrollToElem({str: 'footer', where: 'start'})} className="cursor-pointer w-[53px] h-[53px] flex items-center justify-center hover:text-white">
                        <BsChatSquare />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Nav;