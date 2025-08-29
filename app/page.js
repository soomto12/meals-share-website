
import Classes from "./page.module.css"
import Link from "next/link";
import ImageSlideshow from "@/components/image-slideshow";
export default function Home() {
  return (
<div>
  <header className={Classes.header}>
    <div className={Classes.slideshow}>
<ImageSlideshow/>
    </div>
    <div>
      <div className={Classes.hero} >
        <h1> NextLevel Food for NextLevel Foodies</h1>
        <p> Tast & share ood from all over the world.</p>
        <div className={Classes.cta}>
<Link href="/community">join the community </Link>
<Link href="/meals"> Explore Meals </Link>
        </div>
      </div>
    </div>
  </header>
  <main>
        <section className={Classes.section}>
          <h2>How it works</h2>
          <p>
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes, and to
            connect with other food lovers.
          </p>
          <p>
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>

        <section className={Classes.section}>
          <h2>Why NextLevel Food?</h2>
          <p>
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes, and to
            connect with other food lovers.
          </p>
          <p>
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>
      </main>
</div>
  );
}
