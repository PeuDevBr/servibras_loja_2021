import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function Message(message, type) {
  switch (type) {
    case 'info':
      toast.info(message, {autoClose: 3000, position: "top-left"});
      break;
    
    case 'success':
      toast.success(message, {autoClose: 3000 , position: "top-left"});
      break;

    case 'error':
      toast.error(message, {autoClose: 3000 , position: "top-left"});
      break;

    case 'warn':
      toast.warn(message, {autoClose: 3000 , position: "top-left"});
      break;
  
    default:
      toast.dark(message, {autoClose: 3000 , position: "top-left"});
      break;
  }
}