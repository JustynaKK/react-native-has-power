import React, { Component } from "react";
import axios from "axios";
import SearchForm from "../components/SearchForm";

class App extends Component {
    state = {
        images: [],
        isLoading: false
    };

    handleFormSubmit = (type, number) => {
        this.setState(
            {images: [],
                isLoading: true},
            () => this.fetchImages(type, number)
        );
    };

    fetchImages = (type, number) => {
        let api = `https://shibe.online/api/${type}?count=${number}`;
        axios.get(api).then(res => {
            const images = res.data;
            this.setState({
                images,
                isLoading: false
            });
        });
    };

    render() {
        const { images, isLoading } = this.state;

        return (
            <div>
                <SearchForm formSubmit={this.handleFormSubmit} isLoading={isLoading} />
                {images.length > 0 &&
                images.map((image, index) => {
                    return <img src={image} key={index} alt="" />;
                })}
            </div>
        );
    }
}

export default App;
