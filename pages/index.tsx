import { Inter } from "next/font/google";
import { Button, Box, Typography, useTheme, alpha } from "@mui/material";
import Link from "next/link";
import { BarChart } from "@mui/x-charts/BarChart";
import LandingHeader from "@/src/components/LandingPage/LandingHeader";
import HeroSection from "@/src/components/LandingPage/HeroSection";
import PhoneBanner from "@/src/components/LandingPage/PhoneBanner";
import FeaturesSection from "@/src/components/LandingPage/FeaturesSection";
import LandingFooter from "@/src/components/LandingPage/LandingFooter";

export default function Home() {
  return (
    <>
      <LandingHeader />
      <HeroSection />
      <PhoneBanner />
      <FeaturesSection />
      <LandingFooter />
    </>
  );
}
