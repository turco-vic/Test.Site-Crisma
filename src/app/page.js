'use client';

import { useState } from 'react';
import { LoginForm } from '@/components/LoginForm';
import { PublicHome } from '@/components/PublicHome';

export default function Home() {
    const [showLogin, setShowLogin] = useState(false);

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
            {showLogin ? (
                <LoginForm onBack={() => setShowLogin(false)} />
            ) : (
                <PublicHome onLoginClick={() => setShowLogin(true)} />
            )}
        </div>
    );
}
