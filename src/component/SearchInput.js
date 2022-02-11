import React from 'react'

class SearchInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = { eve: ''}
        this.onInputChange = this.onInputChange.bind(this)
        this.onFormSubmit = this.onFormSubmit.bind(this)
    }

    onFormSubmit(event){
        event.preventDefault();
        this.props.Search(this.state.eve) 
    }
    // change(event){
    //     event.preventDefault();
    //     ReactDOM.render(<div>You are a boy</div>, document.querySelector('#root'))
    // }

    onInputChange(event){
        this.setState({eve: event.target.value})
        // console.log(this.state.eve)
    }
    
    render() {
        return (
            <div className='ui segment'>
                <form onSubmit={this.onFormSubmit} className='ui form'>
                    <div className='field'>
                        <div className='ui massive icon input'>
                            <input type="text" placeholder="search..." onChange={this.onInputChange}  value={this.state.eve}/>
                            <button type="submit"><i className='search icon' onSubmit={this.onFormSubmit}></i></button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

// {(event) => this.setState({eve:event.target.value})}

export default SearchInput;