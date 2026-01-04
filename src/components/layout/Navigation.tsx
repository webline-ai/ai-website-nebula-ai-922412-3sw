'use client';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, X, Zap } from 'lucide-react';
import { useState } from 'react';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';

const DEFAULT_NAVIGATION = {
  brandName: 'Nebula AI',
  ctaText: 'Get Started',
  ctaHref: '/get-started',
  navItems: [
    { label: 'Features', href: '#features' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ],
} as const;

type NavigationProps = Partial<typeof DEFAULT_NAVIGATION>;

export default function Navigation(props: NavigationProps) {
  const config = { ...DEFAULT_NAVIGATION, ...props };
  const navigate = useSmartNavigation();
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (href: string) => {
    navigate(href);
    setIsOpen(false);
  };

  const handleCtaClick = () => {
    navigate(config.ctaHref);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-800/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div
            className="flex items-center gap-2 cursor-pointer group"
            onClick={() => navigate('/')}
          >
            <div className="relative">
              <Zap className="h-8 w-8 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300" />
              <div className="absolute inset-0 bg-cyan-400/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <span
              className="font-bold text-xl bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent"
              data-editable="brandName"
            >
              {config.brandName}
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-6">
              {config.navItems.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => handleNavClick(item.href)}
                  className="text-slate-300 hover:text-cyan-400 transition-colors duration-300 font-medium relative group"
                  data-editable-href={`navItems[${idx}].href`}
                  data-href={item.href}
                >
                  <span data-editable={`navItems[${idx}].label`}>{item.label}</span>
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400 group-hover:w-full transition-all duration-300" />
                </button>
              ))}
            </div>

            {/* CTA Button */}
            <Button
              onClick={handleCtaClick}
              className="relative bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white border-0 px-6 py-2 font-semibold transition-all duration-300 group overflow-hidden"
              data-editable-href="ctaHref"
              data-href={config.ctaHref}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-cyan-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 border border-purple-400/30 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10" data-editable="ctaText">
                {config.ctaText}
              </span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden text-slate-300 hover:text-cyan-400 hover:bg-slate-800/50"
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-slate-900 border-slate-800 w-80">
              <div className="flex flex-col gap-6 mt-8">
                {/* Mobile Logo */}
                <div className="flex items-center gap-2 pb-4 border-b border-slate-800">
                  <Zap className="h-6 w-6 text-cyan-400" />
                  <span
                    className="font-bold text-lg bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent"
                    data-editable="brandName"
                  >
                    {config.brandName}
                  </span>
                </div>

                {/* Mobile Navigation */}
                <div className="flex flex-col gap-4">
                  {config.navItems.map((item, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleNavClick(item.href)}
                      className="text-slate-300 hover:text-cyan-400 transition-colors duration-300 font-medium text-left py-2 px-4 rounded-lg hover:bg-slate-800/50"
                      data-editable-href={`navItems[${idx}].href`}
                      data-href={item.href}
                    >
                      <span data-editable={`navItems[${idx}].label`}>{item.label}</span>
                    </button>
                  ))}
                </div>

                {/* Mobile CTA */}
                <Button
                  onClick={handleCtaClick}
                  className="mt-4 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white border-0 font-semibold"
                  data-editable-href="ctaHref"
                  data-href={config.ctaHref}
                >
                  <span data-editable="ctaText">{config.ctaText}</span>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
