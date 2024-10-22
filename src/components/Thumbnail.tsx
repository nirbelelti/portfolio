
interface ThumbnailProps {
    src: string;
    alt: string;
    additionClass?: string;
}

const Thumbnail = ({ src, alt, additionClass}:ThumbnailProps) => {
    return <img src={src} alt={alt}   className= {`img-fluid custom-size ${additionClass}`} />;
};

export default Thumbnail;
