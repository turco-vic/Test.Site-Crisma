'use client';

import { useState } from 'react';
import { ArrowLeft, User, Lock, Eye, EyeOff } from 'lucide-react';
import { AdminDashboard } from './AdminDashboard';
import { StudentDashboard } from './StudentDashboard';

export function LoginForm({ onBack }) {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        userType: 'student'
    });
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [user, setUser] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        // Simulação de autenticação (em produção, conectar com backend)
        setTimeout(() => {
            if (formData.userType === 'admin' && formData.email === 'admin@sousas.com' && formData.password === 'admin123') {
                setUser({
                    id: 1,
                    name: 'Administrador',
                    email: 'admin@sousas.com',
                    type: 'admin'
                });
            } else if (formData.userType === 'student') {
                // Dados simulados de estudante
                const studentData = {
                    id: 2,
                    name: 'João Silva',
                    email: formData.email,
                    type: 'student',
                    class: 'Turma 2024A',
                    absences: 3,
                    totalClasses: 25,
                    nextClass: '2024-08-28',
                    documents: [
                        { name: 'Certidão de Batismo', status: 'pending' },
                        { name: 'RG', status: 'approved' },
                        { name: 'Foto 3x4', status: 'approved' }
                    ]
                };
                setUser(studentData);
            }
            setIsLoading(false);
        }, 1000);
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    if (user) {
        return user.type === 'admin' ? 
            <AdminDashboard user={user} onLogout={() => setUser(null)} /> :
            <StudentDashboard user={user} onLogout={() => setUser(null)} />;
    }

    return (
        <div className="min-h-screen flex items-center justify-center p-4">
            <div className="max-w-md w-full bg-white rounded-lg shadow-xl p-8">
                <button
                    onClick={onBack}
                    className="flex items-center text-gray-600 hover:text-gray-800 mb-6"
                >
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Voltar
                </button>

                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-gray-900">Entrar</h2>
                    <p className="text-gray-600 mt-2">Acesse sua conta da Crisma Sousas</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Tipo de usuário */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Tipo de usuário
                        </label>
                        <div className="grid grid-cols-2 gap-2">
                            <button
                                type="button"
                                onClick={() => setFormData({...formData, userType: 'student'})}
                                className={`p-3 rounded-lg border text-sm font-medium transition-colors ${
                                    formData.userType === 'student'
                                        ? 'bg-blue-50 border-blue-300 text-blue-700'
                                        : 'bg-gray-50 border-gray-300 text-gray-700 hover:bg-gray-100'
                                }`}
                            >
                                Crismando
                            </button>
                            <button
                                type="button"
                                onClick={() => setFormData({...formData, userType: 'admin'})}
                                className={`p-3 rounded-lg border text-sm font-medium transition-colors ${
                                    formData.userType === 'admin'
                                        ? 'bg-blue-50 border-blue-300 text-blue-700'
                                        : 'bg-gray-50 border-gray-300 text-gray-700 hover:bg-gray-100'
                                }`}
                            >
                                Administrador
                            </button>
                        </div>
                    </div>

                    {/* Email */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                            Email
                        </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <User className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                placeholder="seu.email@exemplo.com"
                            />
                        </div>
                    </div>

                    {/* Password */}
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                            Senha
                        </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Lock className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                                id="password"
                                name="password"
                                type={showPassword ? 'text' : 'password'}
                                required
                                value={formData.password}
                                onChange={handleChange}
                                className="block w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                placeholder="Digite sua senha"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                            >
                                {showPassword ? (
                                    <EyeOff className="h-5 w-5 text-gray-400" />
                                ) : (
                                    <Eye className="h-5 w-5 text-gray-400" />
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Credenciais de teste */}
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                        <h4 className="text-sm font-medium text-yellow-800 mb-2">Credenciais de teste:</h4>
                        <div className="text-xs text-yellow-700 space-y-1">
                            <p><strong>Admin:</strong> admin@sousas.com / admin123</p>
                            <p><strong>Crismando:</strong> qualquer email / qualquer senha</p>
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isLoading ? 'Entrando...' : 'Entrar'}
                    </button>
                </form>

                <div className="mt-6 text-center">
                    <a href="#" className="text-sm text-blue-600 hover:text-blue-500">
                        Esqueceu sua senha?
                    </a>
                </div>
            </div>
        </div>
    );
}
