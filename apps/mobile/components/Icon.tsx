import Svg, { Circle, Path, Rect } from 'react-native-svg';
import { icons, type IconName, type Shape } from '@vfc/shared';
import { theme } from '@/theme';

type Props = {
  name: IconName;
  size?: number;
  color?: string;
  strokeWidth?: number;
};

function renderShape(shape: Shape, i: number, stroke: string, strokeWidth: number) {
  const common = {
    stroke,
    strokeWidth,
    fill: 'none' as const,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  };
  switch (shape.t) {
    case 'path':
      return <Path key={i} d={shape.d} {...common} />;
    case 'circle':
      return <Circle key={i} cx={shape.cx} cy={shape.cy} r={shape.r} {...common} />;
    case 'rect':
      return (
        <Rect
          key={i}
          x={shape.x}
          y={shape.y}
          width={shape.w}
          height={shape.h}
          rx={shape.rx}
          {...common}
        />
      );
  }
}

/**
 * Same icon geometry as the web app, rendered through react-native-svg.
 * The shapes come from @vfc/shared, so the two platforms cannot drift.
 */
export function Icon({ name, size = 20, color = theme.color.teal, strokeWidth = 1.6 }: Props) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      {icons[name].map((shape, i) => renderShape(shape, i, color, strokeWidth))}
    </Svg>
  );
}

/** The app mark, used in headers and the splash-adjacent hero. */
export function BrandMark({ size = 34 }: { size?: number }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 40 40">
      <Rect width={40} height={40} rx={11} fill={theme.color.ink} />
      <Path
        d="M8 20c0 0 4.8-7 12-7s12 7 12 7-4.8 7-12 7S8 20 8 20Z"
        stroke={theme.color.paper}
        strokeWidth={1.6}
        fill="none"
      />
      <Circle cx={20} cy={20} r={4.3} fill={theme.color.teal} />
      <Circle cx={20} cy={20} r={1.7} fill={theme.color.ink} />
    </Svg>
  );
}
