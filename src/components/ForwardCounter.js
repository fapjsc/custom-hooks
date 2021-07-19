import Card from './Card';

// Hooks
import useCounter from '../hooks/useCounter';

const ForwardCounter = () => {
  const counter = useCounter();

  return <Card>{counter}</Card>;
};

export default ForwardCounter;
