import { ProductBuyForm } from '@/components/product-buy-form';
import { productSchema } from '@/lib/schema';
import Image from 'next/image';
import { z } from 'zod';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Tilt } from './ui/tilt';
import { Badge } from './ui/badge';

export function ProductListThumbnail({
  product,
}: {
  product: z.infer<typeof productSchema>;
}) {
  return (
    <Tilt rotationFactor={4} isRevese>
      <Card className='max-w-full w-full group mx-auto hover:shadow-xl transition-shadow'>
        <CardHeader className='p-0 flex-shrink-0'>
          <Image
            src={product.images?.[0] || '/sample-image.jpg'}
            alt='Post thumbnail'
            width={400}
            height={200}
            className='w-full h-48 object-cover rounded-t-xl grayscale duration-700 group-hover:grayscale-0'
          />
        </CardHeader>
        <CardContent className='p-4 flex-grow overflow-hidden'>
          <CardTitle
            className='mb-2 line-clamp-2 h-14 overflow-hidden'
            title={product.name}
          >
            {product.name}
          </CardTitle>
          <CardDescription
            className='mb-4 line-clamp-3 h-16 overflow-hidden'
            title={product.description || ''}
          >
            {product.description}
          </CardDescription>
        </CardContent>
        <CardFooter className='flex justify-between items-center p-4 pt-0'>
          <ProductBuyForm priceId={product.price.id} />
          <Badge variant='outline'>{product.price.display_amount}</Badge>
        </CardFooter>
      </Card>
    </Tilt>
  );
}

export function ProductListThumbnailSkeleton() {
  return <div className='bg-muted aspect-square rounded-xl' />;
}
