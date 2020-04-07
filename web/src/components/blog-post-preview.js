import { format, parseISO } from "date-fns";
import { Link } from "gatsby";
import React from "react";
import { buildImageObj, getBlogUrl } from "src/lib/helpers";
import { imageUrlFor } from "src/lib/image-url";
import styles from "./blog-post-preview.module.css";
import PortableText from "./portableText";

function BlogPostPreview(props) {
  return (
    <Link
      className={props.isInList ? styles.inList : styles.inGrid}
      to={getBlogUrl(props.publishedAt, props.slug.current)}
    >
      <div className={styles.leadMediaThumb}>
        {props.mainImage && props.mainImage.asset && (
          <img
            src={imageUrlFor(buildImageObj(props.mainImage))
              .width(600)
              .height(Math.floor((9 / 16) * 600))
              .auto("format")
              .url()}
            alt={props.mainImage.alt}
          />
        )}
      </div>
      <div className={styles.text}>
        <h3 className={styles.title}>{props.title}</h3>
        {props._rawExcerpt && (
          <div className={styles.excerpt}>
            <PortableText blocks={props._rawExcerpt} />
          </div>
        )}
        <div className={styles.date}>
          {format(parseISO(props.publishedAt), "MMMM Do, yyyy")}
        </div>
      </div>
    </Link>
  );
}

export default BlogPostPreview;
