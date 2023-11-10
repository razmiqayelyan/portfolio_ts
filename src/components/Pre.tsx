import React from "react";
type PropsType = {
    load : boolean
}
function Pre(props: PropsType) {
  return <div id={props.load ? "preloader" : "preloader-none"}></div>;
}

export default Pre;
