/* eslint-disable import/order */
import andromeda from "../../assets/images/andromeda_mermaid_16x40.jpg";
import bananaKitten from "../../assets/images/banana_baby_kitten_12x18.jpg";
import blueBaby from "../../assets/images/blue_baby_14x14.jpg";
import blueRaspberry from "../../assets/images/blue_raspberry_macaron_mermaid_12x36.jpg";
import carouselHorse from "../../assets/images/carousel_horse_20x20.jpg";
import catFairy from "../../assets/images/cat_fairy_16x20.jpg";
import citrine from "../../assets/images/citrine_stallion_24x24.jpg";
import coastal from "../../assets/images/coastal_blue_cliffs_12x16.jpg";
import coffeeMermaid from "../../assets/images/coffee_mermaid_24x12.jpg";
import cobra from "../../assets/images/commission_cobra_15x30.jpg";
import commissionDog from "../../assets/images/commission_dog.jpg";
import commissionFamily from "../../assets/images/commission_family.jpg";
import coolCat from "../../assets/images/cool_cat_12x12.jpg";
import cosmicTiger from "../../assets/images/cosmic_tiger_queen_48x24.jpg";
import crimsonBear from "../../assets/images/crimson_fishing_bear_18x24.jpg";
import crystalPuffins from "../../assets/images/crystal_critter_puffins_20x10.jpg";
import crystalTortoise from "../../assets/images/crystal_critter_tortoise_14x14.jpg";
import crystalCrownCat from "../../assets/images/crystal_crown_cat_12x16.jpg";
import crystalMohawk from "../../assets/images/crystal_mohawk_14x14.jpg";
import crystalTigerAmethyst from "../../assets/images/crystal_tooth_tiger_amethyst_12x12.jpg";
import crystalTigerCitrine from "../../assets/images/crystal_tooth_tiger_citrine_12x12.jpg";
import discoPuppy from "../../assets/images/disco_puppy_12x36.jpg";
import roseWhale from "../../assets/images/hibiscus_rose_humpback_whale_16x24.jpg";
import longhorn from "../../assets/images/highland_longhorn_10x20.jpg";
import vanillaCat from "../../assets/images/ice_cream_cone_vanilla_sprinkle_kitten_12x24.jpg";
import jackaloupe from "../../assets/images/jackaloupe_15x30.jpg";
import kitticornTrio from "../../assets/images/kitticorn_trio_20x16.jpg";
import magentaServal from "../../assets/images/magenta_boss_serval_15x30.jpg";
import mermaidAmethyst from "../../assets/images/mermaid_amethyst_12x36.jpg";
import mermaidBubblegum from "../../assets/images/mermaid_bubblegum_12x36.jpg";
import mermaidHibiscus from "../../assets/images/mermaid_hibiscus_princess_12x36.jpg";
import mermaidLimes from "../../assets/images/mermaid_love_limes_and_lemons_12x36.jpg";
import mermaidMint from "../../assets/images/mint_chocolate_chip_mermaid_12x36.jpg";
import mermaidRedVelvet from "../../assets/images/red_velvet_mermaid_40x16.jpg";
import mermaidTaffy from "../../assets/images/salt_water_taffy_mermaid_12x36.jpg";
import musicSiren from "../../assets/images/music_siren_15x30.jpg";
import navyNight from "../../assets/images/navy_night_40x16.jpg";
import orcaFamily from "../../assets/images/orca_family_36x12.jpg";
import purpleHaze from "../../assets/images/pnw_purple_haze_16x40.jpg";
import purrmaidBlue from "../../assets/images/purrmaid_blue_12x24.jpg";
import QLogo from "../../assets/images/QSL_logo_20x16.jpg";
import rainbowGiraffe from "../../assets/images/rainbow_giraffe_16x40.jpg";
import seaplane from "../../assets/images/seaplane_48x24.jpg";
import loon from "../../assets/images/the_common_loon_15x30.jpg";
import twoZebras from "../../assets/images/zebra_18x24.jpg";

