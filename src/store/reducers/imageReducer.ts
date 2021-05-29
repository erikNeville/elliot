import atomicDawg from '../../assets/images/atomic_dawg333w.jpg';
import planets from '../../assets/images/balloon_planets200w.jpg';
import blueDog from '../../assets/images/balloondog_blue200w.jpg';
import lilacDog from '../../assets/images/balloondog_lilac200w.jpg';
import pinkDog from '../../assets/images/balloondog_pink200w.jpg';
import yellowDog from '../../assets/images/balloondog_yellow200w.jpg';
import blueUnicorn from '../../assets/images/balloonicorn_blue200w.jpg';
import greenUnicorn from '../../assets/images/balloonicorn_green200w.jpg';
import orangeUnicorn from '../../assets/images/balloonicorn_orange200w.jpg';
import pinkUnicorn from '../../assets/images/balloonicorn_pink200w.jpg';
import purpleUnicorn from '../../assets/images/balloonicorn_purple200w.jpg';
import yellowUnicorn from '../../assets/images/balloonicorn_yellow200w.jpg';
import blueFlamingo from '../../assets/images/blue_flamingo200w.jpg';
import cassette from '../../assets/images/cassette167w.jpg';
import pianoCat from '../../assets/images/cat_on_piano_moon267w.jpg';
import cosmicFunk from '../../assets/images/cosmic_funk_mermaid200w.jpg';
import cosmina from '../../assets/images/cosmina400w.jpg';
import cottonCandyUnicorn from '../../assets/images/cotton_candy_unicorn333w.jpg';
import crystalOwl from '../../assets/images/crystal_snowy_owl300w.jpg';
import dragon from '../../assets/images/disco_dragon200w.jpg';
import drums from '../../assets/images/disco_drumset400w.jpg';
import zebra from '../../assets/images/drippy_zebra400w.jpg';
import hexagon from '../../assets/images/hexagon_spectra183w.jpg';
import imposter from '../../assets/images/imposter_syndrome333w.jpg';
import jellyfish from '../../assets/images/jellyfish200w.jpg';
import kittyHendrix from '../../assets/images/kitty_hendrix250w.jpg';
import necklace from '../../assets/images/lips_musical_necklace167w.jpg';
import roboHorses from '../../assets/images/robot_horse_race667w.jpg';
import saoirse from '../../assets/images/saoirse667w.jpg';
import saturnRising from '../../assets/images/saturn_rising300w.jpg';
import spaceCadet from '../../assets/images/space_cadet333w.jpg';
import starChild from '../../assets/images/star_child400w.jpg';
import agent from '../../assets/images/the_agent250w.jpg';
import writersBlock from '../../assets/images/writers_block267w.jpg';


