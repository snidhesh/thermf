import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Users, BookOpen } from "lucide-react";

export function Hero() {
  return (
    <section className="relative bg-rmf-navy text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-rmf-navy via-rmf-navy-light to-rmf-navy opacity-90" />
      <div className="relative container mx-auto px-4 py-24 md:py-32">
        <div className="max-w-3xl">
          <p className="text-rmf-gold font-medium mb-4 tracking-wider uppercase text-sm">
            Regenerative Medicine Federation
          </p>
          <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Advancing the Future of{" "}
            <span className="text-rmf-gold">Regenerative Medicine</span>
          </h1>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl">
            Join a global community of physicians and researchers dedicated to
            advancing regenerative medicine through collaboration, education, and
            clinical excellence.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button
              size="lg"
              render={<Link href="/register" />}
              className="bg-rmf-gold hover:bg-rmf-gold-light text-rmf-navy font-semibold"
            >
              Apply for Membership <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              render={<Link href="/#about" />}
              className="border-white/30 text-white hover:bg-white/10"
            >
              Learn More
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {[
            { icon: Users, label: "Global Network", value: "500+ Members" },
            { icon: BookOpen, label: "Educational Resources", value: "200+ Hours" },
            { icon: Award, label: "Expert Board", value: "30+ Specialists" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="flex items-center gap-4 bg-white/5 rounded-lg p-4 backdrop-blur-sm border border-white/10"
            >
              <div className="h-12 w-12 rounded-lg bg-rmf-gold/20 flex items-center justify-center">
                <stat.icon className="h-6 w-6 text-rmf-gold" />
              </div>
              <div>
                <p className="text-sm text-gray-400">{stat.label}</p>
                <p className="text-lg font-semibold">{stat.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
