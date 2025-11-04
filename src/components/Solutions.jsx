import { CheckCircle2 } from 'lucide-react';

const solutions = [
  {
    name: 'Product Teams',
    bullets: [
      'Plan sprints with AI-prioritized backlogs',
      'Collaborative PRDs and design reviews',
      'Automated release notes',
    ],
  },
  {
    name: 'Operations',
    bullets: [
      'Playbooks with real-time status tracking',
      'Incident response workflows',
      'Compliance-ready audit trails',
    ],
  },
  {
    name: 'Go-to-Market',
    bullets: [
      'Campaign planning with shared calendars',
      'Lead routing and pipeline visibility',
      'Performance insights by channel',
    ],
  },
];

export default function Solutions() {
  return (
    <section id="solutions" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">Solutions for every team</h2>
            <p className="mt-3 text-slate-600">Start with templates tailored to your function and customize endlessly.</p>
          </div>
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
            {solutions.map((s) => (
              <div key={s.name} className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
                <h3 className="font-semibold text-slate-900">{s.name}</h3>
                <ul className="mt-3 space-y-2">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-slate-600">
                      <CheckCircle2 className="h-4 w-4 text-emerald-500 mt-0.5" /> {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
