import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const notify = (type, text) => {
  const toastConfig = {
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'colored',
  };
  switch (type) {
    case 'error':
      toast.error(text, toastConfig);
      break;
    case 'warning':
      toast.warn(text, toastConfig);
      break;
    case 'success':
      toast.success(text, toastConfig);
      break;
    case 'info':
      toast.info(text, toastConfig);
      break;
    default:
      toast(text, toastConfig);
  }
};
