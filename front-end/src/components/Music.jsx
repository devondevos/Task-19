// Import react
import React from 'react';

class Music extends React.Component{
    constructor(){
        super()
        this.state ={
            data: [],
            musicInput: ''
        }
    }
    Searchnew(){
        fetch('/music')
            .then(res => res.json())
            .then(data => this.setState({data}, () => console.log('info is fetched...', data)))
    }
    Searchmusic = async () => {
        let search = this.state.musicInput.split(' ').join('+')
        const getMusic = await fetch(`/music?search=${search}&type=${this.state.type}`)
        let res = await getMusic.json()
        this.setState({
            data: res
        })
    }

    favouriteMusic= (i) => {
        let favPic = {
            id: i.trackId,
            artist: i.artistName,
            artwork: i.artworkUrl100,
            track: i.trackName,
            sample: i.previewUrl
        }
        fetch('/favoritesMusic', {
            method: 'POST',
            headers : {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(favPic)
        })
    }
    render(){
        return (
            <div id="music">
                <div class="searchItem">
                    <input class="Songinput" type="text" placeholder="Search Tracks" onChange={(e) => this.setState({musicInput: e.target.value})}/>
                    <button class="Searchbutton" onClick={() => this.Searchmusic()}>Search</button>
                </div>

                <fieldset class="track-info">
                    {this.state.data.map(sort_data => <article key={sort_data.trackId}>{sort_data.artistName}<br/>
                    {sort_data.trackName}<br/><img src={sort_data.artworkUrl100} alt={sort_data.trackId}/>
                    {console.log(sort_data)}<br/><audio controls><source src={sort_data.previewUrl}type='audio/mpeg'></source></audio>
                    <button class="favourite" onClick={() =>this.favouriteMusic(sort_data)}>Favorite</button>
                    </article>)} {/*Call the function created to search for the song*/}
                </fieldset>
            </div>
        )
    }
}

export default Music