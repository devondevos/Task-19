import React from 'react';

class Books extends React.Component{
    constructor(){
        super()
        this.state ={
            data: [],
            bookInput: ''
        }
    }
    newbookSearch(){
        fetch('/books')
            .then(res => res.json())
            .then(data => this.setState({data}, () => console.log('info fetched...', data)))
    }
    Searchbooks = async () => {
        let search = this.state.bookInput.split(' ').join('+')
        const getBook = await fetch(`/book?search=${search}&type=${this.state.type}`)
        let res = await getBook.json()
        this.setState({
            data: res
        })
        console.log(res);
    }
    favouriteBook= (i) => {
        let favPic = {
            id: i.trackId,
            artist: i.artistName,
            artwork: i.artworkUrl100,
            track: i.trackName,
            description: i.description
        }
        fetch('/favoritesBooks', {
            method: 'POST',
            headers : {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(favPic)
        })
    }
    render(){
        return (
            <div id="bookdiv">
                <div class="searchItem">
                    <input class="Songinput" type="text" placeholder="Search Books" onChange={(e) => this.setState({bookInput: e.target.value})}/>
                    <button class="Searchbutton" onClick={() => this.Searchbooks()}>Search</button>
                </div>

                <fieldset class="Bookinfo">
                    {this.state.data.map(sort_data => <article key={sort_data.trackId}>{sort_data.artistName}<br/>
                    {sort_data.trackName}<br/>
                    <p>{sort_data.description}</p><br/>
                    <img src={sort_data.artworkUrl100} alt='bookPic'/>
                    <button class="favourite" onClick={() => {this.favouriteBook(sort_data)}}>Favorite</button>
                    </article>)}
                </fieldset>
            </div>
        )
    }
}

export default Books