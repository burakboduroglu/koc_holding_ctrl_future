import './App.css';
import SearchHeader from "./SearchHeader";
import searchImages from  "./Api";
import {useState} from "react";
import ImageList from "./components/ImageList";

function App() {
    const [images, setImages] = useState([])

    const handleSubmit = async (term) => {
        console.log(term)
        const result = await searchImages(term);
        setImages(result)
    }

    return (
        <div className="App">
            <SearchHeader search={handleSubmit} />
            <ImageList imagesPlaceholder={images}/>
        </div>
    );
}

export default App;
