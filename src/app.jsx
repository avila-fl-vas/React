import React, { useEffect } from "react";
import Payments from "./Components/Payments/Payments";
import "bootstrap/dist/css/bootstrap.min.css";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallBack from "./Components/ErrorFallBack/ErrorFallBack";
import "./app.scss";

const App = () => {

  return (
    <ErrorBoundary FallbackComponent={ErrorFallBack}>
      <Payments />
    </ErrorBoundary>
  );
};

export default App;
