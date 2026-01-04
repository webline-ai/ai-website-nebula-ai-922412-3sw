'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Sparkles, Zap, Rocket } from 'lucide-react';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';
import { useState } from 'react';

const DEFAULT_CTA = {
  title: 'Ready to Transform Your Vision into Reality?',
  subtitle:
    'Join thousands of innovators already using Nebula AI to revolutionize their creative process',
  primaryCta: 'Start Creating Now',
  primaryHref: '/signup',
  secondaryCta: 'Watch Demo',
  secondaryHref: '/demo',
  features: [
    {
      title: 'Instant Generation',
      description: 'Create stunning content in seconds with our breakthrough AI technology',
    },
    {
      title: 'Limitless Possibilities',
      description: 'Transform any idea into reality with precision and intelligent automation',
    },
    {
      title: 'Future-Ready',
      description: 'Evolve with cutting-edge technology that scales with your ambitions',
    },
  ],
  badge: 'No Credit Card Required',
} as const;

type CtaProps = Partial<typeof DEFAULT_CTA>;

export default function Cta(props: CtaProps) {
  const config = { ...DEFAULT_CTA, ...props };
  const navigate = useSmartNavigation();
  const [isHovered, setIsHovered] = useState(false);

  const handlePrimaryClick = () => {
    navigate(config.primaryHref);
  };

  const handleSecondaryClick = () => {
    navigate(config.secondaryHref);
  };

  return (
    <section id="cta" className="relative bg-slate-900 text-foreground py-24 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-slate-900 to-cyan-900/20" />

      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-8">
            <Sparkles className="h-4 w-4 text-purple-400" />
            <span className="text-sm text-purple-300" data-editable="badge">
              {config.badge}
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-white to-cyan-400 bg-clip-text text-transparent leading-tight">
            <span data-editable="title">{config.title}</span>
          </h2>

          {/* Subtitle */}
          <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            <span data-editable="subtitle">{config.subtitle}</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button
              onClick={handlePrimaryClick}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="group relative px-8 py-4 text-lg font-semibold bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white border-0 rounded-xl shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
              data-editable-href="primaryHref"
              data-href={config.primaryHref}
            >
              <span className="relative z-10 flex items-center gap-2">
                <span data-editable="primaryCta">{config.primaryCta}</span>
                <ArrowRight
                  className={`h-5 w-5 transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`}
                />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-xl blur opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
            </Button>

            <Button
              onClick={handleSecondaryClick}
              variant="outline"
              className="px-8 py-4 text-lg font-semibold bg-transparent border-2 border-slate-600 text-slate-300 hover:border-purple-400 hover:text-purple-300 hover:bg-purple-500/5 rounded-xl transition-all duration-300"
              data-editable-href="secondaryHref"
              data-href={config.secondaryHref}
            >
              <span data-editable="secondaryCta">{config.secondaryCta}</span>
            </Button>
          </div>

          {/* Feature Cards */}
          <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
            {config.features.map((feature, idx) => (
              <Card
                key={idx}
                className="group bg-slate-800/50 border border-slate-700/50 hover:border-purple-500/30 hover:bg-slate-800/70 transition-all duration-300 backdrop-blur-sm"
              >
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20 group-hover:from-purple-500/30 group-hover:to-cyan-500/30 transition-all duration-300">
                      {idx === 0 && <Zap className="h-8 w-8 text-purple-400" />}
                      {idx === 1 && <Sparkles className="h-8 w-8 text-cyan-400" />}
                      {idx === 2 && <Rocket className="h-8 w-8 text-purple-400" />}
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-300 transition-colors duration-300">
                    <span data-editable={`features[${idx}].title`}>{feature.title}</span>
                  </h3>

                  <p className="text-slate-400 leading-relaxed">
                    <span data-editable={`features[${idx}].description`}>
                      {feature.description}
                    </span>
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
