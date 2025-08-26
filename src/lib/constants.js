// Constantes do sistema da Crisma Sousas

export const SYSTEM_CONFIG = {
    // Informações da paróquia
    PARISH_NAME: 'Paróquia de Sousas',
    PARISH_ADDRESS: 'Rua da Igreja, 123 - Sousas, Campinas/SP',
    PARISH_PHONE: '(19) 3289-0000',
    PARISH_EMAIL: 'paroquia@sousas.com.br',
    
    // Configurações da Crisma
    CONFIRMATION_AGE_MIN: 14,
    CONFIRMATION_AGE_MAX: 25,
    COURSE_DURATION_MONTHS: 24,
    MAX_STUDENTS_PER_CLASS: 25,
    MIN_ATTENDANCE_PERCENTAGE: 75,
    
    // Horários padrão
    DEFAULT_CLASS_TIME: '19:30',
    DEFAULT_CLASS_DAY: 'Quarta-feira',
    CLASS_DURATION_MINUTES: 90,
    
    // Configurações de documentos
    MAX_FILE_SIZE_MB: 5,
    ALLOWED_FILE_TYPES: ['pdf', 'jpg', 'jpeg', 'png'],
    
    // Status possíveis
    STUDENT_STATUS: {
        ACTIVE: 'active',
        INACTIVE: 'inactive',
        GRADUATED: 'graduated',
        DROPPED: 'dropped'
    },
    
    DOCUMENT_STATUS: {
        PENDING: 'pending',
        APPROVED: 'approved',
        REJECTED: 'rejected'
    },
    
    CLASS_STATUS: {
        ACTIVE: 'active',
        COMPLETED: 'completed',
        PLANNING: 'planning',
        CANCELLED: 'cancelled'
    },
    
    ATTENDANCE_STATUS: {
        PRESENT: 'present',
        ABSENT: 'absent',
        JUSTIFIED: 'justified'
    }
};

export const USER_ROLES = {
    ADMIN: 'admin',
    COORDINATOR: 'coordinator',
    INSTRUCTOR: 'instructor',
    STUDENT: 'student'
};

export const PERMISSIONS = {
    [USER_ROLES.ADMIN]: [
        'manage_students',
        'manage_classes',
        'manage_instructors',
        'view_reports',
        'manage_documents',
        'system_settings'
    ],
    [USER_ROLES.COORDINATOR]: [
        'manage_students',
        'manage_classes',
        'view_reports',
        'manage_documents'
    ],
    [USER_ROLES.INSTRUCTOR]: [
        'view_students',
        'mark_attendance',
        'view_class_documents'
    ],
    [USER_ROLES.STUDENT]: [
        'view_profile',
        'view_attendance',
        'upload_documents',
        'view_class_info'
    ]
};

export const NAVIGATION_MENUS = {
    [USER_ROLES.ADMIN]: [
        { id: 'overview', name: 'Visão Geral', icon: 'BarChart3', path: '/admin' },
        { id: 'students', name: 'Crismandos', icon: 'Users', path: '/admin/students' },
        { id: 'classes', name: 'Turmas', icon: 'Calendar', path: '/admin/classes' },
        { id: 'documents', name: 'Documentos', icon: 'FileText', path: '/admin/documents' },
        { id: 'reports', name: 'Relatórios', icon: 'BarChart', path: '/admin/reports' },
        { id: 'settings', name: 'Configurações', icon: 'Settings', path: '/admin/settings' }
    ],
    [USER_ROLES.STUDENT]: [
        { id: 'profile', name: 'Meu Perfil', icon: 'User', path: '/student' },
        { id: 'attendance', name: 'Frequência', icon: 'Calendar', path: '/student/attendance' },
        { id: 'documents', name: 'Documentos', icon: 'FileText', path: '/student/documents' },
        { id: 'class', name: 'Minha Turma', icon: 'Users', path: '/student/class' }
    ]
};

export const ERROR_MESSAGES = {
    // Autenticação
    INVALID_CREDENTIALS: 'Email ou senha incorretos',
    USER_NOT_FOUND: 'Usuário não encontrado',
    PASSWORD_TOO_SHORT: 'A senha deve ter pelo menos 6 caracteres',
    INVALID_EMAIL: 'Email inválido',
    
    // Estudantes
    STUDENT_NOT_FOUND: 'Crismando não encontrado',
    STUDENT_ALREADY_EXISTS: 'Já existe um crismando com este email',
    INVALID_AGE: `Idade deve estar entre ${SYSTEM_CONFIG.CONFIRMATION_AGE_MIN} e ${SYSTEM_CONFIG.CONFIRMATION_AGE_MAX} anos`,
    
    // Turmas
    CLASS_FULL: 'Turma lotada',
    CLASS_NOT_FOUND: 'Turma não encontrada',
    INVALID_CLASS_SIZE: `Turma deve ter no máximo ${SYSTEM_CONFIG.MAX_STUDENTS_PER_CLASS} alunos`,
    
    // Documentos
    FILE_TOO_LARGE: `Arquivo muito grande. Máximo ${SYSTEM_CONFIG.MAX_FILE_SIZE_MB}MB`,
    INVALID_FILE_TYPE: `Tipo de arquivo não permitido. Use: ${SYSTEM_CONFIG.ALLOWED_FILE_TYPES.join(', ')}`,
    DOCUMENT_NOT_FOUND: 'Documento não encontrado',
    
    // Geral
    REQUIRED_FIELD: 'Campo obrigatório',
    UNEXPECTED_ERROR: 'Erro inesperado. Tente novamente.',
    NO_PERMISSION: 'Você não tem permissão para esta ação'
};

