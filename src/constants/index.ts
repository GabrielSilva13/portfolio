import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  podcastr,
  noar,
  threejs,
  mauricio,
  nextjs,
  ebook,
  noarCompany,
  gramleft,
  dtmoney,
  rafa,
  hervesson,
  bestApp,
  gramleftCompany,
  avatar,
} from '../assets'

export const navLinks = [
  {
    id: 'about',
    title: 'Sobre',
  },
  {
    id: 'work',
    title: 'Trabalhos',
  },
  {
    id: 'contact',
    title: 'Contato',
  },
]

const services = [
  {
    title: 'Web Developer',
    icon: web,
  },
  {
    title: 'Aplicações Responsivas',
    icon: mobile,
  },
  {
    title: 'Consumo de APIs',
    icon: backend,
  },
  {
    title: 'PJ flexível',
    icon: creator,
  },
]

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Next JS',
    icon: nextjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
]

const experiences = [
  {
    title: 'React.js Developer',
    company_name: 'E-book Marketing',
    icon: ebook,
    iconBg: '#383E56',
    date: 'Novembro 2022 - Novembro 2022',
    points: [
      'Desenvolvimento e manutenção de aplicações web usando React.js e outras tecnologias relacionadas.',
      'Colaborar com equipes multifuncionais, incluindo designers, gerentes de produto e outros desenvolvedores para criar produtos de alta qualidade.',
      'Implementando design responsivo e garantindo compatibilidade entre navegadores.',
      'Participando de revisões de código e fornecer feedback construtivo a outros desenvolvedores.',
    ],
  },
  {
    title: 'React.js Developer',
    company_name: 'Noar Cloud',
    icon: noarCompany,
    iconBg: '#2D80F2',
    date: 'Junho 2022 - Março 2023',
    points: [
      'Desenvolvimento e manutenção de aplicações web usando React.js e outras tecnologias relacionadas.',
      'Colaborar com equipes multifuncionais, incluindo designers, gerentes de produto e outros desenvolvedores para criar produtos de alta qualidade.',
      'Implementando design responsivo e garantindo compatibilidade entre navegadores.',
      'Participando de revisões de código e fornecer feedback construtivo a outros desenvolvedores.',
    ],
  },

  {
    title: 'React.js Developer',
    company_name: 'Gramleft',
    icon: gramleftCompany,
    iconBg: '#E6DEDD',
    date: 'Jan 2023 - Mar 2023',
    points: [
      'Desenvolvimento e manutenção de aplicações web usando React.js e outras tecnologias relacionadas.',
      'Colaborar com equipes multifuncionais, incluindo designers, gerentes de produto e outros desenvolvedores para criar produtos de alta qualidade.',
      'Implementando design responsivo e garantindo compatibilidade entre navegadores.',
      'Participando de revisões de código e fornecer feedback construtivo a outros desenvolvedores.',
    ],
  },
]

const testimonials = [
  {
    testimonial:
      'Sem dúvidas um ótimo profissional! Cumpre todos os prazos e é bem detalhista. Recomendo demais.',
    name: 'Rafael Tavares',
    designation: 'CFO',
    company: 'na Noar Cloud',
    image: rafa,
  },
  {
    testimonial:
      'Perfeito o serviço cara, não tenho do que reclamar mesmo, era isso mesmo que eu queria.',
    name: 'Mauricio Lohder',
    designation: 'COO',
    company: 'na Gramleft',
    image: mauricio,
  },
  {
    testimonial: 'Muito bom e não mediu esforços para entregar no prazo!',
    name: 'Hervesson Porto',
    designation: 'Cliente',
    company: 'no 99 freelas',
    image: hervesson,
  },
  {
    testimonial:
      'Atencioso, entende muito de frontend e fez até além do necessário para o job. Recomendo com toda certeza',
    name: 'BestApp',
    designation: 'Cliente',
    company: 'no 99 freelas',
    image: bestApp,
  },
  {
    testimonial:
      'Muito comunicativo, prestativo e desejo um futuro brilhante pela frente. Obrigado por todo empenho e dedicação, ficou muito bom, espero poder contar com você mais vezes.',
    name: 'Veuc Digital',
    designation: 'Cliente',
    company: 'no 99 freelas',
    image: avatar,
  },
  {
    testimonial:
      'Entrega no prazo, faz os ajustes necessários, recomendo o trabalho do Gabriel.',
    name: 'Isabelle Oliveira',
    designation: 'Cliente',
    company: 'no 99 freelas',
    image: avatar,
  },
]

const projects = [
  {
    name: 'Podcastr',
    description:
      'Um projeto de um podcast, simples e intuitivo para escutar os seus podcasts preferidos, aonde temos artistas, dia postado, recentes e o player.',
    tags: [
      {
        name: 'next',
        color: 'blue-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
    ],
    image: podcastr,
    source_code_link: 'https://github.com/GabrielSilva13/Podcastr',
  },
  {
    name: 'Noar Cloud',
    description:
      'Um sistema web com tecnologia cloud para usar computadores na nuvem, comprando horas avulsas ou planos e podendo assim usar um computador remoto.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: noar,
    source_code_link: 'https://www.noarcloud.com/',
  },
  {
    name: 'Gramleft',
    description:
      'Sistema web para uso de um bot para gerenciar seus canais no telegram e cobrar assinaturas de forma automática.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: gramleft,
    source_code_link: 'https://gramleft.com.br/',
  },
  {
    name: 'DT Money',
    description:
      'Aqui nós temos um sistema financeiro aonde calcula e monitora todas as entradas e saídas do seu dinheiro e deixa registrado para se ter um melhor controle financeiro.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: dtmoney,
    source_code_link: 'https://github.com/GabrielSilva13/DT-Money',
  },
]

export { services, technologies, experiences, testimonials, projects }
