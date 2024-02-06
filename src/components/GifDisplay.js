function GifDisplay({gif}){
    if(gif === null){
        return <h1>Please Search for gif Above</h1>
    }
    // return value if there is a movie (not null)
    return <div>
    <img src={gif.data.images.original.url} alt="GIF"/>
    </div>
}
export default GifDisplay;