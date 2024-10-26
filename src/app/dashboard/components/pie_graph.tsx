"use client";

import { MayHaveLabel, ResponsivePie } from "@nivo/pie";
import { priorityColors } from "../logs/columns";
import { defaultGraphScheme } from "../consts";

export default function PieGraph({ colorMap, valueSuffix, data }: { colorMap?: any, valueSuffix?: string, data: MayHaveLabel[] }) {
  return (
    (<ResponsivePie
      data={data}
      arcLinkLabelsTextColor={d => d.color}
      margin={{top: 20, bottom: 20}}
      innerRadius={0.5}
      cornerRadius={6}
      // @ts-ignore
      colors={colorMap ? (d => priorityColors[d.label.toString()])  : {scheme: defaultGraphScheme} }
      enableArcLabels={false}
      enableArcLinkLabels={true}
      tooltip={(val) => {
        return (
          // ! HOTFIX for nivo tooltip jitter bug - [tw-absolute tw-min-w-max -tw-translate-x-1/2 -tw-translate-y-full]
          (<div className="tw-absolute !tw-z-40 tw-flex tw-gap-1 tw-place-items-center tw-min-w-max -tw-translate-x-1/2 -tw-translate-y-full tw-rounded-md tw-bg-stone-200 tw-p-4 dark:tw-bg-slate-700">
            <span
              className={`tw-select-none tw-size-4 tw-rounded tw-font-semibold`}
              style={{ backgroundColor: val.datum.color }}
            />
            <br />
            <span className="tw-font-semibold">{val.datum.label}:</span>
            <span> {val.datum.formattedValue} {valueSuffix}</span>
          </div>)
        );
      }}
    />)
  );
}
