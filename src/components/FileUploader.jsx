import { useState, useEffect } from "react";

const FileUploader = ({ imgHeight, getImagesOnChange, getImagesBase64OnChange }) => {
    const [images, setImages] = useState([]);
    const [imageURLs, setImageURLs] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchImages = async () => {
            if (images.length < 1) return;
            const newImageUrls = images.map((image) => URL.createObjectURL(image));
            setImageURLs(newImageUrls);
            const unresolvedImages = images.map((file) => convertToBase64(file));
            if (getImagesBase64OnChange) getImagesBase64OnChange(await Promise.all(unresolvedImages));
            if (getImagesOnChange) getImagesOnChange(images);
            setLoading(false);
        }
        fetchImages()
    }, [images, getImagesBase64OnChange, getImagesOnChange])

    const onImageChange = async (e) => {
        setImages([...e.target.files]);
        setImageURLs([]);
        setLoading(true);
    }

    return (<>
        <input type="file" multiple accept="image/*" onChange={onImageChange} />
        <br /> <br />
        {loading ? <p>Loading...</p> : imageURLs.map((imgSrc, index) => (
            <img key={`img-${index}`} src={imgSrc} alt={index} height={imgHeight} />
        ))}
    </>)
}

const convertToBase64 = (file) => {
    return new Promise(resolve => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            resolve(reader.result);
        }
    })
}

export default FileUploader;