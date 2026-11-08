import { Link, NavLink, Outlet } from "react-router";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "../components/ui/navigation-menu";
import { linkList } from "../data/general-data";
import { ArrowRight, ChevronDownIcon, Globe2, Menu, MenuIcon, X } from "lucide-react";
import { useEffect, useState, type Dispatch, type SetStateAction } from "react";
import logo from "../assets/only-wb.svg"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion";
import Footer from "../components/Footer";
import { Button } from "../components/ui/button";
import { motion } from "motion/react";

export default function MenuLayout() {

    const [isClicked, setIsClicked] = useState<boolean>(false);

    useEffect(() => {
        isClicked ? document.body.style.overflow = "hidden" : document.body.style.overflow = "scroll"
    }, [isClicked])

    return (
        <>
            {/** DESKTOP */}
            <motion.nav className="hidden lg:flex w-full justify-center items-center fixed top-0 min-h-28 z-50 gap-4"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0, type: "keyframes" }}
            >

                <NavLink className="size-fit slide-in-from-left-100" to={"/"} viewTransition>
                    <img
                        // src={`url(${logo})`} 
                        src={logo}
                        className="size-14 animate-in backdrop-blur-3xl bg-white/80 p-2 rounded-xl ring ring-zinc-300"
                    />
                </NavLink>

                {/* <NavigationMenu className="bg-white/50 backdrop-blur-3xl rounded-md p-2 animate-in fade-in duration-700 text-sky-900 min-w-3xl font-grotesk shadow-lg"> */}
                <NavigationMenu className="bg-gradient-to-r backdrop-blur-3xl bg-white/90 text-sky-900 rounded-2xl p-2 duration-700 min-w-3xl font-grotesk shadow-lg ring ring-zinc-300 hover:ring hover:ring-zinc-300">
                    <NavigationMenuList className="">

                        {
                            linkList.map((item, index) => {
                                return (
                                    <NavigationMenuItem id={item.name} className="hover:text-sky-950">
                                        <NavigationMenuTrigger className="hover:ring hover:ring-zinc-300 hover:rounded-xl">
                                            <NavLink to={item.url} className={"size-full"} viewTransition>{item.name}</NavLink>
                                            {item.subLinks && <ChevronDownIcon className="relative top-px ml-1 size-3 transition duration-300 group-data-popup-open/navigation-menu-trigger:rotate-180 group-data-open/navigation-menu-trigger:rotate-180" aria-hidden="true" />}
                                        </NavigationMenuTrigger>

                                        {item.subLinks ?
                                            <NavigationMenuContent className="min-w-3xl grid grid-cols-3 grid-flow-row group-data-[viewport=true]/navigation-menu:bg-white/90 group-data-[viewport=true]/navigation-menu:backdrop-blur-3xl text-sky-800">
                                                {
                                                    item.subLinks.map((subLink, indexTwo) => {
                                                        return (

                                                            <NavigationMenuLink id={subLink.name} className="hover:ring hover:ring-accent/20">
                                                                <NavLink to={subLink.url} className={"size-full"}>
                                                                    {subLink.name}
                                                                </NavLink>
                                                            </NavigationMenuLink>

                                                        )
                                                    })
                                                }
                                            </NavigationMenuContent>
                                            : undefined}


                                    </NavigationMenuItem>
                                )
                            })
                        }

                    </NavigationMenuList>
                </NavigationMenu>

                <NavLink className="size-fit slide-in-from-left-100" to={"/kontakt#angebot-anfragen"} viewTransition>
                    <Button
                        variant={"outline"}
                        // src={`url(${logo})`} 
                        className="h-12 w-fit animate-in">
                        Angebot Anfragen
                    </Button>
                </NavLink>
            </motion.nav>

            {/** MOBILE */}
            <nav
                data-state={isClicked ? "show" : "hide"}
                className="
                lg:hidden flex flex-col fixed top-0 z-50 w-full bg-gradient-to-r backdrop-blur-3xl bg-white/90 min-h-16
                data-[state=show]:opacity-100
                data-[state=show]:transition-all
                data-[state=show]:duration-300
                data-[state=show]:h-full
                data-[state=show]:ease-in
                data-[state=show]:animate-in

                data-[state=hide]:transition-all
                data-[state=hide]:duration-300
                data-[state=hide]:h-16
                data-[state=hide]:ease-in
                data-[state=hide]:animate-in
                overflow-clip
                animate-in
                slide-in-from-top-100
                ease-in
                fade-in
                blur-in
                pb-2
                font-grotesk
                ">

                <section className="min-h-16 h-16 bg-emerald-50/20 backdrop-blur-3xl w-full basis-auto flex justify-between items-center px-4 text-emerald-800">

                    {/* <Globe2 /> */}
                    <Link to="/" className="size-12 animate-in slide-in-from-left-100" onClick={() => setIsClicked(false)}>
                        <img
                            // src={`url(${logo})`} 
                            src={logo}
                            className="size-full"
                        />
                    </Link>
                    <button onClick={() => setIsClicked(!isClicked)}>
                        {isClicked ? <X className="animate-in spin-in blur-in fade-in" /> : <Menu className="animate-out -spin-out-90 blur-out fade-out" />}
                    </button>


                </section>

                <section
                    data-state={isClicked ? "show" : "hide"}

                    className="
                    w-full 
                    h-full
                    basis-auto
                    opacity-100
                    p-2
                    bg-emerald-50/20 backdrop-blur-3xl
                    overflow-scroll
                    "
                >
                    <MobileMenuContent menuIsClicked={isClicked} setIsMenuClicked={setIsClicked} />
                    <img className="absolute bottom-0 -z-10 opacity-10 size-70" src={logo} />
                </section>

            </nav>
            <Outlet />
            <Footer />

        </>
    )
}

