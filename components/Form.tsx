import { useForm } from 'react-hook-form';
import IKaizen from '../types/IKaizen';

type IFormProps = {
  formState: IKaizen;
};

const Form: React.FC<IFormProps> = ({
  formState
}) => {
  const form = useForm<IKaizen>({ defaultValues: formState });
  return (
    <form action="/send-data-here" method="post" className='flex flex-col'>
      <label className='ml-5'>Problem</label>
      <input type="text" id="problem" name="problem" />
      <label className='ml-5'>Choices</label>
      <input type="text" id="choices" name="choices" />
      <label className='ml-5'>My Choice</label>
      <input type="text" id="my-choice" name="my-choice" />
      <label className='ml-5'>Answer</label>
      <input type="text" id="answer" name="answer" />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
