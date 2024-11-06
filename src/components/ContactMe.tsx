import lineBreak from "../assets/lineBreak.svg";
import SendButton from "../lib/SendButton";
import SocialLinks from "./SocialLinks";

type FooterCol = {
    title: string,
    links: {
        name: string,
        link: string,
        icon?: string,
        leavesWebsite: boolean
    }[]
}

type Footer = {
    columns: FooterCol[]
};


// eslint-disable-next-line react-refresh/only-export-components
export const footer: Footer = {
    columns: [
        {
            title: "Pages",
            links: [
                {
                    name: "Home",
                    link: "/",
                    leavesWebsite: false,
                },
                // {
                //   name: "Blog",
                //   link: "/blog",
                //   leavesWebsite: false,
                // },
                {
                    name: "Projects",
                    link: "/projects",
                    leavesWebsite: false,
                },
                {
                    name: "Designs",
                    link: "/designs",
                    leavesWebsite: false,
                },
            ],
        },
        {
            title: "Social",
            links: [
                {
                    name: "GitHub",
                    link: "https://github.com/braydentw",
                    icon: "/static/icons/github-f.svg",
                    leavesWebsite: true,
                },
                {
                    name: "LinkedIn",
                    link: "https://www.linkedin.com/in/braydentw/",
                    icon: "/static/icons/linkedin-f.svg",
                    leavesWebsite: true,
                },
                {
                    name: "Dribbble",
                    link: "https://dribbble.com/braydentw",
                    icon: "/static/icons/dribbble-f.svg",
                    leavesWebsite: true,
                },
                {
                    name: "IndieHackers",
                    link: "https://indiehackers.com/braydentw",
                    icon: "/static/icons/indiehackers-f.svg",
                    leavesWebsite: true,
                },
                {
                    name: "Email",
                    link: "mailto:contact@braydentw.io",
                    icon: "/static/icons/mail-f.svg",
                    leavesWebsite: true,
                },
            ],
        },
    ],

};


export function CTA() {
    return (
        <div className="pt-36 relative ">
            <img className="w-30 m-auto mb-2" src={lineBreak} />
            <div className="pt-14 flex flex-col justify-center items-center">
                <h2 className="text-4xl md:text-5xl text-blue-400 font-bold mb-10">
                    Interested in Working Together?
                </h2>
                <p className="text-sm text-gray-500 mt-4">Have some big idea or brand to develop and need help? Then reach out we'd love to hear about your project  and provide help.</p>

                <a
                    href="mailto:alaaeddine.leguefche@univ-constantine2.dz"
                    className="mt-10"
                >
                    <SendButton />
                </a>
            </div>
            <div className="flex gap-10 mt-10 justify-center">

               <SocialLinks />
            </div>
        </div>
    );
}

function Footer() {
    return (
        <div className="grid sm:grid-cols-2 items-start gap-16 p-4 mx-auto max-w-4xl bg-white font-[sans-serif]">
            <div>
                <h1 className="text-gray-800 text-3xl font-extrabold">Let's Talk</h1>
                <p className="text-sm text-gray-500 mt-4">Have some big idea or brand to develop and need help? Then reach out we'd love to hear about your project  and provide help.</p>

                <div className="mt-12">
                    <h2 className="text-gray-800 text-base font-bold">Email</h2>
                    <ul className="mt-4">
                        <li className="flex items-center">
                            <div className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill='#007bff'
                                    viewBox="0 0 479.058 479.058">
                                    <path
                                        d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z"
                                        data-original="#000000" />
                                </svg>
                            </div>
                            <a href="javascript:void(0)" className="text-[#007bff] text-sm ml-4">
                                <small className="block">Mail</small>
                                <strong>alaaeddine.leguefche@univ-constantine2.dz</strong>
                            </a>
                        </li>
                    </ul>
                </div>


            </div>


        </div>
    );
}

export default Footer;
