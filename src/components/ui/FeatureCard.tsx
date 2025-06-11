import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, DivideIcon as LucideIcon } from 'lucide-react'

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
  href: string
  color: string
}

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  icon: Icon, 
  title, 
  description, 
  href, 
  color 
}) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      className="group"
    >
      <Link to={href} className="block">
        <div className="card h-full hover:border-gray-700 group-hover:shadow-2xl">
          <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${color} flex items-center justify-center mb-4`}>
            <Icon className="w-6 h-6 text-white" />
          </div>
          
          <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-primary-400 transition-colors">
            {title}
          </h3>
          
          <p className="text-gray-400 mb-4 leading-relaxed">
            {description}
          </p>
          
          <div className="flex items-center text-primary-400 group-hover:text-primary-300 transition-colors">
            <span className="text-sm font-medium">Learn more</span>
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

export default FeatureCard