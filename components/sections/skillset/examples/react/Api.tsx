import axios from "axios";
import { useEffect, useState } from "react";
import { Text } from "@/components/ui/Text";

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
    <div className="mb-5 h-[120px] rounded-2xl bg-linear-to-br from-blue-200 to-blue-400 pr-6">
      <div className="flex items-center">
        {isClient && (
          <>
            <img
              src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
              alt=""
              className="h-30 w-30"
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
