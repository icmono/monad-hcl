import { cpuData, storageData, enterpriseServers, customServers } from '@/lib/data';

export default function Home() {
  return (
    <div className="container">
      <header className="section">
        <h1>Monad Hardware Compatibility List</h1>
        <p>Community-maintained hardware guide for running Monad validators with optimal performance</p>
        <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '1.5rem' }}>
          <span className="badge badge-purple">Last Updated: January 2025</span>
          <span className="badge badge-info">Testnet Phase</span>
          <span className="badge badge-success">Community Driven</span>
        </div>
      </header>

      <nav className="section" style={{background: 'linear-gradient(135deg, rgba(131,110,249,0.05) 0%, rgba(131,110,249,0.02) 100%)', borderRadius: '12px', padding: '2rem'}}>
        <h2 style={{fontSize: '1.25rem', marginBottom: '1.5rem', color: 'var(--monad-purple)'}}>📍 Quick Navigation</h2>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem'}}>
          <a href="#baseline-hardware" style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            padding: '1rem',
            background: 'var(--monad-card)',
            border: '1px solid rgba(131,110,249,0.2)',
            borderRadius: '8px',
            textDecoration: 'none',
            color: 'var(--monad-text)',
            transition: 'all 0.2s ease'
          }} className="nav-card">
            <span style={{fontSize: '1.5rem'}}>⚙️</span>
            <div>
              <div style={{fontWeight: '600', marginBottom: '0.25rem'}}>Baseline Hardware</div>
              <div style={{fontSize: '0.85rem', opacity: '0.7'}}>Minimum requirements</div>
            </div>
          </a>
          
          <a href="#recommended-hardware" style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            padding: '1rem',
            background: 'var(--monad-card)',
            border: '1px solid rgba(131,110,249,0.2)',
            borderRadius: '8px',
            textDecoration: 'none',
            color: 'var(--monad-text)',
            transition: 'all 0.2s ease'
          }} className="nav-card">
            <span style={{fontSize: '1.5rem'}}>✅</span>
            <div>
              <div style={{fontWeight: '600', marginBottom: '0.25rem'}}>Recommended Hardware</div>
              <div style={{fontSize: '0.85rem', opacity: '0.7'}}>Tested configurations</div>
            </div>
          </a>
          
          <a href="#cpu-tuning" style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            padding: '1rem',
            background: 'var(--monad-card)',
            border: '1px solid rgba(131,110,249,0.2)',
            borderRadius: '8px',
            textDecoration: 'none',
            color: 'var(--monad-text)',
            transition: 'all 0.2s ease'
          }} className="nav-card">
            <span style={{fontSize: '1.5rem'}}>🔧</span>
            <div>
              <div style={{fontWeight: '600', marginBottom: '0.25rem'}}>CPU Performance</div>
              <div style={{fontSize: '0.85rem', opacity: '0.7'}}>Tuning guide</div>
            </div>
          </a>
          
          <a href="#firewall-tuning" style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            padding: '1rem',
            background: 'var(--monad-card)',
            border: '1px solid rgba(131,110,249,0.2)',
            borderRadius: '8px',
            textDecoration: 'none',
            color: 'var(--monad-text)',
            transition: 'all 0.2s ease'
          }} className="nav-card">
            <span style={{fontSize: '1.5rem'}}>🔥</span>
            <div>
              <div style={{fontWeight: '600', marginBottom: '0.25rem'}}>Firewall Config</div>
              <div style={{fontSize: '0.85rem', opacity: '0.7'}}>PPS policy setup</div>
            </div>
          </a>
          
          <a href="#software" style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            padding: '1rem',
            background: 'var(--monad-card)',
            border: '1px solid rgba(131,110,249,0.2)',
            borderRadius: '8px',
            textDecoration: 'none',
            color: 'var(--monad-text)',
            transition: 'all 0.2s ease'
          }} className="nav-card">
            <span style={{fontSize: '1.5rem'}}>💿</span>
            <div>
              <div style={{fontWeight: '600', marginBottom: '0.25rem'}}>Software & OS</div>
              <div style={{fontSize: '0.85rem', opacity: '0.7'}}>Ubuntu requirements</div>
            </div>
          </a>
        </div>
      </nav>

      <section id="baseline-hardware" className="section" style={{background: 'linear-gradient(135deg, rgba(131,110,249,0.05) 0%, rgba(131,110,249,0.02) 100%)', borderRadius: '12px', padding: '2rem'}}>
        <h2 style={{fontSize: '1.25rem', marginBottom: '1.5rem', color: 'var(--monad-purple)'}}>⚙️ Baseline Hardware Requirements</h2>
        <p style={{marginBottom: '2rem', fontSize: '0.95rem', opacity: 0.8}}>
          Minimum specifications for running a Monad validator node on testnet and mainnet
        </p>
        
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem'}}>
          <div style={{
            background: 'var(--monad-card)',
            border: '1px solid rgba(131,110,249,0.2)',
            borderRadius: '8px',
            padding: '1rem',
            transition: 'all 0.2s ease'
          }} className="hw-card">
            <div style={{display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem'}}>
              <span style={{fontSize: '1.5rem'}}>🖥️</span>
              <div>
                <div style={{fontWeight: '600', marginBottom: '0.25rem'}}>CPU</div>
                <div style={{fontSize: '0.85rem', opacity: '0.7'}}>Processing power</div>
              </div>
            </div>
            <div style={{fontSize: '0.9rem'}}>
              <div style={{marginBottom: '0.5rem'}}>
                <span style={{color: 'var(--monad-purple)', fontWeight: '600'}}>Cores:</span> 16+ physical
              </div>
              <div style={{marginBottom: '0.5rem'}}>
                <span style={{color: 'var(--monad-purple)', fontWeight: '600'}}>Clock:</span> 4.5GHz+ base
              </div>
              <div style={{marginBottom: '0.5rem'}}>
                <span style={{color: 'var(--monad-purple)', fontWeight: '600'}}>Architecture:</span>
                <ul style={{margin: '0.25rem 0 0 1rem', padding: 0, fontSize: '0.85rem'}}>
                  <li>AMD Zen 4+ (Ryzen 7000/9000)</li>
                  <li>Intel Raptor Lake+ (13th gen)</li>
                </ul>
              </div>
              <div style={{
                background: 'rgba(131,110,249,0.1)',
                border: '1px solid var(--monad-purple)',
                borderRadius: '6px',
                padding: '0.5rem',
                marginTop: '0.75rem',
                fontSize: '0.8rem',
                textAlign: 'center'
              }}>
                ⭐ AMD Ryzen 9 7950X, 9950X, EPYC 4584PX
              </div>
            </div>
          </div>
          
          <div style={{
            background: 'var(--monad-card)',
            border: '1px solid rgba(131,110,249,0.2)',
            borderRadius: '8px',
            padding: '1rem',
            transition: 'all 0.2s ease'
          }} className="hw-card">
            <div style={{display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem'}}>
              <span style={{fontSize: '1.5rem'}}>💾</span>
              <div>
                <div style={{fontWeight: '600', marginBottom: '0.25rem'}}>Memory</div>
                <div style={{fontSize: '0.85rem', opacity: '0.7'}}>RAM requirements</div>
              </div>
            </div>
            <div style={{fontSize: '0.9rem'}}>
              <div style={{marginBottom: '0.5rem'}}>
                <span style={{color: 'var(--monad-purple)', fontWeight: '600'}}>Minimum:</span> 32 GB DDR4/DDR5
              </div>
              <div style={{marginBottom: '0.5rem'}}>
                <span style={{color: 'var(--monad-purple)', fontWeight: '600'}}>Recommended:</span> 64 GB
              </div>
              <div style={{marginBottom: '0.5rem'}}>
                <span style={{color: 'var(--monad-purple)', fontWeight: '600'}}>Speed:</span> 3200MHz+
              </div>
              <div style={{
                background: 'rgba(59,130,246,0.1)',
                border: '1px solid rgba(59,130,246,0.3)',
                borderRadius: '6px',
                padding: '0.5rem',
                marginTop: '0.75rem',
                fontSize: '0.8rem',
                textAlign: 'center',
                color: '#3B82F6'
              }}>
                💡 ECC memory for production
              </div>
            </div>
          </div>
          
          <div style={{
            background: 'var(--monad-card)',
            border: '1px solid rgba(131,110,249,0.2)',
            borderRadius: '8px',
            padding: '1rem',
            transition: 'all 0.2s ease'
          }} className="hw-card">
            <div style={{display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem'}}>
              <span style={{fontSize: '1.5rem'}}>💿</span>
              <div>
                <div style={{fontWeight: '600', marginBottom: '0.25rem'}}>Storage</div>
                <div style={{fontSize: '0.85rem', opacity: '0.7'}}>SSD requirements</div>
              </div>
            </div>
            <div style={{fontSize: '0.9rem'}}>
              <div style={{marginBottom: '0.5rem'}}>
                <span style={{color: 'var(--monad-purple)', fontWeight: '600'}}>Capacity:</span>
                <ul style={{margin: '0.25rem 0 0 1rem', padding: 0, fontSize: '0.85rem'}}>
                  <li>2TB NVMe (TrieDB)</li>
                  <li>2TB NVMe (MonadBFT/OS)</li>
                </ul>
              </div>
              <div style={{marginBottom: '0.5rem'}}>
                <span style={{color: 'var(--monad-purple)', fontWeight: '600'}}>Speed:</span> PCIe Gen4+
              </div>
              <div style={{marginBottom: '0.5rem'}}>
                <span style={{color: 'var(--monad-purple)', fontWeight: '600'}}>IOPS:</span> 1M+ random write
              </div>
              <div style={{display: 'flex', gap: '0.25rem', marginTop: '0.75rem'}}>
                <span style={{
                  background: 'rgba(16,185,129,0.1)',
                  border: '1px solid rgba(16,185,129,0.3)',
                  borderRadius: '4px',
                  padding: '0.25rem 0.5rem',
                  fontSize: '0.75rem',
                  color: '#10B981'
                }}>✓ Samsung 990 PRO</span>
                <span style={{
                  background: 'rgba(239,68,68,0.1)',
                  border: '1px solid rgba(239,68,68,0.3)',
                  borderRadius: '4px',
                  padding: '0.25rem 0.5rem',
                  fontSize: '0.75rem',
                  color: '#EF4444'
                }}>✗ Nextorage</span>
              </div>
            </div>
          </div>
          
          <div style={{
            background: 'var(--monad-card)',
            border: '1px solid rgba(131,110,249,0.2)',
            borderRadius: '8px',
            padding: '1rem',
            transition: 'all 0.2s ease'
          }} className="hw-card">
            <div style={{display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem'}}>
              <span style={{fontSize: '1.5rem'}}>🌐</span>
              <div>
                <div style={{fontWeight: '600', marginBottom: '0.25rem'}}>Network</div>
                <div style={{fontSize: '0.85rem', opacity: '0.7'}}>Connectivity needs</div>
              </div>
            </div>
            <div style={{fontSize: '0.9rem'}}>
              <div style={{marginBottom: '0.5rem'}}>
                <span style={{color: 'var(--monad-purple)', fontWeight: '600'}}>Bandwidth:</span> 1 Gbps symmetric
              </div>
              <div style={{marginBottom: '0.5rem'}}>
                <span style={{color: 'var(--monad-purple)', fontWeight: '600'}}>Latency:</span> Low latency required
              </div>
              <div style={{marginBottom: '0.5rem'}}>
                <span style={{color: 'var(--monad-purple)', fontWeight: '600'}}>Uptime:</span> 99.9% required
              </div>
              <div style={{
                background: 'rgba(245,158,11,0.1)',
                border: '1px solid rgba(245,158,11,0.3)',
                borderRadius: '6px',
                padding: '0.5rem',
                marginTop: '0.75rem',
                fontSize: '0.8rem',
                textAlign: 'center',
                color: '#F59E0B'
              }}>
                ⚠️ Static IP recommended
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="recommended-hardware" className="section">
        <h2>✅ Recommended Hardware Configurations</h2>
        
        <div style={{marginBottom: '2rem'}}>
          <h3>Tested CPU Models</h3>
          <p>Community-verified CPUs for Monad validator operations. 16 cores is the sweet spot for price/performance.</p>
        </div>
        
        <table>
          <thead>
            <tr>
              <th className="text-center">Status</th>
              <th>Manufacturer</th>
              <th>Model</th>
              <th>Base Clock</th>
              <th>Boost</th>
              <th className="text-center">Cores</th>
              <th className="text-center">Threads</th>
              <th>TDP</th>
              <th className="text-center">NUMA</th>
              <th>Temp @ Load</th>
            </tr>
          </thead>
          <tbody>
            {cpuData.map((cpu) => (
              <tr key={cpu.id}>
                <td className="text-center">
                  {cpu.recommended ? 
                    <span className="badge badge-success">✓</span> : 
                    <span className="badge badge-warning">○</span>
                  }
                </td>
                <td>{cpu.manufacturer}</td>
                <td><strong className="text-mono">{cpu.model}</strong></td>
                <td className="text-mono">{cpu.baseClock}</td>
                <td className="text-mono">{cpu.maxBoostClock}</td>
                <td className="text-center">{cpu.cores}</td>
                <td className="text-center">{cpu.threads}</td>
                <td className="text-center">{cpu.tdp}</td>
                <td className="text-center">{cpu.numaNodes}</td>
                <td className="text-center" style={{fontSize: '0.8rem'}}>{cpu.avgTemp || '-'}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div style={{marginTop: '3rem', marginBottom: '2rem'}}>
          <h3>Storage Performance Comparison</h3>
          <p>PCIe Gen4 NVMe SSDs or better required. Gen5 drives provide future-proofing.</p>
        </div>
        
        <table>
          <thead>
            <tr>
              <th className="text-center">Status</th>
              <th>Manufacturer</th>
              <th>Model</th>
              <th>Interface</th>
              <th>Capacity</th>
              <th>Seq Read</th>
              <th>Seq Write</th>
              <th>Random Read</th>
              <th>Random Write</th>
            </tr>
          </thead>
          <tbody>
            {storageData.map((storage) => (
              <tr key={storage.id}>
                <td className="text-center">
                  {storage.recommended ? (
                    <span className="badge badge-success">✓</span>
                  ) : storage.notes?.includes('slowdowns') ? (
                    <span className="badge badge-warning">⚠</span>
                  ) : (
                    <span className="badge badge-danger">✗</span>
                  )}
                </td>
                <td>{storage.manufacturer}</td>
                <td><strong className="text-mono">{storage.model}</strong></td>
                <td>
                  <span className={`badge ${
                    storage.generation === 'gen5' ? 'badge-info' : 
                    storage.generation === 'gen4' ? 'badge-success' : 'badge-warning'
                  }`}>
                    {storage.interface}
                  </span>
                </td>
                <td className="text-center">{storage.capacity}</td>
                <td className="text-mono">{storage.sequentialRead}</td>
                <td className="text-mono">{storage.sequentialWrite}</td>
                <td className="text-mono"><strong>{storage.randomRead}</strong></td>
                <td className="text-mono"><strong>{storage.randomWrite}</strong></td>
              </tr>
            ))}
          </tbody>
        </table>
        
        {storageData.some(s => s.notes) && (
          <div className="info-box" style={{marginTop: '1.5rem'}}>
            <h4>📝 Storage Notes</h4>
            <ul style={{marginBottom: 0}}>
              {storageData.filter(s => s.notes).map(storage => (
                <li key={storage.id}>
                  <strong>{storage.model}:</strong> {storage.notes}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div style={{marginTop: '3rem', marginBottom: '2rem'}}>
          <h3>Enterprise Server Solutions</h3>
          <p>Pre-built enterprise servers tested and validated for Monad validators.</p>
        </div>
        
        <table>
          <thead>
            <tr>
              <th className="text-center">Recommended</th>
              <th>Manufacturer</th>
              <th>Model</th>
              <th>CPU</th>
              <th>Memory</th>
              <th>Storage</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            {enterpriseServers.map((server) => (
              <tr key={server.id}>
                <td className="text-center">
                  {server.recommended ? (
                    <span className="badge badge-success">✓</span>
                  ) : (
                    <span className="badge badge-warning">○</span>
                  )}
                </td>
                <td>{server.manufacturer}</td>
                <td><strong className="text-mono">{server.model}</strong></td>
                <td className="text-mono" style={{whiteSpace: 'pre-line'}}>{server.cpu}</td>
                <td style={{whiteSpace: 'pre-line'}}>{server.memory}</td>
                <td style={{whiteSpace: 'pre-line'}}>{server.storage}</td>
                <td style={{whiteSpace: 'pre-line'}}>{server.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div style={{marginTop: '3rem', marginBottom: '2rem'}}>
          <h3>Custom-built Server Configurations</h3>
          <p>Community-tested custom builds for different performance tiers.</p>
        </div>
        
        <table>
          <thead>
            <tr>
              <th className="text-center">Recommended</th>
              <th>CPU</th>
              <th>Motherboard</th>
              <th>Memory</th>
              <th>Storage</th>
              <th>Network</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            {customServers.map((server) => (
              <tr key={server.id}>
                <td className="text-center">
                  {server.recommended ? (
                    <span className="badge badge-success">✓</span>
                  ) : (
                    <span className="badge badge-warning">○</span>
                  )}
                </td>
                <td><strong className="text-mono" style={{whiteSpace: 'pre-line'}}>{server.cpu}</strong></td>
                <td style={{whiteSpace: 'pre-line'}}>{server.motherboard}</td>
                <td style={{whiteSpace: 'pre-line'}}>{server.memory}</td>
                <td style={{whiteSpace: 'pre-line'}}>{server.storage}</td>
                <td style={{whiteSpace: 'pre-line'}}>{server.network}</td>
                <td style={{whiteSpace: 'pre-line'}}>{server.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section id="cpu-tuning" className="section">
        <h2>🔧 CPU Performance Tuning</h2>
        <div className="card-highlight" style={{padding: '1rem', marginBottom: '2rem'}}>
          <p style={{fontSize: '1.05rem', marginBottom: 0}}>
            <strong>Purpose:</strong> CPU Tuning Guide for Handling Intermittent Skipped Blocks and Tx Load
          </p>
        </div>
        
        <div className="card">
          <h3>1. CCDs (Core Complex Dies) Settings</h3>
          
          <div className="badge badge-info" style={{marginBottom: '1.25rem'}}>
            💡 For systems with a 9950X or 4584PX, the CCDs Settings can be skipped.
          </div>
          
          <div className="info-box">
            <h4>Purpose</h4>
            <ul>
              <li>Groups cores into chiplet units called Core Complex Dies(CCDs) that share an L3 cache, CCDs are connected via Infinity Fabric for scalability and efficiency.</li>
              <li>Shapes threads/IRQs cache & latency characteristics → directly impacts performance and jitter.</li>
            </ul>
            
            <h4 style={{marginTop: '1.25rem'}}>How it works</h4>
            <ul>
              <li><strong>Same CCD:</strong> Share L3; smaller IPI/scheduler propagation latency (faster wake-ups).</li>
              <li><strong>Different CCDs:</strong> Goes over IF → extra latency and higher variability; wake/IRQ can feel slower with unlucky timing.</li>
              <li><strong>Deeper C-states</strong> (e.g. C2/C3) increase wake latency, making cross-CCD wake-ups more sensitive.</li>
            </ul>
          </div>

          <h4>Check & Change</h4>
          <pre><code>{`# Check CCDs to see which CPU belongs to which CCD
lscpu -e | awk 'NR==1{print "CPU L3"} NR>1{split($5,a,":"); print $1, a[4]}'

# e.g. AMD Threadripper PRO 7965WX
# CCD 0: 0 ~ 5, CCD 1: 6 ~ 11, CCD 2: 12 ~ 17, CCD 3: 18 ~ 23
CPU L3
0 0
1 0
2 0
3 0
4 0
5 0
6 1
7 1
8 1
...
20 3
21 3
22 3
23 3

# In monad-execution.service, the default value for ro_sq_thread_cpu is 5, and the default value for sq_thread_cpu is 6.
# On the 7965WX, core 5 belongs to CCD 0 while core 6 belongs to CCD 1.
# Therefore, it is recommended to place both values within the same CCD (e.g. CCD 1).
sudo vi /usr/lib/systemd/system/monad-execution.service

--ro_sq_thread_cpu 6 \\
--sq_thread_cpu 7 \\`}</code></pre>
        </div>

        <div className="card">
          <h3>2. cpupower frequency Settings (P-state)</h3>
          
          <div className="info-box">
            <h4>Purpose</h4>
            <ul>
              <li>Controls the CPU frequency scaling policy (Governor), which determines how the CPU clock speed changes based on load and idle conditions.</li>
              <li>Balances performance vs. power efficiency.</li>
            </ul>
            
            <h4 style={{marginTop: '1.25rem'}}>How it works</h4>
            <p>The governor is a kernel module that sets CPU clock behavior.</p>
            <p><strong>Common modes:</strong></p>
            <ul>
              <li><code>performance</code> - Keeps CPU clock as high as possible (low latency, higher power draw)</li>
              <li><code>powersave</code> - Keeps CPU clock as low as possible (energy saving, lower performance)</li>
              <li><code>schedutil</code> - Dynamically adjusts frequency based on Linux scheduler load tracking (modern default)</li>
            </ul>
          </div>
          
          <h4>Check & Change</h4>
          <pre><code>{`# Check current CPU governor
cpupower frequency-info | grep -A2 "current policy"

# Change to performance mode
sudo cpupower frequency-set -g performance`}</code></pre>
        </div>

        <div className="card">
          <h3>3. cpupower idle Settings (C-state)</h3>
          
          <div className="info-box">
            <h4>Purpose</h4>
            <ul>
              <li>Controls which C-states(CPU idle power states) are available when the CPU is idle.</li>
              <li>Manages the trade-off between low-latency wake-ups and power savings.</li>
            </ul>
            
            <h4 style={{marginTop: '1.25rem'}}>C-State basics</h4>
            <ul>
              <li><strong>C0:</strong> Active state - executing instructions.</li>
              <li><strong>POLL:</strong> C0 substate - not executing but spinning/waiting (no deep sleep, highest idle power).</li>
              <li><strong>C1, C2, C3…:</strong> Higher numbers mean deeper sleep, more power savings, but higher wake-up latency.</li>
              <li>e.g. C1 has very short entry/exit latency; C6 is deep sleep with longer wake-up delay.</li>
            </ul>
            
            <h4 style={{marginTop: '1.25rem'}}>BIOS vs OS Control</h4>
            <div style={{marginBottom: '1rem'}}>
              <p><strong>BIOS</strong></p>
              <ul>
                <li>Global C-State Control enables/disables CPU power-saving states at hardware level.</li>
                <li>If disabled, only C0/C1 are available and OS-level cpupower cannot override.</li>
                <li>For AMD EPYC processors, AMD strongly recommends keeping it enabled to avoid losing all deep sleep states.</li>
              </ul>
            </div>
            <div>
              <p><strong>OS (cpupower)</strong></p>
              <ul>
                <li>Can only manage governors and C-state availability within the limits set by BIOS.</li>
              </ul>
            </div>
          </div>
          
          <h4>Check & Change</h4>
          <pre><code>{`# Check current idle states
cpupower idle-info

# Disable C2
sudo cpupower idle-set -d 2

# Disable C1
sudo cpupower idle-set -d 1

# Re-enable C1
sudo cpupower idle-set -e 1`}</code></pre>
        </div>
      </section>

      <section id="firewall-tuning" className="section">
        <h2>🔥 Firewall PPS Policy Configuration</h2>
        <div className="card-highlight" style={{padding: '1rem', marginBottom: '2rem'}}>
          <p style={{fontSize: '1.05rem', marginBottom: 0}}>
            <strong>Purpose:</strong> Configure firewall PPS (Packets Per Second) limits to protect against UDP floods while maintaining Monad BFT performance
          </p>
        </div>
        
        <div className="alert alert-warning" style={{marginBottom: '2rem'}}>
          <p style={{marginBottom: 0}}>
            <strong>⚠️ Note:</strong> These values are highly experimental and vary depending on your environment. Adjust based on your network conditions.
          </p>
        </div>
        
        <div className="card">
          <h3>1. System Limits & Message Types</h3>
          
          <div className="info-box">
            <h4>Block Limits</h4>
            <ul>
              <li><strong>tx_limit:</strong> 5,000 transactions/block</li>
              <li><strong>proposal_gas_limit:</strong> 150,000,000 gas/block</li>
              <li><strong>proposal_byte_limit:</strong> 2,000,000 bytes/block (2MB)</li>
              <li><strong>Block generation time:</strong> ~400ms (2.5 rounds/second)</li>
            </ul>
            
            <h4 style={{marginTop: '1.25rem'}}>Network Message Limits</h4>
            <ul>
              <li><strong>MAX_MESSAGE_SIZE:</strong> 3,145,728 bytes (3MB)</li>
              <li><strong>MAX_CONCURRENT_SEND_RAW_TX:</strong> 1,000 concurrent requests</li>
              <li><strong>DEFAULT_SEGMENT_SIZE:</strong> 960 bytes (MTU 1500 based)</li>
            </ul>

            <h4 style={{marginTop: '1.25rem'}}>Raptorcast Message Transmission</h4>
            <ul>
              <li><strong>MTU Size:</strong> 1,452 bytes (default)</li>
              <li><strong>Chunk Structure:</strong>
                <ul style={{marginLeft: '1.5rem', marginTop: '0.5rem'}}>
                  <li>Header: 108 bytes (signature 65 + metadata 43)</li>
                  <li>Merkle proof: 100 bytes (depth 6)</li>
                  <li>Actual data: ~1,220 bytes</li>
                </ul>
              </li>
              <li><strong>Redundancy Settings:</strong>
                <ul style={{marginLeft: '1.5rem', marginTop: '0.5rem'}}>
                  <li>Current: 3x (generates 3x original data chunks)</li>
                  <li>Maximum: 7x (DoS protection limit)</li>
                </ul>
              </li>
              <li><strong>Chunk Calculation:</strong>
                <div style={{marginTop: '0.5rem', paddingLeft: '1.5rem', fontSize: '0.9rem', color: 'var(--monad-text-secondary)'}}>
                  <em>Chunks = ceil(message_size / 1,220) × 3</em>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="card">
          <h3>2. PPS Calculation by Message Type</h3>
          
          <div className="info-box">
            <table style={{marginTop: '1rem', marginBottom: '1rem'}}>
              <thead>
                <tr>
                  <th>Message Type</th>
                  <th>Size</th>
                  <th>Max/sec</th>
                  <th>Recommended PPS</th>
                  <th>Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Transaction</strong></td>
                  <td>~400 bytes</td>
                  <td>12,500 tx/s</td>
                  <td className="text-mono">25,000 pps</td>
                  <td>2x margin (5,000 × 2.5 rounds)</td>
                </tr>
                <tr>
                  <td><strong>Vote</strong></td>
                  <td>~200 bytes</td>
                  <td>N × 5</td>
                  <td className="text-mono">N × 10 pps</td>
                  <td>N = validators (2.5 rounds/s)</td>
                </tr>
                <tr>
                  <td><strong>Proposal</strong></td>
                  <td>2MB max</td>
                  <td>2.5/sec</td>
                  <td className="text-mono">50,000 pps</td>
                  <td>Burst allowed (2.5 rounds/s)</td>
                </tr>
              </tbody>
            </table>
            
            <div className="badge badge-info" style={{marginTop: '1rem'}}>
              💡 Total PPS = 25,000 + 1,000 + 50,000 + 25,000 (margin) = <strong>101,000 pps</strong>
            </div>
            <div className="badge badge-warning" style={{marginTop: '0.5rem'}}>
              ⚠️ Recommended setting: <strong>125,000 pps</strong> (with safety margin)
            </div>
          </div>
        </div>

        <div className="card">
          <h3>3. Port-specific & Packet Size Limits</h3>
          
          <div className="info-box">
            <h4>Port-based Limits</h4>
            <ul>
              <li><strong>P2P Port (TCP/UDP):</strong> 100,000 pps</li>
              <li><strong>RPC Port (HTTP/WS):</strong> 25,000 pps</li>
              <li><strong>Management Port:</strong> 1,000 pps</li>
            </ul>
            
            <h4 style={{marginTop: '1.25rem'}}>Burst Limits</h4>
            <ul>
              <li><strong>Burst size:</strong> 250,000 packets</li>
              <li><strong>Burst recovery rate:</strong> 125,000 pps</li>
            </ul>

            <h4 style={{marginTop: '1.25rem'}}>Packet Size-based Limits</h4>
            <ul>
              <li><strong>Small packets (&lt;500B):</strong> 75,000 pps (votes, control messages)</li>
              <li><strong>Medium packets (500B-1000B):</strong> 37,500 pps (transactions, Raptorcast packets)</li>
              <li><strong>Large packets (&gt;1000B):</strong> 12,500 pps (aggregated messages)</li>
            </ul>
          </div>
        </div>

        <div className="card">
          <h3>4. Monitoring & Alert Thresholds</h3>
          
          <div className="info-box">
            <h4>Key Metrics to Monitor</h4>
            <ul>
              <li>Port-specific PPS utilization</li>
              <li>Number of dropped packets</li>
              <li>RaptorQ decoding failure rate</li>
              <li>Memory pool utilization</li>
            </ul>
            
            <h4 style={{marginTop: '1.25rem'}}>Alert Thresholds</h4>
            <table style={{marginTop: '1rem'}}>
              <thead>
                <tr>
                  <th>Metric</th>
                  <th>Warning</th>
                  <th>Critical</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>PPS Utilization</td>
                  <td className="text-mono">&gt; 80%</td>
                  <td className="text-mono">&gt; 95%</td>
                </tr>
                <tr>
                  <td>Packet Drop Rate</td>
                  <td className="text-mono">&gt; 1%</td>
                  <td className="text-mono">&gt; 5%</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h4>Monitoring Commands</h4>
          <pre><code>{`# Check iptables counters
iptables -L -v -n | grep hashlimit

# Monitor UDP traffic
tcpdump -i eth0 -n udp port 30303 -c 100

# Check dropped packets
netstat -su | grep -i drop`}</code></pre>
        </div>

        <div className="card">
          <h3>5. Important Considerations</h3>
          
          <div className="info-box">
            <ul>
              <li><strong>Validator count scaling:</strong> Increase Vote PPS proportionally as validators increase</li>
              <li><strong>Network topology:</strong> Full nodes connected to multiple validators need higher PPS</li>
              <li><strong>Geographic distribution:</strong> Adjust burst allowance based on regional latency</li>
              <li><strong>RaptorQ efficiency:</strong> Actual redundancy may be lower than 7x depending on network conditions</li>
              <li><strong>DDoS defense:</strong> Additional rules needed for SYN flood and general DDoS attacks</li>
            </ul>
            
            <div className="badge badge-danger" style={{marginTop: '1rem'}}>
              🔒 These settings are baseline - adjust based on your specific network conditions
            </div>
          </div>
        </div>
      </section>

      <section id="software" className="section">
        <h2>💿 Software Requirements</h2>
        
        <div className="requirement-card">
          <h3>Operating System</h3>
          <p><span className="detail-label">Required:</span>Ubuntu 24.04 LTS or newer</p>
          <p><span className="detail-label">Kernel:</span>Linux kernel ≥ v6.8.0.60-generic</p>
        </div>
        
        <div className="alert alert-danger">
          <h4>⚠️ Critical Kernel Bug Warning</h4>
          <p>
            Linux kernel versions <strong>v6.8.0.56</strong> through <strong>v6.8.0.59</strong> contain a 
            critical bug that causes Monad clients to hang in an uninterruptible sleep state.
          </p>
          <p style={{marginTop: '1rem'}}><strong>Affected Versions (DO NOT USE):</strong></p>
          <ul style={{marginTop: '0.5rem'}}>
            <li>v6.8.0.56-generic</li>
            <li>v6.8.0.57-generic</li>
            <li>v6.8.0.58-generic</li>
            <li>v6.8.0.59-generic</li>
          </ul>
          <p style={{marginTop: '1rem', marginBottom: 0}}>
            <strong>Solution:</strong> Immediately upgrade to <code>v6.8.0.60-generic</code> or newer.
          </p>
        </div>
      </section>

      <div className="section" style={{textAlign: 'center', marginTop: '4rem'}}>
        <h3>🤝 Contributing to Monad HCL</h3>
        <p style={{maxWidth: '600px', margin: '0 auto 2.5rem', fontSize: '0.95rem', color: 'var(--monad-text-secondary)'}}>
          This hardware compatibility list is community-maintained. Share your hardware configurations 
          and help other validators optimize their setups.
        </p>
        
        <div style={{display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '3rem'}}>
          <a href="https://github.com/b-harvest/monad-hcl" 
             target="_blank" 
             rel="noopener noreferrer"
             className="btn btn-primary">
            📦 View on GitHub
          </a>
          <a href="https://discord.gg/monaddev" 
             target="_blank" 
             rel="noopener noreferrer"
             className="btn btn-secondary">
            💬 Join Discord
          </a>
        </div>
        
        <div style={{paddingTop: '2rem', borderTop: '1px solid var(--monad-border-light)'}}>
          <p style={{fontSize: '0.875rem', color: 'var(--monad-text-dim)', marginBottom: '0.5rem'}}>
            <strong>Maintainers:</strong> Monad Community
          </p>
          <p style={{fontSize: '0.875rem', color: 'var(--monad-text-dim)', marginBottom: '0.5rem'}}>
            <strong>Last Updated:</strong> January 2025
          </p>
          <p style={{fontSize: '0.875rem', color: 'var(--monad-text-dim)', marginBottom: 0}}>
            <strong>Version:</strong> 1.0.0
          </p>
        </div>
      </div>
    </div>
  );
}