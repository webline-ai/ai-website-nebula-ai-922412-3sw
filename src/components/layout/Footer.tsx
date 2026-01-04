'use client';

import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Github, Twitter, Linkedin, Mail, ArrowRight, Zap } from 'lucide-react';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';

const DEFAULT_FOOTER = {
  brandName: 'Nebula AI',
  tagline: 'Next-generation AI that transforms imagination into reality',
  copyright: '© 2024 Nebula AI. All rights reserved.',
  newsletter: {
    title: 'Stay ahead of the AI revolution',
    description: 'Get exclusive insights and early access to breakthrough features',
    placeholder: 'Enter your email',
    buttonText: 'Subscribe',
  },
  company: [
    { label: 'About', href: '/about' },
    { label: 'Careers', href: '/careers' },
    { label: 'Contact', href: '/contact' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
  ],
  social: [
    { label: 'GitHub', href: 'https://github.com' },
    { label: 'Twitter', href: 'https://twitter.com' },
  ],
} as const;

type FooterProps = Partial<typeof DEFAULT_FOOTER>;

export default function Footer(props: FooterProps) {
  const config = { ...DEFAULT_FOOTER, ...props };
  const navigate = useSmartNavigation();

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Newsletter signup logic would go here
  };

  return (
    <footer id="footer" className="bg-slate-900 text-foreground border-t border-border/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Brand & Newsletter Section */}
            <div className="lg:col-span-6">
              {/* Brand */}
              <div className="flex items-center gap-3 mb-6">
                <div className="relative">
                  <Zap className="h-8 w-8 text-primary" />
                  <div className="absolute inset-0 h-8 w-8 bg-primary/20 blur-lg rounded-full" />
                </div>
                <span className="font-bold text-2xl bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
                  <span data-editable="brandName">{config.brandName}</span>
                </span>
              </div>

              <p className="text-muted-foreground text-lg mb-8 max-w-md">
                <span data-editable="tagline">{config.tagline}</span>
              </p>

              {/* Newsletter */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">
                  <span data-editable="newsletter.title">{config.newsletter.title}</span>
                </h3>
                <p className="text-muted-foreground">
                  <span data-editable="newsletter.description">
                    {config.newsletter.description}
                  </span>
                </p>
                <form
                  onSubmit={handleNewsletterSubmit}
                  className="flex gap-3 max-w-md"
                  data-form-id="695ab797e304717e986a24c1"
                >
                  <input
                    type="email"
                    placeholder={config.newsletter.placeholder}
                    className="flex-1 px-4 py-3 bg-slate-800/50 border border-border/30 rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50"
                    required
                  />
                  <Button
                    type="submit"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-medium transition-all duration-200 hover:shadow-lg hover:shadow-primary/25"
                  >
                    <span data-editable="newsletter.buttonText">
                      {config.newsletter.buttonText}
                    </span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </div>
            </div>

            {/* Links Section */}
            <div className="lg:col-span-6">
              <div className="grid gap-8 sm:grid-cols-3">
                {/* Company Links */}
                <div>
                  <h4 className="font-semibold text-foreground mb-4">Company</h4>
                  <ul className="space-y-3">
                    {config.company.map((link, idx) => (
                      <li key={idx}>
                        <button
                          onClick={() => navigate(link.href)}
                          data-editable-href={`company[${idx}].href`}
                          data-href={link.href}
                          className="text-muted-foreground hover:text-primary transition-colors duration-200 text-left"
                        >
                          <span data-editable={`company[${idx}].label`}>{link.label}</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Legal Links */}
                <div>
                  <h4 className="font-semibold text-foreground mb-4">Legal</h4>
                  <ul className="space-y-3">
                    {config.legal.map((link, idx) => (
                      <li key={idx}>
                        <button
                          onClick={() => navigate(link.href)}
                          data-editable-href={`legal[${idx}].href`}
                          data-href={link.href}
                          className="text-muted-foreground hover:text-primary transition-colors duration-200 text-left"
                        >
                          <span data-editable={`legal[${idx}].label`}>{link.label}</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Social Links */}
                <div>
                  <h4 className="font-semibold text-foreground mb-4">Connect</h4>
                  <div className="flex gap-4">
                    {config.social.map((social, idx) => (
                      <button
                        key={idx}
                        onClick={() => navigate(social.href)}
                        data-editable-href={`social[${idx}].href`}
                        data-href={social.href}
                        className="p-3 bg-slate-800/50 hover:bg-slate-700/50 border border-border/30 rounded-lg text-muted-foreground hover:text-primary transition-all duration-200 hover:shadow-lg hover:shadow-primary/10"
                        aria-label={social.label}
                      >
                        {idx === 0 && <Github className="h-5 w-5" />}
                        {idx === 1 && <Twitter className="h-5 w-5" />}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <Separator className="bg-border/20" />
        <div className="py-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            <span data-editable="copyright">{config.copyright}</span>
          </p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <span>Built with revolutionary AI technology</span>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-primary font-medium">Live</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
