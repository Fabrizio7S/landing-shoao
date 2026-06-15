
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        
        <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">          
          <p className="text-sm text-gray-500 font-medium">
            &copy; {currentYear} Shoao
          </p>
        </div>

        <div className="flex items-center gap-6">
          {/* YouTube */}
          <a
            href="https://www.youtube.com/@xShoao"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[#FF0000] transition-colors duration-200"
            aria-label="YouTube"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.518 3.545 12 3.545 12 3.545s-7.518 0-9.388.508a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.87.508 9.388.508 9.388.508s7.518 0 9.388-.508a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
          </a>

          {/* Twitch */}
          <a
            href="https://www.twitch.tv/xshoao"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[#9146FF] transition-colors duration-200"
            aria-label="Twitch"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z"/>
            </svg>
          </a>

          {/* Kick */}
          <a
            href="https://kick.com/shoao"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[#53FC18] transition-colors duration-200"
            aria-label="Kick"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path d="M3 3h4v18H3V3zm4 6h4v3H7V9zm4-3h4v3h-4V6zm4-3h5v3h-5V3zm-8 9h4v3H7v-3zm4 3h4v3h-4v-3zm4 3h5v3h-5v-3z"/>
            </svg>
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
