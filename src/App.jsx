import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <section id="pricing" className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Simple, transparent pricing</h2>
              <p className="mt-4 text-slate-600">Start free and upgrade as you grow. No hidden fees.</p>
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold">Starter</h3>
                <p className="mt-2 text-sm text-slate-600">Best for individuals</p>
                <p className="mt-6 text-4xl font-bold">$0<span className="text-base font-medium text-slate-500">/mo</span></p>
                <ul className="mt-6 space-y-2 text-sm text-slate-600">
                  <li>• Unlimited projects</li>
                  <li>• Community support</li>
                  <li>• Basic analytics</li>
                </ul>
                <a href="#get-started" className="mt-6 inline-flex w-full justify-center rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-medium text-white hover:bg-slate-800">Get started</a>
              </div>

              <div className="relative rounded-2xl border-2 border-indigo-500 bg-gradient-to-b from-indigo-50 to-white p-6 shadow-md">
                <div className="absolute -top-3 left-6 rounded-full bg-indigo-600 px-3 py-1 text-xs font-medium text-white">Most Popular</div>
                <h3 className="text-lg font-semibold">Pro</h3>
                <p className="mt-2 text-sm text-slate-600">For growing teams</p>
                <p className="mt-6 text-4xl font-bold">$29<span className="text-base font-medium text-slate-500">/mo</span></p>
                <ul className="mt-6 space-y-2 text-sm text-slate-600">
                  <li>• Everything in Starter</li>
                  <li>• Collaboration tools</li>
                  <li>• Advanced analytics</li>
                </ul>
                <a href="#get-started" className="mt-6 inline-flex w-full justify-center rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-indigo-700">Upgrade</a>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold">Enterprise</h3>
                <p className="mt-2 text-sm text-slate-600">For large orgs</p>
                <p className="mt-6 text-4xl font-bold">Custom</p>
                <ul className="mt-6 space-y-2 text-sm text-slate-600">
                  <li>• SSO/SAML</li>
                  <li>• Dedicated support</li>
                  <li>• AU data residency</li>
                </ul>
                <a href="#contact" className="mt-6 inline-flex w-full justify-center rounded-lg border border-slate-300 px-4 py-2.5 text-sm font-medium text-slate-900 hover:bg-slate-50">Contact sales</a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
