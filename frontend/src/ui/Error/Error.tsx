import {NavLink} from "react-router-dom";

const Error = () => {
    return (
        <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
            <div className="text-center text-red">
                <p className="text-base font-semibold">404</p>
                <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">Page not found</h1>
                <p className="mt-6 text-base leading-7 text-black">Sorry, we couldn’t find the page you’re looking for.</p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                    <NavLink
                        to="/"
                        className="rounded-md bg-red px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-darkRed focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Go back home
                    </NavLink>
                    <NavLink to="/" className="text-sm font-semibold text-black">
                        Contact support <span aria-hidden="true">&rarr;</span>
                    </NavLink>
                </div>
            </div>
        </main>

    );
};

export default Error;