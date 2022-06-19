/* eslint-disable*/

import styled from 'styled-components';
import { SecondaryButton } from '../atoms/button/SecondaryButton';
import { useHistory } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { userState } from '../../store/userState';

export const Top = () => {
  const histry = useHistory();
  // const { setUserInfo } = useContext(UserContext);
  const setUserInfo = useSetRecoilState(userState);

  const onClickAdmin = () => {
    setUserInfo({ isAdmin: true });
    histry.push('/users');
  };
  const onClickGeneral = () => {
    setUserInfo({ isAdmin: false });
    histry.push('/users');
  };
  return (
    <SContainer>
      <h2>TOPページです</h2>
      <SecondaryButton onClick={onClickAdmin}>管理者ユーザ</SecondaryButton>
      <br></br>
      <br></br>
      <SecondaryButton onClick={onClickGeneral}>一般ユーザ</SecondaryButton>
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
`;
