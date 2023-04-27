import { useState } from 'react';
const Search = ({ images, setFilteredImages }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    const term = event.target.value.toLowerCase();
    const filtered = images.filter((image) =>
      image.photographer.toLowerCase().includes(term)
    );
    setSearchTerm(term);
    setFilteredImages(filtered);
  };

  return (
    <div className='search m-2 justify-center flex my-6 '>
      <input className='border-2 border-cyan-300 rounded-md text-zinc-950 w-1/6'
        type="text"
        placeholder=" Search"
        value={searchTerm}
        onChange={handleSearch}
      />
    </div>
  );
};

export default Search;
