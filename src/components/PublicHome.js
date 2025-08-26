'use client';

import { Church, Users, BookOpen, Calendar, LogIn } from 'lucide-react';

export function PublicHome({ onLoginClick }) {
    return (
        <div className="min-h-screen">
            {/* Header */}
            <header className="bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-6">
                        <div className="flex items-center">
                            <Church className="h-8 w-8 text-blue-600 mr-3" />
                            <h1 className="text-2xl font-bold text-gray-900">Crisma Sousas</h1>
                        </div>
                        <button
                            onClick={onLoginClick}
                            className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                        >
                            <LogIn className="h-4 w-4 mr-2" />
                            Entrar
                        </button>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 relative overflow-hidden">
                {/* Background decoration */}
                <div className="absolute inset-0 bg-blue-600 opacity-90"></div>
                <div className="absolute inset-0">
                    <div className="absolute top-0 left-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-x-32 -translate-y-32"></div>
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full translate-x-48 translate-y-48"></div>
                </div>
                
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Bem-vindos à Crisma da Paróquia de Sousas
                    </h2>
                    <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
                        Acompanhe sua jornada de fé, veja suas informações, frequência e participe ativamente da sua preparação para receber o Sacramento da Confirmação.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            onClick={onLoginClick}
                            className="px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
                        >
                            Acessar Minha Conta
                        </button>
                        <button className="px-8 py-4 border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200">
                            Saiba Mais
                        </button>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h3 className="text-3xl font-bold text-gray-900 mb-4">O que oferecemos</h3>
                        <p className="text-lg text-gray-600">Ferramentas para acompanhar e facilitar sua caminhada de fé</p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
                            <div className="bg-blue-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                                <Users className="h-8 w-8 text-white" />
                            </div>
                            <h4 className="text-xl font-bold text-gray-900 mb-4">Turmas Organizadas</h4>
                            <p className="text-gray-600 leading-relaxed">Visualize as diferentes turmas de crisma e seus participantes em um ambiente organizado e acolhedor</p>
                        </div>
                        
                        <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 border border-green-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
                            <div className="bg-green-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                                <Calendar className="h-8 w-8 text-white" />
                            </div>
                            <h4 className="text-xl font-bold text-gray-900 mb-4">Controle de Presença</h4>
                            <p className="text-gray-600 leading-relaxed">Acompanhe sua frequência e veja suas faltas de forma clara e transparente</p>
                        </div>
                        
                        <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
                            <div className="bg-purple-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                                <BookOpen className="h-8 w-8 text-white" />
                            </div>
                            <h4 className="text-xl font-bold text-gray-900 mb-4">Perfil Personalizado</h4>
                            <p className="text-gray-600 leading-relaxed">Acesse suas informações pessoais e acompanhe seu progresso espiritual</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h3 className="text-3xl font-bold text-gray-900 mb-6">Sobre a Crisma</h3>
                            <p className="text-lg text-gray-600 mb-4">
                                A Confirmação ou Crisma é um dos sete sacramentos da Igreja Católica, pelo qual o batizado recebe o Espírito Santo e se torna soldado de Cristo.
                            </p>
                            <p className="text-lg text-gray-600 mb-6">
                                Em nossa paróquia, preparamos nossos jovens com carinho e dedicação para este momento especial de suas vidas espirituais.
                            </p>
                            <button
                                onClick={onLoginClick}
                                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                            >
                                Faça seu login
                            </button>
                        </div>
                        <div className="bg-white p-8 rounded-lg shadow-lg">
                            <h4 className="text-2xl font-semibold text-gray-900 mb-4">Informações importantes</h4>
                            <ul className="space-y-3 text-gray-600">
                                <li className="flex items-start">
                                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                    Encontros semanais às quartas-feiras
                                </li>
                                <li className="flex items-start">
                                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                    Duração do curso: 2 anos
                                </li>
                                <li className="flex items-start">
                                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                    Idade mínima: 14 anos
                                </li>
                                <li className="flex items-start">
                                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                    Participação em retiros espirituais
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div>
                            <div className="flex items-center mb-4">
                                <Church className="h-6 w-6 mr-2" />
                                <h5 className="text-lg font-semibold">Paróquia de Sousas</h5>
                            </div>
                            <p className="text-gray-400">
                                Formando jovens na fé e preparando-os para uma vida cristã plena.
                            </p>
                        </div>
                        
                        <div>
                            <h5 className="text-lg font-semibold mb-4">Contato</h5>
                            <p className="text-gray-400 mb-2">📍 Endereço da Paróquia</p>
                            <p className="text-gray-400 mb-2">📞 (19) 0000-0000</p>
                            <p className="text-gray-400">✉️ paroquia@sousas.com.br</p>
                        </div>
                        
                        <div>
                            <h5 className="text-lg font-semibold mb-4">Horários</h5>
                            <p className="text-gray-400 mb-2">Crisma: Quartas 19h30</p>
                            <p className="text-gray-400 mb-2">Missas: Consulte os horários</p>
                            <p className="text-gray-400">Atendimento: Seg-Sex 8h-17h</p>
                        </div>
                    </div>
                    
                    <div className="border-t border-gray-800 mt-8 pt-8 text-center">
                        <p className="text-gray-400">
                            © 2024 Paróquia de Sousas. Todos os direitos reservados.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
