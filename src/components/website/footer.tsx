import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-rmf-navy text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-10 w-10 rounded-full bg-rmf-gold flex items-center justify-center">
                <span className="text-rmf-navy font-heading font-bold text-lg">R</span>
              </div>
              <span className="font-heading text-xl font-bold">RMF</span>
            </div>
            <p className="text-sm text-gray-400">
              Advancing regenerative medicine through collaboration, education, and innovation.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-rmf-gold">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/#about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/#membership" className="hover:text-white transition-colors">Membership</Link></li>
              <li><Link href="/#board" className="hover:text-white transition-colors">Board Members</Link></li>
              <li><Link href="/#news" className="hover:text-white transition-colors">News</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-rmf-gold">Members</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/login" className="hover:text-white transition-colors">Sign In</Link></li>
              <li><Link href="/register" className="hover:text-white transition-colors">Apply for Membership</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-rmf-gold">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Dubai, United Arab Emirates</li>
              <li>info@thermf.org</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Regenerative Medicine Federation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
