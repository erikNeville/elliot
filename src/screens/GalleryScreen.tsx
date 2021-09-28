import React, { useCallback, useMemo } from "react";
import { Categories } from "src/store/reducers/imageReducer";
import styled from "styled-components";

import balloon from "../assets/images/balloonicorn_orange200w.jpg";
import cosmina from "../assets/images/cosmina400w.jpg";
import unicorn from "../assets/images/cotton_candy_unicorn333w.jpg";
import tiger from "../assets/images/crystal_tooth_tiger_amethyst_12x12.jpg";
import person from "../assets/images/imposter_syndrome333w.jpg";
import mermaid from "../assets/images/mermaid_hibiscus_princess_12x36.jpg";
import landscape from "../assets/images/pnw_purple_haze_16x20.jpg";
import { GalleryLink } from "./components/GalleryLink";
import { ScreenContainer } from "./components/containers";

// TODO: Get higher quality for images used as links

const collectionImages = [
  {
    source: cosmina,
    category: Categories.Music,
    alt: "Cosmina",
  },
  {
    source: tiger,
    category: Categories.CrystalAnimals,
    alt: "Crystal Tooth Tiger (Amethyst)",
  },
  {
    source: unicorn,
    category: Categories.Animals,
    alt: "Cotton Candy Unicorn",
  },
  {
    source: balloon,
    category: Categories.BalloonAnimals,
    alt: "Orange Balloonicorn",
  },
  {
    source: mermaid,
    category: Categories.Mermaids,
    alt: "Hibiscus Princess Mermaid",
  },
  {
    source: person,
    category: Categories.People,
    alt: "Imposter Syndrom",
  },
  {
    source: landscape,
    category: Categories.Landscapes,
    alt: "Purple Haze",
  },
];

const LinkWrapper = styled("div")`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  overflow: hidden;
  .image-grid {
    margin: 1rem 2rem;
    position: relative;
    transition: all 0.4s;
    @media screen and (max-width: 591px) {
      margin: 1rem 1rem;
    }
  }
  .image-div {
    backface-visibility: hidden;
    overflow: hidden;
    display: block;
    position: relative;
    text-align: center;
    transition: all ease 0.4s;
  }
`;

const LinkInfo = styled("div")`
  display: flex;
  text-align: center;
  flex-flow: column nowrap;
  .title {
    font-weight: 600;
    font-size: 24px;
  }
`;

export const GalleryScreen = () => {
  // TODO: return to top of page button

  const formatTitle = useCallback((str: string) => {
    return str
      .replace("-", " ")
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }, []);

  return (
    <ScreenContainer>
      <LinkWrapper>
        {collectionImages.map((collection) => (
          <div key={collection.source} className="image-grid">
            <div className="image-div">
              <GalleryLink
                category={collection.category}
                imgAlt={collection.alt}
                imgSrc={collection.source}
              />
            </div>
            <LinkInfo>
              <p className="title">{formatTitle(collection.category)}</p>
            </LinkInfo>
          </div>
        ))}
      </LinkWrapper>
    </ScreenContainer>
  );
};
