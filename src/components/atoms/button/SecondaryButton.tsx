/* eslint-disable*/
import styled from 'styled-components';
import { BaseButton } from './BaseButton';

export const SecondaryButton = (props: any) => {
  const { children, onClick } = props;
  return (
    <SButton type="button" onClick={onClick}>
      {children}
    </SButton>
  );
};

const SButton = styled(BaseButton)`
  background-color: #11999e;
`;
