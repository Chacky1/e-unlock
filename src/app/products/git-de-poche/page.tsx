import { redirect } from "next/navigation";

import fetchCourseBySlug from "@/actions/fetch-course-by-slug";
import Button from "@/components/ui/button";

import styles from "./page.module.css";
import Image from "next/image";

const COURSE_NOT_FOUND_TIMEOUT = 1000 * 5; // 5 seconds
const COURSE_SLUG = "git-de-poche";

const GitDePochePage = async () => {
  const course = await fetchCourseBySlug(COURSE_SLUG);
  console.log(course);

  if (!course) {
    setTimeout(() => {
      redirect("/");
    }, COURSE_NOT_FOUND_TIMEOUT);

    return <p>Une erreur s&apos;est produite, vous allez être redirigé...</p>;
  }

  return (
    <>
      <section id="sale-page" className="sale-page">
        <section id="sale-page-intro" className={styles["sale-page__intro"]}>
          <video autoPlay loop controls>
            <source src={course.video} type="video/mp4" />
          </video>

          <div>
            <h1>{course.name}</h1>
            <p>{course.solution}</p>
            <p>{course.price}</p>
            <Button>Acheter</Button>
          </div>
        </section>

        <section
          id="sale-page-customer-suffering"
          className="sale-page__customer-suffering"
        >
          <h2>
            À quoi bon travailler sur des projets, si vous n&apos;en gardez
            aucune trace ni ne pouvez le montrer à personne ?
          </h2>
          <p>Apprendre à coder, c&apos;est long et difficile...</p>
          <p>
            Et être incapable de montrer votre travail est la chose la plus
            frustrante que vous puissiez vous infliger.
          </p>
        </section>

        <section
          id="sale-page-customer-situations"
          className="sale-page__customer-situations"
        >
          <h2>Connaissez-vous l&apos;un de ces 3 cas de figures ?</h2>
          <div>
            <div>
              <h3>Je ne stocke mon code nulle part</h3>
              <p>
                Vous passez de projet en projet, sans jamais garder une trace de
                votre code. Vous montez en compétences, mais vous ne pouvez pas
                le montrer.
              </p>
            </div>
            <div>
              <h3>
                Face à un recruteur, vous n&apos;avez rien pour le convaincre
                techniquement
              </h3>
              <p>
                Vous avez déjà travaillé sur des projets, mais vous n&apos;avez
                pas de portfolio à montrer. Vous ne pouvez pas prouver vos
                compétences alors que vous y avez du temps et probablement de
                l&apos;argent.
              </p>
            </div>
            <div>
              <h3>
                Je ne suis pas organisé et mon code se balade un peu partout
              </h3>
              <p>
                Un dossier à droite, un autre à gauche, un autre sur un disque
                externe... Vous ne savez plus où donner de la tête et vous
                perdez du temps à chercher vos projets.
              </p>
              <p>
                Pire encore, si votre PC tombe en panne, c&apos;est terminé et
                tout votre code est perdu...
              </p>
            </div>
          </div>
        </section>

        <section
          id="sale-page-storytelling"
          className="sale-page__storytelling"
        >
          <h2>
            🏫 Après 3 ans d&apos;école, et une vingtaine de projets éparpillés
            entre mon ordinateur perso et les ordinateurs de l&apos;école, il
            fallait que je regroupe tout ça et que je puisse mettre en valeur ce
            travail pour trouver mon premier job
          </h2>
          <div>
            <p>
              Après 5 années d&apos;étude, j&apos;ai des projets à la pelle...
              Des applications web, une application Android, des rapports de
              CTFs, des scripts d&apos;automatisation. Tout ça sur plusieurs
              machines.
            </p>
            <p>
              Alors, j&apos;ai bien essayé de tout regrouper sur un disque dur
              externe, dans des dossiers bien nommés, mais c&apos;était un peu
              le bazar...
            </p>
            <p>
              Et puis, je ne pouvais pas montrer tout ça à un recruteur, car il
              fallait que je lui prête mon disque dur, ou que je lui envoie par
              mail...
            </p>
            <p>
              <strong>
                Au final, tous ces projets ne servaient pas à grand chose.
              </strong>
            </p>
          </div>
          <div>
            <p>
              J&apos;ai donc décidé de tout regrouper sur un serveur web, avec
              une interface simple et rapide à utiliser.
            </p>
            <p>
              J&apos;ai pu mettre en ligne tous mes projets, et les montrer à
              mes proches, à mes amis, à mes collègues, et à des recruteurs.
            </p>
            <p>
              <strong>
                J&apos;ai pu montrer tout mon travail, et ça a fait la
                différence pour mon premier job.
              </strong>
            </p>
          </div>
          <div>
            <p>
              Je connaissais Git depuis longtemps. On apprend forcément à
              l&apos;utiliser en école d&apos;ingénieur. Mais je ne l&apos;avais
              jamais utilisé pour mes projets personnels.
            </p>
            <p>
              C&apos;était l&apos;outil un peu chiant que personne n&apos;a pris
              le temps de trop expliquer. Cela devait paraître évident pour les
              autres, mais pas pour moi.
            </p>
            <p>
              <strong>
                J&apos;ai donc décidé de me former à Git, et de l&apos;utiliser
                pour tous mes projets.
              </strong>
            </p>
          </div>
          <div>
            <p>
              L&apos;avantage, c&apos;est que je n&apos;ai même pas eu besoin de
              refaire une plateforme web de zéro. Un site web existait déjà pour
              ça : <strong>GitHub</strong>.
            </p>
            <p>
              Et voici à quoi ressemble mon profil GitHub aujourd&apos;hui :
            </p>
            <div>
              <Image
                src="/images/git-de-poche/github-profile.png"
                width={100}
                height={100}
                alt="Profil Github"
              />
            </div>
            <p>
              Je sais qu&apos;il y a encore du travail, mais je suis fier de ce
              que j&apos;ai accompli. Et je sais que je peux faire encore mieux.
              Mais aujourd&apos;hui, je peux montrer mon travail à
              n&apos;importe qui, et c&apos;est ça qui compte.
            </p>
          </div>
        </section>

        <section id="sale-page-solutions" className="sale-page__solutions">
          <h2>🎯 L&apos;objectif de la formation Git De Poche</h2>
          <p>
            Git De Poche est une formation pratique qui vous encourage au{" "}
            <strong>passage à l&apos;action</strong>, de manière{" "}
            <strong>pragmatique</strong>.
          </p>
          <p>
            Vous apprendrez à utiliser Git et GitHub pour stocker et montrer
            votre code, et vous pourrez ainsi :
          </p>
          <ul>
            <li>Vous organisez efficacement avec un système</li>
            <li>
              Montrer votre travail à n&apos;importe qui, n&apos;importe quand,
              depuis n&apos;importe où et depuis n&apos;importe quel appareil
            </li>
            <li>
              Gagner en confiance lors de votre arrivée sur des projets qui ne
              sont pas les vôtres
            </li>
            <li>Vous faire remarquer par des recruteurs</li>
            <li>Stocker votre travail de manière centralisée</li>
          </ul>
          <p>
            <strong>
              Mon objectif est que vous soyez capable de mettre en place un
              système professionnel sur tous vos projets.
            </strong>
          </p>
        </section>
      </section>

      <section
        id="sale-page-differentiation"
        className="sale-page__differentiation"
      >
        <h2>
          🙅‍♂️ Git De Poche n&apos;est pas une énième formation Git à
          collectionner
        </h2>
        <p>C&apos;est la seule formation Git qu&apos;il vous faut.</p>
        <p>
          <strong>
            Vous n&apos;aurez pas besoin de vous former à Git pendant des
            heures, pour finalement ne pas l&apos;utiliser.
          </strong>
        </p>
        <p>
          Vous aurez les clés du carrosse pour mettre en place un{" "}
          <strong>système</strong> simplement sur tous vos projets.
        </p>
        <p>
          Je cherche aussi à vous faire prendre de la hauteur... Vous aurez
          quelques commandes à taper mais vous allez également comprendre la
          philosophie derrière l&apos;outil pour le plier à tous vos besoins.
        </p>
        <p>
          Cette philosophie, c&apos;est le Git Flow et cela vous permettra de
          répondre à tous vos besoins :
        </p>
        <ul>
          <li>
            Travailler sur une nouvelle fonctionnalité dans une application
          </li>
          <li>Déployer une nouvelle version de votre application</li>
          <li>Corriger des bugs</li>
        </ul>
        <div>
          <Image
            src="/images/git-de-poche/git-flow.svg"
            width={100}
            height={100}
            alt="Git Flow"
          />
          <p>
            <i>
              Source :
              https://www.atlassian.com/fr/git/tutorials/comparing-workflows/gitflow-workflow
            </i>
          </p>
        </div>
      </section>

      <section
        id="sale-page-prerequisites"
        className="sale-page__prerequisites"
      >
        <h2>🔑 Prérequis</h2>
        <p>
          Vous n&apos;avez pas besoin de connaître Git pour suivre cette
          formation. Je pars du principe que vous n&apos;avez jamais utilisé
          Git.
        </p>
        <p>
          Si vous avez déjà utilisé Git, vous pouvez suivre cette formation pour
          consolider vos connaissances.
        </p>
        <p>
          En revanche, vous devriez être à l&apos;aise avec{" "}
          <strong>la ligne de commande</strong>.
        </p>
        <p>
          Avoir quelques notions de <strong>programmation</strong> est un plus,
          mais ce n&apos;est pas obligatoire.
        </p>
      </section>

      <section
        id="sale-page-disadvantages"
        className="sale-page__disadvantages"
      >
        <h2>⚠️ Git n&apos;est pas un outil intuitif au premier abord !</h2>
        <p>Vous allez probablement galérer à tout comprendre au départ.</p>
        <p>
          Mais c&apos;est normal ! C&apos;est un outil très puissant, et il faut
          du temps pour le maîtriser.
        </p>
        <p>
          Mon objectif est que malgré la difficulté relative que vous allez
          ressentir au départ, vous ayez les billes nécessaires pour vous en
          sortir.
        </p>
        <p>
          Nous allons mettre en place ensemble un outil pour vous simplifier
          Git, j&apos;ai nommé Git Kraken !
        </p>
        <p>
          Mais avant d&apos;utiliser cet outil dont vous ne vous passerez plus
          ensuite, il faut comprendre ce qu&apos;il se passe en coulisse pour
          être capable de résoudre d&apos;autres problèmes plus tard.
        </p>
        <p>
          A la fin de cette formation, vous serez <strong>autonome</strong> sur
          Git.
        </p>
      </section>

      <section
        id="sale-page-usage-cases"
        className="sale-page__usage-cases"
      ></section>

      <section id="sale-page-program" className="sale-page__program">
        <h2>🗺️ Le programme de la formation</h2>
        <div>
          <div>
            <h3>
              Module 1 : Les commandes de base et le fonctionnement de Git
            </h3>
            <ul>
              <li>
                Comprendre ce qu&apos;est Git, à quel besoin il répond et
                pourquoi tout le monde l&apos;utilise
              </li>
              <li>
                Comprendre ce qu&apos;est un commit et apprendre à faire ses
                premiers commit
              </li>
              <li>
                La gestion des branches et qu&apos;est-ce qu&apos;une branche
                dans le monde de Git
              </li>
            </ul>
          </div>
          <div>
            <Image
              src="/images/git-de-poche/module-1.png"
              width={100}
              height={100}
              alt="GitHub Logo"
            />
          </div>
        </div>
        <div>
          <div>
            <h3>Module 2 : Utiliser Github pour partager son expérience</h3>
            <ul>
              <li>
                Créer un compte Github pas à pas et se familiariser avec
                l&apos;interface
              </li>
              <li>
                Créer un nouveau projet et comment importer ses projets
                existants
              </li>
              <li>
                Comprendre comment fonctionne Github et contribuer aux autres
                projets open source
              </li>
              <li>
                Créer sa page de profil pour se présenter auprès de la
                communauté
              </li>
            </ul>
          </div>
          <div>
            <Image
              src="/images/git-de-poche/module-2.png"
              width={100}
              height={100}
              alt="GitHub Logo"
            />
          </div>
        </div>
        <div>
          <div>
            <h3>
              Module 3 : Comment utiliser Git Kraken pour enfin dire adieu à la
              ligne de commande
            </h3>
            <ul>
              <li>
                Comprendre ce qu&apos;est Git Kraken et comment l&apos;installer
              </li>
              <li>
                Comprendre l&apos;interface de Git Kraken et comment
                l&apos;utiliser
              </li>
              <li>
                Comprendre les différentes fonctionnalités de Git Kraken et
                comment les utiliser
              </li>
              <li>
                Mettre en place le Git Flow sur tous ses projets simplement avec
                Git Kraken
              </li>
            </ul>
          </div>
          <div>
            <Image
              src="/images/git-de-poche/module-3.png"
              width={100}
              height={100}
              alt="GitHub Logo"
            />
          </div>
        </div>
      </section>

      <section
        id="sale-page-accesses"
        className="sale-page__accesses"
      ></section>

      <section id="sale-page-pricing" className="sale-page__pricing">
        <h2>💰 Combien coûte cette formation ?</h2>
        <div>
          <div>
            <h3>Git De Poche</h3>
            <p>{course.price}</p>
            <ul>
              <li>
                5h de formation en ligne <strong>en illimité</strong>
              </li>
              <li>
                Accès <strong>à vie</strong> à la formation
              </li>
              <li>Accès à vie aux mises à jour sans surcoût</li>
            </ul>
            <Button>Acheter</Button>
          </div>
        </div>
      </section>

      <section id="sale-page-inaction" className="sale-page__inaction">
        <h2>🤔 Que se passe-t-il si vous n&apos;achetez pas cette formation ?</h2>
        <p>
          Combien d&apos;heures de travail vous estimez avoir gâcher
          jusqu&apos;à maintenant...
        </p>
        <ul>
          <li>...à éparpiller vos projets un peu partout</li>
          <li>...à ne pas pouvoir montrer vos compétences</li>
          <li>
            ...à n&apos;avoir aucun projet à montrer en entretien professionnel
          </li>
          <li>
            ...et comment vous sentez-vous en équipe quand il faut passer sur
            Git ?
          </li>
        </ul>
        <p>
          <strong>
            Combien de temps allez-vous encore perdre à ne pas utiliser Git ?
          </strong>
        </p>
        <p>
          Cette formation vous coûte un peu d&apos;argent et de temps, mais ne
          pas vous former sur Git vous coûte un job et laisse vos projets au
          placard.
        </p>
      </section>

      <section id="sale-page-faq" className="sale-page__faq"></section>
    </>
  );
};

export default GitDePochePage;
