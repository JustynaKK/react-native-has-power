import React, { Component } from "react";

let options = ["shibes", "cats", "birds", "random"];

class SearchBar extends Component {
    state = {
        numberOfResults: "1",
        typeOfAniamal: "shibes"
    };

    handleTypeChange = e => {
        this.setState({
            typeOfAniamal: e.target.value
        });
    };

    handleNumberChange = e => {
        this.setState({
            numberOfResults: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();

        const { typeOfAniamal, numberOfResults} = this.state

        let animalToFetch = typeOfAniamal;
        if (animalToFetch === "random") {
            let randomNumber = Math.floor(Math.random() * 3);
            animalToFetch = options[randomNumber];
        }

        this.props.formSubmit(animalToFetch, numberOfResults);
    };

    render() {
        const { isLoading } = this.props;

        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Type of animal:
                    <select onChange={this.handleTypeChange} defaultValue={this.state.typeOfAniamal}>
                        {options.map(el => {
                            return (
                                <option value={el} key={el}>{el}</option>
                            );
                        })}
                    </select>
                </label>
                <br />
                <label>
                    Number of pictures:
                    <input type="number" min="1" max="10" onChange={this.handleNumberChange} defaultValue={this.state.numberOfResults} />
                </label>
                <br />

                <input type="submit" value={!isLoading ? "Szukaj" : "Ładowanie danych"} disabled={isLoading} />
            </form>
        );
    }
}

export default SearchBar;
