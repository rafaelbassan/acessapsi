import { formatTime, formatDate } from '@/lib/utils'
import { Clock, User, Calendar } from 'lucide-react'

// Mock data - will be replaced with real data
const recentAppointments = [
  {
    id: '1',
    patient: 'Maria Silva',
    professional: 'Dr. João Santos',
    date: new Date('2024-01-15T10:00:00'),
    status: 'confirmed' as const,
    type: 'Consulta inicial',
  },
  {
    id: '2',
    patient: 'Pedro Oliveira',
    professional: 'Dra. Ana Costa',
    date: new Date('2024-01-15T11:00:00'),
    status: 'in_progress' as const,
    type: 'Retorno',
  },
  {
    id: '3',
    patient: 'Carlos Lima',
    professional: 'Dr. Paulo Mendes',
    date: new Date('2024-01-15T14:00:00'),
    status: 'scheduled' as const,
    type: 'Terapia de casal',
  },
  {
    id: '4',
    patient: 'Ana Ferreira',
    professional: 'Dra. Maria Santos',
    date: new Date('2024-01-15T15:00:00'),
    status: 'confirmed' as const,
    type: 'Avaliação',
  },
]

const statusConfig = {
  scheduled: { color: 'bg-yellow-100 text-yellow-800', label: 'Agendado' },
  confirmed: { color: 'bg-green-100 text-green-800', label: 'Confirmado' },
  in_progress: { color: 'bg-blue-100 text-blue-800', label: 'Em andamento' },
  completed: { color: 'bg-gray-100 text-gray-800', label: 'Concluído' },
  cancelled: { color: 'bg-red-100 text-red-800', label: 'Cancelado' },
  no_show: { color: 'bg-red-100 text-red-800', label: 'Não compareceu' },
}

export default function RecentAppointments() {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="p-6 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900">Consultas Recentes</h3>
        <p className="text-sm text-gray-600 mt-1">Próximas consultas de hoje</p>
      </div>
      
      <div className="divide-y divide-gray-200">
        {recentAppointments.map((appointment) => (
          <div key={appointment.id} className="p-6 hover:bg-gray-50">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <div className="h-10 w-10 bg-primary-100 rounded-full flex items-center justify-center">
                    <User className="h-5 w-5 text-primary-600" />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">
                    {appointment.patient}
                  </p>
                  <p className="text-sm text-gray-500 truncate">
                    {appointment.professional}
                  </p>
                  <p className="text-xs text-gray-400 mt-1">
                    {appointment.type}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="text-right">
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="h-4 w-4 mr-1" />
                    {formatDate(appointment.date)}
                  </div>
                  <div className="flex items-center text-sm text-gray-500 mt-1">
                    <Clock className="h-4 w-4 mr-1" />
                    {formatTime(appointment.date)}
                  </div>
                </div>
                
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${statusConfig[appointment.status].color}`}>
                  {statusConfig[appointment.status].label}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="p-4 bg-gray-50 border-t border-gray-200">
        <button className="w-full text-center text-sm text-primary-600 hover:text-primary-700 font-medium">
          Ver todas as consultas
        </button>
      </div>
    </div>
  )
} 