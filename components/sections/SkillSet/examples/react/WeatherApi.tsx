import Lottie from 'lottie-react';
import SnowAnimation from '@lottie/snow.json';
import SunnyAnimation from '@lottie/sunny.json';
import WindyAnimation from '@lottie/windy.json';
import StormAnimation from '@lottie/storm.json';
import PartlyCloudyAnimation from '@lottie/partly-cloudy.json';
import PartlyShowerAnimation from '@lottie/partly-shower.json';

import { useWeatherSibenik } from '@/hooks/useWeatherSibenik';
import { GradientSurface } from '../GradientSurface';

// Pair OpenWeatherMap icon codes with Lottie animations
const WEATHER_ANIMATIONS = {
  '01d': SunnyAnimation,
  '01n': SunnyAnimation,
  '02d': PartlyCloudyAnimation,
  '02n': PartlyCloudyAnimation,
  '03d': WindyAnimation,
  '03n': WindyAnimation,
  '04d': WindyAnimation,
  '04n': WindyAnimation,
  '09d': PartlyShowerAnimation,
  '09n': PartlyShowerAnimation,
  '10d': PartlyShowerAnimation,
  '10n': PartlyShowerAnimation,
  '11d': StormAnimation,
  '11n': StormAnimation,
  '13d': SnowAnimation,
  '13n': SnowAnimation,
  '50d': WindyAnimation,
  '50n': WindyAnimation,
} as const;
type WeatherIconCode = keyof typeof WEATHER_ANIMATIONS;

export function WeatherApi() {
  const { data, isFetching, isError, error } = useWeatherSibenik();
  const iconCode = data?.weather?.[0]?.icon as WeatherIconCode;
  const temperature = Math.round(data?.main?.temp || 0);

  if (isFetching) {
    return (
      <GradientSurface centered className="h-32">
        <div className="-ml-5 flex w-fit items-center">
          <div className="mr-2 size-18 animate-pulse rounded-full bg-white/20" />
          <div>
            <div className="mb-2 h-8 w-25 animate-pulse rounded-md bg-white/20" />
            <div className="h-5 w-35 animate-pulse rounded-md bg-white/20" />
          </div>
        </div>
      </GradientSurface>
    );
  }

  if (isError) {
    return (
      <GradientSurface centered className="h-32">
        <p>{error?.message}</p>
      </GradientSurface>
    );
  }

  return (
    <GradientSurface centered className="h-32">
      {data && (
        <div className="-ml-5 flex w-fit items-center">
          <Lottie
            animationData={WEATHER_ANIMATIONS[iconCode] || PartlyCloudyAnimation}
            height={50}
            width={50}
            loop={true}
            className="mr-3 size-20"
          />
          <div>
            <p className="mt-1 -mb-1 text-4xl font-semibold">{temperature}°C </p>
            <p>Šibenik, Hrvatska</p>
          </div>
        </div>
      )}
    </GradientSurface>
  );
}
