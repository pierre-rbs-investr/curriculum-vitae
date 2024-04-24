import { StarIcon } from "@heroicons/react/20/solid";
import Image from "next/image";

export default function Example() {
  return (
    <section className="bg-white px-6 py-24 sm:py-32 lg:px-8">
      <figure className="mx-auto max-w-2xl">
        <p className="sr-only">5 sur 5 étoiles</p>
        <div className="flex gap-x-1 text-indigo-600">
          <StarIcon className="h-5 w-5 flex-none" aria-hidden="true" />
          <StarIcon className="h-5 w-5 flex-none" aria-hidden="true" />
          <StarIcon className="h-5 w-5 flex-none" aria-hidden="true" />
          <StarIcon className="h-5 w-5 flex-none" aria-hidden="true" />
          <StarIcon className="h-5 w-5 flex-none" aria-hidden="true" />
        </div>
        <blockquote className="mt-10 text-xl font-semibold leading-8 tracking-tight text-gray-900 sm:text-2xl sm:leading-9">
          <p>
            En tant que développeur, j'ai été impressionné par la capacité de
            Pierre à s'adapter rapidement à notre projet et à produire un code
            de qualité. Sa communication transparente et ses idées innovantes
            ont renforcé notre confiance mutuelle. Il est un partenaire
            stratégique précieux pour notre entreprise, capable de saisir
            rapidement nos besoins et de proposer des améliorations perspicaces.
            Je le recommande vivement.
            {/* Commentaire initial : “Dès son intégration dans notre équipe, Pierre a démontré une
            capacité remarquable à se familiariser rapidement avec les
            spécificités de notre projet, devenant opérationnel et effectif en
            un temps record. La qualité de son code est exemplaire, à la fois
            sur le back-end en Django/Python et sur le front-end en JS/HTML/CSS,
            reflétant un savoir-faire technique approfondi et un souci du détail
            impressionnant. Pierre se distingue non seulement par sa compétence
            technique, mais également par son intégrité et la qualité de sa
            communication. Son approche transparente et ses rapports réguliers
            et précis nous ont constamment tenus dans la boucle, renforçant
            ainsi un climat de confiance indispensable à la réussite de nos
            projets. Au-delà de la production de code de qualité, il a prouvé
            être un véritable penseur innovant. Il a apporté des idées neuves,
            suggéré des technologies avancées et a conduit un changement majeur
            dans notre projet en très peu de temps, impactant positivement notre
            trajectoire. Ce développeur possède une compréhension holistique du
            développement qui embrasse tous les aspects de l'entreprise : il
            concilie habilement les exigences de qualité, les impératifs de
            timing et les considérations financières. Sa perspective large sur
            le produit lui permet de proposer des améliorations perspicaces,
            tout en accordant une attention particulière au design et à
            l'expérience utilisateur. Son parcours diversifié est un atout
            majeur qui lui confère la capacité de saisir rapidement les besoins
            uniques de notre entreprise et de s'adapter avec aisance. Pierre
            n'est pas juste un développeur hors pair ; il est un partenaire
            stratégique précieux pour notre activité. Je le recommande avec
            enthousiasme à toute entreprise en quête d'un développeur doué,
            proactif et visionnaire.” */}
          </p>
        </blockquote>
        <figcaption className="mt-10 flex items-center gap-x-6">
          <Image
            className="h-12 w-12"
            src="logo_toha_temp.svg"
            alt=""
            width={150}
            height={100}
          />
          <div className="text-sm leading-6">
            <div className="font-semibold text-gray-900">
              Marie-Charlotte Raigneau
            </div>
            <div className="mt-0.5 text-gray-600">Associée - TOHA Care</div>
          </div>
        </figcaption>
      </figure>
    </section>
  );
}
