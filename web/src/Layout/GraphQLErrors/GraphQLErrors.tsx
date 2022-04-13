import React from "react";
import * as styles from "./GraphQLErrors.module.css";

export interface GraphQLError {
  message: string;
}

interface GraphQLErrorsProps {
  errors?: Array<GraphQLError>;
}

const GraphQLErrors: React.FC<React.PropsWithChildren<GraphQLErrorsProps>> = ({ errors = [] }) => (
  <div className={styles.GraphQLErrors}>
    <h1>GraphQL Error</h1>
    {errors.map((error) => (
      <pre key={error.message}>{error.message}</pre>
    ))}
  </div>
);

export default GraphQLErrors;
