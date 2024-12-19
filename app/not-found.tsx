'use client'
import Link from "@/app/components/Link";
import { Metadata } from "next";
import { useState } from "react";

export const metadata: Metadata = {
  title: "404  |  Page non trouvée",
  description: "Uh Oh , cette page n'existe pas",
};

const Custom404 = (): JSX.Element => {
  const [showDialog, setShowDialog] = useState(false);

  const handleClick = () => {
    setShowDialog(true);
    setTimeout(() => {
      setShowDialog(false);
    }, 3000); // Le dialogue disparaîtra après 3 secondes
  };

  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-3xl font-bold tracking-tight text-primary">Page introuvable – 404!</h1>
      <p className="text-secondary max-w-sm  text-center">
        Ooh , cette page n&apos;existe pas , peut-être que vous avez cliqué sur une ancienne page ou que vous avez mal orthographié. Veuillez réessayer…
      </p>
      <div className="h-2" />
      <Link href="/" underline onClick={handleClick}>
        Retour à l&apos;accueil
      </Link>
      {showDialog && (
        <div className="dialogue-animation">
          <p>Chargement, veuillez patienter...</p>
        </div>
      )}
    </div>
  );
};

// Ajoutez ce style CSS pour l'animation
<style jsx>{`
  .dialogue-animation {
    opacity: 0;
    animation: fadeIn 5s ease-in-out forwards;
  }

  @keyframes fadeIn {
    to {
      opacity: 1;
    }
  }
`}</style>

export default Custom404;
