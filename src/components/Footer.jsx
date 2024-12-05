export default function Footer() {
    return (
  
        <footer className="bg-customLightPink text-white py-10">
            <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-between items-start">
                
                {/* Contact Section */}
                <div className="flex flex-col items-center md:items-start mb-8 md:mb-0 w-full md:w-1/2">
                <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
                <div className="flex flex-col gap-4">
                    <div>
                    <a href="#" className="hover:underline flex items-center gap-3">
                            <img src="/images/email.png" alt="Mail icon" className="w-8 h-8" />
                            <span>inquiry@torontocupcake.com</span>
                        </a>
                    </div>
                    <div className="flex items-center gap-3">
                    <img src="/images/phone.svg" alt="Phone icon" className="w-8 h-8" />
                    <div>
                        <p>North America: +1-877-334-9468</p>
                        <p>Local Toronto and GTA: 647-478-9464</p>
                        <p>Everywhere Else: +001-647-478-9464</p>
                    </div>
                    </div>
                    <div >
                        <a href="#"className="hover:underline flex items-center gap-3">
                            <img src="/images/instagram.png" alt="Instagram icon" className="w-8 h-8" />
                            <span>Follow us on Instagram</span>
                        </a>
                    </div>
                </div>
                </div>
        
                {/* Links Section */}
                <div className="flex flex-col items-center mt-8 md:items-start mb-8 md:mb-0 w-full md:w-1/4">
                <nav className="flex flex-col gap-2">
                    <a href="#" className="hover:underline text-xl">FAQ</a>
                    <a href="#" className="hover:underline text-xl">Locations</a>
                    <a href="#" className="hover:underline text-xl">Order Online</a>
                    <a href="#" className="hover:underline text-xl">Delivery</a>
                </nav>
                </div>
        
                {/* Logo Section */}
                <div className="flex justify-center md:justify-end items-center w-full md:w-1/4">
                <img src="/images/hires-logo.png" alt="Toronto Cupcake Logo" style={{ width: '200px', height: '200' }} />
                </div>
            </div>
        
            {/* Footer Bottom */}
            <div className="mt-8 text-center">
                <span>© {new Date().getFullYear()} Toronto Cupcake. All rights reserved.</span>
            </div>
            </div>
      </footer>
      
  );
}