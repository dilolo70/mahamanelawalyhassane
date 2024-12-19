import Image from "next/image";
import { Metadata } from "next";

import Link from "@/app/components/Link";
import Section from "@/app/components/Section";
import ConnectLinks from "@/app/components/ConnectLinks";
import Workplaces from "@/app/about/components/Workplaces";
import Gallery from "@/app/about/components/Gallery";

import hinesLogo from "public/work/hines-logo.jpeg";
import perishipLogo from "public/work/periship-logo.jpeg";
import camsLogo from "public/work/cams-logo.png";
import uhdLogo from "public/work/uhd.png";

import colorado from "public/gallery/colorado.jpg";
import NYC from "public/gallery/nyc.jpg";
import Greeting from "./components/Greeting";


export const metadata: Metadata = {
  title: "À propos | Mahamane Lawaly Hassane",
  description: "",
};

export default async function About() {
  return (
    <div className="flex flex-col gap-16 md:gap-24">
      <div>
        <h1 className="animate-in text-3xl font-bold tracking-tight text-primary">
          À propos
        </h1>
        <p
          className="animate-in text-secondary"
          style={{ "--index": 1 } as React.CSSProperties}
        >
          Un aperçu de moi meme  .
        </p>
      </div>
      <div className="mb-8 md:hidden">
        <div
          className="animate-in"
          style={{ "--index": 1 } as React.CSSProperties}
        >
          <Image
            src={NYC}
            alt={"Moi et Lily"}
            width={324}
            height={139}
            className="pointer-events-none relative inset-0 h-52 w-60 -rotate-6 rounded-xl bg-neutral-400 object-cover object-right shadow-md"
            priority
          />
        </div>

        <div
          className="animate-in"
          style={{ "--index": 2 } as React.CSSProperties}
        >
          <Image
            src={colorado}
            alt={"Juste moi"}
            width={220}
            height={260}
            className="pointer-events-none absolute inset-0 -top-44 left-[40%] w-48 rotate-6 rounded-xl bg-neutral-400 object-cover shadow-md md:left-[60%] md:w-56"
            priority
          />
        </div>
      </div>
      <div className="hidden md:block">
        <Gallery />
      </div>
      <div
        className="flex animate-in flex-col gap-16 md:gap-24"
        style={{ "--index": 3 } as React.CSSProperties}
      >
        <Section heading="À propos" headingAlignment="left">
          <div className="flex flex-col gap-6">
            <p>
              <Greeting /> Je m&apos;appelle Mahamane Lawaly Hassane ! Originaire de Maradi, je vis désormais à Niamey, une ville dynamique.
            </p>
            <p>
              Ma curiosité pour le code et l&apos;informatique a commencé à l&apos;université,
              ce qui m&apos;a naturellement conduit à poursuivre une carrière dans la technologie. Je travaille actuellement en tant que développeur spécialisé dans le développement et la conception de solutions Web & Mobile full-stack depuis{" "}
              {new Date().getFullYear() - 2022} ans maintenant!
            </p>
            <p>
              Parallèlement à mon parcours de codage, je suis co-organisateur du{" "}
              <Link
                className="underline"
                href="https://gdg.community.dev/u/mwk6ft/"
              >
                GDG-Maradi
              </Link>{" "}
              où je gère souvent l&apos;initiation au web pour les futurs développeurs et aussi la formation en Flutter{" "}
            </p>
            <p>
              Majoritairement, quand je ne code pas, je fais souvent du vélo et j&apos;aime aussi les voyages, ce qui m&apos;a fait intégrer quelques organismes comme la <span className="text-tertiary">JCI</span>, <span className="text-tertiary">ASPE</span> et <span className="text-tertiary">...</span>
            </p>
          </div>
        </Section>
        <Section heading="Connecter" headingAlignment="left">
          <ul className="animated-list grid flex-grow grid-cols-1 gap-3 md:grid-cols-2">
            {ConnectLinks.map((link) => (
              <li className="col-span-1 transition-opacity" key={link.label}>
                <Link
                  href={link.href}
                  className="inline-grid w-full rounded-lg bg-secondary p-4 no-underline transition-opacity "
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{link.icon}</span>
                    {link.label}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="ml-auto h-5 w-5 text-secondary"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </Section>
        <Section heading="Projets" headingAlignment="left">
          <div className="flex w-full flex-col gap-8">
            <p>
              Je me spécialise dans Flutter, le développement mobile, React, le développement Web, l&apos;UI/UX et la conception de produits. Mais j&apos;apprends toujours de nouvelles choses.
              Voici quelques projets personnels :
            </p>
            <Workplaces items={workplaces} />
          </div>
        </Section>
      </div>
    </div>
  );
}

const workplaces = [
  {
    title: "Stage ",
    company: "Université de Maradi",
    date: "2021",
    imageSrc: uhdLogo,
    link: "https://www.uddm.edu.ne/",
  },
];
