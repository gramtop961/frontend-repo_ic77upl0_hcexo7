import { Rocket } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-28 pb-20 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_0%,rgba(99,102,241,0.25),rgba(14,165,233,0.08),transparent_70%)]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700">
              <Rocket className="h-4 w-4" /> Introducing Nexora AU
            </span>
            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900">
              Accelerate your workflows with an AI-native platform
            </h1>
            <p className="mt-5 max-w-2xl text-slate-600 text-lg">
              Nexora helps Australian teams plan, build, and ship faster. Unified tools, real-time insight, and AI assistance — all in one sleek workspace.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <a href="#get-started" className="inline-flex items-center rounded-lg bg-slate-900 px-5 py-3 text-white font-medium shadow-sm hover:bg-slate-800">
                Get Started
              </a>
              <a href="#features" className="inline-flex items-center rounded-lg border border-slate-300 px-5 py-3 text-slate-700 font-medium hover:bg-white">
                Explore Features
              </a>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl border border-black/5 bg-white shadow-xl">
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-tr from-indigo-500/20 via-fuchsia-500/20 to-cyan-400/20 blur-2xl" />
              <img
                src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1800&auto=format&fit=crop"
                alt="Nexora dashboard preview"
                className="relative rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
