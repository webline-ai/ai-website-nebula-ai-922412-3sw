'use client';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Sparkles, Zap, Brain } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';

const DEFAULT_HERO = {
  badge: 'Revolutionary AI Technology',
  title: 'Transform Imagination into Reality',
  subtitle:
    'Nebula AI delivers unprecedented generative capabilities that exceed current market standards. Experience the future of intelligent automation with seamless integration and limitless creative potential.',
  primaryCta: 'Get Started',
  primaryHref: '/get-started',
  secondaryCta: 'Watch Demo',
  secondaryHref: '/demo',
  features: [
    {
      title: 'Intelligent Generation',
      description:
        'Advanced AI that creates with precision and creativity beyond conventional limits',
    },
    {
      title: 'Seamless Integration',
      description: 'Intuitive interface makes cutting-edge AI accessible to all skill levels',
    },
    {
      title: 'Future-Ready Evolution',
      description: 'Technology that evolves with your needs and scales with your ambitions',
    },
  ],
} as const;

type HeroProps = Partial<typeof DEFAULT_HERO>;

export default function Hero(props: HeroProps) {
  const config = { ...DEFAULT_HERO, ...props };
  const navigate = useSmartNavigation();
  const [isVisible, setIsVisible] = useState(false);
  const [glowIntensity, setGlowIntensity] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setGlowIntensity(prev => (prev + 1) % 100);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const handlePrimaryClick = () => {
    navigate(config.primaryHref);
  };

  const handleSecondaryClick = () => {
    navigate(config.secondaryHref);
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen bg-slate-900 text-foreground overflow-hidden flex items-center"
    >
      {/* Animated background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-slate-900 to-cyan-900/20" />
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"
        style={{ opacity: 0.3 + glowIntensity / 300 }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"
        style={{ opacity: 0.3 + (100 - glowIntensity) / 300 }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div
            className={`mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            <Badge
              variant="outline"
              className="bg-slate-800/50 border-purple-500/30 text-purple-300 px-4 py-2 text-sm font-medium backdrop-blur-sm hover:bg-purple-500/10 transition-colors"
            >
              <Sparkles className="h-4 w-4 mr-2" />
              <span data-editable="badge">{config.badge}</span>
            </Badge>
          </div>

          {/* Main Title */}
          <div
            className={`mb-6 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight">
              <span
                data-editable="title"
                className="bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent animate-gradient-x"
              >
                {config.title}
              </span>
            </h1>
          </div>

          {/* Subtitle */}
          <div
            className={`mb-12 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            <p className="text-xl sm:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              <span data-editable="subtitle">{config.subtitle}</span>
            </p>
          </div>

          {/* CTA Buttons */}
          <div
            className={`mb-20 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                onClick={handlePrimaryClick}
                data-editable-href="primaryHref"
                data-href={config.primaryHref}
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white border-0 px-8 py-6 text-lg font-semibold shadow-2xl shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-300 group"
              >
                <span data-editable="primaryCta">{config.primaryCta}</span>
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button
                onClick={handleSecondaryClick}
                data-editable-href="secondaryHref"
                data-href={config.secondaryHref}
                variant="outline"
                size="lg"
                className="border-2 border-slate-600 bg-slate-800/50 text-slate-200 hover:bg-slate-700/50 hover:border-purple-500/50 px-8 py-6 text-lg font-semibold backdrop-blur-sm transition-all duration-300"
              >
                <span data-editable="secondaryCta">{config.secondaryCta}</span>
              </Button>
            </div>
          </div>

          {/* Feature Grid */}
          <div
            className={`transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
              {config.features.map((feature, idx) => (
                <div
                  key={idx}
                  className="group relative bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-purple-500/50 hover:bg-slate-800/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10"
                >
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-cyan-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="relative z-10">
                    <div className="mb-6 text-purple-400 group-hover:text-purple-300 transition-colors">
                      {idx === 0 && <Brain className="h-10 w-10" />}
                      {idx === 1 && <Zap className="h-10 w-10" />}
                      {idx === 2 && <Sparkles className="h-10 w-10" />}
                    </div>

                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-purple-100 transition-colors">
                      <span data-editable={`features[${idx}].title`}>{feature.title}</span>
                    </h3>

                    <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                      <span data-editable={`features[${idx}].description`}>
                        {feature.description}
                      </span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient-x {
          0%,
          100% {
            background-size: 200% 200%;
            background-position: left center;
          }
          50% {
            background-size: 200% 200%;
            background-position: right center;
          }
        }
        .animate-gradient-x {
          animation: gradient-x 3s ease infinite;
        }
      `}</style>
    </section>
  );
}
