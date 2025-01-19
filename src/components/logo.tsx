import { Github } from 'lucide-react';

export function Logo({ className, ...props }: React.ComponentProps<'svg'>) {
  return <Github {...props} />;
}
