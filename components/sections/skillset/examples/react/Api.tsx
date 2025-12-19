import axios from "axios";
import { useEffect, useState } from "react";
import { Text } from "@/components/ui/Text";
import Lottie from "lottie-react";
import SnowAnimation from "@lottie/snow.json";
import SunnyAnimation from "@lottie/sunny.json";
import WindyAnimation from "@lottie/windy.json";
import StormAnimation from "@lottie/storm.json";
import Storm2Animation from "@lottie/storm-2.json";
import PartlyCloudyAnimation from "@lottie/partly-cloudy.json";
import PartlyShowerAnimation from "@lottie/partly-shower.json";

function Api() {
  const [data, setData] = useState<any>([]);
  const [isLoading, SetIsLoading] = useState(true);
  const [error, setError] = useState<boolean | string>(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.openweathermap.org/data/2.5/weather?id=3190941&&units=metric&appid=85680025b99fdb750394d5b453c2fc8d",
        );
        setData(response.data);
        console.log(response.data);
        setIsClient(true);
      } catch (error) {
        const errorMessage = error instanceof Error;
        console.error("Error fetching data:", errorMessage);
        setError(errorMessage);
      } finally {
        SetIsLoading(false);
      }
    };

    fetchData();
  }, []);

  function getWeatherAnimation() {
    let weatherAnimation: any = PartlyCloudyAnimation;
    switch (data.weather[0].description) {
      case "clear sky":
        weatherAnimation = SunnyAnimation;
        break;
      case "few clouds":
        weatherAnimation = PartlyCloudyAnimation;
        break;
      case "scattered clouds":
        weatherAnimation = WindyAnimation;
        break;
      case "broken clouds":
        weatherAnimation = WindyAnimation;
        break;
      case "shower rain":
        weatherAnimation = StormAnimation;
        break;
      case "rain":
        weatherAnimation = PartlyShowerAnimation;
        break;
      case "thunderstorm":
        weatherAnimation = StormAnimation;
        break;
      case "snow":
        weatherAnimation = SnowAnimation;
        break;
      case "mist":
        weatherAnimation = WindyAnimation;
        break;
    }
    return weatherAnimation;
  }

  if (isLoading) {
    return (
      <div className="mb-5 flex h-[120px] items-center justify-center rounded-2xl bg-linear-to-br from-blue-200 to-blue-400 pr-6">
        <Text color="white" className="text-center">
          Loading...
        </Text>
      </div>
    );
  }

  if (error) {
    return (
      <div className="mb-5 flex h-[120px] items-center justify-center rounded-2xl bg-linear-to-br from-blue-200 to-blue-400 pr-6">
        <Text color="white" className="text-center">
          {error}
        </Text>
      </div>
    );
  }

  return (
    <div className="mb-5 flex h-[120px] justify-center rounded-2xl bg-linear-to-br from-blue-300 to-blue-400 pr-6">
      <div className="-ml-5 flex w-fit items-center">
        {isClient && (
          <>
            <Lottie
              animationData={getWeatherAnimation()}
              height={50}
              width={50}
              loop={true}
              className="mr-3 size-20"
            />
            <div>
              <p className="mt-1 -mb-1 text-4xl font-semibold text-white">
                {Math.floor(data.main?.temp)}°C{" "}
              </p>
              <p className="text-lg font-normal text-white">
                Šibenik, Hrvatska
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Api;
