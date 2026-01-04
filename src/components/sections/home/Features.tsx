'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Brain, Zap, Infinity } from 'lucide-react';

const DEFAULT_FEATURES = {
  title: 'Revolutionary AI Capabilities',
  subtitle: 'Breakthrough technology that transforms imagination into reality',
  features: [
    {
      title: 'Neural Generation Engine',
      description:
        'Advanced neural networks that create unprecedented content with human-like creativity and precision',
      badge: 'Core Technology',
    },
    {
      title: 'Lightning Processing',
      description:
        'Seamless real-time generation with cutting-edge optimization for instant creative workflows',
      badge: 'Performance',
    },
    {
      title: 'Limitless Evolution',
      description:
        'Future-ready architecture that continuously learns and adapts to exceed your creative ambitions',
      badge: 'Scalability',
    },
  ],
} as const;

type FeaturesProps = Partial<typeof DEFAULT_FEATURES>;

export default function Features(props: FeaturesProps) {
  const config = { ...DEFAULT_FEATURES, ...props };

  return (
    <section id="features" className="relative bg-background text-foreground py-24 overflow-hidden">
      {/* Futuristic background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span
              data-editable="title"
              className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent"
            >
              {config.title}
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            <span data-editable="subtitle">{config.subtitle}</span>
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
          {config.features.map((feature, idx) => (
            <Card
              key={idx}
              className="group relative bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <CardContent className="relative p-8">
                {/* Icon with glow */}
                <div className="mb-6 relative">
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500" />
                  <div className="relative w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-primary-foreground">
                    {idx === 0 && <Brain className="h-8 w-8" />}
                    {idx === 1 && <Zap className="h-8 w-8" />}
                    {idx === 2 && <Infinity className="h-8 w-8" />}
                  </div>
                </div>

                {/* Badge */}
                <Badge
                  variant="secondary"
                  className="mb-4 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors"
                >
                  <span data-editable={`features[${idx}].badge`}>{feature.badge}</span>
                </Badge>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                  <span data-editable={`features[${idx}].title`}>{feature.title}</span>
                </h3>

                <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                  <span data-editable={`features[${idx}].description`}>{feature.description}</span>
                </p>

                {/* Subtle animated border */}
                <div
                  className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary via-accent to-primary opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10"
                  style={{ padding: '1px' }}
                >
                  <div className="w-full h-full bg-card rounded-lg" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom accent */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 border border-primary/20">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm font-medium text-primary">
              Powered by next-generation neural architecture
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
