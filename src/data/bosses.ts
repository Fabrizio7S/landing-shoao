import type { Boss } from "../types/Boss";
import lotus from "../assets/images/bosses/lotus.webp";
import damien from "../assets/images/bosses/damien.webp";
import guardianAngelSlime from "../assets/images/bosses/guardian-angel-slime.webp";
import firstAdversary from "../assets/images/bosses/first-adversary.webp";
import lucid from "../assets/images/bosses/lucid.webp";
import giantMonsterGloom from "../assets/images/bosses/gloom.webp";
import verusHilla from "../assets/images/bosses/verus-hilla.webp";
import guardCaptainDarknell from "../assets/images/bosses/darknell.webp";
import blackMage from "../assets/images/bosses/black-mage.webp";
import chosenSeren from "../assets/images/bosses/chosen-seren.webp";
import kalos from "../assets/images/bosses/kalos.webp";
import kaling from "../assets/images/bosses/kaling.webp";
import maleficStar from "../assets/images/bosses/malefic-star.webp";
import limbo from "../assets/images/bosses/limbo.webp";
import baldrix from "../assets/images/bosses/baldrix.webp";
import jupiter from "../assets/images/bosses/jupiter.webp";
import will from "../assets/images/bosses/will.webp";
import kai from "../assets/images/bosses/kai.webp";
import bellona from "../assets/images/bosses/bellona.webp";
import mayrin from "../assets/images/bosses/mayrin.webp";

export const bossesData: Boss[] = [
  {
    name: "Mayrin",
    image: mayrin,
    guideUrl: "/guias/mayrin/",
  },
  {
    name: "Bellona",
    image: bellona,
    guideUrl: "/guias/bellona/",
  },
  {
    name: "Jupiter",
    image: jupiter,
  },
  {
    name: "Malefic Star",
    image: maleficStar,
  },
  {
    name: "Baldrix",
    image: baldrix,
    videoId: "SQD9CW5mQH8",
  },
  {
    name: "Limbo",
    image: limbo,
    videoId: "gl0D-_Iyz4I",
  },
  {
    name: "First Adversary",
    image: firstAdversary,
    videoId: "MioqDrwyRp8",
  },
  {
  name: "Kaling",
  image: kaling,
  videoId: "UoI19DIzeSE",
  extraVideos: [
    {
      title: "Fase 2",
      videoId: "ankVNbZBaLg",
    },
    {
      title: "Fase 3",
      videoId: "BgURphDcqnM",
    },
  ],
},
  {
    name: "Kalos",
    image: kalos,
  },
  {
    name: "Lotus",
    image: lotus,
  },
  {
    name: "Damien",
    image: damien,
  },
  {
    name: "Guardian Angel Slime",
    image: guardianAngelSlime,
  },
  {
    name: "Lucid",
    image: lucid,
  },
  {
    name: "Will",
    image: will,
  },
  {
    name: "Gloom",
    image: giantMonsterGloom,
  },
  {
    name: "Verus Hilla",
    image: verusHilla,
    videoId: "6JUW_qtpGvs",
  },
  {
    name: "Darknell",
    image: guardCaptainDarknell,
  },
  {
    name: "Black Mage",
    image: blackMage,
  },
  {
    name:"Kai",
    image:kai,
  },
  {
    name: "Chosen Seren",
    image: chosenSeren,
    videoId: "2idD656nFFI",
  },
];
