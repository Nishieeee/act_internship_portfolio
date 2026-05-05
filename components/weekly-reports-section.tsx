'use client';

import { useState } from 'react';
import { WeeklyReport } from './weekly-report';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Week {
  weekNumber: number;
  description: string;
  skillsUsed: string[];
  majorProgress: string[];
  images: string[];
}

interface WeeklyReportsSectionProps {
  weeks: Week[];
}

export function WeeklyReportsSection({ weeks }: WeeklyReportsSectionProps) {
  const [currentWeekIndex, setCurrentWeekIndex] = useState(0);

  const nextWeek = () => {
    setCurrentWeekIndex((prev) => (prev + 1) % weeks.length);
  };

  const prevWeek = () => {
    setCurrentWeekIndex((prev) => (prev === 0 ? weeks.length - 1 : prev - 1));
  };

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-white mb-3">Weekly Internship Activities</h2>
          <div className="h-1 w-16 bg-accent rounded-full"></div>
        </div>

        {/* Week Navigation */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={prevWeek}
            className="p-3 bg-card hover:bg-secondary rounded-lg transition transform hover:scale-105"
          >
            <ChevronLeft size={24} className="text-accent" />
          </button>

          <div className="text-center">
            <p className="text-foreground/60 text-sm">Currently viewing</p>
            <h3 className="text-3xl font-bold text-white">
              Week {weeks[currentWeekIndex]?.weekNumber || 1}
            </h3>
          </div>

          <button
            onClick={nextWeek}
            className="p-3 bg-card hover:bg-secondary rounded-lg transition transform hover:scale-105"
          >
            <ChevronRight size={24} className="text-accent" />
          </button>
        </div>

        {/* Week Indicators */}
        <div className="flex justify-center gap-2 mb-8 flex-wrap">
          {weeks.map((week, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentWeekIndex(idx)}
              className={`px-4 py-2 rounded-lg transition ${
                idx === currentWeekIndex
                  ? 'bg-accent text-background font-semibold'
                  : 'bg-card hover:bg-secondary text-foreground'
              }`}
            >
              W{week.weekNumber}
            </button>
          ))}
        </div>

        {/* Current Week Report */}
        {weeks[currentWeekIndex] && (
          <WeeklyReport {...weeks[currentWeekIndex]} />
        )}
      </div>
    </section>
  );
}
