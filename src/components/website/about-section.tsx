import { Target, Eye, Lightbulb } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-rmf-gold font-medium mb-2 tracking-wider uppercase text-sm">
            About Us
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-rmf-navy mb-4">
            Pioneering Regenerative Medicine
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The Regenerative Medicine Federation brings together leading practitioners
            to advance the science and clinical application of regenerative therapies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Target,
              title: "Our Mission",
              description:
                "To advance regenerative medicine through education, research collaboration, and establishing clinical best practices across the global medical community.",
            },
            {
              icon: Eye,
              title: "Our Vision",
              description:
                "A world where regenerative therapies are accessible, evidence-based, and integrated into mainstream medical practice for the benefit of all patients.",
            },
            {
              icon: Lightbulb,
              title: "Our Values",
              description:
                "Scientific rigor, ethical practice, collaborative innovation, and commitment to patient outcomes drive everything we do.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="text-center p-8 rounded-xl border bg-card hover:shadow-lg transition-shadow"
            >
              <div className="h-14 w-14 rounded-full bg-rmf-gold/10 flex items-center justify-center mx-auto mb-6">
                <item.icon className="h-7 w-7 text-rmf-gold" />
              </div>
              <h3 className="font-heading text-xl font-bold text-rmf-navy mb-3">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
