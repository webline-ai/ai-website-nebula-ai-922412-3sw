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
      className="relative min-h-screen bg-slate-900 text-foreground overflow-hidden flex items-center pt-24"
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

      {/* Additional floating elements */}
      <div className="absolute top-1/3 right-1/3 w-32 h-32 bg-purple-400/5 rounded-full blur-xl animate-float" />
      <div className="absolute bottom-1/3 left-1/3 w-24 h-24 bg-cyan-400/5 rounded-full blur-xl animate-float-delayed" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div
            className={`mb-8 transition-all duration-1200 ease-out ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'}`}
          >
            <Badge
              variant="outline"
              className="bg-slate-800/50 border-purple-500/30 text-purple-300 px-4 py-2 text-sm font-medium backdrop-blur-sm hover:bg-purple-500/10 transition-colors animate-pulse-subtle"
            >
              <Sparkles className="h-4 w-4 mr-2 animate-spin-slow" />
              <span data-editable="badge">{config.badge}</span>
            </Badge>
          </div>

          {/* Main Title */}
          <div
            className={`mb-6 transition-all duration-1200 ease-out delay-300 ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'}`}
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight animate-float-gentle">
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
            className={`mb-12 transition-all duration-1200 ease-out delay-500 ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'}`}
          >
            <p className="text-xl sm:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed animate-fade-in-up">
              <span data-editable="subtitle">{config.subtitle}</span>
            </p>
          </div>

          {/* CTA Buttons */}
          <div
            className={`mb-20 transition-all duration-1200 ease-out delay-700 ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'}`}
          >
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                onClick={handlePrimaryClick}
                data-editable-href="primaryHref"
                data-href={config.primaryHref}
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white border-0 px-8 py-6 text-lg font-semibold shadow-2xl shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-300 group animate-pulse-glow hover:scale-105"
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
                className="border-2 border-slate-600 bg-slate-800/50 text-slate-200 hover:bg-slate-700/50 hover:border-purple-500/50 px-8 py-6 text-lg font-semibold backdrop-blur-sm transition-all duration-300 hover:scale-105"
              >
                <span data-editable="secondaryCta">{config.secondaryCta}</span>
              </Button>
            </div>
          </div>

          {/* Feature Grid */}
          <div
            className={`transition-all duration-1200 ease-out delay-900 ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'}`}
          >
            <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
              {config.features.map((feature, idx) => (
                <div
                  key={idx}
                  className={`group relative bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-purple-500/50 hover:bg-slate-800/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10 hover:scale-105 animate-fade-in-up`}
                  style={{
                    animationDelay: `${1100 + idx * 200}ms`,
                    animationDuration: '800ms',
                  }}
                >
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-cyan-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="relative z-10">
                    <div className="mb-6 text-purple-400 group-hover:text-purple-300 transition-colors animate-float-icon">
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

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }

        @keyframes float-delayed {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-15px) rotate(-180deg);
          }
        }

        @keyframes float-gentle {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-5px);
          }
        }

        @keyframes float-icon {
          0%,
          100% {
            transform: translateY(0px) scale(1);
          }
          50% {
            transform: translateY(-3px) scale(1.05);
          }
        }

        @keyframes pulse-subtle {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.8;
          }
        }

        @keyframes pulse-glow {
          0%,
          100% {
            box-shadow: 0 0 20px rgba(168, 85, 247, 0.4);
          }
          50% {
            box-shadow: 0 0 30px rgba(168, 85, 247, 0.6);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-gradient-x {
          animation: gradient-x 3s ease infinite;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }

        .animate-float-gentle {
          animation: float-gentle 4s ease-in-out infinite;
        }

        .animate-float-icon {
          animation: float-icon 3s ease-in-out infinite;
        }

        .animate-pulse-subtle {
          animation: pulse-subtle 2s ease-in-out infinite;
        }

        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
}
