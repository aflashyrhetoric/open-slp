import React, { useState } from "react";
import { humanize } from '@/utils/string-utils';

type Props = {
  pricingModel: "free" | "freemium" | "paid";
}

const PricingPill: React.FC<Props> = ({ pricingModel}: Props) => {

    const pricingModelToColor = {
        free: "bg-green-100 text-green-800",
        freemium: "bg-yellow-100 text-yellow-800",
        paid: "bg-blue-100 text-blue-800",
    }

  return (
    <div className={`px-2 py-1 text-xs ${pricingModelToColor[pricingModel]}`}>
        {humanize(pricingModel)}
    </div>
  );
};

export default PricingPill;
