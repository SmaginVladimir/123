import {BsGit, BsYoutube, BsLinkedin} from "react-icons/all";
import {NavLink} from "react-router-dom";
import Logo from "../../assets/images/img.png";

const Footer = () => {
    return (
        <div className="bg-black">
            <div className="container mx-auto">
                <div
                    id="footer"
                    className="flex h-[72px] items-center justify-between text-white"
                >
                    <div>
                        <NavLink to={'/'} className="block py-3">
                            <img className="object-contain max-h-[45px]" src={Logo} alt="Logo"/>
                        </NavLink>
                    </div>
                    <div className="flex justify-between gap-8 text-2xl">
                        <BsGit />
                        <BsYoutube />
                        <BsLinkedin />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;