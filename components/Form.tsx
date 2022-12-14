import React from 'react';
import { useForm } from 'react-hook-form';
import EventHandler from '../types/EventHandler';
import IKaizen from '../types/IKaizen';

type IFormProps = {
  formState: IKaizen,
  onSubmit: EventHandler<IKaizen>,
};

const Form: React.FC<IFormProps> = ({
  formState,
  onSubmit,
}) => {
  const form = useForm<IKaizen>({ defaultValues: formState });
  const onSaveSubmit = React.useCallback((data: React.FormEvent<HTMLFormElement>) => {
    onSubmit(data, form.getValues())
  }, [
    form,
    onSubmit,
  ]);

  return (
    <form className='flex flex-col' onSubmit={(e) => onSaveSubmit(e)}>
      <label className='ml-5'>Problem</label>
      <input type="text" id="problem" name="problem" />
      <label className='ml-5'>Choices</label>
      <input type="text" id="choices" name="choices" />
      <label className='ml-5'>My Choice</label>
      <input type="text" id="my-choice" name="my-choice" />
      <label className='ml-5'>Answer</label>
      <input type="text" id="answer" name="answer" />
      <button
        className='bg-blue-300'
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
