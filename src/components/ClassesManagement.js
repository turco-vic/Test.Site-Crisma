'use client';

import { useState } from 'react';
import { ArrowLeft, Users, Calendar, Clock, Edit, Trash2, Plus, Search } from 'lucide-react';

export function ClassesManagement({ onBack }) {
    const [searchTerm, setSearchTerm] = useState('');
    const [showAddForm, setShowAddForm] = useState(false);
    const [newClass, setNewClass] = useState({
        name: '',
        year: new Date().getFullYear(),
        instructor: '',
        schedule: '',
        maxStudents: 25
    });

    const classes = [
        {
            id: 1,
            name: 'Turma 2024A',
            year: 2024,
            students: 22,
            maxStudents: 25,
            instructor: 'Padre João',
            schedule: 'Quartas 19h30',
            location: 'Sala 2 - Centro Pastoral',
            startDate: '2024-03-01',
            endDate: '2024-12-15',
            status: 'active'
        },
        {
            id: 2,
            name: 'Turma 2024B',
            year: 2024,
            students: 23,
            maxStudents: 25,
            instructor: 'Catequista Maria',
            schedule: 'Quartas 20h30',
            location: 'Sala 3 - Centro Pastoral',
            startDate: '2024-03-01',
            endDate: '2024-12-15',
            status: 'active'
        },
        {
            id: 3,
            name: 'Turma 2023A',
            year: 2023,
            students: 18,
            maxStudents: 20,
            instructor: 'Padre Paulo',
            schedule: 'Quartas 19h30',
            location: 'Sala 1 - Centro Pastoral',
            startDate: '2023-03-01',
            endDate: '2023-12-15',
            status: 'completed'
        }
    ];

    const filteredClasses = classes.filter(classItem =>
        classItem.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        classItem.instructor.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleAddClass = (e) => {
        e.preventDefault();
        // Aqui seria feita a adição da turma
        console.log('Nova turma:', newClass);
        setShowAddForm(false);
        setNewClass({
            name: '',
            year: new Date().getFullYear(),
            instructor: '',
            schedule: '',
            maxStudents: 25
        });
    };

    const getStatusColor = (status) => {
        switch (status) {
            case 'active':
                return 'bg-green-100 text-green-800';
            case 'completed':
                return 'bg-gray-100 text-gray-800';
            case 'planning':
                return 'bg-blue-100 text-blue-800';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };

    const getStatusText = (status) => {
        switch (status) {
            case 'active':
                return 'Ativa';
            case 'completed':
                return 'Concluída';
            case 'planning':
                return 'Planejamento';
            default:
                return 'Desconhecido';
        }
    };

    if (showAddForm) {
        return (
            <div className="min-h-screen bg-gray-50 p-6">
                <div className="max-w-2xl mx-auto">
                    <button
                        onClick={() => setShowAddForm(false)}
                        className="flex items-center text-gray-600 hover:text-gray-800 mb-6"
                    >
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        Voltar para Turmas
                    </button>

                    <div className="bg-white rounded-lg shadow p-6">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Nova Turma</h2>

                        <form onSubmit={handleAddClass} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Nome da Turma
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        value={newClass.name}
                                        onChange={(e) => setNewClass({...newClass, name: e.target.value})}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="Ex: Turma 2024C"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Ano
                                    </label>
                                    <input
                                        type="number"
                                        required
                                        value={newClass.year}
                                        onChange={(e) => setNewClass({...newClass, year: parseInt(e.target.value)})}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        min="2020"
                                        max="2030"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Instrutor
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        value={newClass.instructor}
                                        onChange={(e) => setNewClass({...newClass, instructor: e.target.value})}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="Nome do instrutor"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Horário
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        value={newClass.schedule}
                                        onChange={(e) => setNewClass({...newClass, schedule: e.target.value})}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="Ex: Quartas 19h30"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Número máximo de alunos
                                    </label>
                                    <input
                                        type="number"
                                        required
                                        value={newClass.maxStudents}
                                        onChange={(e) => setNewClass({...newClass, maxStudents: parseInt(e.target.value)})}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        min="10"
                                        max="50"
                                    />
                                </div>
                            </div>

                            <div className="flex justify-end space-x-4">
                                <button
                                    type="button"
                                    onClick={() => setShowAddForm(false)}
                                    className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
                                >
                                    Cancelar
                                </button>
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                                >
                                    Criar Turma
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <div className="max-w-7xl mx-auto">
                <button
                    onClick={onBack}
                    className="flex items-center text-gray-600 hover:text-gray-800 mb-6"
                >
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Voltar ao Dashboard
                </button>

                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-3xl font-bold text-gray-900">Gestão de Turmas</h1>
                    <button
                        onClick={() => setShowAddForm(true)}
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center"
                    >
                        <Plus className="h-4 w-4 mr-2" />
                        Nova Turma
                    </button>
                </div>

                {/* Search Bar */}
                <div className="bg-white rounded-lg shadow p-6 mb-6">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Buscar turmas por nome ou instrutor..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                </div>

                {/* Classes Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredClasses.map((classItem) => (
                        <div key={classItem.id} className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900">{classItem.name}</h3>
                                        <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(classItem.status)}`}>
                                            {getStatusText(classItem.status)}
                                        </span>
                                    </div>
                                    <div className="flex space-x-2">
                                        <button className="text-blue-600 hover:text-blue-900">
                                            <Edit className="h-4 w-4" />
                                        </button>
                                        <button className="text-red-600 hover:text-red-900">
                                            <Trash2 className="h-4 w-4" />
                                        </button>
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <div className="flex items-center text-sm text-gray-600">
                                        <Users className="h-4 w-4 mr-2" />
                                        <span>{classItem.students}/{classItem.maxStudents} crismandos</span>
                                    </div>

                                    <div className="flex items-center text-sm text-gray-600">
                                        <Calendar className="h-4 w-4 mr-2" />
                                        <span>{classItem.schedule}</span>
                                    </div>

                                    <div className="flex items-center text-sm text-gray-600">
                                        <Clock className="h-4 w-4 mr-2" />
                                        <span>{classItem.instructor}</span>
                                    </div>

                                    {classItem.location && (
                                        <div className="text-sm text-gray-600">
                                            📍 {classItem.location}
                                        </div>
                                    )}
                                </div>

                                {/* Progress Bar */}
                                <div className="mt-4">
                                    <div className="flex justify-between text-sm text-gray-600 mb-1">
                                        <span>Ocupação</span>
                                        <span>{Math.round((classItem.students / classItem.maxStudents) * 100)}%</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                        <div 
                                            className="bg-blue-600 h-2 rounded-full" 
                                            style={{ width: `${(classItem.students / classItem.maxStudents) * 100}%` }}
                                        ></div>
                                    </div>
                                </div>

                                <div className="mt-4 pt-4 border-t border-gray-200 flex justify-between">
                                    <span className="text-xs text-gray-500">
                                        Ano: {classItem.year}
                                    </span>
                                    <button className="text-blue-600 hover:text-blue-900 text-sm font-medium">
                                        Ver detalhes
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {filteredClasses.length === 0 && (
                    <div className="bg-white rounded-lg shadow p-12 text-center">
                        <Users className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                        <h3 className="text-lg font-medium text-gray-900 mb-2">Nenhuma turma encontrada</h3>
                        <p className="text-gray-600 mb-4">
                            {searchTerm ? 'Tente ajustar sua busca' : 'Crie sua primeira turma para começar'}
                        </p>
                        {!searchTerm && (
                            <button
                                onClick={() => setShowAddForm(true)}
                                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                            >
                                Criar Primeira Turma
                            </button>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}
