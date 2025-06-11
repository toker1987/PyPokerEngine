import React from 'react'
import { DivideIcon as LucideIcon } from 'lucide-react'

interface StatsCardProps {
  label: string
  value: string
  icon: LucideIcon
}

const StatsCard: React.FC<StatsCardProps> = ({ label, value, icon: Icon }) => {
  return (
    <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-2xl font-bold text-white">{value}</p>
          <p className="text-gray-400 text-sm">{label}</p>
        </div>
        <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
          <Icon className="w-5 h-5 text-white" />
        </div>
      </div>
    </div>
  )
}

export default StatsCard