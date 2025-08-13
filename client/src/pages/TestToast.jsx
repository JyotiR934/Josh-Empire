import { toast, ToastContainer } from 'react-toastify';

const TestToast = () => {
  return (
    <div>
      <button onClick={() => toast("Test toast!")}>Show Toast</button>
      <ToastContainer />
    </div>
  );
};
export default TestToast;