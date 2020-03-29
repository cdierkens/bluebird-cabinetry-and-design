import React from "react";
import styles from "./GraphQLErrors.module.css";

const GraphQLErrors = (errors) => (
  <div className={styles.GraphQLErrors}>
    <h1>GraphQL Error</h1>
    {errors.map((error) => (
      <pre key={error.message}>{error.message}</pre>
    ))}
  </div>
);

export default GraphQLErrors;
