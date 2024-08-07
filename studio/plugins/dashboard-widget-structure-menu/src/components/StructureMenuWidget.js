import { FileIcon, FolderIcon } from "@sanity/icons";
import React from "react";
import { Link } from "sanity/router";
import * as styles from "./StructureMenuWidget.css";

function getIconComponent(item) {
  if (item.icon) return item.icon;
  if (!item.schemaType) return FileIcon;
  return item.schemaType.icon || FolderIcon;
}

function StructureMenuWidget(props) {
  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <h3 className={styles.title}>Edit your content</h3>
      </div>

      <div className={styles.content}>
        {props.structure.items
          .filter((item) => item.type !== "divider")
          .map((item) => {
            const Icon = getIconComponent(item);
            return (
              <div key={item.id}>
                <Link className={styles.link} href={`/desk/${item.id}`}>
                  <div className={styles.iconWrapper}>
                    <Icon />
                  </div>
                  <div>{item.title}</div>
                </Link>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default StructureMenuWidget;
