import { Toaster } from 'react-hot-toast';

const Toast = () => {
  return (
    <Toaster
      containerClassName={undefined}
      gutter={8}
      position={'top-right'}
      reverseOrder={false}
      toastOptions={{
        duration: 3000,
        removeDelay: 100,
      }}
    />
  );
};

export default Toast;
