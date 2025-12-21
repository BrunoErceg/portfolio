import axios from "axios";
import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import SnowAnimation from "@lottie/snow.json";
import SunnyAnimation from "@lottie/sunny.json";
import WindyAnimation from "@lottie/windy.json";
import StormAnimation from "@lottie/storm.json";
import PartlyCloudyAnimation from "@lottie/partly-cloudy.json";
import PartlyShowerAnimation from "@lottie/partly-shower.json";
import GradientSurface from "../shared/GradientSurface";

/**
 * A React component that fetches weather data from the OpenWeatherMap API.
 * It displays a weather animation based on the weather condition.
 * @returns A React component that displays the weather data and animation.
 */

function WeatherApi() {
  const [weatherData, setWeatherData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        // Fetch weather data from the OpenWeatherMap API
        const response = await axios.get(
          "https://api.openweathermap.org/data/2.5/weather?id=3190941&units=metric&appid=85680025b99fdb750394d5b453c2fc8d",
        );
        setWeatherData(response.data);
      } catch (error) {
        // Handle any errors that occur during the fetch
        setError(error instanceof Error ? error.message : "Unknown error");
      } finally {
        // Set the loading state to false after the fetch is completed
        setIsLoading(false);
      }
    };

    fetchWeatherData();
  }, []);

  /**
   * A function that returns the weather animation data based on the weather condition.
   * @returns The weather animation data.
   */
  const getWeatherAnimation = () => {
    let animationData: any = PartlyCloudyAnimation;
    switch (weatherData?.weather[0].description) {
      case "clear sky":
        animationData = SunnyAnimation;
        break;
      case "few clouds":
        animationData = PartlyCloudyAnimation;
        break;
      case "scattered clouds":
        animationData = WindyAnimation;
        break;
      case "broken clouds":
        animationData = WindyAnimation;
        break;
      case "shower rain":
        animationData = StormAnimation;
        break;
      case "rain":
        animationData = PartlyShowerAnimation;
        break;
      case "thunderstorm":
        animationData = StormAnimation;
        break;
      case "snow":
        animationData = SnowAnimation;
        break;
      case "mist":
        animationData = WindyAnimation;
        break;
    }
    return animationData;
  };

  if (isLoading) {
    return (
      <GradientSurface centered className="h-32">
        <p>Loading...</p>
      </GradientSurface>
    );
  }

  if (error) {
    return (
      <GradientSurface centered className="h-32">
        <p> {error}</p>
      </GradientSurface>
    );
  }

  return (
    <GradientSurface centered className="h-32">
      {weatherData && (
        <div className="-ml-5 flex w-fit items-center">
          <Lottie
            animationData={getWeatherAnimation()}
            height={50}
            width={50}
            loop={true}
            className="mr-3 size-20"
          />
          <div>
            <p className="mt-1 -mb-1 text-4xl font-semibold">
              {Math.floor(weatherData?.main?.temp)}°C{" "}
            </p>
            <p>Šibenik, Hrvatska</p>
          </div>
        </div>
      )}
    </GradientSurface>
  );
}
export default WeatherApi;
