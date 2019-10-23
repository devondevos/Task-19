import React from 'react';
//Create favourite component
class Favourite extends React.Component {
    constructor(){
        super()
        this.state = {
            favMusic: [],
            favBooks: []
        }
    }
    componentDidMount(){
        fetch('/favoritesMusic')
            .then(res => res.json())
            .then(music => this.setState({favMusic: music}, () => console.log('fetched...', music)))

            fetch('/favoritesBooks')
            .then(res => res.json())
            .then(books => this.setState({favBooks: books}, () => console.log('fetched...', books)))
    }
//Create delete music function 
    deleteMusic = (i) => {
        let musicToDelete = {
            deleted: i.id
        }
        fetch('/favoritesMusic', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(musicToDelete)
        })
        document.location.reload()
    }
//Create delete book function
    deleteBooks = (i) => {
        let booksToDelete = {
            deleted: i.id
        }
        fetch('/favoritesBooks', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(booksToDelete)
        })
        document.location.reload()
    }
//Render the components
    render(){
        return(
            <div id="favback">
                 <h4 id="favmess">Your Favourite Tracks</h4>
                <fieldset class="Favinfo">
                    {this.state.favMusic.map(favM => <article key={favM.trackId}><p>{favM.artist}</p><p>{favM.trackId}</p>
                        <img src={favM.artwork} alt='artwork'/><br/>
                        <audio controls><source src={favM.sample}/></audio>
                        <p>{favM.track}</p>
                        <button onClick={() => {this.deleteMusic(favM)}}>Remove</button>

                    </article>)}
                </fieldset>
                <h4 id="favmess">Your Favourite Books</h4>
                <fieldset class="Bookinfo">
                     {this.state.favBooks.map(favB => <article key={favB.artwork}><p>{favB.artist}</p>
                        <img src={favB.artwork} alt='artwork'/><br/>
                        <p>{favB.description}</p>
                        <p>{favB.track}</p>
                        <button onClick={() => {this.deleteBooks(favB)}}>Remove</button>

                    </article>)}
                </fieldset>
            </div>
        )
    }
}
//Export the components created
export default Favourite