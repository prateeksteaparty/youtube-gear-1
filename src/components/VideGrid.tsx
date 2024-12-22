import { VideoCard } from "./VideoCard"

const VIDEOS = [{
    title:"2,000 People Fight For $5,000,000", 
    image:"/thumbnail.jpg", 
    author:"MrBeast",
    views:"67M", 
    timestamp:"1 days ago",
    thumbImg:"logo.jpg"
},{
    title:"2,000 People Fight For $5,000,000", 
    image:"/thumbnail.jpg", 
    author:"MrBeast",
    views:"67M", 
    timestamp:"1 days ago",
    thumbImg:"logo.jpg"
},{
    title:"2,000 People Fight For $5,000,000", 
    image:"/thumbnail.jpg", 
    author:"MrBeast",
    views:"67M", 
    timestamp:"1 days ago",
    thumbImg:"logo.jpg"
},{
    title:"2,000 People Fight For $5,000,000", 
    image:"/thumbnail.jpg", 
    author:"MrBeast",
    views:"67M", 
    timestamp:"1 days ago",
    thumbImg:"logo.jpg"
},{
    title:"2,000 People Fight For $5,000,000", 
    image:"/thumbnail.jpg", 
    author:"MrBeast",
    views:"67M", 
    timestamp:"1 days ago",
    thumbImg:"logo.jpg"
},{
    title:"2,000 People Fight For $5,000,000", 
    image:"/thumbnail.jpg", 
    author:"MrBeast",
    views:"67M", 
    timestamp:"1 days ago",
    thumbImg:"logo.jpg"
},{
    title:"2,000 People Fight For $5,000,000", 
    image:"/thumbnail.jpg", 
    author:"MrBeast",
    views:"67M", 
    timestamp:"1 days ago",
    thumbImg:"logo.jpg"
},{
    title:"2,000 People Fight For $5,000,000", 
    image:"/thumbnail.jpg", 
    author:"MrBeast",
    views:"67M", 
    timestamp:"1 days ago",
    thumbImg:"logo.jpg"
},{
    title:"2,000 People Fight For $5,000,000", 
    image:"/thumbnail.jpg", 
    author:"MrBeast",
    views:"67M", 
    timestamp:"1 days ago",
    thumbImg:"logo.jpg"
},{
    title:"2,000 People Fight For $5,000,000", 
    image:"/thumbnail.jpg", 
    author:"MrBeast",
    views:"67M", 
    timestamp:"1 days ago",
    thumbImg:"logo.jpg"
},{
    title:"2,000 People Fight For $5,000,000", 
    image:"/thumbnail.jpg", 
    author:"MrBeast",
    views:"67M", 
    timestamp:"1 days ago",
    thumbImg:"logo.jpg"
},{
    title:"2,000 People Fight For $5,000,000", 
    image:"/thumbnail.jpg", 
    author:"MrBeast",
    views:"67M", 
    timestamp:"1 days ago",
    thumbImg:"logo.jpg"
},{
    title:"2,000 People Fight For $5,000,000", 
    image:"/thumbnail.jpg", 
    author:"MrBeast",
    views:"67M", 
    timestamp:"1 days ago",
    thumbImg:"logo.jpg"
},{
    title:"2,000 People Fight For $5,000,000", 
    image:"/thumbnail.jpg", 
    author:"MrBeast",
    views:"67M", 
    timestamp:"1 days ago",
    thumbImg:"logo.jpg"
},{
    title:"2,000 People Fight For $5,000,000", 
    image:"/thumbnail.jpg", 
    author:"MrBeast",
    views:"67M", 
    timestamp:"1 days ago",
    thumbImg:"logo.jpg"
},{
    title:"2,000 People Fight For $5,000,000", 
    image:"/thumbnail.jpg", 
    author:"MrBeast",
    views:"67M", 
    timestamp:"1 days ago",
    thumbImg:"logo.jpg"
}]

export const VideoGrid = () =>{
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4" >
        {VIDEOS.map(video => <div>
            <VideoCard
                  title={video.title} 
                  image={video.image} 
                  author={video.author}
                  views={video.views} 
                  timestamp={video.timestamp}
                  thumbImg={video.thumbImg}
            ></VideoCard>
        </div> )}
        </div>
    )
}



export const ExtraGrid = () =>{
    return (
        <div className="grid grid-cols-1" >
        {VIDEOS.map(video => <div>
            <VideoCard
                  title={video.title} 
                  image={video.image} 
                  author={video.author}
                  views={video.views} 
                  timestamp={video.timestamp}
                  thumbImg={video.thumbImg}
            ></VideoCard>
        </div> )}
        </div>
    )   

}
