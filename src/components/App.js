import React from "react";
import axios from "axios"
import SearchInput from "./SearchInput";
import ImageList from "./ImageList";

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = { images: [] }
    }

    onSearchSubmit = async (entry) => {
        const response = await axios.get(`https://pixabay.com/api/?key=45225583-3ce0d5034080b713f21092676&q=${entry}&image_type=photo`)
        this.setState({ images: response.data.hits })
    }

    render() {
        return (
            <div className="ui container" style={{ marginTop: '30px' }}>
                <SearchInput onSearchSubmit={this.onSearchSubmit} />
                <ImageList images = {this.state.images}/>
            </div>
        )
    }
}

export default App;
