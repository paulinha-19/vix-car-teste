import { useRouteError } from "react-router-dom";
import React from 'react'

export const ErrorPage: React.FC = () => {
    return (
        <div id="error-page">
          <h1>Oops!</h1>
          <p>Sorry, an unexpected error has occurred.</p>
          <p>
            <i>error 404</i>
          </p>
        </div>
      );
  };

export default ErrorPage;

