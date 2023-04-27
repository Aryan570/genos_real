import { useState } from 'react';
import Gallery from '../public/Gallary';
import Search from '../public/Search';
import Lightbox from '../public/Lightbox';
export default function Home({ imagesData }) {
  const [filteredImages, setFilteredImages] = useState(imagesData.photos);
  const [showLightbox, setShowLightbox] = useState(false);
  const [selectedImage, setSelectedImage] = useState({});

  const handleImageClick = (image) => {
    // console.log(image)
    setSelectedImage(image);
    setShowLightbox(true);
  };

  return (
    <div>
      <h1 className='text-zinc-950 font-bold text-center my-7 text-4xl'>Image Gallery</h1>
      <Search images={imagesData.photos} setFilteredImages={setFilteredImages} />
      <Gallery images={filteredImages} handleImageClick={handleImageClick}/>
      <Lightbox showLightbox={showLightbox} setShowLightbox={setShowLightbox} selectedImage={selectedImage} desc={imagesData.photos}/>
    </div>
  );
}
export async function getStaticProps() {
  const res = await fetch('https://api.pexels.com/v1/curated?per_page=20',{
    headers:{
      Authorization: 'wJGBLURrhtNg1pHIqf0jf5AK5R0zJZGXQpCo2RIRrMJxQzLdPNZbDUjg',
    },
  });
  const imagesData = await res.json();
  // console.log(imagesData)
  return {
    props: {
      imagesData,
    },
  };
}
