'use client';

import { useTheme } from 'next-themes';
import { ResponsiveFunnel } from '@nivo/funnel';

function useFunnelSteps() {
  const { resolvedTheme } = useTheme();
  return [
    {
      id: 'Announcements',
      label: 'Announcements',
      value: 10000,
      color: resolvedTheme === 'dark' ? '#333' : '#888',
    },
    {
      id: 'News',
      label: 'News',
      value: 6800,
      color: resolvedTheme === 'dark' ? '#222' : '#999',
    },
    {
      id: 'Events',
      label: 'Events',
      value: 4200,
      color: resolvedTheme === 'dark' ? '#111' : '#e1e1e1',
    },
  ];
}

export const PartLabel = ({ part }: { part: any }) => {
  const { resolvedTheme } = useTheme();
  return (
    <g transform={`translate(${part.x}, ${part.y})`}>
      <text
        textAnchor="middle"
        dominantBaseline="central"
        style={{
          fill: resolvedTheme === 'dark' ? '#fff' : '#000',
          pointerEvents: 'none',
          fontSize: 12,
          fontWeight: 500,
        }}
      >
        {part.data.label}
      </text>
    </g>
  );
};

function Labels(props: any) {
  return props.parts.map((part: any) => (
    <PartLabel key={part.data.id} part={part} />
  ));
}

function FunnelVisualization() {
  const funnelSteps = useFunnelSteps();
  const colors = funnelSteps.map((s) => s.color);
  const nivoData = funnelSteps.map((s) => ({
    id: s.id,
    value: s.value,
    label: s.label,
  }));

  return (
    <div className="w-full h-full">
      <ResponsiveFunnel
        data={nivoData}
        margin={{ top: 20, right: 0, bottom: 20, left: 0 }}
        direction="horizontal"
        shapeBlending={0.6}
        colors={colors}
        enableBeforeSeparators={false}
        enableAfterSeparators={false}
        beforeSeparatorLength={0}
        afterSeparatorLength={0}
        afterSeparatorOffset={0}
        beforeSeparatorOffset={0}
        currentPartSizeExtension={5}
        borderWidth={20}
        currentBorderWidth={15}
        tooltip={() => null}
        layers={['parts', Labels]}
      />
    </div>
  );
}

export function ProductAnalyticsIllustration() {
  return (
    <div className="aspect-video">
      <FunnelVisualization />
    </div>
  );
}
