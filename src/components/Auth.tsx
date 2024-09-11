'use client'

import { supabase } from "../lib/supabase"
import { useState } from "react"

export default function Auth() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [authMode, setAuthMode] = useState<'login' | 'signup'>('login');

    const handleAuth = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            if (authMode === 'login') {
                const { error } = await supabase.auth.signInWithPassword({
                    email,
                    password,
                });
                if (error) throw error;
                alert('ログイン完了');
            } else {
                const { error } = await supabase.auth.signUp({
                    email,
                    password,
                });
                if (error) throw error;
                alert('登録完了。確認メールを確認してください。');
            }
        } catch (error: any) {
            alert(error.message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="auth-form">
            <h2>{authMode === 'login' ? 'ログイン' : '新規登録'}</h2>
            <form onSubmit={handleAuth}>
                <div>
                    <label htmlFor="email">メールアドレス</label>
                    <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password">パスワード</label>
                    <input
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" disabled={isLoading}>
                    {isLoading ? '処理中...' : (authMode === 'login' ? 'ログイン' : '登録')}
                </button>
            </form>
            <p>
                {authMode === 'login' ? (
                    <>
                        アカウントをお持ちでない方は
                        <button onClick={() => setAuthMode('signup')}>こちら</button>
                    </>
                ) : (
                    <>
                        既にアカウントをお持ちの方は
                        <button onClick={() => setAuthMode('login')}>こちら</button>
                    </>
                )}
            </p>
        </div>
    );
}