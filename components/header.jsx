 "use client"
import Link from "next/link";
import Image from "next/image";
import LogoImg from "@/assets/logo.png"
import Classes from './main-header.module.css'
import { usePathname } from "next/navigation";

export default function Header() {
    const path = usePathname()
    return(
        <header className={Classes.header}>

       <Link href="/" className={Classes.logo}> 
       <Image src={LogoImg} priority alt="an image" />
       NextLevel Food
        </Link>
 
        <nav className={Classes.nav}>
            <ul>
                <li>
                    <Link href={"/meals"} className={path.startsWith("/meals") ? Classes.active : undefined}> Browse Meal</Link>

                </li>
                <li><Link href={"community"} className={path.startsWith("/community") ? Classes.active : undefined} > Foodies Community</Link> </li>
            </ul>

        </nav>
         </header>
    )
}