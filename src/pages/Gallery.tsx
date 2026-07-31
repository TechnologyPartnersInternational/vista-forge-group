
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { MapPin, Expand, Search, Loader2, Plus } from "lucide-react";
import heroBg from "@/assets/Featured Projects/IMG-20230620-WA0013.jpg";
import PageSEO from "@/seo/PageSEO";
import { PAGE_SEO } from "@/seo/seo.config";
import Breadcrumbs from "@/seo/Breadcrumbs";

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
      const queryParams = new URLSearchParams({ category });
      if (cursor) queryParams.append('next_cursor', cursor);

      const response = await fetch(`/api/gallery?${queryParams.toString()}`);
      if (!response.ok) throw new Error('Failed to fetch images');
      
      const data = await response.json();
      
      const cleanResources = (data.resources || []).filter((item: GalleryImage) => {
        const id = item.id || '';
        return !id.startsWith('sample') && !id.startsWith('cld-sample') && !id.startsWith('samples/');
      });

      if (isLoadMore) {
        setImages(prev => [...prev, ...cleanResources]);
      } else {
        setImages(cleanResources);
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
      <PageSEO
        title={PAGE_SEO.gallery.title}
        description={PAGE_SEO.gallery.description}
        keywords={PAGE_SEO.gallery.keywords}
        canonicalPath={PAGE_SEO.gallery.canonicalPath}
      />
      <Breadcrumbs items={[{ label: 'Gallery', path: '/gallery' }]} />
      {/* Hero Section */}
      <section className="px-4 md:px-10 pt-8 pb-6 bg-mist">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative w-full rounded-[2rem] overflow-hidden"
          style={{ minHeight: "340px" }}
        >
          <img
            src={heroBg}
            alt="TPI Gallery"
            className="absolute inset-0 w-full h-full object-cover object-[0_30%]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-black/10" />

          <div className="relative z-10 flex flex-col justify-center h-full px-8 md:px-14 py-16 md:py-20 max-w-2xl">
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-1.5 self-start mb-5 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-semibold backdrop-blur-sm"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Visual Portfolio
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-3xl md:text-5xl font-bold text-white leading-tight mb-4"
            >
              See TPI at Work
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-sm md:text-base text-white/80 leading-relaxed max-w-lg"
            >
              Explore our commitment to excellence through a visual journey of our impactful projects.
            </motion.p>
          </div>
        </motion.div>
      </section>

      {/* Filter Section */}
      <section className="sticky top-16 md:top-20 z-40 bg-white/80 backdrop-blur-md border-b border-gray-100 py-6">
        <div className="px-4 md:px-8 lg:px-12 max-w-[1600px] mx-auto">
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
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-white min-h-[600px]">
        <div className="px-4 md:px-8 lg:px-12 max-w-[1600px] mx-auto">
          {loading && images.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-40 gap-4">
              <Loader2 className="w-10 h-10 text-primary animate-spin" />
              <p className="text-gray-400 font-medium">Fetching from media library...</p>
            </div>
          ) : (
            <>
              <motion.div 
                layout
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6"
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
                      className="group relative h-[280px] rounded-xl overflow-hidden bg-gray-100 cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-500"
                      onClick={() => setSelectedImage(item)}
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500"></div>
                      
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="p-4 rounded-full bg-black/40 backdrop-blur-sm text-white transform scale-50 group-hover:scale-100 transition-all duration-500">
                          <Expand className="w-8 h-8" />
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
                <div className="absolute bottom-4 left-4 p-4 rounded-xl bg-black/60 backdrop-blur-md max-w-[80%] md:max-w-md border border-white/10 shadow-2xl">
                  <p className="text-primary font-bold text-[10px] uppercase tracking-widest mb-1">
                    {selectedImage.category.replace("-", " ")}
                  </p>
                  <p className="text-sm font-medium text-white break-words">
                    {selectedImage.title}
                  </p>
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
