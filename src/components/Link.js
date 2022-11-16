import React from "react";

function Link({ url, title }) {
  return (
    <>
      <a href={url} target="_blank">
        {title}
      </a>
    </>
  );
}

export default Link;
