/* eslint-disable*/

import { Box, Divider, Flex, Heading, Input, Stack } from '@chakra-ui/react';
import { ChangeEvent, FC, memo, useState } from 'react';
import { UseAuth } from '../../hooks/UseAuth';
import { PrimaryButton } from '../atoms/button/PrimaryButton';

export const Login: FC = memo(() => {
  const { login, loading } = UseAuth();
  const [userId, setUserId] = useState('');
  const onChangeUserId = (e: ChangeEvent<HTMLInputElement>) => setUserId(e.target.value);
  const onClickLogin = () => login(userId);

  return (
    <Flex align="center" justify="center" height="100vh">
      <Box bg="white" w="sm" p={4} borderRadius="md" shadow="md">
        <Heading as="h1" size="lg" textAlign="center">
          ユーザ管理アプリ
        </Heading>
        <Divider my={4}></Divider>
        <Stack spacing={6} py={4} px={10}>
          <Input placeholder="ユーザID" value={userId} onChange={onChangeUserId}></Input>
          <PrimaryButton disabled={userId === ''} loading={loading} onClick={onClickLogin}>
            ログイン
          </PrimaryButton>
        </Stack>
      </Box>
    </Flex>
  );
});