const initState = {
	images: [
		{
      src: dragon,
      title: 'Disco Dragon',
      category: 'music',
      medium: 'Acrylic on Canvas',
      w: '12',
      h: '36',
    },
    {
      src: kittyHendrix,
      title: 'Kitty Hendrix',
      category: 'neb',
      medium: 'Acrylic on Canvas',
      w: '15',
      h: '30',
    },
    {
      src: cosmina,
      title: 'Cosmina',
      category: 'neb',
      medium: 'Acrylic on Canvas',
      w: '24',
      h: '48',
    },
    {
      src: cosmicFunk,
      title: 'Cosmic Funk Mermaid',
      medium: 'Acrylic on Canvas',
      w: '12',
      h: '36',
    },
    {
      src: crystalOwl,
      title: 'Snowy Owl',
      category: 'crystal',
      medium: 'Acrylic on Canvas',
      w: '18',
      h: '24',
    },
    {
      src: pianoCat,
      title: 'Cat on a Piano Moon',
      category: 'music',
      medium: 'Acrylic on Canvas',
      w: '16',
      h: '20',
    },
    {
      src: agent,
      title: 'The Agent',
      category: 'misc',
      medium: 'Acrylic on Canvas',
      w: '15',
      h: '30',
    },
    {
      src: jellyfish,
      title: 'Jellyfish',
      category: 'misc',
      medium: 'Acrylic on Canvas',
      w: '12',
      h: '12',
    },
    {
      src: atomicDawg,
      title: 'Atomic Dawg',
      category: 'music',
      medium: 'Acrylic on Canvas',
      w: '20',
      h: '20',
    },
    {
      src: drums,
      title: 'Disco Drumset',
      category: 'neb',
      medium: 'Acrylic on Canvas',
      w: '24',
      h: '30',
    },
    {
      src: necklace,
      title: 'Lips With Musical Necklace',
      category: 'music',
      medium: 'Acrylic on Canvas',
      w: '10',
      h: '20',
    },
    {
      src: saoirse,
      title: 'Saoirse',
      category: 'music',
      medium: 'Acrylic on Canvas',
      w: '40',
      h: '16',
    },
    {
      src: spaceCadet,
      title: 'Space Cadet',
      category: 'cosmic',
      medium: 'Acrylic on Canvas',
      w: '20',
      h: '20',
    },
    {
      src: cassette,
      title: 'Cassette Tape',
      category: 'music',
      medium: 'Acrylic on Canvas',
      w: '10',
      h: '20',
    },
    {
      src: saturnRising,
      title: 'Saturn Rising',
      category: 'cosmic',
      medium: 'Acrylic on Canvas',
      w: '18',
      h: '24',
    },
    {
      src: planets,
      title: 'Balloon Planets',
      category: 'cosmic',
      medium: 'Acrylic on Canvas',
      w: '12',
      h: '36',
    },
    {
      src: starChild,
      title: 'Star Child',
      category: 'neb',
      medium: 'Acrylic on Canvas',
      w: '24',
      h: '18',
    },
    {
      src: writersBlock,
      title: 'Writers Block',
      category: 'misc',
      medium: 'Acrylic on Canvas',
      w: '16',
      h: '40',
    },
    {
      src: zebra,
      title: 'Drippy Zebra',
      category: 'misc',
      medium: 'Acrylic on Canvas',
      w: '24',
      h: '30',
    },
    {
      src: roboHorses,
      title: 'Robo Horse Race',
      category: 'msic',
      medium: 'Acrylic on Canvas',
      w: '40',
      h: '16',
    },
    {
      src: cottonCandyUnicorn,
      title: 'Cotton Candy Unicorn',
      category: 'msic',
      medium: 'Acrylic on Canvas',
      w: '20',
      h: '10',
    },
    {
      src: imposter,
      title: 'Imposter Syndrome',
      category: 'misc',
      medium: 'Acrylic on Canvas',
      w: '20',
      h: '16',
    },
    {
      src: blueFlamingo,
      title: 'Blue Flamingo',
      category: 'misc',
      medium: 'Acrylic on Canvas',
      w: '12',
      h: '16',
    },
    {
      src: hexagon,
      title: 'Hexagon Spectra',
      category: 'misc',
      medium: 'Acrylic on Canvas',
      w: '10',
      h: '20',
    },
    {
      src: blueDog,
      title: 'Blue Balloon Dog',
      category: 'balloon',
      medium: 'Acrylic on Canvas',
      w: '12',
      h: '12',
    },
    {
      src: lilacDog,
      title: 'Lilac Balloon Dog',
      category: 'balloon',
      medium: 'Acrylic on Canvas',
      w: '12',
      h: '12',
    },
    {
      src: pinkDog,
      title: 'Pink Balloon Dog',
      category: 'balloon',
      medium: 'Acrylic on Canvas',
      w: '12',
      h: '12',
    },
    {
      src: yellowDog,
      title: 'Yellow Balloon Dog',
      category: 'balloon',
      medium: 'Acrylic on Canvas',
      w: '12',
      h: '12',
    },
    {
      src: blueUnicorn,
      title: 'Blue Balloonicorn',
      category: 'balloon',
      medium: 'Acrylic on Canvas',
      w: '12',
      h: '12',
    },
    {
      src: greenUnicorn,
      title: 'Green Balloonicorn',
      category: 'balloon',
      medium: 'Acrylic on Canvas',
      w: '12',
      h: '12',
    },
    {
      src: orangeUnicorn,
      title: 'Orange Balloonicorn',
      category: 'balloon',
      medium: 'Acrylic on Canvas',
      w: '12',
      h: '12',
    },
    {
      src: pinkUnicorn,
      title: 'Pink Balloonicorn',
      category: 'balloon',
      medium: 'Acrylic on Canvas',
      w: '12',
      h: '12',
    },
    {
      src: purpleUnicorn,
      title: 'Purple Balloonicorn',
      category: 'balloon',
      medium: 'Acrylic on Canvas',
      w: '12',
      h: '12',
    },
    {
      src: yellowUnicorn,
      title: 'Yellow Balloonicorn',
      category: 'balloon',
      medium: 'Acrylic on Canvas',
      w: '12',
      h: '12',
    },
	]
};

export const imageReducer = (state = initState) => {
	return state;
};
