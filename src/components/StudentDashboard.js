'use client';

import { useState } from 'react';
import { 
    User, 
    Calendar, 
    FileText, 
    LogOut, 
    CheckCircle, 
    XCircle, 
    Clock,
    Users,
    Book,
    AlertCircle,
    Download
} from 'lucide-react';

export function StudentDashboard({ user, onLogout }) {
    const [activeTab, setActiveTab] = useState('profile');

    const attendanceData = [
        { date: '2024-08-07', status: 'present', topic: 'Os Sacramentos da Igreja' },
        { date: '2024-08-14', status: 'present', topic: 'A Confirmação na História' },
        { date: '2024-08-21', status: 'absent', topic: 'Os Dons do Espírito Santo' },
        { date: '2024-08-28', status: 'present', topic: 'A Vida em Comunidade' },
        { date: '2024-09-04', status: 'present', topic: 'Testemunho Cristão' }
    ];

    const documents = [
        { 
            id: 1, 
            name: 'Certidão de Batismo', 
            status: 'pending', 
            required: true,
            description: 'Certidão atualizada (máximo 6 meses)',
            uploadedAt: null
        },
        { 
            id: 2, 
            name: 'RG (Cópia)', 
            status: 'approved', 
            required: true,
            description: 'Cópia legível do RG',
            uploadedAt: '2024-07-15'
        },
        { 
            id: 3, 
            name: 'Foto 3x4', 
            status: 'approved', 
            required: true,
            description: 'Foto recente, fundo branco',
            uploadedAt: '2024-07-15'
        },
        { 
            id: 4, 
            name: 'Comprovante de Residência', 
            status: 'rejected', 
            required: false,
            description: 'Conta de luz, água ou telefone (máximo 3 meses)',
            uploadedAt: '2024-07-20',
            rejectionReason: 'Documento muito antigo. Envie um mais recente.'
        }
    ];

    const classInfo = {
        name: 'Turma 2024A',
        instructor: 'Padre João',
        schedule: 'Quartas-feiras às 19h30',
        nextClass: '2024-08-28',
        nextTopic: 'A Moral Cristã',
        location: 'Sala 2 - Centro Pastoral'
    };

    const tabs = [
        { id: 'profile', name: 'Meu Perfil', icon: User },
        { id: 'attendance', name: 'Frequência', icon: Calendar },
        { id: 'documents', name: 'Documentos', icon: FileText },
        { id: 'class', name: 'Minha Turma', icon: Users }
    ];

    const getStatusColor = (status) => {
        switch (status) {
            case 'approved':
                return 'text-green-600 bg-green-100';
            case 'pending':
                return 'text-yellow-600 bg-yellow-100';
            case 'rejected':
                return 'text-red-600 bg-red-100';
            default:
                return 'text-gray-600 bg-gray-100';
        }
    };

    const getStatusIcon = (status) => {
        switch (status) {
            case 'approved':
                return <CheckCircle className="h-4 w-4" />;
            case 'pending':
                return <Clock className="h-4 w-4" />;
            case 'rejected':
                return <XCircle className="h-4 w-4" />;
            default:
                return <AlertCircle className="h-4 w-4" />;
        }
    };

    const getStatusText = (status) => {
        switch (status) {
            case 'approved':
                return 'Aprovado';
            case 'pending':
                return 'Pendente';
            case 'rejected':
                return 'Rejeitado';
            default:
                return 'Não enviado';
        }
    };

    const attendancePercentage = ((attendanceData.filter(a => a.status === 'present').length / attendanceData.length) * 100).toFixed(0);

    const renderProfile = () => (
        <div className="space-y-6">
            <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Meu Perfil</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <h3 className="text-lg font-medium text-gray-900 mb-4">Informações Pessoais</h3>
                        <dl className="space-y-3">
                            <div>
                                <dt className="text-sm font-medium text-gray-600">Nome Completo</dt>
                                <dd className="text-sm text-gray-900">{user.name}</dd>
                            </div>
                            <div>
                                <dt className="text-sm font-medium text-gray-600">Email</dt>
                                <dd className="text-sm text-gray-900">{user.email}</dd>
                            </div>
                            <div>
                                <dt className="text-sm font-medium text-gray-600">Turma</dt>
                                <dd className="text-sm text-gray-900">{user.class}</dd>
                            </div>
                            <div>
                                <dt className="text-sm font-medium text-gray-600">Data de Ingresso</dt>
                                <dd className="text-sm text-gray-900">Março 2024</dd>
                            </div>
                        </dl>
                    </div>
                    
                    <div>
                        <h3 className="text-lg font-medium text-gray-900 mb-4">Progresso</h3>
                        <div className="space-y-4">
                            <div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-600">Frequência</span>
                                    <span className="font-medium text-gray-900">{attendancePercentage}%</span>
                                </div>
                                <div className="mt-1 bg-gray-200 rounded-full h-2">
                                    <div 
                                        className="bg-blue-600 h-2 rounded-full" 
                                        style={{ width: `${attendancePercentage}%` }}
                                    ></div>
                                </div>
                            </div>
                            
                            <div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-600">Documentos Aprovados</span>
                                    <span className="font-medium text-gray-900">
                                        {documents.filter(d => d.status === 'approved').length}/{documents.filter(d => d.required).length}
                                    </span>
                                </div>
                                <div className="mt-1 bg-gray-200 rounded-full h-2">
                                    <div 
                                        className="bg-green-600 h-2 rounded-full" 
                                        style={{ 
                                            width: `${(documents.filter(d => d.status === 'approved').length / documents.filter(d => d.required).length) * 100}%` 
                                        }}
                                    ></div>
                                </div>
                            </div>
                            
                            <div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-600">Encontros Assistidos</span>
                                    <span className="font-medium text-gray-900">{attendanceData.filter(a => a.status === 'present').length}/{attendanceData.length}</span>
                                </div>
                                <div className="mt-1 bg-gray-200 rounded-full h-2">
                                    <div 
                                        className="bg-purple-600 h-2 rounded-full" 
                                        style={{ width: `${attendancePercentage}%` }}
                                    ></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Próxima Aula */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <div className="flex items-center">
                    <Book className="h-6 w-6 text-blue-600 mr-3" />
                    <div>
                        <h3 className="text-lg font-medium text-blue-900">Próximo Encontro</h3>
                        <p className="text-blue-700">{classInfo.nextTopic}</p>
                        <p className="text-sm text-blue-600">{classInfo.nextClass} - {classInfo.schedule}</p>
                    </div>
                </div>
            </div>
        </div>
    );

    const renderAttendance = () => (
        <div className="space-y-6">
            <div className="bg-white rounded-lg shadow p-6">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-gray-900">Controle de Frequência</h2>
                    <div className="text-right">
                        <p className="text-2xl font-bold text-blue-600">{attendancePercentage}%</p>
                        <p className="text-sm text-gray-600">Frequência Geral</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                        <div className="flex items-center">
                            <CheckCircle className="h-6 w-6 text-green-600 mr-2" />
                            <div>
                                <p className="text-2xl font-bold text-green-600">
                                    {attendanceData.filter(a => a.status === 'present').length}
                                </p>
                                <p className="text-sm text-green-700">Presenças</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                        <div className="flex items-center">
                            <XCircle className="h-6 w-6 text-red-600 mr-2" />
                            <div>
                                <p className="text-2xl font-bold text-red-600">
                                    {attendanceData.filter(a => a.status === 'absent').length}
                                </p>
                                <p className="text-sm text-red-700">Faltas</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                        <div className="flex items-center">
                            <Calendar className="h-6 w-6 text-gray-600 mr-2" />
                            <div>
                                <p className="text-2xl font-bold text-gray-600">{attendanceData.length}</p>
                                <p className="text-sm text-gray-700">Total de Aulas</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Data
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Tópico
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Status
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {attendanceData.map((attendance, index) => (
                                <tr key={index}>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                        {new Date(attendance.date).toLocaleDateString('pt-BR')}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                        {attendance.topic}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                            attendance.status === 'present' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                                        }`}>
                                            {attendance.status === 'present' ? (
                                                <>
                                                    <CheckCircle className="h-3 w-3 mr-1" />
                                                    Presente
                                                </>
                                            ) : (
                                                <>
                                                    <XCircle className="h-3 w-3 mr-1" />
                                                    Falta
                                                </>
                                            )}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );

    const renderDocuments = () => (
        <div className="space-y-6">
            <div className="bg-white rounded-lg shadow p-6">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-gray-900">Meus Documentos</h2>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center">
                        <FileText className="h-4 w-4 mr-2" />
                        Enviar Documento
                    </button>
                </div>

                <div className="space-y-4">
                    {documents.map((doc) => (
                        <div key={doc.id} className="border border-gray-200 rounded-lg p-4">
                            <div className="flex items-center justify-between mb-2">
                                <div className="flex items-center">
                                    <h3 className="text-lg font-medium text-gray-900">{doc.name}</h3>
                                    {doc.required && (
                                        <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                                            Obrigatório
                                        </span>
                                    )}
                                </div>
                                <div className="flex items-center">
                                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium mr-2 ${getStatusColor(doc.status)}`}>
                                        {getStatusIcon(doc.status)}
                                        <span className="ml-1">{getStatusText(doc.status)}</span>
                                    </span>
                                </div>
                            </div>
                            
                            <p className="text-sm text-gray-600 mb-2">{doc.description}</p>
                            
                            {doc.uploadedAt && (
                                <p className="text-xs text-gray-500 mb-2">
                                    Enviado em: {new Date(doc.uploadedAt).toLocaleDateString('pt-BR')}
                                </p>
                            )}
                            
                            {doc.status === 'rejected' && doc.rejectionReason && (
                                <div className="bg-red-50 border border-red-200 rounded p-3 mb-3">
                                    <p className="text-sm text-red-700">
                                        <strong>Motivo da rejeição:</strong> {doc.rejectionReason}
                                    </p>
                                </div>
                            )}
                            
                            <div className="flex space-x-2">
                                {doc.status === 'pending' || doc.status === 'rejected' ? (
                                    <button className="text-blue-600 hover:text-blue-900 text-sm font-medium">
                                        {doc.status === 'rejected' ? 'Reenviar' : 'Atualizar'}
                                    </button>
                                ) : doc.status === 'approved' ? (
                                    <button className="text-green-600 hover:text-green-900 text-sm font-medium flex items-center">
                                        <Download className="h-3 w-3 mr-1" />
                                        Baixar
                                    </button>
                                ) : (
                                    <button className="text-blue-600 hover:text-blue-900 text-sm font-medium">
                                        Enviar
                                    </button>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );

    const renderClass = () => (
        <div className="space-y-6">
            <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Informações da Turma</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <h3 className="text-lg font-medium text-gray-900 mb-4">Detalhes da Turma</h3>
                        <dl className="space-y-3">
                            <div>
                                <dt className="text-sm font-medium text-gray-600">Nome da Turma</dt>
                                <dd className="text-sm text-gray-900">{classInfo.name}</dd>
                            </div>
                            <div>
                                <dt className="text-sm font-medium text-gray-600">Instrutor</dt>
                                <dd className="text-sm text-gray-900">{classInfo.instructor}</dd>
                            </div>
                            <div>
                                <dt className="text-sm font-medium text-gray-600">Horário</dt>
                                <dd className="text-sm text-gray-900">{classInfo.schedule}</dd>
                            </div>
                            <div>
                                <dt className="text-sm font-medium text-gray-600">Local</dt>
                                <dd className="text-sm text-gray-900">{classInfo.location}</dd>
                            </div>
                        </dl>
                    </div>
                    
                    <div>
                        <h3 className="text-lg font-medium text-gray-900 mb-4">Próximos Encontros</h3>
                        <div className="space-y-3">
                            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                                <p className="text-sm font-medium text-blue-900">{classInfo.nextTopic}</p>
                                <p className="text-xs text-blue-600">{classInfo.nextClass}</p>
                            </div>
                            <div className="bg-gray-50 border border-gray-200 rounded-lg p-3">
                                <p className="text-sm font-medium text-gray-700">A Oração na Vida Cristã</p>
                                <p className="text-xs text-gray-500">04/09/2024</p>
                            </div>
                            <div className="bg-gray-50 border border-gray-200 rounded-lg p-3">
                                <p className="text-sm font-medium text-gray-700">Os Santos e a Intercessão</p>
                                <p className="text-xs text-gray-500">11/09/2024</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Avisos da Turma */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <div className="flex items-center mb-4">
                    <AlertCircle className="h-6 w-6 text-yellow-600 mr-3" />
                    <h3 className="text-lg font-medium text-yellow-900">Avisos Importantes</h3>
                </div>
                <ul className="space-y-2 text-sm text-yellow-800">
                    <li>• Retiro espiritual marcado para 15-17 de setembro</li>
                    <li>• Entrega dos documentos pendentes até 30 de agosto</li>
                    <li>• Reunião com os pais no dia 05 de setembro às 19h</li>
                </ul>
            </div>
        </div>
    );

    const renderContent = () => {
        switch (activeTab) {
            case 'profile':
                return renderProfile();
            case 'attendance':
                return renderAttendance();
            case 'documents':
                return renderDocuments();
            case 'class':
                return renderClass();
            default:
                return renderProfile();
        }
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-white shadow">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-6">
                        <div>
                            <h1 className="text-2xl font-bold text-gray-900">Meu Portal - Crisma Sousas</h1>
                            <p className="text-sm text-gray-600">Bem-vindo, {user.name}</p>
                        </div>
                        <button
                            onClick={onLogout}
                            className="flex items-center px-4 py-2 text-gray-600 hover:text-gray-800"
                        >
                            <LogOut className="h-4 w-4 mr-2" />
                            Sair
                        </button>
                    </div>
                </div>
            </header>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex">
                    {/* Sidebar */}
                    <nav className="w-64 pr-8">
                        <div className="space-y-1">
                            {tabs.map((tab) => {
                                const Icon = tab.icon;
                                return (
                                    <button
                                        key={tab.id}
                                        onClick={() => setActiveTab(tab.id)}
                                        className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md ${
                                            activeTab === tab.id
                                                ? 'bg-blue-100 text-blue-700'
                                                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                                        }`}
                                    >
                                        <Icon className="h-5 w-5 mr-3" />
                                        {tab.name}
                                    </button>
                                );
                            })}
                        </div>
                    </nav>

                    {/* Main Content */}
                    <main className="flex-1">
                        {renderContent()}
                    </main>
                </div>
            </div>
        </div>
    );
}
