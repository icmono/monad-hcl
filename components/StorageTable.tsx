'use client';

import { useState } from 'react';
import { HardDrive, Filter, Search, ChevronUp, ChevronDown, Check, X, AlertCircle } from 'lucide-react';
import { storageData, type Storage } from '@/lib/data';

type SortKey = keyof Storage;
type SortOrder = 'asc' | 'desc';

export default function StorageTable() {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [generationFilter, setGenerationFilter] = useState<string>('all');
  const [sortKey, setSortKey] = useState<SortKey>('randomWrite');
  const [sortOrder, setSortOrder] = useState<SortOrder>('desc');

  const handleSort = (key: SortKey) => {
    if (sortKey === key) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortKey(key);
      setSortOrder('desc');
    }
  };

  const parseIOPS = (iops: string): number => {
    const match = iops.match(/(\d+(?:\.\d+)?)/);
    if (!match) return 0;
    const value = parseFloat(match[1]);
    if (iops.includes('K')) return value * 1000;
    if (iops.includes('M')) return value * 1000000;
    return value;
  };

  const parseSpeed = (speed: string): number => {
    const match = speed.match(/(\d+(?:,\d+)?)/);
    if (!match) return 0;
    return parseFloat(match[1].replace(',', ''));
  };

  const filteredAndSortedData = storageData
    .filter(storage => {
      const matchesSearch = 
        storage.manufacturer.toLowerCase().includes(searchTerm.toLowerCase()) ||
        storage.model.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = categoryFilter === 'all' || storage.category === categoryFilter;
      const matchesGeneration = generationFilter === 'all' || storage.generation === generationFilter;
      return matchesSearch && matchesCategory && matchesGeneration;
    })
    .sort((a, b) => {
      const aVal = a[sortKey];
      const bVal = b[sortKey];
      
      if (sortKey === 'randomRead' || sortKey === 'randomWrite') {
        const aIOPS = parseIOPS(String(aVal));
        const bIOPS = parseIOPS(String(bVal));
        return sortOrder === 'asc' ? aIOPS - bIOPS : bIOPS - aIOPS;
      }
      
      if (sortKey === 'sequentialRead' || sortKey === 'sequentialWrite') {
        const aSpeed = parseSpeed(String(aVal));
        const bSpeed = parseSpeed(String(bVal));
        return sortOrder === 'asc' ? aSpeed - bSpeed : bSpeed - aSpeed;
      }
      
      if (typeof aVal === 'string' && typeof bVal === 'string') {
        return sortOrder === 'asc' 
          ? aVal.localeCompare(bVal)
          : bVal.localeCompare(aVal);
      }
      
      return 0;
    });

  const SortIcon = ({ column }: { column: SortKey }) => {
    if (sortKey !== column) return null;
    return sortOrder === 'asc' 
      ? <ChevronUp className="w-4 h-4 inline-block ml-1" />
      : <ChevronDown className="w-4 h-4 inline-block ml-1" />;
  };

  const getGenerationBadgeStyle = (gen: string) => {
    switch(gen) {
      case 'gen5':
        return { backgroundColor: 'rgba(131, 110, 249, 0.2)', color: '#836EF9' };
      case 'gen4':
        return { backgroundColor: 'rgba(0, 255, 136, 0.2)', color: '#00FF88' };
      case 'gen3':
        return { backgroundColor: 'rgba(255, 184, 77, 0.2)', color: '#FFB84D' };
      default:
        return {};
    }
  };

  return (
    <section id="storage" className="section-padding py-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-center gap-3 mb-4">
          <HardDrive className="w-8 h-8" style={{ color: '#836EF9' }} />
          <h2 className="text-4xl font-bold">
            <span className="gradient-text">Storage Drives</span>
          </h2>
        </div>
        <p className="text-center mb-12 max-w-2xl mx-auto" style={{ color: '#A8A9B4' }}>
          High-performance NVMe SSDs tested for Monad validator workloads
        </p>

        <div className="mb-6 p-6 rounded-xl" style={{ backgroundColor: '#1A1C1B' }}>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5" style={{ color: '#A8A9B4' }} />
                <input
                  type="text"
                  placeholder="Search storage drives..."
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
                <option value="all">All Types</option>
                <option value="enterprise">Enterprise</option>
                <option value="consumer">Consumer</option>
                <option value="datacenter">Datacenter</option>
              </select>
              
              <select
                value={generationFilter}
                onChange={(e) => setGenerationFilter(e.target.value)}
                className="px-4 py-2 rounded-lg"
                style={{ 
                  backgroundColor: '#0E100F',
                  border: '1px solid rgba(131, 110, 249, 0.2)',
                  color: '#FBFAF9'
                }}
              >
                <option value="all">All Generations</option>
                <option value="gen5">PCIe Gen 5</option>
                <option value="gen4">PCIe Gen 4</option>
                <option value="gen3">PCIe Gen 3</option>
              </select>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto rounded-xl" style={{ backgroundColor: '#1A1C1B' }}>
          <table className="w-full">
            <thead>
              <tr style={{ borderBottom: '1px solid rgba(131, 110, 249, 0.2)' }}>
                <th className="text-left py-4 px-4">
                  <span className="text-sm font-semibold" style={{ color: '#A8A9B4' }}>Status</span>
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
                <th className="text-left py-4 px-4">
                  <span className="text-sm font-semibold" style={{ color: '#A8A9B4' }}>Interface</span>
                </th>
                <th className="text-left py-4 px-4">
                  <span className="text-sm font-semibold" style={{ color: '#A8A9B4' }}>Capacity</span>
                </th>
                <th 
                  className="text-left py-4 px-4 cursor-pointer"
                  onClick={() => handleSort('sequentialRead')}
                  style={{ color: '#A8A9B4' }}
                >
                  <span className="text-sm font-semibold">
                    Seq Read
                    <SortIcon column="sequentialRead" />
                  </span>
                </th>
                <th 
                  className="text-left py-4 px-4 cursor-pointer"
                  onClick={() => handleSort('sequentialWrite')}
                  style={{ color: '#A8A9B4' }}
                >
                  <span className="text-sm font-semibold">
                    Seq Write
                    <SortIcon column="sequentialWrite" />
                  </span>
                </th>
                <th 
                  className="text-left py-4 px-4 cursor-pointer"
                  onClick={() => handleSort('randomRead')}
                  style={{ color: '#A8A9B4' }}
                >
                  <span className="text-sm font-semibold">
                    Random Read
                    <SortIcon column="randomRead" />
                  </span>
                </th>
                <th 
                  className="text-left py-4 px-4 cursor-pointer"
                  onClick={() => handleSort('randomWrite')}
                  style={{ color: '#A8A9B4' }}
                >
                  <span className="text-sm font-semibold">
                    Random Write
                    <SortIcon column="randomWrite" />
                  </span>
                </th>
                <th className="text-left py-4 px-4">
                  <span className="text-sm font-semibold" style={{ color: '#A8A9B4' }}>Notes</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredAndSortedData.map((storage) => (
                <tr
                  key={storage.id}
                  className="table-row-hover"
                  style={{ 
                    borderBottom: '1px solid rgba(131, 110, 249, 0.1)',
                    backgroundColor: storage.recommended ? 'rgba(131, 110, 249, 0.05)' : 'transparent'
                  }}
                >
                  <td className="py-4 px-4">
                    {storage.recommended ? (
                      <Check className="w-5 h-5" style={{ color: '#00FF88' }} />
                    ) : storage.notes?.includes('slowdowns') ? (
                      <AlertCircle className="w-5 h-5" style={{ color: '#FFB84D' }} />
                    ) : (
                      <X className="w-5 h-5" style={{ color: '#A8A9B4' }} />
                    )}
                  </td>
                  <td className="py-4 px-4">
                    <span className="text-sm font-medium">{storage.manufacturer}</span>
                  </td>
                  <td className="py-4 px-4">
                    <span className="text-sm font-mono">{storage.model}</span>
                  </td>
                  <td className="py-4 px-4">
                    <span 
                      className="text-sm px-2 py-1 rounded-md inline-block"
                      style={getGenerationBadgeStyle(storage.generation)}
                    >
                      {storage.interface}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <span className="text-sm">{storage.capacity}</span>
                  </td>
                  <td className="py-4 px-4">
                    <span className="text-sm font-medium">{storage.sequentialRead}</span>
                  </td>
                  <td className="py-4 px-4">
                    <span className="text-sm font-medium">{storage.sequentialWrite}</span>
                  </td>
                  <td className="py-4 px-4">
                    <span className="text-sm font-medium" style={{ color: '#836EF9' }}>{storage.randomRead}</span>
                  </td>
                  <td className="py-4 px-4">
                    <span className="text-sm font-medium" style={{ color: '#836EF9' }}>{storage.randomWrite}</span>
                  </td>
                  <td className="py-4 px-4">
                    {storage.notes && (
                      <span className="text-xs block max-w-xs" style={{ color: '#A8A9B4' }}>
                        {storage.notes}
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredAndSortedData.length === 0 && (
          <div className="text-center py-12">
            <p style={{ color: '#A8A9B4' }}>No storage drives found matching your criteria</p>
          </div>
        )}
      </div>
    </section>
  );
}