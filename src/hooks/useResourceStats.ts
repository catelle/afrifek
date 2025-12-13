import { useState, useEffect } from 'react';

export const useResourceStats = () => {
  const [stats, setStats] = useState({
    total: 0,
    countries: 0,
    journals: 0,
    articles: 0,
    institutions: 0,
    editeurs:0,
    ouvrages:0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api'}/resources/stats`);
        if (response.ok) {
          const data = await response.json();
          setStats(data);
        }
      } catch (error) {
        console.error('Error fetching stats:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  return { stats, loading };
};