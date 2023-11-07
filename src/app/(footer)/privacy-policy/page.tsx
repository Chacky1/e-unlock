import styles from "./page.module.css";

const PrivacyPolicyPage = () => {
  return (
    <section id="privacy-policy" className={styles["privacy-policy"]}>
      <div className={styles["privacy-policy__container"]}>
        <h1 className={styles["privacy-policy__title"]}>
          Politique de Confidentialité
        </h1>
        <div>
          <p>
            UNLOCKTONCOMPUTER (inscrit au Répertoire SIREN n° 893 741 371), ci-
            après La Société, est le responsable du traitement au sens du
            Règlement (UE) 2016/679 dit Règlement Général pour la Protection des
            Données ou RGPD, pour la collecte et le traitement des données à
            caractère personnel effectués sur le présent site Web, ci-après le
            Site
          </p>
          <p>
            A ce titre, la Société s’engage à respecter les données personnelles
            vous concernant, qui sont collectées et traitées à l’occasion de
            votre utilisation du Site. A cet égard, la Société respecte les
            législations européenne et française en matière de protection des
            données personnelles, principalement le règlement UE n°2016/679 dit
            « RGPD » et la loi n°78-17 dite « Informatique et Libertés ».
          </p>
        </div>
        <div>
          <h2>Finalités des traitements et bases légales</h2>
          <p>
            Vos données personnelles sont susceptibles d’être traitées par le
            biais du Site pour les finalités suivantes :
          </p>
          <ul>
            <li>Prénom et nom de l&apos;utilisateur</li>
            <li>
              L&apos;e-mail de l&apos;utilisateur conservé tout au long de la
              durée commerciale à des fins d’identification et de contact
            </li>
            <li>
              Une photo de profil Google si l&apos;authentification est faite
              via Google à des fins d’identification
            </li>
            <li>
              Données de la carte bancaire pour l’utilisation de la facturation
              et du paiement
            </li>
          </ul>
          <p>
            Le Site appose des cookies, à condition que vous y consentiez. Ce
            consentement est formalisé par le fait de cliquer sur le bouton «
            Accepter » sur le bandeau apparaissant lorsque vous visitez le Site.
            Les données collectées au moyen de ces cookies, les finalités de
            leur collecte, les destinataires des données et durées de
            conservation, ainsi que le rappel de vos droits, sont détaillés dans
            notre Politique de Cookies du Site.
          </p>
        </div>
        <div>
          <h2>Destinataires</h2>
          <p>
            Les données collectées sur le Site sont exclusivement destinées à
            UNLOCKTONCOMPUTER, et/ou aux sous-traitants auxquels il est
            éventuellement fait appel dans le cadre de la gestion du Site, en
            particulier concernant la maintenance ou les évolutions des
            applications et la gestion de la relation commerciale.
          </p>
        </div>
        <div>
          <h2>Vos droits</h2>
          <p>
            Conformément à la loi n°78-17 du 6 janvier 1978 et au RGPD, vous
            disposez d’un droit d’accès, de rectification ou d’effacement des
            données à caractère personnel vous concernant, et le cas échéant,
            d’un droit à la portabilité de vos données.
          </p>
          <p>
            Vous pouvez demander la limitation ou vous opposer au traitement de
            vos données, ou le cas échéant, retirer votre consentement. Vous
            pouvez également définir des directives sur le sort de vos données
            après votre mort. Vous pouvez exercer ces droits par courriel
            unlocktoncomputer@gmail.com, ou en écrivant à l’adresse suivante :
          </p>
          <p className={styles["text-center"]}>UNLOCKTONCOMPUTER | 19 rue Salluste, 67200 Strasbourg</p>
          <p>
            Conformément à la loi, vous disposez du droit légal d’introduire
            toute réclamation auprès d’une autorité de contrôle :{" "}
            <a href="https://www.cnil.fr/fr">https://www.cnil.fr/fr</a>
          </p>
          <p>
            Le présent document ne concerne que les données collectées et
            traitements effectués relatifs au Site, dont le contenu est destiné
            aux simples visiteurs du Site.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicyPage;
