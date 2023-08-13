import axiosInstance from '../axios/axiosInstance';
import { AxiosResponse } from 'axios';

const getMessage = async (): Promise<any> => {
  const result: AxiosResponse = await axiosInstance.get('/message');
  const resultData = result.data;

  return resultData;
};

export default getMessage;
