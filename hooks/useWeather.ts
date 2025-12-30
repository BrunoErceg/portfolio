import { useQuery } from '@tanstack/react-query';

export const useWeather = () => {
  return useQuery({
    queryKey: ['weather'],
    queryFn: async () => {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?id=3190941&units=metric&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}`,
      );
      if (!response.ok) throw new Error('Problem s dohvaćanjem vremena');
      return response.json();
    },
    staleTime: 5 * 60 * 1000,
    refetchOnWindowFocus: false,
  });
};
