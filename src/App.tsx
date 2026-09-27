/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'framer-motion';
import { Map, BrainCircuit, Waves } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500/30">
      <header className="flex items-center justify-between px-8 py-6 border-b border-slate-800">
        <h1 className="text-2xl font-bold tracking-tight text-white flex items-center gap-2">
          <Waves className="text-cyan-400" />
          三角洲黑潮爆破攻略
        </h1>
        <nav className="flex items-center gap-6 text-sm font-medium text-slate-400">
        </nav>
      </header>

      <main className="px-8 py-12 max-w-7xl mx-auto">
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-6xl font-extrabold tracking-tighter text-white mb-6">
            三角洲行动:黑潮爆破<br />
          </h2>
        </motion.section>

        
      </main>
    </div>
  );
}
