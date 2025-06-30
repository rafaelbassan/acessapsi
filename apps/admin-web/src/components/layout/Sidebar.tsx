'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import {
  LayoutDashboard,
  Users,
  UserCheck,
  Calendar,
  FileText,
  Settings,
  Building2,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react'
import { useState } from 'react'

const navigation = [
  {
    name: 'Dashboard',
    href: '/',
    icon: LayoutDashboard,
  },
  {
    name: 'Profissionais',
    href: '/professionals',
    icon: UserCheck,
  },
  {
    name: 'Pacientes',
    href: '/patients',
    icon: Users,
  },
  {
    name: 'Agenda',
    href: '/appointments',
    icon: Calendar,
  },
  {
    name: 'Relatórios',
    href: '/reports',
    icon: FileText,
  },
  {
    name: 'Configurações',
    href: '/settings',
    icon: Settings,
  },
]

export default function Sidebar() {
  const pathname = usePathname()
  const [collapsed, setCollapsed] = useState(false)

  return (
    <div className={cn(
      "flex flex-col h-full bg-white border-r border-gray-200 transition-all duration-300",
      collapsed ? "w-16" : "w-64"
    )}>
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        <div className={cn(
          "flex items-center space-x-2 transition-opacity duration-300",
          collapsed && "opacity-0"
        )}>
          <Building2 className="h-8 w-8 text-primary-600" />
          <span className="text-xl font-bold text-gray-900">PsiClin</span>
        </div>
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-1.5 rounded-lg hover:bg-gray-100 transition-colors"
        >
          {collapsed ? (
            <ChevronRight className="h-4 w-4 text-gray-500" />
          ) : (
            <ChevronLeft className="h-4 w-4 text-gray-500" />
          )}
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-2 py-4 space-y-1">
        {navigation.map((item) => {
          const isActive = pathname === item.href
          const Icon = item.icon

          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "group flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors",
                isActive
                  ? "bg-primary-50 text-primary-700 border-r-2 border-primary-600 mr-2"
                  : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
              )}
            >
              <Icon
                className={cn(
                  "flex-shrink-0 h-5 w-5",
                  isActive ? "text-primary-600" : "text-gray-400 group-hover:text-gray-500",
                  collapsed ? "mr-0" : "mr-3"
                )}
              />
              <span className={cn(
                "transition-opacity duration-300",
                collapsed && "opacity-0 w-0"
              )}>
                {item.name}
              </span>
            </Link>
          )
        })}
      </nav>

      {/* Footer */}
      <div className={cn(
        "p-4 border-t border-gray-200 transition-opacity duration-300",
        collapsed && "opacity-0"
      )}>
        <div className="text-xs text-gray-500 text-center">
          PsiClin Admin v1.0
        </div>
      </div>
    </div>
  )
} 