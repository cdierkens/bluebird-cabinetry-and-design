const React = require("react");
const gatsby = jest.requireActual("gatsby");

const deepMock = new Proxy([], {
  get(_, key) {
    if (typeof key === "symbol") {
      let value = "unhandled symbol";

      if (key === Symbol.toPrimitive) {
        value = "primitive";
      } else if (key === Symbol.iterator) {
        value = {
          next: () => ({ done: true }),
        };
      }

      return jest.fn().mockReturnValue(value);
    }

    if (
      ["map", "filter", "reduce", "slice", "join"].find(
        (value) => value === key
      )
    ) {
      return jest.fn().mockReturnValue(deepMock);
    }

    return deepMock;
  },
});

module.exports = {
  ...gatsby,
  graphql: jest.fn().mockImplementation((query) => query),
  Link: jest.fn().mockImplementation(
    // these props are invalid for an `a` tag
    ({
      activeClassName,
      activeStyle,
      getProps,
      innerRef,
      partiallyActive,
      ref,
      replace,
      to,
      ...rest
    }) =>
      React.createElement("a", {
        ...rest,
        href: to,
      })
  ),
  StaticQuery: jest.fn(),
  useStaticQuery: jest.fn().mockReturnValue(deepMock),
};
