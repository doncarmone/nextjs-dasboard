import { WidgetsGrid } from '@/components';

export const metadata = {
  title: 'Dashboard Main',
  description: 'Dashboard Main Page',
};

export default function MainPage() {
  return (
    <div className='text-black'>
      <h1 className='mt-2 text-3xl'>Dashboard</h1>
      <span className='text-xl'>Informacion General</span>
      <WidgetsGrid />
    </div>
  );
}
