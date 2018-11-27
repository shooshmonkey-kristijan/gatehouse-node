async function calculateCost(itemcost, units, utilisation) {
  const exchangeRate = 14;
  const markup = 10;

  let rands =
    units > 1 ? units * itemcost * utilisation : itemcost * utilisation;

  const euro = Math.ceil(rands / exchangeRate);

  const euroMarkup = Math.floor((euro * (100 + markup)) / 100);

  //   console.log("RANDS", rands);
  //   console.log("EURO", euro);
  //   console.log("EUROMARKUP", euroMarkup);

  return {
    RANDS: rands,
    EURO: euro,
    EUROMARKUP: euroMarkup
  };
}

//calculateCost(5562, 0, 2);

async function calculateCrewSalaries(
  units,
  rate,
  travelDays,
  preShoot,
  shoot,
  postShoot,
  turnAround,
  oT1X,
  oT2x
) {
  const exchangeRate = 14;
  const markup = 10;

  let rands =
    units === 0
      ? rate *
        (travelDays / 2 +
          (preShoot + shoot + postShoot) +
          turnAround / 10 +
          (oT1X / 10) * 1.5 +
          (oT2x / 10) * 2)
      : units *
        (rate *
          (travelDays / 2 +
            (preShoot + shoot + postShoot) +
            turnAround / 10 +
            (oT1X / 10) * 1.5 +
            (oT2x / 10) * 2));

  const euro = Math.ceil(rands / exchangeRate);

  const euroMarkup = Math.floor((euro * (100 + markup)) / 100);

  //   console.log("RANDS", rands);
  //   console.log("EURO", euro);
  //   console.log("EUROMARKUP", euroMarkup);

  return {
    RANDS: rands,
    EURO: euro,
    EUROMARKUP: euroMarkup
  };
}

//calculateCrewSalaries(0, 4500, 0, 0, 2.5, 0, 0, 0, 0);
module.exports = {
  calculateCost,
  calculateCrewSalaries
};
