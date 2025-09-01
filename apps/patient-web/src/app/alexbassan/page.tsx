"use client";

import React from 'react';
import ProfessionalPage from '../../components/ProfessionalPageTemplate';
import { alexBassanData } from '../../data/professionals/alexBassan';

export default function AlexBassanPage() {
  return <ProfessionalPage professional={alexBassanData} />;
}
