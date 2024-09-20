import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'border-[1px] border-gray-300 inline-flex items-center rounded-sm border px-2 py-[4px] text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 user-select-none select-none',
  {
    variants: {
      variant: {
        outlined: 'text-gray-600',
        outlinedCritical: 'border-red-600 text-red-800',
        outlinedError: 'border-red-400 text-red-500',
        outlinedSuccess: 'border-green-500 text-green-600',
        outlinedWarning: 'border-orange-300 text-orange-400',
        contained: 'bg-gray-100 text-gray-800',
        containedSuccess: 'border-green-500 bg-green-200 text-green-700',
        containedError: 'border-red-500 bg-red-200 text-red-700',
      },
    },
    defaultVariants: {
      variant: 'outlined',
    },
  }
);

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
