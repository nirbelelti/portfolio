

interface LinkWithImageProps {
    src: string;
    alt: string;
    additionClass?: string;
    href: string;
    target?: string;
}

const LinkWithImage = ({ href, target, src, alt, additionClass}:LinkWithImageProps) => {
    return(
    <>
        <a href={href} target={target}>
        <img src={src} alt={alt}  className={`img-fluid ${additionClass}`} />
    </a>
    </>
    );
};

export default LinkWithImage;