import logo from "../../assets/shoao_v1.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Left Side: Logo & Copyright */}
        <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <img
            src={logo}
            alt="Shoao"
            className="h-8 w-auto object-contain"
          />
          <p className="text-sm text-gray-500">© {currentYear} Shoao. Todos los derechos reservados.</p>
        </div>

        {/* Right Side: Social Networks */}
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
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 sm:w-6 sm:h-6">
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
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 sm:w-6 sm:h-6">
              <path d="M3 3h4v18H3V3zm4 6h4v3H7V9zm4-3h4v3h-4V6zm4-3h5v3h-5V3zm-8 9h4v3H7v-3zm4 3h4v3h-4v-3zm4 3h5v3h-5v-3z"/>
            </svg>
          </a>

          {/* Discord */}
          <a
            href="https://discord.gg/fEQrFcTKBz"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[#5865F2] transition-colors duration-200"
            aria-label="Discord"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 sm:w-6 sm:h-6">
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.094 13.094 0 0 1-1.873-.894.077.077 0 0 1-.008-.128c.126-.093.252-.19.372-.287a.075.075 0 0 1 .077-.011c3.92 1.793 8.18 1.793 12.061 0a.073.073 0 0 1 .078.009c.12.099.246.195.373.289a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.156-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.156 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.156-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.156 2.418z"/>
            </svg>
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
