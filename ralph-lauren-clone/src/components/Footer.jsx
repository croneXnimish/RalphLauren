export default function Footer() {
  return (
    <footer className="bg-white text-[#1a1a1a] text-xs border-t">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About */}
        <div>
          <h4 className="font-semibold text-sm mb-3">ABOUT</h4>
          <ul className="space-y-2">
            <li>About Us</li>
            <li>Careers</li>
            <li>World of RL</li>
            <li>Protecting Our Brands</li>
            <li>Privacy</li>
            <li>Terms Of Use</li>
            <li>Terms Of Sale</li>
            <li>Imprint</li>
            <li>Cookies</li>
            <li>Manage Cookie Settings</li>
            <li>Accessibility Statement</li>
          </ul>
        </div>

        {/* Account */}
        <div>
          <h4 className="font-semibold text-sm mb-3">ACCOUNT</h4>
          <ul className="space-y-2">
            <li>My Account</li>
            <li>Check Order</li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h4 className="font-semibold text-sm mb-3">CUSTOMER SERVICE</h4>
          <ul className="space-y-2">
            <li>Help</li>
            <li>Shipping</li>
            <li>Free Online Returns</li>
            <li>Operating Guidelines</li>
            <li>Sitemap</li>
          </ul>
        </div>

        {/* Newsletter Signup */}
        <div>
          <h4 className="font-semibold text-sm mb-3 uppercase">
            Sign up to receive the latest news, special offers and/or exclusive events
          </h4>
          <p className="text-[11px] leading-5 mb-3">
            By signing up, you consent to the use of tracking technologies for personalisation and analytics.
          </p>
          <div className="flex mb-2">
            <input
              type="email"
              placeholder="ENTER EMAIL ADDRESS"
              className="border px-3 py-2 w-full text-xs focus:outline-none"
            />
            <button className="bg-black text-white text-xs px-4">SUBMIT</button>
          </div>
          <p className="text-[10px] text-gray-600 mt-2">
            You may unsubscribe at any time by clicking on the unsubscribe link in each e-mail.
            For more information, please read Ralph Lauren Europe Sàrl’s Privacy Policy.
          </p>
        </div>
      </div>

      {/* Socials */}
      <div className="border-t py-4">
        <div className="flex justify-center gap-5 mb-2">
          <span>📷</span>
          <span>📘</span>
          <span>▶️</span>
          <span>🛍️</span>
          <span>📌</span>
        </div>
        <p className="text-center text-[11px]">RALPH LAUREN PINTEREST</p>
      </div>

      {/* Bottom Copyright */}
      <div className="text-center text-[10px] py-4 border-t">
        © COPYRIGHT {new Date().getFullYear()} RALPH LAUREN MEDIA LLC.
      </div>
    </footer>
  );
}
