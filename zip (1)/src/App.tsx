/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Products from './components/Products';
import Combine from './components/Combine';
import Markets from './components/Markets';
import Materials from './components/Materials';
import Finishes from './components/Finishes';
import Blog from './components/Blog';
import SeoText from './components/SeoText';
import Footer from './components/Footer';
import ConfiguratorModal from './components/ConfiguratorModal';

export default function App() {
  const [isConfiguratorOpen, setIsConfiguratorOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Header onOpenConfigurator={() => setIsConfiguratorOpen(true)} />
      <main>
        <Hero />
        <Features />
        <Products onOpenConfigurator={() => setIsConfiguratorOpen(true)} />
        <Combine />
        <Markets />
        <Materials />
        <Finishes />
        <Blog />
        <SeoText />
      </main>
      <Footer />
      {isConfiguratorOpen && <ConfiguratorModal onClose={() => setIsConfiguratorOpen(false)} />}
    </div>
  );
}
