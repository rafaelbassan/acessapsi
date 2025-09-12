import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Acessa Psi - Psicologia Clínica Especializada',
    short_name: 'Acessa Psi',
    description: 'Cuidado psicológico profissional e humanizado. Atendimento especializado em psicoterapia.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#ffffff',
    icons: [
      {
        src: '/images/logo_psi.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/images/logo_psi.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
