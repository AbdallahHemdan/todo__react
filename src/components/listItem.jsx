import React, { Component } from 'react';
import "./listItem.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import FlipMove from "react-flip-move";


function listItem(props) {
    const items = props.items;
    const listItems = items.map(item => {
        return (
            <div className="list" key={item.key}>
                <p>
                    <input
                        type="text"
                        id={item.key}
                        value={item.text}
                        onChange={action => props.setUpdate(action.target.value, item.key)}
                    />
                    <span className="trashIcon">
                        <FontAwesomeIcon
                            className="faicons"
                            icon="trash"
                            onClick={() => props.onDelete(item.key)}
                        />
                    </span>
                </p>
            </div>
        )
    })
    return (
        <div>
            <FlipMove duration={300} easing="ease-in-out">
                {listItems}
            </FlipMove>
        </div>
    )
}

export default listItem
