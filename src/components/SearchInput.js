import React from "react";

class SearchInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { entry: "" };
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    if (!this.state.entry.trim()) return;
    
    this.props.onSearchSubmit(this.state.entry);
  };

  render() {
    return (
      <form
        onSubmit={this.onFormSubmit}
        className="ui form"
      >
        <div className="field">
          <div className="ui massive icon input">
            <input
              type="text"
              placeholder="Enter image name..."
              onChange={(event) => this.setState({ entry: event.target.value })}
              value={this.state.entry}
            />
            <i className="search icon"></i>
          </div>
        </div>
      </form>
    );
  }
}

export default SearchInput;
