import React, { Component } from "react";
import "./App.css";
import ListItem from "./components/listItem";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

library.add(faTrash);

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      currentItem: {
        text: "",
        key: ""
      }
    };
  }
  handleInput = action => {
    this.setState({
      currentItem: {
        text: action.target.value,
        key: Date.now()
      }
    });
  };
  handleAddItem = action => {
    action.preventDefault();
    const newItem = this.state.currentItem;
    if (newItem.text !== "") {
      const items = [...this.state.items, newItem];
      this.setState({
        items,
        currentItem: {
          text: "",
          key: ""
        }
      });
    }
  };
  handleDelete = itemKey => {
    const filteredListItems = this.state.items.filter(
      item => item.key !== itemKey
    );
    this.setState({ items: filteredListItems });
  };
  setUpdate = (valueToUpdate, keyToChange) => {
    const items = this.state.items;
    items.map(item => {
      if (item.key === keyToChange) {
        item.text = valueToUpdate;
      }
    });
    this.setState({ items });
  };
  render() {
    return (
      <div className="App">
        <header>
          <form className="to-do-form">
            <input
              type="text"
              placeholder="Enter your task"
              value={this.state.currentItem.text}
              onChange={this.handleInput}
            />
            <button type="submit" onClick={this.handleAddItem}>
              Add
            </button>
          </form>
        </header>
        <ListItem
          items={this.state.items}
          onDelete={this.handleDelete}
          setUpdate={this.setUpdate}
        />
      </div>
    );
  }
}

export default App;
