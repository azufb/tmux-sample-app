import logo from './logo.svg';
import './App.css';
import { UseQueryResult, useQuery } from '@tanstack/react-query';
import getData from './ts/getData';
import Message from './components/Message';

const App = (): JSX.Element => {
  const { data }: any = useQuery({
    queryKey: ['data'],
    queryFn: getData,
  });

  return (
    <div className='App-header'>
      <img src={logo} className='App-logo' alt='logo' />
      <div>バックエンドから取得した値：{data}</div>
      <Message />
    </div>
  );
};

export default App;
