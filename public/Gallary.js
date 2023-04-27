import Image from 'next/image';

const Gallery = ({ images ,handleImageClick }) => {
  return (
    <div className="gallery items-center justify-center object-center mx-3 my-3">
      {images.map((image, index) => (
        console.log(image),
        <div key={index} className="gallery-item float-left mx-3 my-3 " >
          <div className='rounded-3xl overflow-hidden shadow-2xl h-72 w-60 justify-center relative items-center' onClick={() => handleImageClick(image.src.original)} ><Image fill src={image.src.original} alt={image.photographer} /></div>
          <div className="gallery-item-caption text-zinc-950 text-center">{image.photographer}</div>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
