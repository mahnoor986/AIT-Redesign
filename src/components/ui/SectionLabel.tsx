import { cn } from '@/lib/utils';

interface SectionLabelProps {
  children: React.ReactNode;
  /** section number, e.g. "01" */
  number?: string;
  className?: string;
}

/**
 * Mono overline label — "01 / OUR IMPACT" style from AIT.
 */
export default function SectionLabel({ children, number, className }: SectionLabelProps) {
  return (
    <div
      className={cn(
        'font-mono flex items-center gap-3 text-xs sm:text-sm font-semibold tracking-widest uppercase text-emerald-400',
        className
      )}
    >
      {number && (
        <>
          <span className="opacity-80">{number}</span>
          <span className="h-px w-8 bg-emerald-400/50" aria-hidden="true" />
        </>
      )}
      <span>{children}</span>
    </div>
  );
}
