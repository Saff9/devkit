'use client';

import Link from 'next/link';
import { Tool, categories } from '@/utils/tools';
import * as Icons from 'lucide-react';
import { LucideIcon } from 'lucide-react';

interface ToolCardProps {
  tool: Tool;
  index?: number;
}

export default function ToolCard({ tool, index = 0 }: ToolCardProps) {
  const category = categories.find(c => c.id === tool.category);
  const IconComponent = (Icons[tool.icon as keyof typeof Icons] as LucideIcon) || Icons.Box;
  
  return (
    <Link
      href={tool.path}
      className="group relative block animate-fade-in"
      style={{ animationDelay: `${index * 0.05}s` }}
    >
      <div className="relative p-6 rounded-2xl glass card-hover overflow-hidden">
        {/* Gradient border on hover */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-cyan-500/0 group-hover:from-blue-500/20 group-hover:via-purple-500/20 group-hover:to-cyan-500/20 transition-all duration-500" />
        
        {/* Glow effect */}
        <div className={`absolute -inset-1 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 ${category?.gradient || ''}`} />
        
        <div className="relative flex items-start gap-4">
          {/* Icon */}
          <div className={`relative flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center ${category?.bgColor || 'bg-zinc-800'}`}>
            <div className={`absolute inset-0 rounded-xl ${category?.gradient || ''} opacity-20`} />
            <IconComponent className="w-6 h-6 text-white relative z-10" />
          </div>
          
          {/* Content */}
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-white group-hover:text-blue-400 transition-colors truncate">
              {tool.name}
            </h3>
            <p className="mt-1 text-sm text-zinc-400 line-clamp-2">
              {tool.description}
            </p>
            
            {/* Category badge */}
            <div className="mt-3 flex items-center gap-2">
              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${category?.badgeColor || 'bg-zinc-800 text-zinc-400'}`}>
                {category?.name}
              </span>
              
              {/* Arrow indicator */}
              <Icons.ArrowRight className="w-4 h-4 text-zinc-600 group-hover:text-blue-400 group-hover:translate-x-1 transition-all opacity-0 group-hover:opacity-100" />
            </div>
          </div>
        </div>
        
        {/* Popular badge */}
        {tool.popular && (
          <div className="absolute top-3 right-3">
            <span className="flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium bg-yellow-500/20 text-yellow-400 border border-yellow-500/30">
              <Icons.Flame className="w-3 h-3" />
              Popular
            </span>
          </div>
        )}
      </div>
    </Link>
  );
}
