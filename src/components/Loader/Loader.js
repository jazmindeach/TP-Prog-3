import React from "react"
import './loader.css'

function Loader() {
    return (
      <div id="loader">
        <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
      </div>
    )
}
export default Loader