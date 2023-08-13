import { useQuery } from '@tanstack/react-query';
import getMessage from '../ts/getMessage';

const Message = () => {
  const { data } = useQuery({
    queryKey: ['message'],
    queryFn: getMessage,
  });

  return (
    <div>
      <p>メッセージ：{data}</p>
    </div>
  );
};

export default Message;
