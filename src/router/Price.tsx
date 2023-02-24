import { useQuery } from "@tanstack/react-query";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { fetchCoinTickers } from "../api";
import { coinIdAtom } from "../atom";
import { PriceData } from "../types";
import { Loader } from "./Coins";

const PriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px 20px;
  border-radius: 10px;
  height: 350px;
`;
const LeftPrice = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Unit = styled.h1`
  color: #9b9999;
`;
const PriceText = styled.h1`
  font-size: 30px;
  padding: 5px 0;
`;
const RightPrice = styled(LeftPrice)`
  width: 160px;
`;
const RightTitle = styled.h1`
  font-size: 14px;
  margin-bottom: 20px;
  text-align: right;
`;
const PercentBox = styled.div`
  display: flex;
  justify-content: space-between;
  height: 25px;
`;
const Time = styled.span`
  &:hover {
    color: ${(props) => props.theme.accentColor};
  }
`;
const Percent = styled(Time)``;
const TimeUnit = styled.span`
  color: #9b9999;
  font-size: 13px;
`;
const PercentUnit = styled(TimeUnit)``;
const Price = () => {
  const coinId = useRecoilValue(coinIdAtom);
  const { isLoading, data } = useQuery<PriceData>(["tickers", coinId], () =>
    fetchCoinTickers(coinId!)
  );
  return (
    <>
      {isLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <PriceContainer>
          <LeftPrice>
            <Unit>USD </Unit>
            <PriceText>$ {data?.quotes.USD.price.toFixed(3)}</PriceText>
          </LeftPrice>
          <RightPrice>
            <RightTitle>
              Percent Change
              <br /> Over Time
            </RightTitle>
            <PercentBox>
              <TimeUnit>Time</TimeUnit>
              <PercentUnit>%</PercentUnit>
            </PercentBox>
            <PercentBox>
              <Time>15M</Time>
              <Percent>{data?.quotes.USD.percent_change_15m}</Percent>
            </PercentBox>
            <PercentBox>
              <Time>30M</Time>
              <Percent>{data?.quotes.USD.percent_change_30m}</Percent>
            </PercentBox>
            <PercentBox>
              <Time>1H</Time>
              <Percent>{data?.quotes.USD.percent_change_1h}</Percent>
            </PercentBox>
            <PercentBox>
              <Time>6H</Time>
              <Percent>{data?.quotes.USD.percent_change_6h}</Percent>
            </PercentBox>
            <PercentBox>
              <Time>12H</Time>
              <Percent>{data?.quotes.USD.percent_change_12h}</Percent>
            </PercentBox>
            <PercentBox>
              <Time>24H</Time>
              <Percent>{data?.quotes.USD.percent_change_24h}</Percent>
            </PercentBox>
            <PercentBox>
              <Time>7D</Time>
              <Percent>{data?.quotes.USD.percent_change_7d}</Percent>
            </PercentBox>
            <PercentBox>
              <Time>30D</Time>
              <Percent>{data?.quotes.USD.percent_change_30d}</Percent>
            </PercentBox>
            <PercentBox>
              <Time>1Y</Time>
              <Percent>{data?.quotes.USD.percent_change_1y}</Percent>
            </PercentBox>
          </RightPrice>
        </PriceContainer>
      )}
    </>
  );
};

export default Price;
