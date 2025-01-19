'use client';

import { Button } from '@/components/ui/button';

export function ProductBuyForm({ priceId }: { priceId: string }) {
  return (
    <form action=''>
      <input type='hidden' name='priceId' value={priceId} />
      <Button type='submit' size='sm'>
        Buy Now
      </Button>
    </form>
  );
}
