import React from "react";
import SearchBar from "./components/SearchBar/SearchBar.jsx";
import ImageGallery from "./components/ImageGallery/ImageGallery.jsx";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage.jsx";
import Loader from "./components/Loader/Loader.jsx";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn.jsx";
import ImageModal from "./components/ImageModal/ImageModal.jsx";
import getImages from "./photo-api";

import { Toaster, toast } from "react-hot-toast";
import { useState, useEffect } from "react";

function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  const handleSearchSubmit = async (searchQuery) => {
    setPage(1);
    setError(false);
    try {
      setLoading(true);
      const data = await getImages(searchQuery, 1);
      setImages(data);
      setQuery(searchQuery);
    } catch (error) {
      toast.error("Failed to fetch images");
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const handleLoadMore = async () => {
    try {
      setLoading(true);
      const data = await getImages(query, page + 1);
      setImages((prevImages) => [...prevImages, ...data]);
      setPage((prevPage) => prevPage + 1);
    } catch (error) {
      toast.error("Failed to fetch more images");
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <SearchBar onSubmit={handleSearchSubmit} />
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {images.length > 0 && <ImageGallery images={images} />}
      {images.length > 0 && !loading && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}

      <Toaster position="bottom-right" reverseOrder={false} />
    </>
  );
}

export default App;
