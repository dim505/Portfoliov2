import React, { useEffect, useState, useContext } from "react";
import {observable, configure, action} from "mobx"
import { ApiCall } from "./SharedFunctions/ApiCall";


export default class AppState {
  @observable Images =  [{ original: "" }];
  @observable  test = "test123";
  ModTest =  (Page) => { this.test = Page }
  GetImages = (Page) => {
       ApiCall(
      "Get",
      `${process.env.REACT_APP_BackEndUrl}/api/PortfolioV2/GetPageInfo/${Page}`
    ).then((results) => {
      this.Images = results
    })
  }  
}


/*
 export const AppState = observable({

    Image: [],
    GetImages: action (() =>    {
        Image =  ApiCall(
            "Get",
            `${process.env.REACT_APP_BackEndUrl}/api/PortfolioV2/GetPageInfo/${props.match.params.id}`
          ).then((results) => {
            console.log(props.match.params.id);
          })
    })


    })

*/