import axiosInstance from '../axios/axiosInstance';
import { AxiosResponse } from 'axios';

const getData = async (): Promise<any> => {
  const result: AxiosResponse = await axiosInstance.get('/');
  const resultData = result.data;

  return resultData;
};

export default getData;
