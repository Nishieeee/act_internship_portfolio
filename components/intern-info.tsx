'use client';

import Image from 'next/image';
import { Mail, Linkedin, Github, Phone } from 'lucide-react';

interface InternInfoProps {
  name: string;
  position: string;
  company: string;
  bio: string;
  email: string;
  phone: string;
  profileImage: string;
  linkedIn?: string;
  github?: string;
}

export function InternInfo({
  name,
  position,
  company,
  bio,
  email,
  phone,
  profileImage,
  linkedIn,
  github,
}: InternInfoProps) {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 bg-background">
      <div className="max-w-4xl w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="flex justify-center">
            <div className="relative w-64 h-64 rounded-xl overflow-hidden border-2 border-accent/30 shadow-2xl">
              <Image
                src={profileImage}
                alt={name}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Info Section */}
          <div className="space-y-6">
            <div>
              <h1 className="text-5xl font-bold text-yellow-500 mb-2">{name}</h1>
              <p className="text-xl text-accent font-semibold">{position}</p>
              <p className="text-lg text-muted-foreground mt-1">@ {company}</p>
            </div>

            <div className="h-1 w-16 bg-accent rounded-full"></div>

            <p className="text-foreground/80 leading-relaxed text-lg">{bio}</p>

            {/* Contact Info */}
            <div className="space-y-3 pt-4">
              <div className="flex items-center gap-3 text-foreground/70">
                <Mail size={20} className="text-accent" />
                <a href={`mailto:${email}`} className="hover:text-accent transition">
                  {email}
                </a>
              </div>
              <div className="flex items-center gap-3 text-foreground/70">
                <Phone size={20} className="text-accent" />
                <span>{phone}</span>
              </div>
            </div>

            {/* Social Links */}
            {(linkedIn || github) && (
              <div className="flex gap-4 pt-4">
                {linkedIn && (
                  <a
                    href={linkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-card hover:bg-secondary rounded-lg transition transform hover:scale-110"
                  >
                    <Linkedin size={24} className="text-accent" />
                  </a>
                )}
                {github && (
                  <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-card hover:bg-secondary rounded-lg transition transform hover:scale-110"
                  >
                    <Github size={24} className="text-accent" />
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
