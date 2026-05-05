'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  purpose: string;
  contributors: string[];
  screenshots: string[];
}

export function ProjectCard({
  title,
  description,
  purpose,
  contributors,
  screenshots,
}: ProjectCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % screenshots.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? screenshots.length - 1 : prev - 1
    );
  };

  return (
    <div className="bg-card rounded-lg border border-border/50 overflow-hidden hover:border-accent/50 transition">
      {/* Carousel Section */}
      <div className="relative bg-secondary/20 aspect-video overflow-hidden group">
        {screenshots.length > 0 ? (
          <>
            <Image
              src={screenshots[currentImageIndex]}
              alt={`${title} screenshot ${currentImageIndex + 1}`}
              fill
              className="object-cover"
            />
            {screenshots.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 rounded-full transition opacity-0 group-hover:opacity-100 z-10"
                >
                  <ChevronLeft size={24} className="text-white" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 rounded-full transition opacity-0 group-hover:opacity-100 z-10"
                >
                  <ChevronRight size={24} className="text-white" />
                </button>

                {/* Dot Indicators */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {screenshots.map((_, idx) => (
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
          </>
        ) : (
          <div className="w-full h-full flex items-center justify-center text-muted-foreground">
            No screenshots available
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="p-8">
        <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>

        <div className="space-y-4 mb-6">
          <div>
            <p className="text-accent font-semibold text-sm mb-2">DESCRIPTION</p>
            <p className="text-foreground/80 leading-relaxed">{description}</p>
          </div>

          <div>
            <p className="text-accent font-semibold text-sm mb-2">PURPOSE & OBJECTIVES</p>
            <p className="text-foreground/80 leading-relaxed">{purpose}</p>
          </div>

          <div>
            <p className="text-accent font-semibold text-sm mb-3">CONTRIBUTORS</p>
            <div className="flex flex-wrap gap-2">
              {contributors.map((contributor, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-secondary/50 text-foreground/80 rounded-full text-sm"
                >
                  {contributor}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
