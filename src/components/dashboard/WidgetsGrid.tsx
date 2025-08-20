'use client';
import { IoCartOutline } from 'react-icons/io5';
import { SimpleWidget } from './SimpleWidget';
import { useAppSelector } from '@/store';
export const WidgetsGrid = () => {
  const count = useAppSelector((state) => state.counter.count);

  return (
    <div className='flex flex-wrap p-2 items-center justify-center'>
      <SimpleWidget
        title='contador'
        subTitle='Número de cositas'
        label={count.toString()}
        icon={<IoCartOutline size={70} className='text-blue-600' />}
      />
    </div>
  );
};
