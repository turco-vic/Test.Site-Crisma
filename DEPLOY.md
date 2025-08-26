# Guia de Deploy e Configuração - Sistema Crisma Sousas

## 📋 Pré-requisitos

- Node.js 18+ 
- NPM ou Yarn
- Git

## 🚀 Deploy Rápido (Vercel)

### 1. Preparar o projeto
```bash
# Clone o repositório
git clone <url-do-repositorio>
cd testesitecrisma

# Instale as dependências
npm install

# Teste localmente
npm run dev
```

### 2. Deploy na Vercel
```bash
# Instalar CLI da Vercel (se não tiver)
npm i -g vercel

# Fazer deploy
vercel

# Seguir as instruções:
# - Link to existing project? No
# - What's your project's name? crisma-sousas
# - In which directory is your code located? ./
# - Auto-detected project settings, ok? Yes
```

### 3. Configurar domínio (opcional)
- Acesse o dashboard da Vercel
- Vá em Settings > Domains
- Adicione seu domínio personalizado

## 🗄️ Configuração com Banco de Dados

### Opção 1: Supabase (Recomendado)

1. **Criar conta no Supabase**
   - Acesse [supabase.com](https://supabase.com)
   - Crie um novo projeto

2. **Configurar tabelas**
```sql
-- Criar tabela de usuários
CREATE TABLE users (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    role VARCHAR(20) DEFAULT 'student',
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

-- Criar tabela de turmas
CREATE TABLE classes (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    year INTEGER NOT NULL,
    instructor VARCHAR(100) NOT NULL,
    schedule VARCHAR(50) NOT NULL,
    location VARCHAR(100),
    max_students INTEGER DEFAULT 25,
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
    status VARCHAR(20) DEFAULT 'active',
    created_at TIMESTAMP DEFAULT NOW()
);

-- Criar tabela de crismandos
CREATE TABLE students (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID REFERENCES users(id),
    class_id UUID REFERENCES classes(id),
    phone VARCHAR(20),
    birth_date DATE,
    address TEXT,
    enrollment_date DATE DEFAULT CURRENT_DATE,
    status VARCHAR(20) DEFAULT 'active',
    created_at TIMESTAMP DEFAULT NOW()
);

-- Criar tabela de documentos
CREATE TABLE documents (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    student_id UUID REFERENCES students(id),
    name VARCHAR(100) NOT NULL,
    file_url VARCHAR(255),
    status VARCHAR(20) DEFAULT 'pending',
    rejection_reason TEXT,
    uploaded_at TIMESTAMP DEFAULT NOW(),
    reviewed_at TIMESTAMP,
    reviewed_by UUID REFERENCES users(id)
);

-- Criar tabela de frequência
CREATE TABLE attendance (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    student_id UUID REFERENCES students(id),
    class_id UUID REFERENCES classes(id),
    date DATE NOT NULL,
    status VARCHAR(20) DEFAULT 'present',
    topic VARCHAR(255),
    notes TEXT,
    created_at TIMESTAMP DEFAULT NOW()
);
```

3. **Configurar variáveis de ambiente**
```env
# .env.local
NEXT_PUBLIC_SUPABASE_URL=sua_url_do_supabase
NEXT_PUBLIC_SUPABASE_ANON_KEY=sua_chave_anonima
SUPABASE_SERVICE_ROLE_KEY=sua_chave_de_servico
NEXTAUTH_SECRET=um_secret_muito_seguro
NEXTAUTH_URL=http://localhost:3000
```

### Opção 2: PostgreSQL + Railway

1. **Criar conta no Railway**
   - Acesse [railway.app](https://railway.app)
   - Crie um novo projeto PostgreSQL

2. **Obter credenciais de conexão**
   - Copy DATABASE_URL do Railway

3. **Configurar Prisma** (opcional)
```bash
npm install prisma @prisma/client
npx prisma init
```

## 🔐 Configuração de Autenticação

### NextAuth.js Setup

1. **Instalar NextAuth**
```bash
npm install next-auth
```

2. **Criar arquivo de configuração**
```javascript
// pages/api/auth/[...nextauth].js
import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { supabase } from '../../../lib/supabase'
import bcrypt from 'bcryptjs'

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {
        const { data: user } = await supabase
          .from('users')
          .select('*')
          .eq('email', credentials.email)
          .single()

        if (user && bcrypt.compareSync(credentials.password, user.password_hash)) {
          return {
            id: user.id,
            email: user.email,
            name: user.name,
            role: user.role
          }
        }
        return null
      }
    })
  ],
  session: {
    strategy: 'jwt'
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role
      }
      return token
    },
    async session({ session, token }) {
      session.user.role = token.role
      return session
    }
  }
})
```

## 📁 Upload de Arquivos

### Configurar Cloudinary

1. **Criar conta no Cloudinary**
   - Acesse [cloudinary.com](https://cloudinary.com)
   - Obtenha suas credenciais

2. **Instalar SDK**
```bash
npm install cloudinary multer
```

3. **Configurar API Route**
```javascript
// pages/api/upload.js
import { v2 as cloudinary } from 'cloudinary'
import multer from 'multer'

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
})

export default async function handler(req, res) {
  // Lógica de upload
}
```

## 📧 Configuração de Email

### Usar SendGrid

1. **Criar conta no SendGrid**
2. **Instalar SDK**
```bash
npm install @sendgrid/mail
```

3. **Configurar serviço**
```javascript
// lib/email.js
import sgMail from '@sendgrid/mail'

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

export const sendNotificationEmail = async (to, subject, html) => {
  const msg = {
    to,
    from: 'noreply@crismaSousas.com.br',
    subject,
    html
  }
  
  await sgMail.send(msg)
}
```

## 🔒 Segurança

### Configurações Importantes

1. **Variáveis de Ambiente**
```env
# Nunca commitar estas chaves!
DATABASE_URL=
NEXTAUTH_SECRET=
CLOUDINARY_API_SECRET=
SENDGRID_API_KEY=
```

2. **Headers de Segurança**
```javascript
// next.config.js
module.exports = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          }
        ]
      }
    ]
  }
}
```

## 📊 Monitoramento

### Sentry para Error Tracking

```bash
npm install @sentry/nextjs
```

### Google Analytics

```bash
npm install gtag
```

## 🚀 Performance

### Otimizações Recomendadas

1. **Imagens**
   - Use Next.js Image component
   - Configure Cloudinary para otimização automática

2. **Bundle Analysis**
```bash
npm install @next/bundle-analyzer
```

3. **Caching**
   - Configure Redis para sessions
   - Use ISR para páginas estáticas

## 📱 PWA (Opcional)

```bash
npm install next-pwa
```

## 📞 Suporte

Para dúvidas sobre o deploy:

1. **Documentação Next.js**: [nextjs.org/docs/deployment](https://nextjs.org/docs/deployment)
2. **Vercel Docs**: [vercel.com/docs](https://vercel.com/docs)
3. **Supabase Docs**: [supabase.com/docs](https://supabase.com/docs)

## ✅ Checklist de Deploy

- [ ] Testes locais funcionando
- [ ] Variáveis de ambiente configuradas
- [ ] Banco de dados configurado
- [ ] Autenticação funcionando
- [ ] Upload de arquivos testado
- [ ] Email de notificações configurado
- [ ] SSL/HTTPS ativo
- [ ] Analytics configurado
- [ ] Monitoring ativo
- [ ] Backup configurado

---

**🎉 Parabéns! Seu sistema da Crisma Sousas está no ar!**
