
import React from "react";

export default function Footer() {
    const date = new Date();
    const year = date.getFullYear();
  return (
    <div>
      <footer className="footer footer-center p-4 bg-black mb-0">
        <aside>
          <p className="text-xs md:text-md">Copyright © {year} - All right reserved by Divyam 😤</p>
          <p className="text-xs md:text-md">Made with 😎 by Divyam</p>
        </aside>
      </footer>
    </div>
  );
}
