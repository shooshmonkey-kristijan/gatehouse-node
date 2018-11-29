async function calculateCost(
  itemcost,
  units = 1,
  utilisation,
  exchangeRate,
  markup
) {
  let rands = units * itemcost * utilisation;

  const euro = Math.ceil(rands / exchangeRate);

  //console.log(rands);

  const euroMarkup = Math.floor((euro * (100 + markup)) / 100);

  // console.log("RANDS", rands);
  // console.log("EURO", euro);
  // console.log("EUROMARKUP", euroMarkup);

  return {
    RANDS: rands,
    EURO: euro,
    EUROMARKUP: euroMarkup
  };
}

async function calculateCrewSalaries(
  units = 1,
  rate,
  travelDays,
  preShoot,
  shoot,
  postShoot,
  turnAround,
  oT1X,
  oT2x,
  exchangeRate,
  markup,
  director
) {
  let euroMarkup;
  let rands =
    units *
    (rate *
      (travelDays / 2 +
        (preShoot + shoot + postShoot) +
        turnAround / 10 +
        (oT1X / 10) * 1.5 +
        (oT2x / 10) * 2));

  const euro = Math.ceil(rands / exchangeRate);

  if (director === "Director") {
    euroMarkup = euro;
  } else {
    euroMarkup = Math.floor((euro * (100 + markup)) / 100);
  }

  console.log("RANDS", rands);
  console.log("EURO", euro);
  console.log("EUROMARKUP", euroMarkup);

  return {
    RANDS: rands,
    EURO: euro,
    EUROMARKUP: euroMarkup
  };
}

async function calculateTransportAndSybtotalCost(
  units,
  itemcost,
  prep,
  shoot,
  wrap,
  exchangeRate,
  markup
) {
  let rands =
    units > 1
      ? units * itemcost * (prep + shoot + wrap)
      : itemcost * (prep + shoot + wrap);

  const euro = Math.ceil(rands / exchangeRate);

  const euroMarkup = Math.floor((euro * (100 + markup)) / 100);

  return {
    RANDS: rands,
    EURO: euro,
    EUROMARKUP: euroMarkup
  };
}

async function calculateInssuranceSubtotalLightingEquipCost(
  units = 1,
  subtotalRandsLightingEquipment,
  generator240kva,
  generator65kva,
  exchangeRate,
  markup
) {
  let rands =
    subtotalRandsLightingEquipment + (generator240kva + generator65kva) * units;

  const euro = Math.ceil(rands / exchangeRate);

  const euroMarkup = Math.floor((euro * (100 + markup)) / 100);

  return {
    RANDS: rands,
    EURO: euro,
    EUROMARKUP: euroMarkup
  };
}

async function calculateInssuranceSubtotalLightingDiscount(
  units = 1,
  subtotalRandsLightingEquipment,
  exchangeRate,
  markup
) {
  let rands = units * subtotalRandsLightingEquipment;

  const euro = Math.ceil(rands / exchangeRate);

  const euroMarkup = Math.floor((euro * (100 + markup)) / 100);

  return {
    RANDS: rands,
    EURO: euro,
    EUROMARKUP: euroMarkup
  };
}

async function calculateCameraVtEquipDiscountCamera(
  units = 1,
  subtotalRandsLencsing,
  exchangeRate,
  markup
) {
  let rands = subtotalRandsLencsing * units;

  const euro = Math.ceil(rands / exchangeRate);

  const euroMarkup = Math.floor((euro * (100 + markup)) / 100);

  return {
    RANDS: rands,
    EURO: euro,
    EUROMARKUP: euroMarkup
  };
}

async function calculateCameraVtEquipDiscountVideo(
  subtotalRandsVideoEquip,
  units = 1,
  exchangeRate,
  markup
) {
  let rands = subtotalRandsVideoEquip * units;

  const euro = Math.ceil(rands / exchangeRate);

  const euroMarkup = Math.floor((euro * (100 + markup)) / 100);

  return {
    RANDS: rands,
    EURO: euro,
    EUROMARKUP: euroMarkup
  };
}

async function calculateCameraVtEquipIssurance(
  subtotalRandsVideoEquip,
  subtotalRandsLencsing,
  subtotalCameraRands,
  microforceZoomControl,
  prestonDigitalRemote,
  units = 1,
  exchangeRate,
  markup
) {
  let rands =
    (subtotalRandsVideoEquip +
      subtotalRandsLencsing +
      subtotalCameraRands +
      (microforceZoomControl + prestonDigitalRemote)) *
    units;

  const euro = Math.ceil(rands / exchangeRate);

  const euroMarkup = Math.floor((euro * (100 + markup)) / 100);

  return {
    RANDS: rands,
    EURO: euro,
    EUROMARKUP: euroMarkup
  };
}

async function calculateTransportationCost(
  units = 1,
  exchangeRate,
  markup,
  itemcost,
  prep,
  shoot,
  wrap
) {
  let rands = units * itemcost * (prep + shoot + wrap);

  const euro = Math.ceil(rands / exchangeRate);
  const euroMarkup = Math.floor((euro * (100 + markup)) / 100);

  return {
    RANDS: rands,
    EURO: euro,
    EUROMARKUP: euroMarkup
  };
}

async function calculateTalentFees(
  units,
  dayRate,
  feeTravel,
  fullDayRehearse,
  shootDays,
  overTime,
  usageFeePerPerson,
  markup,
  exchangeRate
) {
  let rands =
    units *
    (dayRate * (feeTravel / 2 + fullDayRehearse + shootDays + overTime / 10) +
      usageFeePerPerson);

  const euro = Math.floor(rands / exchangeRate);

  const euroMarkup = Math.floor((euro * (100 + markup)) / 100);

  console.log("RANDS", rands, "EURO", euro, "EUROMARKUP", euroMarkup);

  return {
    RANDS: rands,
    EURO: euro,
    EUROMARKUP: euroMarkup
  };
}

module.exports = {
  calculateCost,
  calculateCrewSalaries,
  calculateTransportAndSybtotalCost,
  calculateInssuranceSubtotalLightingEquipCost,
  calculateInssuranceSubtotalLightingDiscount,
  calculateCameraVtEquipDiscountCamera,
  calculateCameraVtEquipDiscountVideo,
  calculateCameraVtEquipIssurance,
  calculateTransportationCost,
  calculateTalentFees
};
