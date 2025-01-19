import Link from 'next/link';

export default function Footer() {
  return (
    <footer className='py-8'>
      <div className='grid max-w-3xl px-4 sm:px-6 mx-auto grid-cols-1 md:grid-cols-2 gap-8'>
        <div>
          <h2 className='text-lg font-semibold text-gray-900 mb-4'>
            Additional Links
          </h2>
          <nav className='flex flex-col space-y-2'>
            <Link
              href='/terms-and-conditions'
              className='text-gray-600 hover:text-gray-900 transition-colors'
            >
              Terms & Conditions
            </Link>
            <Link
              href='/privacy-policy'
              className='text-gray-600 hover:text-gray-900 transition-colors'
            >
              Privacy Policy
            </Link>
            <Link
              href='/contact-us'
              className='text-gray-600 hover:text-gray-900 transition-colors'
            >
              Contact Us
            </Link>
          </nav>
        </div>
        <div>
          <h2 className='text-lg font-semibold text-gray-900 mb-4'>About Us</h2>
          <p className='text-gray-600'>
            We are a company dedicated to providing high-quality products and
            services to our customers. Our mission is to make a positive impact
            in the world through innovation and customer satisfaction.
          </p>
        </div>
      </div>
      <div className='mt-8 border-t pt-6 text-center'>
        <p className='text-muted-foreground text-sm'>
          © {new Date().getFullYear()} Ripple. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
