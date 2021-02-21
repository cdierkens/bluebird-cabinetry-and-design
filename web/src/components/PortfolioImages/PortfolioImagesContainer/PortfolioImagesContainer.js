import { graphql, navigate, useStaticQuery } from "gatsby";
import PropTypes from "prop-types";
import { parse } from "query-string";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import useQueryString from "use-query-string";
import PortfolioImages from "../";
import { builder } from "../../../lib/image-url";

const PortfolioImagesContainer = ({ location }) => {
  const {
    images: { nodes: sanityImages },
  } = useStaticQuery(portfolioImagesQuery);

  const [query, setQuery] = useQueryString(location, navigate);
  const [selectedTags, setTagsInternal] = useState([]);

  // Sync back and forward buttons.
  useEffect(() => {
    const { tags } = parse(location.search);

    if (query.tags !== tags) {
      setQuery({
        ...query,
        tags,
      });
    }
  }, [location.search]); // eslint-disable-line react-hooks/exhaustive-deps

  // Sync query tags with internal state.
  useEffect(() => {
    setTagsInternal(query.tags ? decodeURI(query.tags).split(",").sort() : []);
  }, [query.tags]);

  const setSelectedTags = useCallback(
    (values) => {
      // If there are no values, remove tags from the query
      if (!values || !values.length) {
        const { tags, ...rest } = query;

        setQuery({
          ...rest,
          tags: null,
        });

        return;
      }

      setQuery({
        ...query,
        tags: values.sort().join(","),
      });
    },
    [query, setQuery]
  );

  const allTags =
    useMemo(
      () =>
        Array.from(
          sanityImages.reduce(
            (keys, node) => new Set([...node.tags, ...keys]),
            new Set()
          )
        ).sort(),
      [sanityImages]
    ) || [];

  const selectedSanityImages =
    sanityImages.filter(({ tags }) =>
      tags.find((tag) => selectedTags.find((checkedTag) => checkedTag === tag))
    ) || [];

  const carouselImages =
    selectedSanityImages.map(
      ({
        image,
        caption,
        title,
        contractor,
        furnitureRefinishing,
        interiorDesigner,
        software,
      }) => ({
        source: {
          download: builder.image(image.file.asset.id).url(),
          fullscreen: builder
            .image(image.file.asset.id)
            .height(1080)
            .fit("clip")
            .url(),
          regular: builder
            .image(image.file.asset.id)
            .height(900)
            .fit("clip")
            .url(),
          thumbnail: builder
            .image(image.file.asset.id)
            .height(400)
            .fit("clip")
            .url(),
        },
        caption,
        title,
        contractor,
        furnitureRefinishing,
        interiorDesigner,
        software,
        alt: image.description,
      })
    ) || [];

  return (
    <PortfolioImages
      allTags={allTags}
      carouselImages={carouselImages}
      selectedSanityImages={selectedSanityImages}
      selectedTags={selectedTags}
      setSelectedTags={setSelectedTags}
    />
  );
};

export const portfolioImagesQuery = graphql`
  query PortfolioImages {
    images: allSanityPortfolioImage {
      nodes {
        caption
        contractor
        furnitureRefinishing
        interiorDesigner
        software
        tags
        image {
          description
          file {
            asset {
              id
            }
          }
        }
        title
      }
    }
  }
`;

PortfolioImagesContainer.propTypes = {
  location: PropTypes.object.isRequired,
};

export default PortfolioImagesContainer;
