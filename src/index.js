import React from 'react';
import { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

let bookList = [
	{"title": "Hunger", "author": "Roxane Gay", "pages": 320},
	{"title": "The Sun Also Rises", "author": "Ernest Hemingway", "pages": 260},
	{"title": "White Teeth", "author": "Zadie Smith", "pages": 480},
	{"title": "Cat's Cradle", "author": "Kurt Vonnegut", "pages": 304}
]

const Book = ({title, author, pages, freeBookmark}) => {
	return (
		<section>
			<h2>{title}</h2>
			<p>by: {author}</p>
			<p>Pages: {pages} pages</p>
            <p>Free bookmark today: {freeBookmark ? 'Yes' : 'No'}</p>
		</section>
	)
}

const Hiring = () => {
    return (
        <p>We are hiring right now!</p>
    )
}

const NotHiring = (props) => <p>We are not {props.hire} right now.</p>

class Library extends React.Component {
    
    state  = { 
        open: false,
        freeBookmark: true,
        hiring: false
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
                <h1>The library is {this.state.open ? 'Open' : 'Closed'}</h1>
                <h2>{this.state.hiring ? <Hiring /> : <NotHiring hire={'hiring'} />}</h2>
                {books.map(
                    (book, i) => 
                        <Book 
                            key={i}
                            title={book.title} 
                            author={book.author} 
                            pages={book.pages}
                            freeBookmark = {this.state.freeBookmark}/>
                )}
                <button className = "btn btn-info" onClick = {this.toggleOpenClose}>Controller</button>
                <button className = "btn btn-warning" onClick = {this.toggleHire}>HireToggler</button>
            </div>
        )
    }
}    


render(
	<Library books={bookList}/>, 
	document.getElementById('root')
)
