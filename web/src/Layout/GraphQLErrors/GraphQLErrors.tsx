import React from "react";
import * as styles from "./GraphQLErrors.module.css";

interface GraphQLErrorsProps {
  errors?: Array<{
    message: string;
  }>;
}

const GraphQLErrors: React.FC<GraphQLErrorsProps> = ({ errors = [] }) => (
  <div className={styles.GraphQLErrors}>
    <h1>GraphQL Error</h1>
    {errors.map((error) => (
      <pre key={error.message}>{error.message}</pre>
    ))}
  </div>
);

export default GraphQLErrors;
