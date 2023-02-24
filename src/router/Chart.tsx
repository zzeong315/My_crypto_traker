import { useState } from "react";
import LineChart from "../components/LineChart";
import CandleStickChart from "../components/CandleStickChart";
import { CandleStickIcon, LineIcon } from "../icons/Charts";
import styled from "styled-components";

const ChartContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ChartBtnBox = styled.div`
  display: flex;
  align-self: flex-end;
  gap: 5px;
`;

export const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 30px;
  background-color: rgba(0, 0, 0, 0.5);
  &:hover {
    transform: scale(1.1);
  }
`;

const Chart = () => {
  const [isLineChart, setIsLineChart] = useState(false);

  return (
    <ChartContainer>
      <ChartBtnBox>
        <Btn onClick={() => setIsLineChart(true)}>
          <LineIcon color={isLineChart ? "#9c88ff" : "#575e6b"} />
        </Btn>
        <Btn onClick={() => setIsLineChart(false)}><CandleStickIcon color={isLineChart ? "#575e6b" : "#9c88ff"}/></Btn>
      </ChartBtnBox>
      {isLineChart ? <LineChart /> : <CandleStickChart/>}
    </ChartContainer>
  )
};

export default Chart;
