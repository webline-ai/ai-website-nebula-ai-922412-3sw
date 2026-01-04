'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, Star, Zap, Crown } from 'lucide-react';
import { useState } from 'react';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';

const DEFAULT_PRICING = {
  title: 'Choose Your Plan',
  subtitle: 'Unlock the power of the future with our cutting-edge pricing tiers',
  plans: [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for individuals and small projects',
      badge: '',
      features: [
        'Up to 5 projects',
        '10GB storage',
        'Basic analytics',
        'Email support',
        'Standard templates',
      ],
      ctaText: 'Get Started',
      ctaHref: '/signup/starter',
      popular: false,
    },
    {
      name: 'Pro',
      price: '$79',
      period: '/month',
      description: 'Ideal for growing teams and businesses',
      badge: 'Most Popular',
      features: [
        'Unlimited projects',
        '100GB storage',
        'Advanced analytics',
        'Priority support',
        'Premium templates',
        'API access',
        'Team collaboration',
      ],
      ctaText: 'Upgrade to Pro',
      ctaHref: '/signup/pro',
      popular: true,
    },
    {
      name: 'Enterprise',
      price: '$199',
      period: '/month',
      description: 'For large organizations with advanced needs',
      badge: 'Enterprise',
      features: [
        'Unlimited everything',
        '1TB storage',
        'Custom analytics',
        '24/7 phone support',
        'Custom templates',
        'Full API access',
        'Advanced security',
        'Dedicated manager',
      ],
      ctaText: 'Contact Sales',
      ctaHref: '/contact/enterprise',
      popular: false,
    },
  ],
} as const;

type PricingProps = Partial<typeof DEFAULT_PRICING>;

export default function Pricing(props: PricingProps) {
  const config = { ...DEFAULT_PRICING, ...props };
  const navigate = useSmartNavigation();
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const handlePlanSelect = (href: string) => {
    navigate(href);
  };

  const getPlanIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Star className="h-6 w-6" />;
      case 1:
        return <Zap className="h-6 w-6" />;
      case 2:
        return <Crown className="h-6 w-6" />;
      default:
        return <Star className="h-6 w-6" />;
    }
  };

  return (
    <section id="pricing" className="relative bg-background text-foreground py-20 overflow-hidden">
      {/* Futuristic background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(14,165,233,0.1),transparent_50%)]" />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            <span data-editable="title">{config.title}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            <span data-editable="subtitle">{config.subtitle}</span>
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid gap-8 md:grid-cols-3 max-w-7xl mx-auto">
          {config.plans.map((plan, idx) => (
            <Card
              key={idx}
              className={`relative bg-card/50 backdrop-blur-sm border-border/50 transition-all duration-500 hover:scale-105 ${
                plan.popular
                  ? 'ring-2 ring-primary/50 shadow-2xl shadow-primary/20'
                  : 'hover:border-primary/30'
              } ${hoveredCard === idx ? 'shadow-2xl shadow-primary/30 border-primary/50' : ''}`}
              onMouseEnter={() => setHoveredCard(idx)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Glow effect */}
              <div
                className={`absolute inset-0 rounded-lg bg-gradient-to-r from-primary/10 to-accent/10 opacity-0 transition-opacity duration-500 ${
                  hoveredCard === idx ? 'opacity-100' : ''
                }`}
              />

              {/* Popular badge */}
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge
                    className={`px-4 py-1 text-sm font-medium ${
                      plan.popular
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-accent text-accent-foreground'
                    }`}
                  >
                    <span data-editable={`plans[${idx}].badge`}>{plan.badge}</span>
                  </Badge>
                </div>
              )}

              <CardContent className="relative p-8">
                {/* Plan header */}
                <div className="text-center mb-8">
                  <div className="flex items-center justify-center mb-4">
                    <div
                      className={`p-3 rounded-full ${
                        plan.popular
                          ? 'bg-primary/20 text-primary'
                          : 'bg-accent/20 text-accent-foreground'
                      }`}
                    >
                      {getPlanIcon(idx)}
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold mb-2">
                    <span data-editable={`plans[${idx}].name`}>{plan.name}</span>
                  </h3>

                  <p className="text-muted-foreground mb-4">
                    <span data-editable={`plans[${idx}].description`}>{plan.description}</span>
                  </p>

                  <div className="flex items-baseline justify-center mb-6">
                    <span className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      <span data-editable={`plans[${idx}].price`}>{plan.price}</span>
                    </span>
                    <span className="text-muted-foreground ml-2">
                      <span data-editable={`plans[${idx}].period`}>{plan.period}</span>
                    </span>
                  </div>
                </div>

                {/* Features list */}
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIdx) => (
                    <div key={featureIdx} className="flex items-start gap-3">
                      <div className="flex-shrink-0 mt-0.5">
                        <Check className="h-5 w-5 text-primary" />
                      </div>
                      <span className="text-foreground">
                        <span data-editable={`plans[${idx}].features[${featureIdx}]`}>
                          {feature}
                        </span>
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Button
                  onClick={() => handlePlanSelect(plan.ctaHref)}
                  data-editable-href={`plans[${idx}].ctaHref`}
                  data-href={plan.ctaHref}
                  className={`w-full py-6 text-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40'
                      : 'bg-secondary hover:bg-secondary/80 text-secondary-foreground hover:bg-accent'
                  }`}
                >
                  <span data-editable={`plans[${idx}].ctaText`}>{plan.ctaText}</span>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom note */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground">
            All plans include a 14-day free trial. No credit card required.
          </p>
        </div>
      </div>
    </section>
  );
}
