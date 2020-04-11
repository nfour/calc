import * as M from 'mathjs';

const round = (n: number) => M.round(n, 2);

function mixTwoSolutionsFor({
  lesserSolution,
  greaterSolution,
  desiredConcentration,
  desiredVolume,
}: {
  lesserSolution: number;
  greaterSolution: number;
  desiredConcentration: number;
  desiredVolume: number;
}) {
  const H = desiredConcentration - lesserSolution;
  const L = greaterSolution - desiredConcentration;

  const greaterVolume = round((H / (H + L)) * desiredVolume);
  const lesserVolume = round((L / (H + L)) * desiredVolume);

  return { greaterVolume, lesserVolume };
}

const mixed = mixTwoSolutionsFor({
  desiredConcentration: 75,
  desiredVolume: 100,
  greaterSolution: 95,
  lesserSolution: 40,
});

mixed;
