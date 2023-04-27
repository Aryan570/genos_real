import Image from "next/image";
const Lightbox = ({ showLightbox, setShowLightbox, selectedImage }) => {
    const handleClose = () => {
      setShowLightbox(false);
    };
    return (
      <div className={`lightbox ${showLightbox ? 'show' : ''}  `}>
        <div className="lightbox-content text-zinc-900 fixed top-0 left-1/3">
          {showLightbox && <Image src={selectedImage} width={500} height={500} alt={selectedImage.alt} />}
          {showLightbox && <button className="close-button absolute top-0 right-0 text-white border-black bg-cyan-400 rounded-lg p-2 my-2 mx-3 text" onClick={handleClose}>
            Close the image
          </button>}
          {showLightbox && <div className="lightbox-caption absolute bottom-0 text-cyan-400"><p className="text-cyan-400"><strong>The link to the image: {selectedImage}</strong></p></div>}
        </div>
      </div>
    );
  };
  export default Lightbox;
  