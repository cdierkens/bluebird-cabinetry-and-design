import {
  MdRoomService,
  MdSettings,
  MdViewCarousel as viewCarouselIcon,
  MdViewQuilt as viewQuiltIcon,
} from "react-icons/md";

export const defaultDocumentNode = (S, { schemaType }) => {
  /**
   * Here you can define fallback views for document types without
   * a structure definition for the document node. If you want different
   * fallbacks for different types, or document values (e.g. if there is a slug present)
   * you can set up that logic in here too.
   * https://www.sanity.io/docs/structure-builder-reference#getdefaultdocumentnode-97e44ce262c9
   */
  return S.document().views([S.view.form()]);
};

/**
 * This defines how documents are grouped and listed out in the Studio.
 * Relevant documentation:
 * - https://www.sanity.io/guides/getting-started-with-structure-builder
 * - https://www.sanity.io/docs/structure-builder-introduction
 * - https://www.sanity.io/docs/structure-builder-typical-use-cases
 * - https://www.sanity.io/docs/structure-builder-reference
 */

export const structure = (S) =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Settings")
        .icon(MdSettings)
        .child(
          S.editor()
            .id("siteSettings")
            .schemaType("siteSettings")
            .documentId("siteSettings")
        ),
      S.divider(),
      S.listItem()
        .title("Services Page")
        .icon(MdRoomService)
        .child(
          S.editor()
            .id("servicesPage")
            .schemaType("servicesPage")
            .documentId("servicesPage")
        ),
      S.divider(),
      S.listItem()
        .title("Home Carousel")
        .icon(viewCarouselIcon)
        .child(
          S.editor()
            .title("Home Carousel")
            .id("homeCarousel")
            .schemaType("carousel")
            .documentId("homeCarousel")
        ),
      S.divider(),
      S.listItem()
        .title("Design Preview")
        .icon(viewQuiltIcon)
        .child(
          S.editor()
            .id("designPreview")
            .schemaType("designPreview")
            .documentId("designPreview")
        ),
      S.divider(),
      // `S.documentTypeListItems()` returns an array of all the document types
      // defined in schema.js. We filter out those that we have
      // defined the structure above.
      ...S.documentTypeListItems().filter(
        (listItem) =>
          ![
            "siteSettings",
            "carousel",
            "designPreview",
            "servicesPage",
          ].includes(listItem.getId())
      ),
    ]);
