/* eslint-disable*/

import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { userState } from '../../store/userState';
import { SecondaryButton } from '../atoms/button/SecondaryButton';
import { SearchInput } from '../molecules/SearchInput';
import { UserCard } from '../organisms/user/UserCard';

const users = Array.from(Array(10).keys()).map((val) => {
  return {
    id: val,
    image: 'https://source.unsplash.com/GPWDxEs2fRE',
    name: `toru${val}`,
    email: 'gaee@example.com',
    phone: '000-xxxx-xxxx',
    company: {
      name: 'テスト株式会社',
    },
    website: 'https;//google.com',
  };
});

export const Users = () => {
  // const { userInfo, setUserInfo } = useContext(UserContext);
  const [userInfo, setUserInfo] = useRecoilState(userState);
  const onClickSwitch = () => setUserInfo({ isAdmin: !userInfo.isAdmin });

  return (
    <SContainer>
      <h2>ユーザ一覧</h2>
      <SearchInput></SearchInput>
      <br></br>
      <SecondaryButton onClick={onClickSwitch}>切り替え</SecondaryButton>
      <SUserArea>
        {users.map((user) => (
          <UserCard key={user.id} user={user}></UserCard>
        ))}
      </SUserArea>
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;

const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;
