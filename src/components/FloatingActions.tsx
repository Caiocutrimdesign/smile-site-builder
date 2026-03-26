import { MessageCircle, Instagram } from "lucide-react";
import { motion } from "framer-motion";

const FloatingActions = () => (
  <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-4">
    <motion.a
      whileHover={{ scale: 1.1, x: -5 }}
      whileTap={{ scale: 0.9 }}
      href="https://instagram.com/drbergsonlindoso"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-white p-4 rounded-2xl shadow-[0_10px_30px_rgba(221,42,123,0.3)] flex items-center justify-center group relative"
      aria-label="Instagram"
    >
      <Instagram className="w-7 h-7" />
      <span className="absolute right-full mr-4 bg-white text-black px-4 py-2 rounded-xl text-xs font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-black/5 shadow-xl">
        Instagram
      </span>
    </motion.a>

    <motion.a
      whileHover={{ scale: 1.1, x: -5 }}
      whileTap={{ scale: 0.9 }}
      href="https://wa.me/5598984154556"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-[#25D366] text-white p-4 rounded-2xl shadow-[0_10px_30px_rgba(37,211,102,0.3)] flex items-center justify-center group relative"
      aria-label="Agendar pelo WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
      <span className="absolute right-full mr-4 bg-white text-black px-4 py-2 rounded-xl text-xs font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-black/5 shadow-xl">
        WhatsApp
      </span>
    </motion.a>
  </div>
);

export default FloatingActions;
