import { ResponsiveLine } from "@nivo/line";

export const LineChart = ({ data }: { data: any }) => {
  return (
    <ResponsiveLine
      colors={[data[0].color]}
      theme={{
        textColor: "white",
        crosshair: {
          line: {
            stroke: "#D2D2D5",
            strokeWidth: 1,
            strokeOpacity: 0.35,
          },
        },
      }}
      enableGridX={false}
      enableGridY={false}
      data={data}
      margin={{ top: 0, right: 20, bottom: 50, left: 60 }}
      xScale={{ type: 'point' }}
      yScale={{
        type: "linear",
        min: "auto",
        max: "auto",
        stacked: false,
        reverse: false,
      }}
      yFormat=" >-.2f"
      axisTop={null}
      axisRight={null}
      axisLeft={{
        legend: "kWh",
        legendOffset: -45,
        legendPosition: "middle",
        tickValues: [0, 50, 100, 150, 200, 250, 300],
        tickPadding: 10,
      }}
      axisBottom={{
        tickValues: [
          "4:00",
          "8:00",
          "10:00",
          "12:00",
          "14:00",
          "16:00",
          "20:00",
        ],
        tickPadding: 10,
      }}
      enablePoints={false}
      pointColor={{ theme: "background" }}
      pointLabelYOffset={-12}
      useMesh={true}
    />
  );
};
