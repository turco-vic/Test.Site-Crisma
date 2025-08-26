// Dados simulados para o sistema da Crisma
export const mockData = {
    // Dados dos administradores
    admins: [
        {
            id: 1,
            name: 'Administrador',
            email: 'admin@sousas.com',
            password: 'admin123', // Em produção seria hash
            role: 'admin'
        }
    ],

    // Dados dos crismandos
    students: [
        {
            id: 1,
            name: 'João Silva',
            email: 'joao.silva@email.com',
            password: 'student123',
            phone: '(19) 99999-1111',
            birthDate: '2008-05-15',
            address: 'Rua das Flores, 123 - Sousas',
            classId: 1,
            enrollmentDate: '2024-03-01',
            status: 'active',
            documents: [
                { id: 1, name: 'Certidão de Batismo', status: 'pending', uploadedAt: null },
                { id: 2, name: 'RG', status: 'approved', uploadedAt: '2024-07-15' },
                { id: 3, name: 'Foto 3x4', status: 'approved', uploadedAt: '2024-07-15' }
            ],
            attendance: [
                { date: '2024-08-07', status: 'present', topic: 'Os Sacramentos da Igreja' },
                { date: '2024-08-14', status: 'present', topic: 'A Confirmação na História' },
                { date: '2024-08-21', status: 'absent', topic: 'Os Dons do Espírito Santo' }
            ]
        },
        {
            id: 2,
            name: 'Maria Santos',
            email: 'maria.santos@email.com',
            password: 'student123',
            phone: '(19) 99999-2222',
            birthDate: '2009-08-22',
            address: 'Av. Principal, 456 - Sousas',
            classId: 1,
            enrollmentDate: '2024-03-01',
            status: 'active',
            documents: [
                { id: 1, name: 'Certidão de Batismo', status: 'approved', uploadedAt: '2024-07-10' },
                { id: 2, name: 'RG', status: 'approved', uploadedAt: '2024-07-10' },
                { id: 3, name: 'Foto 3x4', status: 'approved', uploadedAt: '2024-07-10' }
            ],
            attendance: [
                { date: '2024-08-07', status: 'present', topic: 'Os Sacramentos da Igreja' },
                { date: '2024-08-14', status: 'present', topic: 'A Confirmação na História' },
                { date: '2024-08-21', status: 'present', topic: 'Os Dons do Espírito Santo' }
            ]
        }
    ],

    // Dados das turmas
    classes: [
        {
            id: 1,
            name: 'Turma 2024A',
            year: 2024,
            instructor: 'Padre João',
            schedule: 'Quartas 19h30',
            location: 'Sala 2 - Centro Pastoral',
            maxStudents: 25,
            currentStudents: 22,
            startDate: '2024-03-01',
            endDate: '2024-12-15',
            status: 'active'
        },
        {
            id: 2,
            name: 'Turma 2024B',
            year: 2024,
            instructor: 'Catequista Maria',
            schedule: 'Quartas 20h30',
            location: 'Sala 3 - Centro Pastoral',
            maxStudents: 25,
            currentStudents: 23,
            startDate: '2024-03-01',
            endDate: '2024-12-15',
            status: 'active'
        }
    ],

    // Cronograma de aulas
    curriculum: [
        { id: 1, week: 1, topic: 'Apresentação e Acolhida', description: 'Conhecendo o grupo e os objetivos da Crisma' },
        { id: 2, week: 2, topic: 'A História da Salvação', description: 'Do Antigo ao Novo Testamento' },
        { id: 3, week: 3, topic: 'Jesus Cristo', description: 'A vida, morte e ressurreição de Jesus' },
        { id: 4, week: 4, topic: 'O Espírito Santo', description: 'A terceira pessoa da Santíssima Trindade' },
        { id: 5, week: 5, topic: 'Os Sacramentos', description: 'Os sete sacramentos da Igreja Católica' },
        { id: 6, week: 6, topic: 'A Confirmação', description: 'O sacramento que vamos receber' },
        { id: 7, week: 7, topic: 'Os Dons do Espírito Santo', description: 'Os sete dons e como vivê-los' },
        { id: 8, week: 8, topic: 'A Igreja', description: 'Comunidade dos fiéis' }
    ],

    // Documentos obrigatórios
    requiredDocuments: [
        {
            id: 1,
            name: 'Certidão de Batismo',
            description: 'Certidão atualizada (máximo 6 meses)',
            required: true,
            acceptedFormats: ['PDF', 'JPG', 'PNG']
        },
        {
            id: 2,
            name: 'RG (Cópia)',
            description: 'Cópia legível do documento de identidade',
            required: true,
            acceptedFormats: ['PDF', 'JPG', 'PNG']
        },
        {
            id: 3,
            name: 'Foto 3x4',
            description: 'Foto recente, fundo branco',
            required: true,
            acceptedFormats: ['JPG', 'PNG']
        },
        {
            id: 4,
            name: 'Comprovante de Residência',
            description: 'Conta de luz, água ou telefone (máximo 3 meses)',
            required: false,
            acceptedFormats: ['PDF', 'JPG', 'PNG']
        }
    ]
};

// Funções utilitárias
export const utils = {
    // Calcular porcentagem de frequência
    calculateAttendancePercentage: (attendance) => {
        if (!attendance || attendance.length === 0) return 0;
        const present = attendance.filter(a => a.status === 'present').length;
        return Math.round((present / attendance.length) * 100);
    },

    // Formatar data para exibição
    formatDate: (dateString) => {
        return new Date(dateString).toLocaleDateString('pt-BR');
    },

    // Calcular idade
    calculateAge: (birthDate) => {
        const today = new Date();
        const birth = new Date(birthDate);
        let age = today.getFullYear() - birth.getFullYear();
        const monthDiff = today.getMonth() - birth.getMonth();
        
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
            age--;
        }
        
        return age;
    },

    // Validar email
    isValidEmail: (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    },

    // Gerar ID único (para simulação)
    generateId: () => {
        return Date.now() + Math.random().toString(36).substr(2, 9);
    },

    // Obter status da documentação
    getDocumentationStatus: (documents) => {
        const required = documents.filter(d => d.required);
        const approved = documents.filter(d => d.status === 'approved' && d.required);
        
        if (approved.length === required.length) return 'complete';
        if (approved.length > 0) return 'partial';
        return 'pending';
    },

    // Obter próxima aula
    getNextClass: (classSchedule) => {
        // Simulação - em produção viria do backend
        const today = new Date();
        const nextWednesday = new Date(today);
        
        // Encontrar próxima quarta-feira
        const daysUntilWednesday = (3 - today.getDay() + 7) % 7 || 7;
        nextWednesday.setDate(today.getDate() + daysUntilWednesday);
        
        return nextWednesday.toISOString().split('T')[0];
    },

    // Validar senha
    isValidPassword: (password) => {
        return password && password.length >= 6;
    },

    // Obter cor do status
    getStatusColor: (status) => {
        const colors = {
            active: 'bg-green-100 text-green-800',
            inactive: 'bg-gray-100 text-gray-800',
            pending: 'bg-yellow-100 text-yellow-800',
            approved: 'bg-green-100 text-green-800',
            rejected: 'bg-red-100 text-red-800',
            completed: 'bg-blue-100 text-blue-800'
        };
        return colors[status] || 'bg-gray-100 text-gray-800';
    }
};
