import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function Message(message, type) {
  switch (type) {
    case 'info':
      toast.info(message, {autoClose: 2000, position: "bottom-left"});
      break;
    
    case 'success':
      toast.success(message, {autoClose: 2000 , position: "bottom-left"});
      break;

    case 'error':
      toast.error(message, {autoClose: 2000 , position: "bottom-left"});
      break;

    case 'warn':
      toast.warn(message, {autoClose: 2000 , position: "bottom-left"});
      break;
  
    default:
      toast.dark(message, {autoClose: 2000 , position: "bottom-left"});
      break;
  }
}