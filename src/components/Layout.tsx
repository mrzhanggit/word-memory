import { Link, NavLink, Outlet } from 'react-router';
import { BookOpenText, Brain, Home, Layers, LetterText, BarChart3, Swords } from 'lucide-react';
import { ProgressContext, useProgress } from '../hooks/progressContext';

const nav = [
  { to: '/', label: '方法', icon: Home, end: true },
  { to: '/families', label: '词族', icon: Layers },
  { to: '/study', label: '学习', icon: BookOpenText },
  { to: '/quiz', label: '测验', icon: Swords },
  { to: '/letters', label: '字母馆', icon: LetterText },
  { to: '/stats', label: '统计', icon: BarChart3 },
];

export default function Layout() {
  const progressApi = useProgress();
  return (
    <ProgressContext.Provider value={progressApi}>
      <div className="min-h-screen flex flex-col">
        <header className="sticky top-0 z-40 bg-[#faf5ea]/95 backdrop-blur border-b-2 border-[#2e2a26]">
          <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between gap-3">
            <Link to="/" className="flex items-center gap-2 shrink-0">
              <span className="w-9 h-9 rounded-xl bg-[#e15a3b] ink-border hard-shadow-sm flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </span>
              <span className="font-black text-lg tracking-tight hidden sm:block">
                图像记忆<span className="text-[#e15a3b]">单词</span>
              </span>
            </Link>
            <nav className="flex items-center gap-1 overflow-x-auto">
              {nav.map((n) => (
                <NavLink
                  key={n.to}
                  to={n.to}
                  end={n.end}
                  className={({ isActive }) =>
                    `flex items-center gap-1.5 px-3 py-2 rounded-xl text-sm font-bold whitespace-nowrap transition-all ${
                      isActive
                        ? 'bg-[#2e2a26] text-[#faf5ea]'
                        : 'text-[#2e2a26]/70 hover:bg-[#2e2a26]/8'
                    }`
                  }
                >
                  <n.icon className="w-4 h-4" />
                  {n.label}
                </NavLink>
              ))}
            </nav>
          </div>
        </header>
        <main className="flex-1">
          <Outlet />
        </main>
        <footer className="border-t-2 border-[#2e2a26]/15 py-6 text-center text-xs text-[#2e2a26]/50">
          图像是最好的记忆体 · 方法源自《图像英文记忆法》
        </footer>
      </div>
    </ProgressContext.Provider>
  );
}
