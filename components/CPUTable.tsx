'use client';

import { useState } from 'react';
import { Cpu, Filter, Search, ChevronUp, ChevronDown, Check, X } from 'lucide-react';
import { cpuData, type CPU } from '@/lib/data';

type SortKey = keyof CPU;
type SortOrder = 'asc' | 'desc';

export default function CPUTable() {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [sortKey, setSortKey] = useState<SortKey>('baseClock');
  const [sortOrder, setSortOrder] = useState<SortOrder>('desc');

  const handleSort = (key: SortKey) => {
    if (sortKey === key) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortKey(key);
      setSortOrder('desc');
    }
  };

  const filteredAndSortedData = cpuData
    .filter(cpu => {
      const matchesSearch = 
        cpu.manufacturer.toLowerCase().includes(searchTerm.toLowerCase()) ||
        cpu.model.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = categoryFilter === 'all' || cpu.category === categoryFilter;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      const aVal = a[sortKey];
      const bVal = b[sortKey];
      
      if (typeof aVal === 'string' && typeof bVal === 'string') {
        return sortOrder === 'asc' 
          ? aVal.localeCompare(bVal)
          : bVal.localeCompare(aVal);
      }
      
      if (typeof aVal === 'number' && typeof bVal === 'number') {
        return sortOrder === 'asc' ? aVal - bVal : bVal - aVal;
      }
      
      return 0;
    });

  const SortIcon = ({ column }: { column: SortKey }) => {
    if (sortKey !== column) return null;
    return sortOrder === 'asc' 
      ? <ChevronUp className="w-4 h-4 inline-block ml-1" />
      : <ChevronDown className="w-4 h-4 inline-block ml-1" />;
  };

  return (
    <section id="cpu" className="section-padding py-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Cpu className="w-8 h-8" style={{ color: '#836EF9' }} />
          <h2 className="text-4xl font-bold">
            <span className="gradient-text">Recommended CPUs</span>
          </h2>
        </div>
        <p className="text-center mb-12 max-w-2xl mx-auto" style={{ color: '#A8A9B4' }}>
          Tested and verified processors for optimal Monad validator performance
        </p>

        <div className="mb-6 p-6 rounded-xl" style={{ backgroundColor: '#1A1C1B' }}>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5" style={{ color: '#A8A9B4' }} />
                <input
                  type="text"
                  placeholder="Search CPUs..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 rounded-lg"
                  style={{ 
                    backgroundColor: '#0E100F',
                    border: '1px solid rgba(131, 110, 249, 0.2)',
                    color: '#FBFAF9'
                  }}
                />
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5" style={{ color: '#A8A9B4' }} />
              <select
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                className="px-4 py-2 rounded-lg"
                style={{ 
                  backgroundColor: '#0E100F',
                  border: '1px solid rgba(131, 110, 249, 0.2)',
                  color: '#FBFAF9'
                }}
              >
                <option value="all">All Categories</option>
                <option value="desktop">Desktop</option>
                <option value="server">Server</option>
                <option value="hedt">HEDT</option>
              </select>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto rounded-xl" style={{ backgroundColor: '#1A1C1B' }}>
          <table className="w-full">
            <thead>
              <tr style={{ borderBottom: '1px solid rgba(131, 110, 249, 0.2)' }}>
                <th className="text-left py-4 px-4">
                  <span className="text-sm font-semibold" style={{ color: '#A8A9B4' }}>Recommended</span>
                </th>
                <th 
                  className="text-left py-4 px-4 cursor-pointer"
                  onClick={() => handleSort('manufacturer')}
                  style={{ color: '#A8A9B4' }}
                >
                  <span className="text-sm font-semibold">
                    Manufacturer
                    <SortIcon column="manufacturer" />
                  </span>
                </th>
                <th 
                  className="text-left py-4 px-4 cursor-pointer"
                  onClick={() => handleSort('model')}
                  style={{ color: '#A8A9B4' }}
                >
                  <span className="text-sm font-semibold">
                    Model
                    <SortIcon column="model" />
                  </span>
                </th>
                <th 
                  className="text-left py-4 px-4 cursor-pointer"
                  onClick={() => handleSort('baseClock')}
                  style={{ color: '#A8A9B4' }}
                >
                  <span className="text-sm font-semibold">
                    Base Clock
                    <SortIcon column="baseClock" />
                  </span>
                </th>
                <th className="text-left py-4 px-4">
                  <span className="text-sm font-semibold" style={{ color: '#A8A9B4' }}>Max Boost</span>
                </th>
                <th 
                  className="text-left py-4 px-4 cursor-pointer"
                  onClick={() => handleSort('cores')}
                  style={{ color: '#A8A9B4' }}
                >
                  <span className="text-sm font-semibold">
                    Cores
                    <SortIcon column="cores" />
                  </span>
                </th>
                <th className="text-left py-4 px-4">
                  <span className="text-sm font-semibold" style={{ color: '#A8A9B4' }}>Threads</span>
                </th>
                <th className="text-left py-4 px-4">
                  <span className="text-sm font-semibold" style={{ color: '#A8A9B4' }}>TDP</span>
                </th>
                <th className="text-left py-4 px-4">
                  <span className="text-sm font-semibold" style={{ color: '#A8A9B4' }}>Avg Temp</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredAndSortedData.map((cpu) => (
                <tr
                  key={cpu.id}
                  className="table-row-hover"
                  style={{ 
                    borderBottom: '1px solid rgba(131, 110, 249, 0.1)',
                    backgroundColor: cpu.recommended ? 'rgba(131, 110, 249, 0.05)' : 'transparent'
                  }}
                >
                  <td className="py-4 px-4">
                    {cpu.recommended ? (
                      <Check className="w-5 h-5" style={{ color: '#00FF88' }} />
                    ) : (
                      <X className="w-5 h-5" style={{ color: '#A8A9B4' }} />
                    )}
                  </td>
                  <td className="py-4 px-4">
                    <span className="text-sm font-medium">{cpu.manufacturer}</span>
                  </td>
                  <td className="py-4 px-4">
                    <span className="text-sm font-mono">{cpu.model}</span>
                  </td>
                  <td className="py-4 px-4">
                    <span className="text-sm font-medium" style={{ color: '#836EF9' }}>{cpu.baseClock}</span>
                  </td>
                  <td className="py-4 px-4">
                    <span className="text-sm">{cpu.maxBoostClock}</span>
                  </td>
                  <td className="py-4 px-4">
                    <span className="text-sm font-medium">{cpu.cores}</span>
                  </td>
                  <td className="py-4 px-4">
                    <span className="text-sm">{cpu.threads}</span>
                  </td>
                  <td className="py-4 px-4">
                    <span className="text-sm">{cpu.tdp}</span>
                  </td>
                  <td className="py-4 px-4">
                    <span className="text-sm">{cpu.avgTemp || '-'}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredAndSortedData.length === 0 && (
          <div className="text-center py-12">
            <p style={{ color: '#A8A9B4' }}>No CPUs found matching your criteria</p>
          </div>
        )}
      </div>
    </section>
  );
}