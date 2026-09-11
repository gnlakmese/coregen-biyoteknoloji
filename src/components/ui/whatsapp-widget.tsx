"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasOpened, setHasOpened] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!hasOpened) {
        setIsOpen(true);
        setHasOpened(true);
      }
    }, 1000);
    return () => clearTimeout(timer);
  }, [hasOpened]);

  const phoneNumber = "905522207270";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=Merhaba,%20bilgi%20almak%20istiyorum.`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="mb-4 w-[320px] overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-black/5"
          >
            <div className="flex items-center justify-between bg-[#075e54] p-4 text-white">
              <div className="flex items-center gap-3">
                <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
                  <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564c.173.087.289.129.332.202.043.073.043.423-.101.827z"/>
                  </svg>
                  <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-[#075e54] bg-[#25d366]"></span>
                </div>
                <div>
                  <h3 className="font-bold leading-none">CoreGen</h3>
                  <p className="mt-1 text-xs text-white/90">Çevrimiçi</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="rounded-full p-1 transition-colors hover:bg-white/20">
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="bg-[#efeae2] p-4 pb-6">
              <div className="relative mb-2 w-[90%] rounded-lg rounded-tl-none bg-white p-3 text-[15px] leading-relaxed text-gray-800 shadow-sm">
                Merhaba! Size nasıl yardımcı olabiliriz?
                <span className="mt-1 block text-right text-[11px] text-gray-400">10:34</span>
                <div className="absolute -left-2 top-0 h-0 w-0 border-r-[10px] border-t-[10px] border-r-white border-t-transparent"></div>
              </div>
            </div>
            <div className="bg-white p-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-full bg-[#25d366] py-3 text-[15px] font-bold text-white transition-transform hover:scale-[1.02] active:scale-[0.98]"
              >
                Sohbeti Başlat
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-[0_4px_20px_rgba(37,211,102,0.4)] transition-transform hover:scale-110"
      >
        {isOpen ? <X className="h-6 w-6" /> : <svg viewBox="0 0 24 24" className="h-8 w-8 fill-current" xmlns="http://www.w3.org/2000/svg"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564c.173.087.289.129.332.202.043.073.043.423-.101.827z"/></svg>}
        {!isOpen && (
          <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full border-2 border-[#050515] bg-red-500 text-[10px] font-bold">
            1
          </span>
        )}
      </button>
    </div>
  );
}