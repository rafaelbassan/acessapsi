import { Calendar, Plus, Filter, Clock, User, ChevronLeft, ChevronRight } from 'lucide-react'
import { formatTime, formatDate } from '@/lib/utils'

// Mock data - will be replaced with real data
const appointments = [
  {
    id: '1',
    patient: 'Maria Silva',
    professional: 'Dr. João Santos',
    date: new Date('2024-01-15T09:00:00'),
    duration: 60,
    status: 'confirmed' as const,
    type: 'Consulta inicial',
    notes: 'Primeira consulta para avaliação',
  },
  {
    id: '2',
    patient: 'Pedro Oliveira',
    professional: 'Dra. Ana Costa',
    date: new Date('2024-01-15T10:00:00'),
    duration: 50,
    status: 'in_progress' as const,
    type: 'Retorno',
    notes: 'Sessão de acompanhamento',
  },
  {
    id: '3',
    patient: 'Carlos Mendes',
    professional: 'Dr. João Santos',
    date: new Date('2024-01-15T11:00:00'),
    duration: 60,
    status: 'scheduled' as const,
    type: 'Avaliação',
    notes: 'Avaliação neuropsicológica',
  },
  {
    id: '4',
    patient: 'Ana Ferreira',
    professional: 'Dra. Ana Costa',
    date: new Date('2024-01-15T14:00:00'),
    duration: 50,
    status: 'confirmed' as const,
    type: 'Terapia individual',
    notes: 'Sessão de terapia cognitiva',
  },
  {
    id: '5',
    patient: 'Sofia Lima',
    professional: 'Dr. Paulo Mendes',
    date: new Date('2024-01-15T15:00:00'),
    duration: 90,
    status: 'scheduled' as const,
    type: 'Terapia de casal',
    notes: 'Primeira sessão do casal',
  },
]

const statusConfig = {
  scheduled: { color: 'bg-yellow-100 text-yellow-800 border-yellow-200', label: 'Agendado' },
  confirmed: { color: 'bg-green-100 text-green-800 border-green-200', label: 'Confirmado' },
  in_progress: { color: 'bg-blue-100 text-blue-800 border-blue-200', label: 'Em andamento' },
  completed: { color: 'bg-gray-100 text-gray-800 border-gray-200', label: 'Concluído' },
  cancelled: { color: 'bg-red-100 text-red-800 border-red-200', label: 'Cancelado' },
  no_show: { color: 'bg-red-100 text-red-800 border-red-200', label: 'Não compareceu' },
}

export default function AppointmentsPage() {
  const currentDate = new Date('2024-01-15') // Mock current date

  return (
    <div className="space-y-6">
      {/* Page header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Agenda</h1>
          <p className="text-gray-600 mt-1">Gerencie todas as consultas da clínica</p>
        </div>
        <button className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2">
          <Plus className="h-4 w-4" />
          <span>Nova Consulta</span>
        </button>
      </div>

      {/* Date navigation and filters */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          {/* Date navigation */}
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-100 rounded-lg">
              <ChevronLeft className="h-4 w-4" />
            </button>
            <div className="text-center">
              <h2 className="text-lg font-semibold text-gray-900">
                {currentDate.toLocaleDateString('pt-BR', { 
                  weekday: 'long', 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </h2>
              <p className="text-sm text-gray-500">Hoje</p>
            </div>
            <button className="p-2 hover:bg-gray-100 rounded-lg">
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>

          {/* View options and filters */}
          <div className="flex gap-2">
            <select className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent">
              <option value="day">Dia</option>
              <option value="week">Semana</option>
              <option value="month">Mês</option>
            </select>
            <select className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent">
              <option value="">Todos os profissionais</option>
              <option value="joao">Dr. João Santos</option>
              <option value="ana">Dra. Ana Costa</option>
              <option value="paulo">Dr. Paulo Mendes</option>
            </select>
            <select className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent">
              <option value="">Todos os status</option>
              <option value="scheduled">Agendado</option>
              <option value="confirmed">Confirmado</option>
              <option value="in_progress">Em andamento</option>
              <option value="completed">Concluído</option>
            </select>
          </div>
        </div>
      </div>

      {/* Appointments timeline */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900 flex items-center">
            <Calendar className="h-5 w-5 mr-2" />
            Consultas de Hoje
          </h3>
          <span className="text-sm text-gray-500">
            {appointments.length} consultas agendadas
          </span>
        </div>
        
        <div className="divide-y divide-gray-200">
          {appointments.map((appointment) => (
            <div key={appointment.id} className="p-6 hover:bg-gray-50">
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4">
                  {/* Time */}
                  <div className="flex-shrink-0 text-center">
                    <div className="text-lg font-semibold text-gray-900">
                      {formatTime(appointment.date)}
                    </div>
                    <div className="text-xs text-gray-500">
                      {appointment.duration}min
                    </div>
                  </div>

                  {/* Appointment details */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2 mb-2">
                      <h4 className="text-lg font-medium text-gray-900 truncate">
                        {appointment.patient}
                      </h4>
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${statusConfig[appointment.status].color}`}>
                        {statusConfig[appointment.status].label}
                      </span>
                    </div>
                    
                    <div className="flex items-center text-sm text-gray-600 mb-1">
                      <User className="h-4 w-4 mr-1" />
                      {appointment.professional}
                    </div>
                    
                    <div className="text-sm text-gray-600 mb-2">
                      <span className="font-medium">Tipo:</span> {appointment.type}
                    </div>
                    
                    {appointment.notes && (
                      <div className="text-sm text-gray-500">
                        <span className="font-medium">Observações:</span> {appointment.notes}
                      </div>
                    )}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex-shrink-0 flex space-x-2">
                  {appointment.status === 'scheduled' && (
                    <button className="px-3 py-1 text-xs font-medium text-green-700 bg-green-100 rounded-lg hover:bg-green-200">
                      Confirmar
                    </button>
                  )}
                  {appointment.status === 'confirmed' && (
                    <button className="px-3 py-1 text-xs font-medium text-blue-700 bg-blue-100 rounded-lg hover:bg-blue-200">
                      Iniciar
                    </button>
                  )}
                  {appointment.status === 'in_progress' && (
                    <button className="px-3 py-1 text-xs font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200">
                      Finalizar
                    </button>
                  )}
                  <button className="px-3 py-1 text-xs font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200">
                    Editar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary footer */}
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
          <div className="flex items-center justify-between text-sm">
            <div className="flex space-x-6">
              <span className="text-gray-600">
                <span className="font-medium text-gray-900">2</span> confirmadas
              </span>
              <span className="text-gray-600">
                <span className="font-medium text-gray-900">2</span> agendadas
              </span>
              <span className="text-gray-600">
                <span className="font-medium text-gray-900">1</span> em andamento
              </span>
            </div>
            <div className="text-gray-600">
              Total: <span className="font-medium text-gray-900">{appointments.length} consultas</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 