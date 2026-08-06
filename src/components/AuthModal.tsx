import { useState, type FormEvent } from 'react';
import { useAuth } from '../hooks/useAuth';

export default function AuthModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { signIn, signUp } = useAuth();
  const [mode, setMode] = useState<'signin' | 'signup'>('signin');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState<{ type: 'error' | 'info'; text: string } | null>(null);
  const [busy, setBusy] = useState(false);

  if (!open) return null;

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    setBusy(true);
    setMsg(null);
    const res =
      mode === 'signin'
        ? await signIn(email.trim(), password)
        : await signUp(email.trim(), password);
    setBusy(false);
    if (res.error) {
      setMsg({ type: 'error', text: res.error });
      return;
    }
    if (res.info) {
      setMsg({ type: 'info', text: res.info });
      return;
    }
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
      onClick={onClose}
    >
      <div
        className="w-full max-w-sm rounded-2xl bg-[#faf5ea] ink-border hard-shadow p-5"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="font-black text-xl mb-1">{mode === 'signin' ? '登录并同步' : '注册账号'}</h2>
        <p className="text-sm text-[#2e2a26]/60 mb-4">
          登录后学习进度会自动在多设备间同步
        </p>
        <form onSubmit={submit} className="space-y-3">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="邮箱"
            className="w-full rounded-xl border-2 border-[#2e2a26] px-3 py-2 bg-white outline-none focus:bg-[#fffdf7]"
          />
          <input
            type="password"
            required
            minLength={6}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="密码（至少 6 位）"
            className="w-full rounded-xl border-2 border-[#2e2a26] px-3 py-2 bg-white outline-none focus:bg-[#fffdf7]"
          />
          {msg && (
            <p className={`text-sm ${msg.type === 'error' ? 'text-red-600' : 'text-[#2e2a26]/70'}`}>
              {msg.text}
            </p>
          )}
          <button
            type="submit"
            disabled={busy}
            className="w-full rounded-xl bg-[#e15a3b] text-white font-bold py-2 disabled:opacity-50"
          >
            {busy ? '处理中…' : mode === 'signin' ? '登录' : '注册'}
          </button>
        </form>
        <button
          onClick={() => {
            setMode(mode === 'signin' ? 'signup' : 'signin');
            setMsg(null);
          }}
          className="mt-3 text-sm text-[#e15a3b] font-bold w-full text-center"
        >
          {mode === 'signin' ? '没有账号？去注册' : '已有账号？去登录'}
        </button>
        <button onClick={onClose} className="mt-2 text-xs text-[#2e2a26]/40 w-full text-center">
          取消
        </button>
      </div>
    </div>
  );
}
