"use client"

import { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

export const AOSInit = () => {
  useEffect(() => {
    AOS.init({
      easing: 'ease-in-out',
      duration: 400,
      once: true,
    });
  }, [])

  return null
}