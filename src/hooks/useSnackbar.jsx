import { useSnackContext } from '@/contexts/SnackbarContext.jsx';

export default function useSnackbar() {
  const { addSnack } = useSnackContext();

  const snack = (item) => {
    addSnack(item);
  };

  return { snack };
}
