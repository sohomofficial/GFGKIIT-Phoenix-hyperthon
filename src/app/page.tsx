import { Hero } from '@/components/hero';
import { ProductList } from '@/components/product-list';
import { getProducts } from '@/lib/products';

export default async function Page() {
  const products = await getProducts();

  return (
    <div className='mx-auto flex max-w-screen-xl flex-col gap-8 px-4'>
      <Hero />
      <section className='mx-auto max-w-3xl w-full'>
        <ProductList list={products} />
      </section>
    </div>
  );
}
