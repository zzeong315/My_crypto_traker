import { IconProps } from "../types";

export const MoonIcon = ({ color }: IconProps) => {
  return (
    <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.67199 18.7967C3.97348 18.2328 4.55832 17.2239 5.45256 17.1452C11.2419 16.6357 15.0596 10.0755 12.4592 5.00063C12.0486 4.19926 12.5832 3.13003 13.4466 3.38559C17.2438 4.50955 20 7.94173 20 12C20 16.9715 16.1189 21 11 21C8.65964 21 6.38082 20.1762 4.67199 18.7967Z" stroke={ color } stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  )
};