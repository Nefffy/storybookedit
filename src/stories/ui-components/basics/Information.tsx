import React from "react";

/*
* This basic component returns the pure information of a content-page
* Technically we wrap the text into some paragraph <p></p>
*
* This allows to split a block of text-based content into
* pieces of pure text
*/

export default function Information(props: {text:string}) {

    return (

    <p>
           {props.text}
    </p>
    );
  }
  