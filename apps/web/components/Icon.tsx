import { icons, type IconName, type Shape } from '@vfc/shared';

type Props = {
  name: IconName;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
};

function renderShape(shape: Shape, i: number) {
  switch (shape.t) {
    case 'path':
      return <path key={i} d={shape.d} />;
    case 'circle':
      return <circle key={i} cx={shape.cx} cy={shape.cy} r={shape.r} />;
    case 'rect':
      return (
        <rect key={i} x={shape.x} y={shape.y} width={shape.w} height={shape.h} rx={shape.rx} />
      );
  }
}

const SIZE_CLASS = { sm: 'ico ico-sm', md: 'ico', lg: 'ico ico-lg' } as const;

/**
 * Decorative by default: icons here always sit beside a text label,
 * so exposing them to screen readers would just add noise.
 */
export function Icon({ name, size = 'md', className }: Props) {
  const cls = className ? `${SIZE_CLASS[size]} ${className}` : SIZE_CLASS[size];
  return (
    <svg className={cls} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      {icons[name].map(renderShape)}
    </svg>
  );
}
