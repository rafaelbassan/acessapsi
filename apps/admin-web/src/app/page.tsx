import MetricCard from '@/components/dashboard/MetricCard'
import RecentAppointments from '@/components/dashboard/RecentAppointments'
import { Calendar, Users, UserCheck, TrendingUp, Clock, AlertCircle } from 'lucide-react'

export default function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Page header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600 mt-1">Visão geral da sua clínica</p>
      </div>

      {/* Metrics grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Consultas Hoje"
          value="12"
          change="+2 desde ontem"
          changeType="increase"
          icon={Calendar}
          color="blue"
        />
        <MetricCard
          title="Receita Mensal"
          value="R$ 15.240"
          change="+12% vs mês anterior"
          changeType="increase"
          icon={TrendingUp}
          color="green"
        />
        <MetricCard
          title="Pacientes Ativos"
          value="156"
          change="+8 novos pacientes"
          changeType="increase"
          icon={Users}
          color="orange"
        />
        <MetricCard
          title="Taxa de Ocupação"
          value="78%"
          change="+5% esta semana"
          changeType="increase"
          icon={UserCheck}
          color="blue"
        />
      </div>

      {/* Grid with appointments and quick stats */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent appointments - takes 2 columns */}
        <div className="lg:col-span-2">
          <RecentAppointments />
        </div>

        {/* Quick stats */}
        <div className="space-y-6">
          {/* Pending confirmations */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Pendências</h3>
                <p className="text-sm text-gray-600 mt-1">Ações necessárias</p>
              </div>
              <AlertCircle className="h-6 w-6 text-orange-500" />
            </div>
            
            <div className="mt-4 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Confirmações pendentes</span>
                <span className="text-sm font-medium text-gray-900">3</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Reagendamentos</span>
                <span className="text-sm font-medium text-gray-900">1</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Avaliações pendentes</span>
                <span className="text-sm font-medium text-gray-900">2</span>
              </div>
            </div>
          </div>

          {/* Today's schedule */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Agenda de Hoje</h3>
                <p className="text-sm text-gray-600 mt-1">Resumo do dia</p>
              </div>
              <Clock className="h-6 w-6 text-blue-500" />
            </div>
            
            <div className="mt-4 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Horários ocupados</span>
                <span className="text-sm font-medium text-gray-900">8/12</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Próxima consulta</span>
                <span className="text-sm font-medium text-gray-900">10:00</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Profissionais ativos</span>
                <span className="text-sm font-medium text-gray-900">4/5</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 