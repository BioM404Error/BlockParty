import React from "react"
import LandingCanvas from "./components/LandingCanvas";
import Overlay from "./components/Overlay"

const index = () => {
  return (
    <>
      {/*<Overlay />*/}
      <LandingCanvas />
      <Overlay consumer={"/specification"} business={"/permit"}/>
    </>
  )
}

export default index