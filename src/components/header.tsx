import { Button, buttonVariants } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { Menu, Search } from 'lucide-react';
import Link from 'next/link';
import { Cart } from '@/components/cart';
import Image from 'next/image';
import { currentUser } from '@clerk/nextjs/server';

export async function Header() {
  const user = await currentUser();
  return (
    <header className='bg-background sticky top-0 z-20'>
      <div className='mx-auto flex h-16 max-w-screen-xl items-center gap-4 px-4'>
        <div className='mr-7 flex items-center gap-3'>
          <Sidebar />
          <Link
            href='/'
            className='flex items-center gap-2 px-2 text-xl font-bold tracking-tighter'
          >
            Ripple
          </Link>
        </div>
        <nav className='text-muted-foreground hover:[&_a]:text-foreground hidden items-center gap-6 text-sm font-medium md:flex [&_a]:transition-colors'>
          <Link href='#'>Docs</Link>
          <Link href='#'>Courses</Link>
          <Link href='#'>Premium</Link>
        </nav>
        <div className='ml-auto flex items-center gap-2'>
          <>
            {user ? (
              <div className='sm:flex sm:items-center sm:space-x-4'>
                <Cart />
                <Link
                  href={`/profile/${user.id}`}
                  className='hidden hover:brightness-95 shrink-0 transition sm:block'
                >
                  <Image
                    src={
                      user.imageUrl ||
                      `https://avatar.vercel.sh/${user.fullName}.svg`
                    }
                    alt='Picture'
                    width={36}
                    height={36}
                    className='rounded-full'
                  />
                </Link>
                <div className='text-xs hidden sm:block font-medium'>
                  Hi! {user.firstName ? user.firstName : 'user'} 👋
                </div>
              </div>
            ) : (
              <div className='sm:flex sm:gap-4'>
                <Link
                  href='/sign-in'
                  className={buttonVariants({ variant: 'outline' })}
                >
                  Sign In
                </Link>
                <Link
                  href='/sign-up'
                  className={buttonVariants({ className: 'hidden sm:block' })}
                >
                  Sign Up
                </Link>
              </div>
            )}
          </>
        </div>
      </div>
    </header>
  );
}

function SearchBar({ className }: { className?: string }) {
  return (
    <form className={cn('relative max-w-lg lg:max-w-xs', className)}>
      <Search className='text-muted-foreground absolute left-2 top-2 size-4' />
      <Input
        type='search'
        placeholder='Search products...'
        className='h-8 rounded-lg pl-8 text-sm sm:w-[200px] md:w-[200px] lg:w-[200px]'
      />
    </form>
  );
}

function Sidebar() {
  return (
    <Sheet>
      <Tooltip>
        <SheetTrigger asChild>
          <TooltipTrigger asChild>
            <Button
              variant='ghost'
              size='icon'
              className='border-border size-8 shrink-0 border md:hidden'
            >
              <Menu className='size-4' />
              <span className='sr-only'>Menu</span>
            </Button>
          </TooltipTrigger>
        </SheetTrigger>
        <TooltipContent align='start'>Menu</TooltipContent>
        <SheetContent
          side='left'
          className='flex w-full flex-col p-4 pt-12 md:w-3/4'
        >
          <SearchBar className='w-full sm:hidden' />
          <Button className='justify-start' variant='ghost'>
            <Link href='#'>Women</Link>
          </Button>
          <Button className='justify-start' variant='ghost'>
            <Link href='#'>Men</Link>
          </Button>
          <Button className='justify-start' variant='ghost'>
            <Link href='#'>Kids</Link>
          </Button>
          <Button className='justify-start' variant='ghost'>
            <Link href='#'>Accessories</Link>
          </Button>
        </SheetContent>
      </Tooltip>
    </Sheet>
  );
}