const MobileMenuContent = ({ menuIsClicked, setIsMenuClicked }: { menuIsClicked: boolean, setIsMenuClicked: Dispatch<SetStateAction<boolean>> }) => {
    return (
        <div className="size-full">
            <Accordion type="single" collapsible className="ring-none border-none flex flex-col gap-2 text-sky-900 overflow-auto">
                {linkList.map((item) => {
                    return (
                        item.subLinks ?
                            <AccordionItem data-state={menuIsClicked ? "show" : "hide"} value={item.name} key={item.name} className="rounded-xl border-none slide-in-from-left data-[state=show]:slide-in-from-left">
                                <AccordionTrigger className="ring-none border-none rounded-xl text-3xl">
                                    {item.name}
                                </AccordionTrigger>
                                <AccordionContent className="rounded-xl p-2">
                                    <Accordion type="single" collapsible className="border-none">
                                        <AccordionItem value={item.url} className="border-none">
                                            <AccordionTrigger className="text-lg text-sky-900/90" onClick={() => setIsMenuClicked(false)}>
                                                <NavLink to={item.url}><ArrowRight /></NavLink>
                                            </AccordionTrigger>
                                        </AccordionItem>
                                        {item.subLinks && item.subLinks.map((subLink) => {
                                            return (

                                                <AccordionItem value={subLink.name} className="border-none">
                                                    <AccordionTrigger className="text-lg text-sky-900/90" onClick={() => setIsMenuClicked(false)}>
                                                        <NavLink to={subLink.url}>
                                                            {subLink.name}
                                                        </NavLink>
                                                    </AccordionTrigger>
                                                </AccordionItem>
                                            )
                                        })}
                                    </Accordion>
                                </AccordionContent>
                            </AccordionItem> :

                            <AccordionItem value={item.name} key={item.name} className="rounded-xl border-none">
                                <AccordionTrigger className="text-sky-900/90 border-none text-3xl" onClick={() => setIsMenuClicked(false)}>
                                    <NavLink to={item.url}>{item.name}</NavLink>
                                </AccordionTrigger>
                            </AccordionItem>


                    )
                })}
                <AccordionItem value={"angebot-anfragen"} key={"angebot-anfragen"} className="rounded-xl border-none">
                    <AccordionTrigger className="text-sky-900/90 border-none text-3xl" onClick={() => setIsMenuClicked(false)}>
                        <NavLink to={"/kontakt#angebot-anfragen"}>Angebot Anfragen</NavLink>
                    </AccordionTrigger>
                </AccordionItem>
            </Accordion>
        </div>
    )
}
