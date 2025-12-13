import { useState, useEffect, useCallback } from 'react';
import { cache } from '@/lib/cache';

export const useLandingData = () => {
  const [images, setImages] = useState(["/hero.jpg", "/hero2.jpg", "/minesup.jpeg"]);
  const [landingContent, setLandingContent] = useState({
    heroSubtitle: "La plateforme de référence pour accéder aux journaux, blogs et institutions de recherche scientifique en Afrique et pour l'Afrique. Accréditée par le Conseil Scientifique du Comité Consultatif des Institutions Universitaires de la République du Cameroun.",
    heroTitle: "la base de données scientifiques dédiée au développement de l'Afrique.",
    visionTitle: "Our Vision",
    visionTexts: ["Connecting researchers across Africa", "Promoting health innovation", "Building knowledge networks"],
    quotes: []
  });

  const loadHeroImages = useCallback(async () => {
    try {
      const cachedImages = await cache.get('hero-images');
      if (cachedImages) {
        const imageUrls = cachedImages.map((img: any) => img.url);
        setImages(imageUrls);
      }
    } catch (error) {
      console.log('Using default images');
    }
  }, []);

  const loadLandingContent = useCallback(async () => {
    try {
      const cachedContent = await cache.get('landing-content');
      if (cachedContent) {
        setLandingContent(cachedContent);
      }
    } catch (error) {
      console.log('Using default content');
    }
  }, []);

  useEffect(() => {
    loadHeroImages();
  }, [loadHeroImages]);

  useEffect(() => {
    loadLandingContent();
    const interval = setInterval(loadLandingContent, 30000);
    return () => clearInterval(interval);
  }, [loadLandingContent]);

  return { images, landingContent };
};