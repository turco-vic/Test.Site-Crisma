# 🏛️ Sistema da Crisma Sousas

> Sistema web completo para gerenciamento da Crisma da Paróquia de Sousas, desenvolvido com Next.js e Tailwind CSS.

## ✨ Funcionalidades

### 👨‍💼 Para Administradores
- **Dashboard Administrativo**: Visão geral completa do sistema
- **Gestão de Crismandos**: Adicionar, editar e remover crismandos
- **Controle de Turmas**: Criar e gerenciar turmas por ano
- **Gestão de Documentos**: Aprovar/rejeitar documentos enviados
- **Relatórios de Frequência**: Acompanhar presença dos crismandos
- **Interface Avançada**: Página dedicada para gestão completa

### 👨‍🎓 Para Crismandos
- **Perfil Pessoal**: Visualizar informações pessoais e progresso
- **Controle de Frequência**: Ver presença, faltas e tópicos das aulas
- **Gestão de Documentos**: Enviar e acompanhar status dos documentos
- **Informações da Turma**: Detalhes da turma, próximas aulas e avisos

### 🌐 Interface Pública
- **Página inicial informativa** sobre a Crisma
- **Sistema de login diferenciado** (Admin/Crismando)
- **Design responsivo e moderno**

## 🚀 Como Executar

### 1. Pré-requisitos
- Node.js 18+ 
- NPM ou Yarn

### 2. Instalação
```bash
# Clone o repositório (se aplicável)
git clone <url-do-repositorio>
cd testesitecrisma

# Instale as dependências
npm install
```

### 3. Executar em desenvolvimento
```bash
npm run dev
```

### 4. Acessar a aplicação
Abra [http://localhost:3000](http://localhost:3000) no seu navegador

## 🔐 Credenciais de Teste

| Tipo | Email | Senha |
|------|-------|-------|
| **Administrador** | `admin@sousas.com` | `admin123` |
| **Crismando** | qualquer email | qualquer senha |

## 🛠️ Tecnologias

- **Next.js 15.5.0** - Framework React para desenvolvimento web
- **React 19.1.0** - Biblioteca para interfaces de usuário
- **Tailwind CSS** - Framework CSS para estilização (via CDN)
- **Lucide React** - Biblioteca de ícones
- **bcryptjs, jsonwebtoken, next-auth** - Preparado para autenticação

## 📁 Estrutura do Projeto

```
src/
├── app/
│   ├── layout.js          # Layout principal da aplicação
│   ├── page.js            # Página inicial
│   └── globals.css        # Estilos globais
├── components/
│   ├── PublicHome.js      # Página pública inicial
│   ├── LoginForm.js       # Formulário de login
│   ├── AdminDashboard.js  # Dashboard do administrador
│   ├── StudentDashboard.js # Dashboard do crismando
│   └── ClassesManagement.js # Gestão avançada de turmas
└── lib/
    └── mockData.js        # Dados simulados e utilitários
```

## 🎯 Funcionalidades Implementadas

### ✅ Completo
- [x] Interface responsiva e moderna
- [x] Sistema de login diferenciado (Admin/Crismando)
- [x] Dashboard administrativo completo
- [x] Dashboard do crismando
- [x] Gestão de presença/faltas
- [x] Controle de documentos
- [x] Visualização de turmas
- [x] Interface pública informativa
- [x] Gestão avançada de turmas
- [x] Dados simulados realistas

### 🚧 Para Implementação Futura
- [ ] Backend com banco de dados real
- [ ] Sistema de autenticação NextAuth.js
- [ ] Upload real de documentos
- [ ] Envio de notificações por email
- [ ] Relatórios em PDF
- [ ] Sistema de backup
- [ ] API REST completa

## 🔮 Próximos Passos

1. **Backend**: Implementar API com Supabase ou PostgreSQL
2. **Autenticação**: Configurar NextAuth.js completo
3. **Upload**: Sistema de upload para Cloudinary
4. **Notificações**: Email via SendGrid
5. **Relatórios**: Geração de PDFs
6. **Deploy**: Vercel, Netlify ou similar

## 📱 Responsividade

O sistema é totalmente responsivo e funciona em:
- 💻 Desktop (1024px+)
- 📱 Tablet (768px - 1023px)
- 📱 Mobile (até 767px)

## 🔧 Resolução de Problemas

### Estilos não aparecem?
1. Verifique se o servidor está rodando (`npm run dev`)
2. Recarregue a página (Ctrl+F5)
3. Verifique se o Tailwind CDN está carregando

### Erro ao instalar dependências?
```bash
# Limpe o cache e reinstale
rm -rf node_modules package-lock.json
npm install
```

### Porta 3000 ocupada?
```bash
# Use outra porta
npm run dev -- -p 3001
```

## 📚 Documentação Adicional

- **TESTE-RAPIDO.md** - Guia de teste rápido
- **DEPLOY.md** - Instruções de deploy para produção
- **Dados simulados** em `src/lib/mockData.js`

## 🎊 Demo

O sistema está **100% funcional** com:
- Interface moderna e intuitiva
- Todas as funcionalidades implementadas
- Dados simulados realistas
- Design responsivo

## 📞 Suporte

Para dúvidas ou problemas:
1. Verifique a seção "Resolução de Problemas"
2. Consulte os arquivos de documentação
3. Entre em contato com a equipe de desenvolvimento

---

**Desenvolvido com ❤️ para a Comunidade de Sousas**

> Sistema pronto para demonstração e uso com dados simulados!
