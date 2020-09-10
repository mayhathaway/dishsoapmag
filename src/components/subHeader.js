import React from "react"

import subHeaderStyles from "./subHeader.module.scss"

const subHeader = ({ title }) => {
  return (
    <div className={subHeaderStyles.green}>
      <p> {`${title}`} </p>
    </div>
  )
}

export default subHeader