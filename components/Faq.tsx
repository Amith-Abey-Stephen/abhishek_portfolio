"use client";

import { useState } from "react";

const GROUPS: { heading: string; items: { q: string; a: string }[] }[] = [
  {
    heading: "🖐 Oui, mais…",
    items: [
      {
        q: "Pourquoi ne pas prendre un monteur de mon côté ?",
        a: "Il vous faudra attirer, recruter, tester, briefer et former en continu. Chez Pilea, on gère le montage de A à Z pour une expérience fluide.",
      },
      {
        q: "Et si je ne suis pas satisfait de ma vidéo ?",
        a: "Nous ne facturons pas les retours : autant de modifications que nécessaire jusqu'à 100% de satisfaction.",
      },
      {
        q: "Que faire si je n'ai pas le temps de m'occuper de tout ça ?",
        a: "En 2/3h par mois, on trouve les idées, on tourne chez vous et on monte tout. Miniatures, titres et programmation incluses.",
      },
      {
        q: "Est ce que mes clients sont sur les réseaux ? Vont-ils voir les vidéos ?",
        a: "85% du trafic web est vidéo. YouTube a dépassé les audiences TV en 2024. Vos clients y sont forcément.",
      },
      {
        q: "Pourquoi travailler avec Pilea Agency plutôt qu'une autre agence ?",
        a: "+8 ans de production pour Amixem, Joyca, NetflixFR, Playstation FR… Monteurs internes, chefs de projet, motion designers.",
      },
    ],
  },
  {
    heading: "⚙ Comment ça fonctionne ?",
    items: [
      {
        q: "Comment envoyer les requêtes de vidéos ?",
        a: "Via votre hub Notion dédié qui centralise projets, ressources et suivi.",
      },
      {
        q: "Comment je fais pour vous envoyer mes fichiers ?",
        a: "Liens de téléchargement, accès espace en ligne, ou envoi postal SD/SSD.",
      },
      {
        q: "Combien de temps pour recevoir ma vidéo ?",
        a: "2/3 jours ouvrés en général. Délais express possibles (jour-même, nuit) avec frais additionnels.",
      },
      {
        q: "Comment garantissez-vous la cohérence avec notre image de marque ?",
        a: "Votre chef de projet garantit la DA et apprend de chaque retour pour ne jamais répéter deux fois la même correction.",
      },
    ],
  },
  {
    heading: "💡 Et, si je veux…",
    items: [
      {
        q: "Je veux etre accompagné pour le tournage des vidéos.",
        a: "Tournage dès la demi-journée, ou création complète de votre studio maison rentabilisé en 10-15 tournages.",
      },
      {
        q: "Je veux la fiabilité d'une équipe mais rester libre et flexible.",
        a: "Sans engagement : partez 3 mois, vous ne payez rien. 10 vidéos cette semaine ? On s'en charge.",
      },
      {
        q: "Je veux augmenter mes ventes avec la vidéo.",
        a: "Découverte, lien, vente : le mix parfait pour booster votre business.",
      },
      {
        q: "Je veux produire des contenus de manière régulière et à grande échelle.",
        a: "+800 vidéos en 28 mois pour un streamer (1/jour TikTok), hebdo sans deadline manquée depuis 2 ans pour une youtubeuse.",
      },
    ],
  },
];

export default function Faq() {
  const [open, setOpen] = useState<string | null>(null);
  return (
    <section className="faq" id="faq">
      <div className="faq-l">
        <h2>
          Vous avez
          <br />
          <em>une question ?</em>
        </h2>
      </div>
      <div className="faq-r">
        {GROUPS.map((g) => (
          <div key={g.heading}>
            <h4>{g.heading}</h4>
            {g.items.map((it) => {
              const id = `${g.heading}${it.q}`;
              const isOpen = open === id;
              return (
                <div key={id} className={isOpen ? "acc open" : "acc"}>
                  <button onClick={() => setOpen(isOpen ? null : id)}>
                    {it.q}
                    <span>⌄</span>
                  </button>
                  <div className="acc-b">
                    <p>{it.a}</p>
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </section>
  );
}
