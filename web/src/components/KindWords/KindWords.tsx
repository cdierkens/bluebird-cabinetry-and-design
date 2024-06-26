import { graphql, useStaticQuery } from "gatsby";
import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { KindWordsQueryQuery } from "../../../graphql-types";
import { invariant } from "../../lib/invariant";
import Button from "../Button";
import Container from "../Container";

const query = graphql`
  query KindWordsQuery {
    allSanityClientReview(sort: { fields: [_createdAt] }) {
      nodes {
        _id
        clientName
        text
        title
      }
    }
  }
`;

interface KindWordsItemProps {
  title: string;
  name: string;
}

const KindWordsItem: React.FC<KindWordsItemProps> = ({
  title,
  children,
  name,
}) => (
  <div className="leading-relaxed text-center px-2 max-w-screen-md mx-auto">
    <div className="relative w-full h-full flex justify-center items-center flex-col border border-gray-light rounded-md px-3 py-3 pt-6  mb-12 shadow-md">
      {title && (
        <span className="leading-none font-sans text-3xl bg-white absolute top-0 inset-x-auto transform -translate-y-1/2 px-4">
          &ldquo;{title}&rdquo;
        </span>
      )}
      <p className="m-0 mb-1">{children}</p>
      <p className="m-0 italic text-gray-darker">-{name}</p>
    </div>
  </div>
);

const KindWords = () => {
  const [showReadMore, setShowMore] = useState(true);
  const {
    allSanityClientReview: { nodes: kindWords },
  } = useStaticQuery<KindWordsQueryQuery>(query);

  return (
    <Container className="py-6">
      <h2 className="text-center">Kind Words</h2>

      {kindWords.slice(0, 3).map(({ title, clientName, text, _id }) => {
        invariant(title, "missing title");
        invariant(clientName, "missing client name");

        return (
          <KindWordsItem title={title} name={clientName} key={_id}>
            {text}
          </KindWordsItem>
        );
      })}

      {!showReadMore &&
        kindWords.slice(3).map(({ title, clientName, text, _id }) => {
          invariant(title, "missing title");
          invariant(clientName, "missing client name");

          return (
            <KindWordsItem title={title} name={clientName} key={_id}>
              {text}
            </KindWordsItem>
          );
        })}

      {showReadMore && (
        <div className="text-center">
          <Button
            type="button"
            variant="blue"
            onClick={() => setShowMore(false)}
          >
            Read More
          </Button>
        </div>
      )}
    </Container>
  );
};

export default KindWords;
