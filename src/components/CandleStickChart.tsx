import { useQuery } from "@tanstack/react-query";
import { useRecoilValue } from "recoil";
import { fetchCoinHistory } from "../api";
import { coinIdAtom, isDarkAtom } from "../atom";
import { IHistorical } from "./LineChart";
import ApexChart from "react-apexcharts";


const CandleStickChart = () => {
  const isDark = useRecoilValue(isDarkAtom);
  const coinId = useRecoilValue(coinIdAtom);
  const { isLoading, data } = useQuery<IHistorical[]>(["ohlcv", coinId], () =>
    fetchCoinHistory(coinId)
  );

  return (
    <div>
      {isLoading ? "Loading chart..." : 
        <ApexChart 
        type="candlestick"
        series={[
          {
            data: data?.map(price => ({
              x: new Date (price.time_close * 1000),
              y: [Number(price.open), Number(price.high), Number(price.low), Number(price.close)],
            })) ?? [],
          },
        ]}
        options={{
          theme: {
            mode: isDark ? "dark" : "light",
          },
          chart: {
            type: "candlestick",
            height: 350,
            width: 500,
            toolbar: {
              show:false,
            },
            background: "transparent",
          },
          stroke: {
            curve: "smooth",
            width: 2,
          },
          grid: {
            show: false,
          },
          yaxis: {
            show: false,
          },
          xaxis: {
            axisBorder: { show: false },
            axisTicks: { show: false },
            type: "datetime",
            categories: data?.map((price) => price.time_close),
            labels: { show: false },
          },
          plotOptions: {
            candlestick: {
              colors: {
                upward: '#0be881',
                downward: '#0fbcf9',
              },
              wick: {
                useFillColor: true
              }
            }
          }
        }}
        />
      }
    </div>
  )
}

export default CandleStickChart;
