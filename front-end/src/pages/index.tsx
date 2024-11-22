import { Link } from "@nextui-org/link";
// import { Snippet } from "@nextui-org/snippet";
// import { Code } from "@nextui-org/code";
import { Key, useEffect, useRef, useState } from "react";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import {
  DiscordIcon,
  GitlabIcon,
  GithubIcon,
  JavaScriptLogo,
  ViteJsLogo,
  ReactJsLogo,
  NextJsLogo,
  FigmaLogo,
  NodeJsLogo,
  TypeScriptLogo,
  ExpressJsLogo,
  GitLogo,
  GitLabLogo,
  GitHubLogo,
  Zoom,
  ArrowBottom
} from "@/components/icons";

import { useTheme } from "../hooks/use-theme";

import Triptranquil from "/triptranquil.png";
import BGDark from "/cool-background.svg";
import BGLight from "/cool-background black.svg";
import LB from "/IMG_LB.png";
import CV from "/CV Lorenzo.pdf";
import CVB from "/CV Lorenzo B.pdf";

export default function IndexPage(): JSX.Element {
  const { theme, isDark } = useTheme();
  const [BG, setBG] = useState<string>("");
  const [lensPosition, setLensPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [scrollOffset, setScrollOffset] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState<boolean>(false);
  const [zoom, setZoom] = useState<number>(300);
  const targetScroll = useRef<HTMLElement | null>(null);
  const imgContainerRef = useRef<HTMLButtonElement | null>(null);
  const [focus, setFocus] = useState<number | null>(null);

  // get theme
  useEffect((): void => {
    const img = new Image();
    img.src = theme === "light" ? BGLight : BGDark;
    img.onload = (): void => setBG(img.src);
  }, [theme]);

  // scroll event listener
  useEffect((): (() => void) => {
    window.addEventListener("scroll", handleScroll);
    return (): void => window.removeEventListener("scroll", handleScroll);
  }, []);

  // set the scroll offset
  const handleScroll = (): void => setScrollOffset({ x: window.scrollX, y: window.scrollY });

  // showing event for the zoom
  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setLensPosition({ x, y });
  };

  // interface + map pour les icone des techno
  interface icons { id: Key; component: JSX.Element; }
  const icons: icons[] = [
    { id: 1, component: <JavaScriptLogo height={50} width={50} /> },
    { id: 2, component: <TypeScriptLogo height={50} width={50} /> },
    { id: 3, component: <NodeJsLogo height={50} /> },
    { id: 4, component: <ExpressJsLogo color={isDark ? "#F5F5EB" : "#101010"} height={45} /> },
    { id: 5, component: <NextJsLogo color={isDark ? "#F5F5EB" : "#101010"} height={40} /> },
    { id: 6, component: <ReactJsLogo height={50} width={50} /> },
    { id: 7, component: <ViteJsLogo height={50} width={50} /> },
    { id: 8, component: <FigmaLogo height={50} width={50} /> },
    { id: 9, component: <GitLogo height={50} width={50} /> },
    { id: 10, component: <GitLabLogo height={50} width={50} /> },
    { id: 11, component: <GitHubLogo color={isDark ? "#F5F5EB" : "#101010"} height={50} width={50} /> },
  ];

  // interface + map pour les Exp pro
  interface Exp {
    id: number;
    entreprise: string;
    color:
    | "pink"
    | "cyan"
    | "yellow"
    | "blue"
    | "green"
    | "violet"
    | "foreground"
    | "test"
    | undefined;
    content: JSX.Element;
  }
  const Exp: Exp[] = [
    {
      id: 0,
      entreprise: "Majoli.io",
      color: "pink",
      content: (
        <>
          Développer chez Majoli.io pendant deux ans et demi, j&apos;ai fait
          partie de l&apos;équipe full stack en travaillant sur toutes les faces
          du projet. Développant le front, le back et effectuan
          l&apos;intégration de ceux-ci.
          <br />
          Les technologies utilisées étaient : bubble.io, React.js, Node.js et
          Git
        </>
      ),
    },
    {
      id: 1,
      entreprise: "Point service mobile",
      color: "cyan",
      content: (
        <>
          Expérience acquise lors de mes stages obligatoires de BTS, j&apos;ai
          travaillé dans une boutique de la société Point Service Mobile pendant
          six semaines en tant que réparateur téléphonique.
        </>
      ),
    },
    {
      id: 2,
      entreprise: "AACSI Mainteance",
      color: "yellow",
      content: (
        <>
          Cette entreprise m&apos;a accueilli lors du stage de quatre seamines
          de mes années de BAC PRO, j&apos;ai eu l&apos;occasion de pouvoir
          travailler sur des chantiers de création et maintenance
          d&apos;architecture réseau. J&apos;ai pu construire de moi-même une
          architecture réseau complexe de 30 postes avec montage de SWITCH,
          création de sous-réseaux pour dissocier les différents pôles et
          branchement des 30 postes sur la baie de brassage de la société.
        </>
      ),
    },
  ];

  // interface + map pour les projet pro
  interface Projet {
    id: number;
    nom: string;
    sous_titre: string;
    color:
    | "pink"
    | "cyan"
    | "yellow"
    | "blue"
    | "green"
    | "violet"
    | "foreground"
    | "test"
    | undefined;
    content: JSX.Element;
    style: React.CSSProperties
  };
  const Projet: Projet[] = [
    {
      id: 1,
      nom: "Triptranquil",
      sous_titre: "Institut G4 BAC +4",
      color: "pink",
      content: (
        <div className="flex flex-row gap-4 p-2 rounded-2xl" onClick={(e): void => { e.stopPropagation() }} aria-hidden="true" style={{ "--BG-Color": isDark ? "#F5F5EB22" : "#10101022", background: "var(--BG-Color)" }}>
          <p className="mb-5">
            Le projet Triptranquil est un projet pour lequel j&apos;ai apporter ma contribution en étant le développeur principal de celui-ci.
            Triptranquil est une plateforme de réservation de voyage qui prend en compte vos préférence de tourisme ou activité.
            J&apos;ai participé à la création complete du site, en réalisant les fonctionalité d&apos;affichage des hotels, le tableaux de bord des hotel partenaire ainsi que le panel administrateur.
            Ce projet à duré six mois avec un équipe de dix personnes dans l&apos;aquelle j&apos;étais le développeur juste en dessous du lead Dev.
          </p>
          <img src={Triptranquil} alt="" className="trip" />
        </div>
      ),
      style: {}
    },
    {
      id: 2,
      nom: "Projet BTS",
      sous_titre: "BTS Jean Perrin BAC +2",
      color: "cyan",
      content: (<p></p>),
      style: {}
    }
  ];

  // set the focus var for a group
  const toggleFocus = (number: number): void => {
    if (focus === number) setFocus(null);
    else setFocus(number);
  };

  // toggle l'affichage du CV sur une target blank
  const toggleModal = (): Window | null => window.open(isDark ? CVB : CV, "_blank");

  // scroll to the next element
  const scrollToSection = (): void => targetScroll.current?.scrollIntoView({ behavior: "smooth" });

  return (
    <DefaultLayout>
      {/* section Tittle */}
      <section
        className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 relative"
        style={{
          minHeight: "100vh",
          minWidth: "100vw",
          backgroundImage: `url(${BG})`,
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          paddingTop: 0,
          marginTop: "-60px",
        }}
      >

        {/* tittle */}
        <div className="inline-block max-w-xl text-center justify-center">
          <span className={title()} style={{ color: "#F5F5EB" }}>Bienvenue sur le portfolio de</span>
          <br />
          <span className={title({ color: "test" })}>
            Lorenzo BIANCOTTO&nbsp;
          </span>
          <br />
          <br />
          <span className={title()} style={{ color: "#F5F5EB" }}>Développer Full Stack</span>
          <div className={subtitle({ class: "mt-4" })} style={{ color: "#F5F5EB" }}>
            Site avec design avancer, conception rapide, tout langage
          </div>
        </div>
        {/* tittle */}


        {/* link under tittle */}
        <div className="flex gap-3">
          <Link
            isExternal
            className={
              buttonStyles({ variant: "bordered", radius: "full" }) +
              " hover_button"
            }
            href={siteConfig.links.discord}
            style={{
              "--nextui-colors-background": isDark ? "#F5F5EB" : "#101010",
              "--nextui-colors-primary": isDark ? "#101010" : "#F5F5EB",
              "--nextui-colors-foreground": isDark ? "#101010" : "#F5F5EB",
            }}
          >
            <DiscordIcon size={20} />
            Discord
          </Link>

          <Link
            isExternal
            className={
              buttonStyles({ variant: "bordered", radius: "full" }) +
              " hover_button"
            }
            href={siteConfig.links.github}
            style={{
              "--nextui-colors-background": isDark ? "#F5F5EB" : "#101010",
              "--nextui-colors-primary": isDark ? "#101010" : "#F5F5EB",
              "--nextui-colors-foreground": isDark ? "#101010" : "#F5F5EB",
            }}
          >
            <GithubIcon size={20} />
            GitHub
          </Link>

          <Link
            isExternal
            className={
              buttonStyles({ variant: "bordered", radius: "full" }) +
              " hover_button"
            }
            href={siteConfig.links.gitlab}
            style={{
              "--nextui-colors-background": isDark ? "#F5F5EB" : "#101010",
              "--nextui-colors-primary": isDark ? "#101010" : "#F5F5EB",
              "--nextui-colors-foreground": isDark ? "#101010" : "#F5F5EB",
            }}
          >
            <GitlabIcon size={20} />
            GitLab
          </Link>
        </div>
        {/* link under tittle */}

        <button
          className="arrow"
          style={{
            "--color-BG": isDark ? "#F5F5EB33" : "#10101033",
            "--color-BG-hover": isDark ? "#F5F5EB66" : "#10101066",
          }}
          onClick={(): void => scrollToSection()}
        >
          <ArrowBottom
            color={isDark ? "#F5F5EB" : "#101010"}
            height={30}
            width={30}
          />
        </button>

      </section>
      {/* section Tittle */}

      {/* section CV */}
      <section ref={targetScroll} className="grid_CV pt-20 pb-20">

        {/* background */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: -1,
            backgroundColor: isDark ? "#101010" : "#F5F5EB",
            opacity: 0.1,
            background: `radial-gradient(circle, transparent 20%, ${isDark ? "#101010" : "#F5F5EB"} 20%, ${isDark ? "#101010" : "#F5F5EB"} 80%, transparent 80%, transparent), radial-gradient(circle, transparent 20%, ${isDark ? "#101010" : "#F5F5EB"} 20%, ${isDark ? "#101010" : "#F5F5EB"} 80%, transparent 80%, transparent) 17.5px 17.5px, linear-gradient(${isDark ? "#F5F5EB" : "#101010"} 1.4000000000000001px, transparent 1.4000000000000001px) 0 -0.7000000000000001px, linear-gradient(90deg, ${isDark ? "#F5F5EB" : "#101010"} 1.4000000000000001px, ${isDark ? "#101010" : "#F5F5EB"} 1.4000000000000001px) -0.7000000000000001px 0`,
            backgroundSize:
              "35px 35px, 35px 35px, 17.5px 17.5px, 17.5px 17.5px",
          }}
        />
        {/* background */}


        {/* col gauche */}
        <div className="grid_CV__item1 z-10">
          <h2 className="text-3xl font-bold mb-0 z-10">Lorenzo BIANCOTTO</h2>

          {/* PP */}
          <img
            alt=""
            src={LB}
            style={{
              "--next-shadow-color": isDark ? "#F5F5EB55" : "#10101055",
              filter: "drop-shadow(0px 0px 16px var(--next-shadow-color))",
              zIndex: "0",
            }}
          />
          {/* PP */}

          {/* description */}
          <p className="font-medium text-justify">
            Je suis actuellement à la recherche d&apos;une alternance dans le
            domaine de l&apos;informatique et de la programmation web et
            logicielle. Je suis expérimenté en C, C++ et outil QT ainsi
            qu&apos;en HTML, CSS, JavaScript. Je suis aussi expérimenté dans
            l&apos;utilisation des Framework / outils React.js, Next.js, Figma,
            Canva, Git (GitHub ou GitLab), Docker, AWS, Azure.
          </p>
          {/* description */}

          {/* techno */}
          <div
            className="slide_container"
            style={{ "--color-bg": isDark ? "#101010" : "#F5F5EB" }}
          >
            <div className="row_techno">
              {icons.map((icon): JSX.Element => {
                return <div key={icon.id}>{icon.component}</div>;
              })}
            </div>
            <div className="row_techno">
              {icons.map((icon): JSX.Element => {
                return <div key={icon.id}>{icon.component}</div>;
              })}
            </div>
          </div>
          {/* techno */}

          {/* expériance */}
          <div className="exp text-center justify-center">
            <h1 className={title({ color: "green", size: "md" }) + " mb-10"}>Expérience Profésionnelle</h1>

            {Exp.map((data): JSX.Element => {
              return (
                <div key={data.id} className="justify-center w-full">
                  <h1 className={title({ color: data.color, size: "sm" })}>{data.entreprise}</h1>
                  <p className="mx-auto">{data.content}</p>
                </div>
              );
            })}

          </div>
          {/* expériance */}

        </div>
        {/* col gauche */}


        {/* col droite */}
        <div className="grid_CV__item2 z-10" style={{ position: "relative" }}>
          <div className="stycki_top">

            {/* top zoom */}
            <div className="top_CV">
              Passez la souri pour zoomer.

              {/* side input zoom */}
              <div className="zoomInput">
                Zoom
                <input
                  className="range"
                  max={600}
                  min={100}
                  style={{
                    "--color-track": isDark ? "#F5F5EB" : "#101010",
                    "--color-thumb": isDark ? "#101010" : "#F5F5EB",
                  }}
                  type="range"
                  value={zoom}
                  onChange={(e): void => {
                    setZoom(parseInt(e.target.value));
                  }}
                />
                <input
                  max={600}
                  min={100}
                  style={{ appearance: "none", WebkitAppearance: "none" }}
                  type="number"
                  value={zoom}
                  onChange={(e): void => {
                    setZoom(parseInt(e.target.value));
                  }}
                />
              </div>
              {/*  side input zoom */}

            </div>
            {/* top zoom */}

            {/* CV */}
            <button
              ref={imgContainerRef}
              aria-label="View CV"
              style={{
                border: "none",
                background: "none",
                padding: 0,
                cursor: "none",
              }}
              onClick={toggleModal}
              onMouseEnter={(): void => setIsHovering(true)}
              onMouseLeave={(): void => setIsHovering(false)}
              onMouseMove={handleMouseMove}
            >
              <img
                alt="CV"
                className="cv-image"
                src={isDark ? CVB : CV}
                style={{
                  "--next-shadow-color": isDark ? "#F5F5EBAA" : "#101010AA",
                  boxShadow: `0px 0px 16px 0px var(--next-shadow-color)`,
                  display: "block",
                }}
              />
            </button>
          </div>
          {/* CV */}

          {/* Loupe */}
          {isHovering && (
            <div
              className="zoom-lens"
              style={{
                position: "absolute",
                top: `${(lensPosition.y - 150) + (scrollOffset.y > window.innerHeight ? scrollOffset.y - window.innerHeight : 0)}px`,
                left: `${lensPosition.x - 150}px`,
                backgroundRepeat: "no-repeat",
                backgroundSize: `${zoom}%`,
                width: "300px",
                aspectRatio: "1/1",
                borderRadius: "50%",
                border: "2px solid #000",
                backgroundImage: `url(${isDark ? CVB : CV})`,
                backgroundPosition: `-${lensPosition.x}px -${lensPosition.y}px`,
                pointerEvents: "none",
                zIndex: 1000,
              }}
            >
              <Zoom color={isDark ? "#F5F5EB" : "#101010"} />
            </div>
          )}
          {/* Loupe */}

        </div>
        {/* col droite */}

      </section>
      {/* section CV */}

      <section className="projet" style={{ "--card-color": isDark ? "#F5F5EB44" : "#10101044" }}>
        <h1 className={title({ color: "green", size: "md" }) + " mt-10 mb-10"} style={{ gridColumn: "1/3" }}>Projet Profésionnel</h1>
        {Projet.map((currentProjet: Projet): JSX.Element => (
          <div className={"card " + (focus === null ? "" : (focus === currentProjet.id ? "hovered" : "hide"))} style={currentProjet.style} key={currentProjet.id} onClick={(): void => { toggleFocus(currentProjet.id); }} aria-hidden="true">
            <div className="tittle_row"><h1 className={title({ color: currentProjet.color, size: "sm" })}>{currentProjet.nom}</h1>{currentProjet.sous_titre}</div>
            {focus === currentProjet.id && currentProjet.content}
          </div>
        ))}
      </section>
    </DefaultLayout >
  );
};
