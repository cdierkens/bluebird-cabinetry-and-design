import { graphql, navigate, useStaticQuery } from "gatsby";
import { parse } from "query-string";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import useQueryString from "use-query-string";
import PortfolioImages from "../";
import { todo } from "../../../migration.types";
import Container from "../../Container";
import { AlbumImages } from "../AlbumImages";
import { mapPortfolioImageToCarouselImage } from "../lib";

const PortfolioImagesContainer: React.FC<todo> = ({ location }) => {
  const {
    allSanityPortfolioImage: { nodes: sanityImages },
    allSanityAlbum: { nodes: albums },
  } = useStaticQuery(portfolioImagesQuery);

  // Note: Library author typed this as an interface instead of a tuple.
  const { 0: query, 1: setQuery } = useQueryString(location, navigate);
  const [selectedTags, setTagsInternal] = useState<string[]>([]);

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
    setTagsInternal(
      query.tags && typeof query.tags === "string"
        ? decodeURI(query.tags).split(",").sort()
        : []
    );
  }, [query.tags]);

  // Show all tags for an empty query string.
  useEffect(() => {
    if (query.tags) {
      return;
    }
    setQuery({ ...query, tags: allTags.join(",") });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

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

  const allLabels = useMemo(
    () =>
      Array.from(
        sanityImages.reduce(
          (keys: string[], node: todo) => new Set([...node.labels, ...keys]),
          new Set()
        )
      )
        .filter(Boolean)
        .sort(),
    [sanityImages]
  );

  const allRooms = useMemo(
    () =>
      Array.from(
        sanityImages.reduce(
          (keys: string[], node: todo) => new Set([node.room, ...keys]),
          new Set()
        )
      )
        .filter(Boolean)
        .sort(),
    [sanityImages]
  );

  const allTags = useMemo(
    () =>
      Array.from(new Set([...allLabels, ...allRooms]))
        .filter(Boolean)
        .sort(),
    [allLabels, allRooms]
  );

  const selectedSanityImages =
    sanityImages.filter(
      ({ labels, room }: { labels: string[]; room: string }) => {
        return (
          labels.find((label) =>
            selectedTags.find((checkedTag) => checkedTag === label)
          ) || selectedTags.some((checkedTag) => checkedTag === room)
        );
      }
    ) || [];

  const carouselImages = selectedSanityImages.map(
    mapPortfolioImageToCarouselImage
  );

  return (
    <>
      <PortfolioImages
        allTags={allTags}
        allRooms={allRooms}
        allLabels={allLabels}
        carouselImages={carouselImages}
        selectedSanityImages={selectedSanityImages}
        selectedTags={selectedTags}
        setSelectedTags={setSelectedTags}
      />

      <Container>
        <h2>Project Photos</h2>
        {albums.map(({ title, images }: todo) => {
          return <AlbumImages key={title} images={images} title={title} />;
        })}
      </Container>
    </>
  );
};

export const portfolioImagesQuery = graphql`
  fragment Image on SanityPortfolioImage {
    contractor
    decorator
    furnitureRefinishing
    interiorDesigner
    software
    labels
    room
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
  query PortfolioImages {
    allSanityPortfolioImage {
      nodes {
        ...Image
      }
    }
    allSanityAlbum {
      nodes {
        images {
          ...Image
        }
        title
      }
    }
  }
`;

export default PortfolioImagesContainer;
