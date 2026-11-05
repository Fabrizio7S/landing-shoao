import type { Boss } from "../types/Boss";
import lotus from "../assets/images/bosses/lotus.png";
import damien from "../assets/images/bosses/damien.png";
import guardianAngelSlime from "../assets/images/bosses/guardian-angel-slime.png";
import firstAdversary from "../assets/images/bosses/first-adversary.png";
import lucid from "../assets/images/bosses/lucid.png";
import giantMonsterGloom from "../assets/images/bosses/gloom.png";
import verusHilla from "../assets/images/bosses/verus-hilla.png";
import guardCaptainDarknell from "../assets/images/bosses/darknell.png";
import blackMage from "../assets/images/bosses/black-mage.png";
import chosenSeren from "../assets/images/bosses/chosen-seren.png";
import kalos from "../assets/images/bosses/kalos.png";
import kaling from "../assets/images/bosses/kaling.png";
import maleficStar from "../assets/images/bosses/malefic-star.png";
import limbo from "../assets/images/bosses/limbo.png";
import baldrix from "../assets/images/bosses/baldrix.png";
import jupiter from "../assets/images/bosses/jupiter.png";
import will from "../assets/images/bosses/will.png";
import kai from "../assets/images/bosses/kai.png";
import bellona from "../assets/images/bosses/bellona.png";
import maerin from "../assets/images/bosses/maerin.png";

export const bossesData: Boss[] = [
  {
    name: "Maerin",
    image: maerin,
    guideUrl: "/guias/maerin/",
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
