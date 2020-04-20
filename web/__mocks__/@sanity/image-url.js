const imageUrlBuilder = jest.requireActual("@sanity/image-url");

const builder = imageUrlBuilder({
  projectId: "mock-id",
  dataset: "mock-dataset",
});

const builderProxy = new Proxy(builder, {
  get(target, prop) {
    switch (prop) {
      case "image":
        return () => target.image("image-mock-100x100-jpg");
      default:
        return Reflect.get(target, prop);
    }
  },
});

module.exports = () => builderProxy;