import atomicDawg from "../../assets/images/atomic_dawg333w.jpg";
import planets from "../../assets/images/balloon_planets200w.jpg";
import blueDog from "../../assets/images/balloondog_blue200w.jpg";
import lilacDog from "../../assets/images/balloondog_lilac200w.jpg";
import pinkDog from "../../assets/images/balloondog_pink200w.jpg";
import yellowDog from "../../assets/images/balloondog_yellow200w.jpg";
import blueUnicorn from "../../assets/images/balloonicorn_blue200w.jpg";
import greenUnicorn from "../../assets/images/balloonicorn_green200w.jpg";
import orangeUnicorn from "../../assets/images/balloonicorn_orange200w.jpg";
import pinkUnicorn from "../../assets/images/balloonicorn_pink200w.jpg";
import purpleUnicorn from "../../assets/images/balloonicorn_purple200w.jpg";
import yellowUnicorn from "../../assets/images/balloonicorn_yellow200w.jpg";
import blueFlamingo from "../../assets/images/blue_flamingo200w.jpg";
import cassette from "../../assets/images/cassette167w.jpg";
import pianoCat from "../../assets/images/cat_on_piano_moon267w.jpg";
import cosmicFunk from "../../assets/images/cosmic_funk_mermaid200w.jpg";
import cosmina from "../../assets/images/cosmina400w.jpg";
import cottonCandyUnicorn from "../../assets/images/cotton_candy_unicorn333w.jpg";
import crystalOwl from "../../assets/images/crystal_snowy_owl300w.jpg";
import dragon from "../../assets/images/disco_dragon200w.jpg";
import drums from "../../assets/images/disco_drumset400w.jpg";
import zebra from "../../assets/images/drippy_zebra400w.jpg";
import imposter from "../../assets/images/imposter_syndrome333w.jpg";
import jellyfish from "../../assets/images/jellyfish200w.jpg";
import kittyHendrix from "../../assets/images/kitty_hendrix_15x30.jpg";
import roboHorses from "../../assets/images/robot_horse_race667w.jpg";
import saoirse from "../../assets/images/saoirse667w.jpg";
import spaceCadet from "../../assets/images/space_cadet333w.jpg";
import starChild from "../../assets/images/star_child400w.jpg";
import agent from "../../assets/images/the_agent250w.jpg";

export enum Categories {
  Animals = "animals",
  BalloonAnimals = "balloon-animals",
  CrystalAnimals = "crystal-animals",
  Mermaids = "mermaids",
  Music = "music",
  People = "people",
  Landscapes = "landscapes",
}

const ACRYLIC = "Acrylic on Canvas";

