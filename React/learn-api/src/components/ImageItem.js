import './ImageList.css';

function ImageItem({ image }) {
    return(
        <div>
            <img className="imageListItem" src={image.urls.small} alt="image"/>
        </div>
    )
}

export default ImageItem;