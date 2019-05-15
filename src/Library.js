import React from 'react';
import { Book } from './Book';
import { Hiring } from './Hiring';
import { NotHiring } from './NotHiring';
import PropTypes from 'prop-types';


class Library extends React.Component {

// ====================== Default value if bookList isnt provided =================
    static defaulProps = {
        books: [
            {"title": "Hunger", "author": "Roxane Gay", "pages": 320}
        ]
    }
//  ==================================================================================   
    state  = { 
        open: false,
        freeBookmark: true,
        hiring: false,
        data: [],
        loading: false,
        color: ''
    }

    componentDidMount(){
        this.setState({loading: true})
        fetch('https://hplussport.com/api/products/order/price/sort/acs/qty/1')
        .then(function(data) {
            return data.json()
        })
        .then(data => this.setState({data, loading: false}))
        
    }

    newColor = (event) => {
        return(
            this.setState({color: event.target.value} )
        )
    }

    onSubmit = (event) => {
        event.preventDefault()
        console.log(`color: ${this.state.color}`)
    }

    toggleOpenClose = () => {  
        this.setState(oldState => ({
            open: !oldState.open
            }));
    }

    toggleHire = () => {
        this.setState(prevState => ({hiring: !prevState.hiring}));
    }

    render(){
        console.log(this.state)
        const { books } = this.props
        return (
            <div className='container'>
                
                {this.state.loading ? 'loading...' : 
                    <div>
                        {this.state.data.map(product => {
                            return (
                                
                                <div key={product.id} className="product">
                                <hr/>
                                    <h4>{product.name}</h4>
                                    <p>{product.description}</p>
                                    <img alt={product.name} src={product.image} height={100}/>
                                    <hr/>
                                </div>
                            )
                        })}
                    </div>   
                }
                <div className="rec" style={{backgroundColor: this.state.color}}></div>
                
                <h2>{this.state.hiring ? <Hiring /> : <NotHiring hire={'hiring'} />}</h2>
                <h1>The library is {this.state.open ? 'Open' : 'Closed'}</h1>
                {books.map(
                    (book, i) => 
                        <Book 
                            key={i}
                            title={book.title} 
                            author={book.author} 
                            pages={book.pages}
                            freeBookmark = {this.state.freeBookmark}/>
                )}

                <form onSubmit={this.onSubmit}>
                    <input onChange={this.newColor} type="color"/>
                    <button>Submit</button>
                </form>

                <button className = "btn btn-info" onClick = {this.toggleOpenClose}>Controller</button>
                <button className = "btn btn-warning" onClick = {this.toggleHire}>HireToggler</button>
            </div>
        )
    }
}

Library.propTypes = {
    books: PropTypes.array
}

Book.propTypes = {
    title: PropTypes.string,
    author: PropTypes.string,
    pages: PropTypes.number,
    freeBookmark: PropTypes.bool
}

export default Library;