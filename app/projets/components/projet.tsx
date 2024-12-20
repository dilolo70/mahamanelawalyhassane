'use client';
import { FollowerPointerCard } from "@/app/components/ui/fp";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export function Projet() {
  const pathname = `/${usePathname().split("/")[1]}`;

  // Trier les projets du plus récent au plus ancien
  const sortedProjects = [...projects].sort((a, b) => {
    const dateA = a.date.includes(",") ? new Date(a.date).getFullYear() : parseInt(a.date);
    const dateB = b.date.includes(",") ? new Date(b.date).getFullYear() : parseInt(b.date);
    return dateB - dateA; // Tri décroissant
  });

  return (
    <div className="mx-auto space-y-6">
      {sortedProjects.map((blog) => (
        <Link
          key={blog.title}
          href={blog.lien}
          className="relative block rounded-lg overflow-hidden transition-all group"
        >
          <motion.div
            className={`${
              pathname === blog.lien ? "bg-primary text-white" : "text-secondary"
            } px-3 py-2 rounded-lg`}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          >
            <FollowerPointerCard
              title={
                <TitleComponent
                  title={blog.author}
                  avatar={blog.authorAvatar}
                />
              }
            >
              <div className="relative overflow-hidden h-full rounded-2xl transition duration-200 group hover:shadow-xl border border-secondary">
                <div className="w-full aspect-w-16 aspect-h-10 bg-tertiary rounded-tr-lg rounded-tl-lg overflow-hidden relative">
                  <Image
                    src={blog.image}
                    alt="thumbnail"
                    layout="fill"
                    objectFit="cover"
                    className="transform group-hover:scale-110 transition duration-300"
                  />
                </div>
                <div className="p-4">
                  <h2 className="font-bold text-lg text-primary group-hover:text-secondary">
                    {blog.title}
                  </h2>
                  <p className="my-2 text-sm text-secondary">
                    {blog.description}
                  </p>
                  <div className="flex justify-between items-center mt-4">
                    <span className="text-sm text-tertiary">{blog.date}</span>
                    <motion.div
                      className="px-6 py-2 bg-primary text-white font-bold rounded-full text-xs"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      Plus de détails
                    </motion.div>
                  </div>
                </div>
              </div>
            </FollowerPointerCard>
          </motion.div>
        </Link>
      ))}
    </div>
  );
}

// Tableau des projets
const projects = [
  {
    slug: "application-gestion-competition-taekwondo",
    author: "Mahamane Lawaly Hassane",
    date: "2022",
    title: "🥋 Application de gestion de compétition de Taekwondo",
    description:
      "C'est une application que j'ai développée avec PHP et Tailwind. Elle a pour objectif d'aider mon club à gérer les compétitions internes. Cependant, je n'ai pas pu terminer le projet avec toutes les fonctionnalités prévues.",
    image: "/blog/tailwind/image.png",
    authorAvatar: "/avatar.png",
    lien: "/lien",
  },
  {
    slug: "application-finance-personnelle",
    author: "Mahamane Lawaly Hassane",
    date: "2023",
    title: "💰 Application de gestion des finances personnelles",
    description:
      "Développée avec Flutter, cette application aide les utilisateurs à suivre leurs dépenses, gérer leur budget et avoir une vue d'ensemble de leur situation financière.",
    image: "/blog/tailwind/finance.png",
    authorAvatar: "/avatar.png",
    lien: "/lien-finance",
  },
  {
    slug: "application-pharmacie-en-cours",
    author: "Mahamane Lawaly Hassane",
    date: "15 Décembre, 2024",
    title: "💊 Application d'achat de produits pharmaceutiques (en cours)",
    description:
      "Je travaille actuellement sur une application Flutter destinée à l'achat de produits pharmaceutiques. Elle permet de consulter le catalogue, vérifier la disponibilité des produits, et effectuer des achats en ligne de manière simple et sécurisée.",
    image: "/blog/pharmacie/image.png",
    authorAvatar: "/avatar.png",
    lien: "/lien-pharmacie",
  },
  
  {
    slug: "site-ecommerce-cosmetique",
    author: "Mahamane Lawaly Hassane",
    date: "2024",
    title: "🛍️ Site e-commerce pour une marque de cosmétique",
    description:
      "Développé avec Next.js, ce site offre une expérience utilisateur fluide et permet la vente de produits avec des paiements sécurisés pour une marque de cosmétique.",
    image: "/blog/cosmetique/image.png",
    authorAvatar: "/avatar.png",
    lien: "/lien-cosmetique",
  },
];

// Composant pour afficher le titre et l'avatar
const TitleComponent = ({
  title,
  avatar,
}: {
  title: string;
  avatar: string;
}) => (
  <div className="flex space-x-2 items-center">
    <Image
      src={avatar}
      height="50"
      width="50"
      alt="thumbnail"
      className="rounded-full border-2 border-tertiary"
    />
    <div>{title}</div>
  </div>
);

export default Projet;