const initState = {
  images: [
    {
      src: dragon,
      title: "Disco Dragon",
      category: Categories.Music,
      medium: ACRYLIC,
      w: "12",
      h: "36",
    },
    {
      src: kittyHendrix,
      title: "Kitty Hendrix",
      category: Categories.Music,
      medium: ACRYLIC,
      w: "15",
      h: "30",
    },
    {
      src: bananaKitten,
      title: "Banana Baby Kitten",
      category: Categories.Animals,
      medium: ACRYLIC,
      w: "12",
      h: "18",
    },
    {
      src: blueBaby,
      title: "Blue Baby",
      category: Categories.Animals,
      medium: ACRYLIC,
      w: "14",
      h: "14",
    },
    {
      src: blueRaspberry,
      title: "Blue Raspberry Macaron Mermaid",
      category: Categories.Mermaids,
      medium: ACRYLIC,
      w: "12",
      h: "36",
    },
    {
      src: carouselHorse,
      title: "Carousel Horse",
      category: Categories.Animals,
      medium: ACRYLIC,
      w: "20",
      h: "20",
    },
    {
      src: catFairy,
      title: "Cat Fairy",
      category: Categories.Animals,
      medium: ACRYLIC,
      w: "16",
      h: "20",
    },
    // TODO: add rest of new pictures
    {
      src: andromeda,
      title: "Andromeda Mermaid",
      category: Categories.Mermaids,
      medium: ACRYLIC,
      w: "16",
      h: "40",
    },
    {
      src: cosmina,
      title: "Cosmina",
      category: Categories.Music,
      medium: ACRYLIC,
      w: "24",
      h: "48",
    },
    {
      src: cosmicFunk,
      title: "Cosmic Funk Mermaid",
      category: Categories.Music,
      medium: ACRYLIC,
      w: "12",
      h: "36",
    },
    {
      src: crystalOwl,
      title: "Snowy Owl",
      category: Categories.CrystalAnimals,
      medium: ACRYLIC,
      w: "18",
      h: "24",
    },
    {
      src: pianoCat,
      title: "Cat on a Piano Moon",
      category: Categories.Music,
      medium: ACRYLIC,
      w: "16",
      h: "20",
    },
    {
      src: agent,
      title: "The Agent",
      category: "misc",
      medium: ACRYLIC,
      w: "15",
      h: "30",
    },
    {
      src: jellyfish,
      title: "Jellyfish",
      category: "misc",
      medium: ACRYLIC,
      w: "12",
      h: "12",
    },
    {
      src: atomicDawg,
      title: "Atomic Dawg",
      category: Categories.Music,
      medium: ACRYLIC,
      w: "20",
      h: "20",
    },
    {
      src: drums,
      title: "Disco Drumset",
      category: Categories.Music,
      medium: ACRYLIC,
      w: "24",
      h: "30",
    },
    {
      src: saoirse,
      title: "Saoirse",
      category: Categories.Music,
      medium: ACRYLIC,
      w: "40",
      h: "16",
    },
    {
      src: spaceCadet,
      title: "Space Cadet",
      category: Categories.People,
      medium: ACRYLIC,
      w: "20",
      h: "20",
    },
    {
      src: cassette,
      title: "Cassette Tape",
      category: Categories.Music,
      medium: ACRYLIC,
      w: "10",
      h: "20",
    },
    {
      src: planets,
      title: "Balloon Planets",
      category: Categories.People,
      medium: ACRYLIC,
      w: "12",
      h: "36",
    },
    {
      src: starChild,
      title: "Star Child",
      category: Categories.Music,
      medium: ACRYLIC,
      w: "24",
      h: "18",
    },
    {
      src: zebra,
      title: "Drippy Zebra",
      category: Categories.Animals,
      medium: ACRYLIC,
      w: "24",
      h: "30",
    },
    {
      src: roboHorses,
      title: "Robo Horse Race",
      category: Categories.Animals,
      medium: ACRYLIC,
      w: "40",
      h: "16",
    },
    {
      src: cottonCandyUnicorn,
      title: "Cotton Candy Unicorn",
      category: Categories.Animals,
      medium: ACRYLIC,
      w: "20",
      h: "10",
    },
    {
      src: imposter,
      title: "Imposter Syndrome",
      category: Categories.People,
      medium: ACRYLIC,
      w: "20",
      h: "16",
    },
    {
      src: blueFlamingo,
      title: "Blue Flamingo",
      category: Categories.Animals,
      medium: ACRYLIC,
      w: "12",
      h: "16",
    },
    {
      src: blueDog,
      title: "Blue Balloon Dog",
      category: Categories.BalloonAnimals,
      medium: ACRYLIC,
      w: "12",
      h: "12",
    },
    {
      src: lilacDog,
      title: "Lilac Balloon Dog",
      category: Categories.BalloonAnimals,
      medium: ACRYLIC,
      w: "12",
      h: "12",
    },
    {
      src: pinkDog,
      title: "Pink Balloon Dog",
      category: Categories.BalloonAnimals,
      medium: ACRYLIC,
      w: "12",
      h: "12",
    },
    {
      src: yellowDog,
      title: "Yellow Balloon Dog",
      category: Categories.BalloonAnimals,
      medium: ACRYLIC,
      w: "12",
      h: "12",
    },
    {
      src: blueUnicorn,
      title: "Blue Balloonicorn",
      category: Categories.BalloonAnimals,
      medium: ACRYLIC,
      w: "12",
      h: "12",
    },
    {
      src: greenUnicorn,
      title: "Green Balloonicorn",
      category: Categories.BalloonAnimals,
      medium: ACRYLIC,
      w: "12",
      h: "12",
    },
    {
      src: orangeUnicorn,
      title: "Orange Balloonicorn",
      category: Categories.BalloonAnimals,
      medium: ACRYLIC,
      w: "12",
      h: "12",
    },
    {
      src: pinkUnicorn,
      title: "Pink Balloonicorn",
      category: Categories.BalloonAnimals,
      medium: ACRYLIC,
      w: "12",
      h: "12",
    },
    {
      src: purpleUnicorn,
      title: "Purple Balloonicorn",
      category: Categories.BalloonAnimals,
      medium: ACRYLIC,
      w: "12",
      h: "12",
    },
    {
      src: yellowUnicorn,
      title: "Yellow Balloonicorn",
      category: Categories.BalloonAnimals,
      medium: ACRYLIC,
      w: "12",
      h: "12",
    },
  ],
};

export const imageReducer = (state = initState) => {
  return state;
};
