import PropTypes from "prop-types";
import React from "react";
import * as styles from "./GraphQLErrors.module.css";

const GraphQLErrors = ({ errors }) => (
  <div className={styles.GraphQLErrors}>
    <h1>GraphQL Error</h1>
    {errors.map((error) => (
      <pre key={error.message}>{error.message}</pre>
    ))}
  </div>
);

GraphQLErrors.propTypes = {
  errors: PropTypes.arrayOf(
    PropTypes.shape({
      message: PropTypes.string,
    })
  ),
};

GraphQLErrors.defaultProps = {
  errors: [],
};

export default GraphQLErrors;
