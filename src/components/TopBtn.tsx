import { Link } from 'react-router-dom'
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { isDarkAtom } from '../atom';
import { MoonIcon } from '../icons/DarkMode';
import { HomeIcon } from '../icons/Home';
import { SunIcon } from '../icons/LightMode';
import { Btn, ChartBtnBox } from '../router/Chart';

export const BtnBox = styled(ChartBtnBox)`
  margin: 5px 0 0 0;
`;
export const TopButton = styled(Btn)<({mode:boolean})>`
  width: 35px;
  height: 35px;
  background-color: ${props => !props.mode && "lightgray"};
`;

const TopBtn = () => {
  const [DarkAtom, setDarkAtom] = useRecoilState(isDarkAtom);
  const handleToggle = () => setDarkAtom(curr => !curr);
  return (
    <BtnBox>
    <Link to={'/'}>
      <TopButton mode={DarkAtom}>
        <HomeIcon 
          color={DarkAtom? "white" : "black"}
        />
      </TopButton>
    </Link>
    <TopButton onClick={handleToggle} mode={DarkAtom}>
      {DarkAtom ? <MoonIcon color={"yellow"}/>: <SunIcon color={"red"}/>}
    </TopButton>
  </BtnBox>
  )
}

export default TopBtn;
