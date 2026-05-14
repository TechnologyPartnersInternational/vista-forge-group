
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { MapPin, Expand, Search, Loader2, Plus } from "lucide-react";

const categories = [
  { id: "all", label: "All" },
  { id: "environments", label: "Environmental" },
  { id: "laboratory", label: "Laboratory" },
  { id: "remediation", label: "Remediation" },
  { id: "waste management", label: "Waste Management" },
  { id: "training", label: "Training" },
  { id: "digital solutions", label: "Digital Solutions" },
];

interface GalleryImage {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  location?: string;
}

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [nextCursor, setNextCursor] = useState<string | null>(null);
  const [totalCount, setTotalCount] = useState(0);
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const fetchImages = useCallback(async (category: string, cursor: string | null = null, isLoadMore = false) => {
    if (isLoadMore) setLoadingMore(true);
    else setLoading(true);

    try {
      const url = new URL(`${API_URL}/gallery`);
      url.searchParams.append('category', category);
      if (cursor) url.searchParams.append('next_cursor', cursor);

      const response = await fetch(url.toString());
      if (!response.ok) throw new Error('Failed to fetch images');
      
      const data = await response.json();
      
      if (isLoadMore) {
        setImages(prev => [...prev, ...data.resources]);
      } else {
        setImages(data.resources);
      }
      
      setNextCursor(data.next_cursor || null);
      setTotalCount(data.total_count || 0);
    } catch (error) {
      console.error('Error fetching gallery:', error);
    } finally {
      setLoading(false);
      setLoadingMore(false);
    }
  }, []);

  useEffect(() => {
    fetchImages(activeCategory);
  }, [activeCategory, fetchImages]);

  const handleLoadMore = () => {
    if (nextCursor) {
      fetchImages(activeCategory, nextCursor, true);
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-[#020617] overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(30,58,138,0.3),transparent_70%)]"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        </div>
        
        <div className="relative z-10 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-4"
          >
            Visual Portfolio
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          >
            See TPI at <span className="text-primary">Work</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-slate-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
          >
            Explore our commitment to excellence through a visual journey of our impactful projects.
          </motion.p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="sticky top-16 md:top-20 z-40 bg-white/80 backdrop-blur-md border-b border-gray-100 py-6">
        <div className="px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex flex-wrap items-center gap-2 md:gap-3">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                    activeCategory === cat.id
                      ? "bg-primary text-white shadow-lg shadow-primary/20"
                      : "bg-gray-50 text-gray-500 hover:bg-gray-100 border border-gray-200"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
            
            <div className="flex items-center gap-3 text-sm font-semibold text-gray-500 bg-gray-50 px-4 py-2 rounded-full border border-gray-200">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              Showing {images.length} of {totalCount} Assets
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-white min-h-[600px]">
        <div className="px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
          {loading && images.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-40 gap-4">
              <Loader2 className="w-10 h-10 text-primary animate-spin" />
              <p className="text-gray-400 font-medium">Fetching from media library...</p>
            </div>
          ) : (
            <>
              <motion.div 
                layout
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                <AnimatePresence mode="popLayout">
                  {images.map((item) => (
                    <motion.div
                      key={item.id}
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.4 }}
                      className="group relative h-[400px] rounded-2xl overflow-hidden bg-gray-100 cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-500"
                      onClick={() => setSelectedImage(item)}
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500"></div>
                      
                      <div className="absolute inset-0 p-8 flex flex-col justify-end transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <div className="flex items-center gap-2 text-primary font-bold text-[10px] uppercase tracking-widest mb-2">
                          <span className="w-8 h-[1px] bg-primary"></span>
                          {item.category.replace("-", " ")}
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2 leading-tight">
                          {item.title}
                        </h3>
                        {item.description && (
                          <p className="text-white/70 text-sm line-clamp-2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            {item.description}
                          </p>
                        )}
                        <div className="flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                          {item.location && (
                            <div className="flex items-center gap-1.5 text-white/60 text-xs">
                              <MapPin className="w-3 h-3" />
                              {item.location}
                            </div>
                          )}
                          <div className="p-2 rounded-full bg-white/10 backdrop-blur-sm text-white">
                            <Expand className="w-4 h-4" />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>

              {nextCursor && (
                <div className="mt-20 text-center">
                  <button
                    onClick={handleLoadMore}
                    disabled={loadingMore}
                    className="group relative inline-flex items-center gap-3 px-10 py-4 rounded-full bg-[#020617] text-white font-bold text-sm hover:bg-primary transition-all duration-300 shadow-xl"
                  >
                    {loadingMore ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : (
                      <Plus className="w-4 h-4 group-hover:rotate-90 transition-transform duration-300" />
                    )}
                    {loadingMore ? "Loading..." : "Load More Pictures"}
                  </button>
                </div>
              )}

              {images.length === 0 && !loading && (
                <div className="text-center py-40">
                  <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6 text-gray-300">
                    <Search className="w-10 h-10" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">No pictures found</h3>
                  <p className="text-gray-500">The folder "{activeCategory}" seems to be empty on Cloudinary.</p>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* Lightbox / Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/95 p-4 md:p-10"
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
              className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </motion.button>

            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full max-h-full flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl bg-slate-900 flex items-center justify-center">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="max-w-full max-h-[85vh] object-contain"
                />
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
                  <div className="max-w-2xl">
                    <p className="text-primary font-bold text-xs uppercase tracking-widest mb-2">
                      {selectedImage.category.replace("-", " ")}
                    </p>
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                      {selectedImage.title}
                    </h2>
                    {selectedImage.description && (
                      <p className="text-white/80 text-base md:text-lg">
                        {selectedImage.description}
                      </p>
                    )}
                    {selectedImage.location && (
                      <div className="flex items-center gap-2 text-white/50 text-sm mt-4">
                        <MapPin className="w-4 h-4" />
                        {selectedImage.location}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
};

export default Gallery;