export const SUCCESS_MESSAGES = {
    // Autenticação
    LOGIN_SUCCESS: 'Login realizado com sucesso',
    LOGOUT_SUCCESS: 'Logout realizado com sucesso',
    
    // Estudantes
    STUDENT_CREATED: 'Crismando cadastrado com sucesso',
    STUDENT_UPDATED: 'Dados do crismando atualizados',
    STUDENT_DELETED: 'Crismando removido com sucesso',
    
    // Turmas
    CLASS_CREATED: 'Turma criada com sucesso',
    CLASS_UPDATED: 'Turma atualizada com sucesso',
    CLASS_DELETED: 'Turma removida com sucesso',
    
    // Documentos
    DOCUMENT_UPLOADED: 'Documento enviado com sucesso',
    DOCUMENT_APPROVED: 'Documento aprovado',
    DOCUMENT_REJECTED: 'Documento rejeitado',
    
    // Frequência
    ATTENDANCE_MARKED: 'Presença registrada',
    
    // Geral
    SAVE_SUCCESS: 'Dados salvos com sucesso',
    UPDATE_SUCCESS: 'Atualização realizada com sucesso'
};

export const FORM_VALIDATION = {
    EMAIL: {
        pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: 'Email inválido'
    },
    PHONE: {
        pattern: /^\(\d{2}\)\s\d{4,5}-\d{4}$/,
        message: 'Telefone deve estar no formato (11) 99999-9999'
    },
    NAME: {
        minLength: 3,
        maxLength: 100,
        message: 'Nome deve ter entre 3 e 100 caracteres'
    },
    PASSWORD: {
        minLength: 6,
        maxLength: 50,
        message: 'Senha deve ter entre 6 e 50 caracteres'
    }
};

// Dados para select/dropdown
export const SELECT_OPTIONS = {
    STATES: [
        { value: 'AC', label: 'Acre' },
        { value: 'AL', label: 'Alagoas' },
        { value: 'AP', label: 'Amapá' },
        { value: 'AM', label: 'Amazonas' },
        { value: 'BA', label: 'Bahia' },
        { value: 'CE', label: 'Ceará' },
        { value: 'DF', label: 'Distrito Federal' },
        { value: 'ES', label: 'Espírito Santo' },
        { value: 'GO', label: 'Goiás' },
        { value: 'MA', label: 'Maranhão' },
        { value: 'MT', label: 'Mato Grosso' },
        { value: 'MS', label: 'Mato Grosso do Sul' },
        { value: 'MG', label: 'Minas Gerais' },
        { value: 'PA', label: 'Pará' },
        { value: 'PB', label: 'Paraíba' },
        { value: 'PR', label: 'Paraná' },
        { value: 'PE', label: 'Pernambuco' },
        { value: 'PI', label: 'Piauí' },
        { value: 'RJ', label: 'Rio de Janeiro' },
        { value: 'RN', label: 'Rio Grande do Norte' },
        { value: 'RS', label: 'Rio Grande do Sul' },
        { value: 'RO', label: 'Rondônia' },
        { value: 'RR', label: 'Roraima' },
        { value: 'SC', label: 'Santa Catarina' },
        { value: 'SP', label: 'São Paulo' },
        { value: 'SE', label: 'Sergipe' },
        { value: 'TO', label: 'Tocantins' }
    ],
    
    YEARS: Array.from({length: 10}, (_, i) => {
        const year = new Date().getFullYear() - 5 + i;
        return { value: year, label: year.toString() };
    }),
    
    CLASS_TIMES: [
        { value: '07:00', label: '07:00' },
        { value: '08:00', label: '08:00' },
        { value: '14:00', label: '14:00' },
        { value: '15:00', label: '15:00' },
        { value: '16:00', label: '16:00' },
        { value: '17:00', label: '17:00' },
        { value: '18:00', label: '18:00' },
        { value: '19:00', label: '19:00' },
        { value: '19:30', label: '19:30' },
        { value: '20:00', label: '20:00' },
        { value: '20:30', label: '20:30' }
    ],
    
    WEEKDAYS: [
        { value: 'sunday', label: 'Domingo' },
        { value: 'monday', label: 'Segunda-feira' },
        { value: 'tuesday', label: 'Terça-feira' },
        { value: 'wednesday', label: 'Quarta-feira' },
        { value: 'thursday', label: 'Quinta-feira' },
        { value: 'friday', label: 'Sexta-feira' },
        { value: 'saturday', label: 'Sábado' }
    ]
};
