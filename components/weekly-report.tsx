'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface WeeklyReportProps {
  weekNumber: number;
  description: string;
  skillsUsed: string[];
  majorProgress: string[];
  images: string[];
}

export function WeeklyReport({
  weekNumber,
  description,
  skillsUsed,
  majorProgress,
  images,
}: WeeklyReportProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  return (
    <div className="bg-card rounded-lg border border-border/50 overflow-hidden hover:border-accent/50 transition">
      <div className="grid md:grid-cols-2 gap-6">
        {/* Image Section */}
        {images.length > 0 && (
          <div className="relative bg-secondary/20 aspect-square overflow-hidden group">
            <Image
              src={images[currentImageIndex]}
              alt={`Week ${weekNumber} image ${currentImageIndex + 1}`}
              fill
              className="object-cover"
            />
            {images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 rounded-full transition opacity-0 group-hover:opacity-100 z-10"
                >
                  <ChevronLeft size={24} className="text-yellow-500" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 rounded-full transition opacity-0 group-hover:opacity-100 z-10"
                >
                  <ChevronRight size={24} className="text-yellow-500" />
                </button>

                {/* Dot Indicators */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {images.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImageIndex(idx)}
                      className={`w-2 h-2 rounded-full transition ${
                        idx === currentImageIndex
                          ? 'bg-accent'
                          : 'bg-white/50 hover:bg-white/70'
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        )}

        {/* Content Section */}
        <div className="p-8 flex flex-col justify-center">
          <h3 className="text-3xl font-bold text-yellow-500 mb-4">Week {weekNumber}</h3>

          <div className="space-y-6">
            <div>
              <p className="text-accent font-semibold text-sm mb-2">ACTIVITY DESCRIPTION</p>
              <p className="text-foreground/80 leading-relaxed">{description}</p>
            </div>

            <div>
              <p className="text-accent font-semibold text-sm mb-3">SKILLS USED</p>
              <div className="flex flex-wrap gap-2">
                {skillsUsed.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-accent/20 text-accent text-sm rounded-full font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <p className="text-accent font-semibold text-sm mb-3">MAJOR PROGRESS</p>
              <ul className="space-y-2">
                {majorProgress.map((progress, idx) => (
                  <li key={idx} className="flex gap-3 text-foreground/80">
                    <span className="text-accent font-bold">•</span>
                    <span>{progress}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
