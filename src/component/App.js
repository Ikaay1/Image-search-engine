import React from 'react'
import SearchInput from './SearchInput'
import axios from 'axios'
import ImageList from './ImageList.js'
import './App.css'


class App extends React.Component {

    constructor(props){
        super(props);
        this.state={images: []}
        this.onSearch = this.onSearch.bind(this)
    }

    async onSearch(entry){
        const response = await axios.get(`https://pixabay.com/api/?key=25050782-4f30ac3da3499fd2bcd5360c2&q=${entry}&image_type=photo`)
        this.setState({images: response.data.hits})
        /* console.log(response.data.hits)
        console.log(response) */
    }

    render(){
        return (
            <div style={{marginTop:'30px'}}>
                <div className="ui container">
                    <SearchInput   Search={this.onSearch} />
                </div>
                <ImageList images={this.state.images}/>
            </div>
        )
    }
    
}

export default App;
