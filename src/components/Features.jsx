import { Shield, Zap, Users, LineChart } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'AI Acceleration',
    desc: 'Automate routine work with smart suggestions and action shortcuts.',
  },
  {
    icon: Users,
    title: 'Team Presence',
    desc: 'Real-time collaboration with roles, mentions, and activity streams.',
  },
  {
    icon: LineChart,
    title: 'Insights & KPIs',
    desc: 'Track what matters with live dashboards and custom metrics.',
  },
  {
    icon: Shield,
    title: 'AU-Grade Security',
    desc: 'Local data residency options and enterprise-grade access controls.',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">What makes Nexora different</h2>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
            Built for modern teams that need speed, clarity, and trusted security.
          </p>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-black/5 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600 group-hover:bg-indigo-100">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
