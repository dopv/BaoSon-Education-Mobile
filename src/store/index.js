/* eslint-disable no-shadow */
import React from 'react';
import unreduxed from 'unreduxed';

const useUnredux = () => {
  const [token, setToken] = React.useState();
  // const [dataAuth, setDataAuth] = React.useState();
  const [isLogout, setLogout] = React.useState();
  const [userInfo, setInfo] = React.useState();
  // const [dataTrans, setDataTrans] = React.useState();
  // const [dataNextPack, setDataNextPack] = React.useState();

  const setTokenFunc = (token) => {
    setToken(token);
  };

  const getUserFunc = (info, token) => {
    setInfo(info);
    setToken(token);
    setLogout(false);
  };

  const setTokenAction = React.useCallback((token) => setTokenFunc(token), []);
  const getUserInfoAction = React.useCallback(
    (info, token) => getUserFunc(info, token),
    [],
  );

  return {
    // dataAuth,
    isLogout,
    token,
    userInfo,
    // dataTrans,
    // dataNextPack,
    // loginAction,
    setTokenAction,
    // logoutAction,
    getUserInfoAction,
    // setDataTransAction,
    // setDataNextPackAction,
  };
};
export const [ContainerProvider, useContainer] = unreduxed(useUnredux);
