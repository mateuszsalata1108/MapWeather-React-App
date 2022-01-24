import React from 'react'

export default class SearchBar extends React.Component {
    state ={term: ""}

    onInputChange = event =>{
        this.setState({term:event.target.value})
    }

    onformSubmit = event =>{
        event.preventDefault()
        this.props.onSearchSubmit(this.state.term)
    }

    render() {
        return(
            <div className='ui segment padded inverted black'>
                <form  className='ui form' onSubmit={this.onformSubmit}>
                    <div>
                        <div>
                            <input type="text" placeholder='Wpisz lokalizację' onChange={this.onInputChange} value={this.state.term} ></input>
                        </div>
                    </div>
                </form>
            </div>            
        )
    }
}
