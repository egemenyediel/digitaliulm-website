import { useState } from 'react';
import { Lock, User } from 'lucide-react';

interface AdminLoginProps {
  onLogin: () => void;
}

export function AdminLogin({ onLogin }: AdminLoginProps) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (username === 'ege' && password === 'ege') {
      onLogin();
    } else {
      setError('Kullanıcı adı veya şifre hatalı!');
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
          {/* Logo */}
          <div className="text-center mb-8">
            <div className="text-3xl tracking-tight mb-2">
              <span className="text-[#0EA5E9] font-[600]">digital</span>
              <span className="text-white font-[600]">iulm</span>
              <span className="text-[#0EA5E9] font-[600]">.de</span>
            </div>
            <p className="text-white/60 text-sm">Admin Panel</p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="bg-red-500/10 border border-red-500/30 text-red-400 px-4 py-3 rounded-lg text-sm">
                {error}
              </div>
            )}

            <div>
              <label className="block text-white/80 text-sm mb-2">Kullanıcı Adı</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-lg pl-10 pr-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-[#0EA5E9]/50 transition-colors"
                  placeholder="Kullanıcı adınızı girin"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-white/80 text-sm mb-2">Şifre</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-lg pl-10 pr-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-[#0EA5E9]/50 transition-colors"
                  placeholder="Şifrenizi girin"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-[#0EA5E9] text-white py-3 rounded-lg font-semibold hover:bg-[#0EA5E9]/90 transition-colors"
            >
              Giriş Yap
            </button>
          </form>

          <div className="mt-6 text-center">
            <a href="/" className="text-white/60 hover:text-white text-sm transition-colors">
              ← Ana Sayfaya Dön
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
