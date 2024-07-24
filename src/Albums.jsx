import { useState, useEffect } from "react"
import axios from "axios";

const Albums = () => {

    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        axios.get('./ALBUMS.json')
        .then(response => {
            console.log(response.data);
            setAlbums(response.data);
        }) // this will show if successful

        .catch(error => {
            console.log(error);
        }) // this will show if unsuccessful
    }, [])


    const AlbumCard = ({albums}) => {
        const mappedAlbums = albums.map((album, index) => {
            return (
                   <div key={index} className="album-card">
                    <img src={album.cover_image} alt="album cover photo"/>
                    <div className="album-details">
                        <h2> {album.album_name} </h2>
                        <h3> {album.artist} </h3>
                        <h3> {album.genre} </h3>
                        <h4> {album.date} </h4>
                        <h3 id="listen-now"> Listen Now </h3>
                    </div>
                </div>         
            ) // end of the map return
        })

        return (
            <>
                {mappedAlbums}
            </>
        ) // end of album card return
    }

    // MASTER RETURN STATEMENT
  return (
    <>
      <div id="albumCont">
         <AlbumCard albums={albums}/>
        </div>
    </>
  
  )
}

export default Albums
