'use client';

import { useState } from 'react';
import { 
    Users, 
    Calendar, 
    FileText, 
    Settings, 
    LogOut, 
    Plus, 
    Search,
    Edit,
    Trash2,
    CheckCircle,
    XCircle,
    Clock,
    BarChart3,
    Eye
} from 'lucide-react';
import { ClassesManagement } from './ClassesManagement';

export function AdminDashboard({ user, onLogout }) {
    const [activeTab, setActiveTab] = useState('overview');
    const [searchTerm, setSearchTerm] = useState('');
    const [showClassesManagement, setShowClassesManagement] = useState(false);

    // Se estiver na gestão de turmas, mostrar esse componente
    if (showClassesManagement) {
        return <ClassesManagement onBack={() => setShowClassesManagement(false)} />;
    }

    // Dados simulados
    const stats = {
        totalStudents: 45,
        totalClasses: 12,
        averageAttendance: 85,
        pendingDocuments: 8
    };

    const students = [
        { 
            id: 1, 
            name: 'João Silva', 
            email: 'joao@email.com', 
            class: '2024A', 
            attendance: 92,
            documents: { pending: 1, approved: 2 }
        },
        { 
            id: 2, 
            name: 'Maria Santos', 
            email: 'maria@email.com', 
            class: '2024A', 
            attendance: 88,
            documents: { pending: 0, approved: 3 }
        },
        { 
            id: 3, 
            name: 'Pedro Costa', 
            email: 'pedro@email.com', 
            class: '2024B', 
            attendance: 76,
            documents: { pending: 2, approved: 1 }
        }
    ];

    const classes = [
        { 
            id: 1, 
            name: 'Turma 2024A', 
            year: 2024, 
            students: 22,
            instructor: 'Padre João',
            schedule: 'Quartas 19h30'
        },
        { 
            id: 2, 
            name: 'Turma 2024B', 
            year: 2024, 
            students: 23,
            instructor: 'Catequista Maria',
            schedule: 'Quartas 20h30'
        }
    ];

    const recentActivity = [
        { id: 1, action: 'João Silva enviou documento', time: '2h atrás', type: 'document' },
        { id: 2, action: 'Nova turma 2024C criada', time: '1 dia atrás', type: 'class' },
        { id: 3, action: 'Maria Santos marcou presença', time: '2 dias atrás', type: 'attendance' }
    ];

    const tabs = [
        { id: 'overview', name: 'Visão Geral', icon: BarChart3 },
        { id: 'students', name: 'Crismandos', icon: Users },
        { id: 'classes', name: 'Turmas', icon: Calendar },
        { id: 'documents', name: 'Documentos', icon: FileText },
        { id: 'settings', name: 'Configurações', icon: Settings }
    ];

    const filteredStudents = students.filter(student =>
        student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const renderOverview = () => (
        <div className="space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded-lg shadow">
                    <div className="flex items-center">
                        <Users className="h-8 w-8 text-blue-600" />
                        <div className="ml-4">
                            <p className="text-sm font-medium text-gray-600">Total de Crismandos</p>
                            <p className="text-2xl font-semibold text-gray-900">{stats.totalStudents}</p>
                        </div>
                    </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow">
                    <div className="flex items-center">
                        <Calendar className="h-8 w-8 text-green-600" />
                        <div className="ml-4">
                            <p className="text-sm font-medium text-gray-600">Turmas Ativas</p>
                            <p className="text-2xl font-semibold text-gray-900">{stats.totalClasses}</p>
                        </div>
                    </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow">
                    <div className="flex items-center">
                        <CheckCircle className="h-8 w-8 text-purple-600" />
                        <div className="ml-4">
                            <p className="text-sm font-medium text-gray-600">Frequência Média</p>
                            <p className="text-2xl font-semibold text-gray-900">{stats.averageAttendance}%</p>
                        </div>
                    </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow">
                    <div className="flex items-center">
                        <Clock className="h-8 w-8 text-orange-600" />
                        <div className="ml-4">
                            <p className="text-sm font-medium text-gray-600">Doc. Pendentes</p>
                            <p className="text-2xl font-semibold text-gray-900">{stats.pendingDocuments}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-lg shadow">
                <div className="px-6 py-4 border-b border-gray-200">
                    <h3 className="text-lg font-medium text-gray-900">Atividade Recente</h3>
                </div>
                <div className="p-6">
                    <div className="space-y-4">
                        {recentActivity.map((activity) => (
                            <div key={activity.id} className="flex items-center">
                                <div className="flex-shrink-0 w-2 h-2 bg-blue-400 rounded-full"></div>
                                <div className="ml-4 flex-1">
                                    <p className="text-sm text-gray-900">{activity.action}</p>
                                    <p className="text-xs text-gray-500">{activity.time}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );

    const renderStudents = () => (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-gray-900">Crismandos</h2>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center">
                    <Plus className="h-4 w-4 mr-2" />
                    Adicionar Crismando
                </button>
            </div>

            <div className="bg-white rounded-lg shadow">
                <div className="p-6 border-b border-gray-200">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Buscar crismandos..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                </div>
                
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Nome
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Turma
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Frequência
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Documentos
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Ações
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {filteredStudents.map((student) => (
                                <tr key={student.id}>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div>
                                            <div className="text-sm font-medium text-gray-900">{student.name}</div>
                                            <div className="text-sm text-gray-500">{student.email}</div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                        {student.class}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center">
                                            <div className="text-sm text-gray-900">{student.attendance}%</div>
                                            <div className="ml-2 w-16 bg-gray-200 rounded-full h-2">
                                                <div 
                                                    className="bg-blue-600 h-2 rounded-full" 
                                                    style={{ width: `${student.attendance}%` }}
                                                ></div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className="text-sm text-gray-900">
                                            {student.documents.approved} aprovados, {student.documents.pending} pendentes
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                        <div className="flex space-x-2">
                                            <button className="text-blue-600 hover:text-blue-900">
                                                <Edit className="h-4 w-4" />
                                            </button>
                                            <button className="text-red-600 hover:text-red-900">
                                                <Trash2 className="h-4 w-4" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );

    const renderClasses = () => (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-gray-900">Turmas</h2>
                <div className="flex space-x-3">
                    <button 
                        onClick={() => setShowClassesManagement(true)}
                        className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 flex items-center"
                    >
                        <Eye className="h-4 w-4 mr-2" />
                        Gerenciar Turmas
                    </button>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center">
                        <Plus className="h-4 w-4 mr-2" />
                        Nova Turma
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {classes.map((classItem) => (
                    <div key={classItem.id} className="bg-white rounded-lg shadow p-6">
                        <div className="flex justify-between items-start mb-4">
                            <h3 className="text-lg font-semibold text-gray-900">{classItem.name}</h3>
                            <div className="flex space-x-2">
                                <button className="text-blue-600 hover:text-blue-900">
                                    <Edit className="h-4 w-4" />
                                </button>
                                <button className="text-red-600 hover:text-red-900">
                                    <Trash2 className="h-4 w-4" />
                                </button>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <p className="text-sm text-gray-600">
                                <strong>Instrutor:</strong> {classItem.instructor}
                            </p>
                            <p className="text-sm text-gray-600">
                                <strong>Horário:</strong> {classItem.schedule}
                            </p>
                            <p className="text-sm text-gray-600">
                                <strong>Crismandos:</strong> {classItem.students}
                            </p>
                            <p className="text-sm text-gray-600">
                                <strong>Ano:</strong> {classItem.year}
                            </p>
                        </div>
                        <div className="mt-4 pt-4 border-t border-gray-200">
                            <button className="text-blue-600 hover:text-blue-900 text-sm font-medium">
                                Ver detalhes
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

    const renderContent = () => {
        switch (activeTab) {
            case 'overview':
                return renderOverview();
            case 'students':
                return renderStudents();
            case 'classes':
                return renderClasses();
            case 'documents':
                return <div className="text-center py-12 text-gray-500">Seção de documentos em desenvolvimento</div>;
            case 'settings':
                return <div className="text-center py-12 text-gray-500">Seção de configurações em desenvolvimento</div>;
            default:
                return renderOverview();
        }
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-white shadow">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-6">
                        <div>
                            <h1 className="text-2xl font-bold text-gray-900">Painel Administrativo</h1>
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
