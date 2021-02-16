import React from "react"

import "./HeaderOption.css"

function HeaderOption({Icon}) {

    return (
        <div className="headerOption">
            {Icon && <Icon className="iconHeader"></Icon>}
        </div>     
    )
}

export default HeaderOption