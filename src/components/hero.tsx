import Ripple from './ui/ripple';
import { TextEffect } from './ui/text-effect';

export function Hero() {
  return (
    <section className='relative isolate overflow-hidden min-h-[calc(100dvh-4rem)] place-content-center py-24 sm:py-32'>
      <div className='mx-auto max-w-3xl px-4 sm:px-6'>
        <div className='mx-auto max-w-2xl text-center space-y-4'>
          <h1 className='text-5xl font-semibold tracking-tight sm:text-7xl'>
            Learn & Grow ✨
          </h1>
          <TextEffect
            className='text-pretty text-lg font-medium sm:text-xl/8'
            preset='fade-in-blur'
            speedReveal={0.7}
            speedSegment={0.3}
          >
            Explore thousands of high-quality courses taught by industry
            experts. Start your learning journey with Ripple today.
          </TextEffect>
        </div>
      </div>
      <Ripple />
    </section>
  );
}
