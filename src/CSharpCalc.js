import React, { useEffect, useState, useContext } from "react";
import Typography from "@material-ui/core/Typography";
export default function CSharpCalc(props) {
  return (
    <div>
      <p>
        This server side calculator is written in C#,HTML and CSS. All the
        calculations are done on the server. The framework that powers this
        calculator is ASP.NET Core Razor Pages. Please click{" "}
        <a
          href="https://github.com/dim505/WebApp/blob/master/main_portfolio/Pages/Calculator.cshtml"
          target="_blank"
        >
          {" "}
          here{" "}
        </a>{" "}
        and{" "}
        <a
          href="https://github.com/dim505/WebApp/blob/master/main_portfolio/Pages/Calculator.cshtml.cs"
          target="_blank"
        >
          {" "}
          here{" "}
        </a>{" "}
        for the source code!
      </p>
    </div>
  );
}
