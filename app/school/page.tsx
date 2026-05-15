import React from 'react';
import SchoolHero from '@/components/school/SchoolHero';
import SchoolPrograms from '@/components/school/SchoolPrograms';
import SchoolProcess from '@/components/school/SchoolProcess';

export default function SchoolPage() {
  return (
    <main>
      <SchoolHero />
      <SchoolPrograms />
      <SchoolProcess />
    </main>
  );
}