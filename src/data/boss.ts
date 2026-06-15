import type { boss } from "../types/Boss";
import lotus from "../assets/Bos/Boss_UI_-_Lotus.png";
import damien from "../assets/Bos/Boss_UI_-_Damien.png";
import guardianAngelSlime from "../assets/Bos/Boss_UI_-_Guardian_Angel_Slime.png";
import firstAdversary from "../assets/Bos/Boss_UI_-_First_Adversary.png";
import lucid from "../assets/Bos/Boss_UI_-_Lucid.png";
import giantMonsterGloom from "../assets/Bos/Boss_UI_-_Giant_Monster_Gloom.png";
import verusHilla from "../assets/Bos/Boss_UI_-_Verus_Hilla.png";
import malitia from "../assets/Bos/Boss_UI_-_Malitia.png";
import guardCaptainDarknell from "../assets/Bos/Boss_UI_-_Guard_Captain_Darknell.png";
import blackMage from "../assets/Bos/Boss_UI_-_Black_Mage.png";
import chosenSeren from "../assets/Bos/Boss_UI_-_Chosen_Seren.png";
import kalos from "../assets/Bos/Boss_UI_-_Kalos_the_Guardian.png";
import kaling from "../assets/Bos/Boss_UI_-_Kaling.png";
import maleficStar from "../assets/Bos/Boss_UI_-_Malefic_Star.png";
import limbo from "../assets/Bos/Boss_UI_-_Limbo.png";
import baldrix from "../assets/Bos/Boss_UI_-_Baldrix.png";
import jupiter from "../assets/Bos/Boss_UI_-_Jupiter.png";
import will from "../assets/Bos/Boss_UI_-_Will.png";

export const bossesData: boss[] = [
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
    name: "Malitia",
    image: malitia,
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
    name: "Chosen Seren",
    image: chosenSeren,
    videoId: "2idD656nFFI",
  },
  {
    name: "Kalos",
    image: kalos,
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
    name: "Malefic Star",
    image: maleficStar,
  },
  {
    name: "Limbo",
    image: limbo,
    videoId: "gl0D-_Iyz4I",
  },
  {
    name: "Baldrix",
    image: baldrix,
    videoId: "SQD9CW5mQH8",
  },
  {
    name: "Jupiter",
    image: jupiter,
  },
]