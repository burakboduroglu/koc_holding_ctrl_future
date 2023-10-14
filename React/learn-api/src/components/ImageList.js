import ImageItem from "./ImageItem";
import './ImageList.css'

function ImageList({ imagesPlaceholder }) {
    return(
        <div className="images">
            {
                imagesPlaceholder.map((image, index) => {
                    return <ImageItem key={index} image={image}/>
                })
            }
        </div>
    )
}

export default ImageList;