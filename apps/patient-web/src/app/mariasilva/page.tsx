"use client";

import React from 'react';
import ProfessionalPage from '../../components/ProfessionalPageTemplate';
import { mariaSilvaData } from '../../data/professionals/mariaSilva';

export default function MariaSilvaPage() {
  return <ProfessionalPage professional={mariaSilvaData} />;
}
