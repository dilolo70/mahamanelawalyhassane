

export default function Projets() {
  return (
    <div className="flex flex-col gap-16 md:gap-24">      
      <div className="flex flex-col gap-8">
        <div className="space-y-4">
          <h1 className="animate-in text-3xl font-semibold tracking-tight text-primary">
            Projets
          </h1>
          <p
            className="max-w-lg animate-in text-secondary"
            style={{ "--index": 1 } as React.CSSProperties}
          >
            Je me spécialise dans Flutter, le développement mobile, React, le développement Web, l&apos;UI/UX et la conception de produits. Mais j&apos;apprends toujours de nouvelles choses.
            Voici quelques projets personnels :
            <br />
            
          </p>
        </div>
      </div>

    </div>
  );
}