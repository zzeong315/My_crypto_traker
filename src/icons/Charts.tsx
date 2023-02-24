import React from "react";
import { IconProps } from "../types";

export const CandleStickIcon = ({ color }: IconProps) => {
  return (
    <svg fill={ color } version="1.1" id="Capa_1"
	 width="20px" height="20px" viewBox="0 0 410.916 410.915">
    <g>
      <path d="M410.916,375.428v22.415H0V13.072h22.413v362.355H410.916z M89.193,315.652h11.208v-50.431h10.27V145.689h-10.27V93.393
        H89.193v52.296H78.917v119.533h10.277V315.652z M152.69,241.872h11.207v-51.365h10.276V70.971h-10.276V19.606H152.69v51.365h-10.27
        v119.536h10.27V241.872z M215.727,279.229h11.207v-49.488h10.271V110.194h-10.271V56.963h-11.207v53.231h-10.276V229.73h10.276
        V279.229z M287.169,300.243h11.21v-49.965h10.273V130.742h-10.273V77.976h-11.21v52.767h-10.269v119.536h10.269V300.243z
        M360.484,242.349h11.206v-51.833h10.271V70.971H371.69V20.077h-11.206v50.895h-10.276v119.536h10.276V242.349z"/>
    </g>
    </svg>
  );
};
export const LineIcon = ({ color }: IconProps) => {
  return (
    <svg width="20px" height="20px" viewBox="0 0 16 16" version="1.1" >
      <path fill={ color } d="M1 15v-15h-1v16h16v-1h-15z"></path>
      <path fill={ color } d="M9 8l-3-3-4 4v2l4-4 3 3 7-7v-2z"></path>
    </svg>
  );
};
