import { Hero } from '@/components/hero';
import { ProductList } from '@/components/product-list';

export default async function Page() {
  return (
    <div className='mx-auto flex max-w-screen-xl flex-col gap-8 px-4'>
      <Hero />
      <ProductList />
    </div>
  );
}
