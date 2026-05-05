'use client';

import { CheckCircle2 } from 'lucide-react';

interface ObjectivesSectionProps {
  objectives: string[];
}

export function ObjectivesSection({ objectives }: ObjectivesSectionProps) {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-yellow-500 mb-3">Internship Objectives</h2>
          <div className="h-1 w-16 bg-accent rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {objectives.map((objective, index) => (
            <div
              key={index}
              className="flex gap-4 p-6 bg-card rounded-lg border border-border/50 hover:border-accent/30 transition"
            >
              <CheckCircle2 className="text-accent flex-shrink-0 mt-1" size={24} />
              <p className="text-foreground/90 leading-relaxed">{objective}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
