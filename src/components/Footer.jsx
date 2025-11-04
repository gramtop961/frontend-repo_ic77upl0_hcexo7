export default function Footer() {
  return (
    <footer id="contact" className="border-t border-black/5 bg-white py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="h-6 w-6 rounded-md bg-gradient-to-tr from-indigo-500 via-purple-500 to-cyan-400" />
          <span className="text-sm font-medium text-slate-800">Nexora AU</span>
        </div>
        <p className="text-xs text-slate-500">© {new Date().getFullYear()} Nexora. All rights reserved.</p>
        <div className="flex items-center gap-4 text-sm">
          <a href="#" className="text-slate-600 hover:text-slate-900">Privacy</a>
          <a href="#" className="text-slate-600 hover:text-slate-900">Terms</a>
          <a href="mailto:hello@nexora.au" className="text-slate-600 hover:text-slate-900">hello@nexora.au</a>
        </div>
      </div>
    </footer>
  );
}
