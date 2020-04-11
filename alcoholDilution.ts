/*

for this example for 75% alch we need to calculate
- the minimal amount of the expensive shit (compound1)
- how much of compound1 and compound0 combined = 75%

What we need:
  63.6 mL of solution0
  36.4 mL of solution1

https://egpat.com/blog/pharmaceutical-calculations-by-alligation-method

btw, using floats makes it trickier but more intuitive for us

I was hand calculating like a champ before on notebook
i think the floats make it harder tbh lol. they all use ratios n fractions, but i never understood fractions

lemme just transfer what I got on paper yeah? XD


hurry up the alch is evaporating

afk for a tiny bit brb
*/

import * as M from "mathjs"

const round = (n: number) => M.round(n, 2)

function mixTwoSolutionsFor({
  lesserSolution,
  greaterSolution,
  desiredConcentration,
  desiredVolume,
}: {
  lesserSolution: number
  greaterSolution: number
  desiredConcentration: number
  desiredVolume: number
}) {
  const H = desiredConcentration - lesserSolution
  const L = greaterSolution - desiredConcentration

  const greaterVolume = round((H / (H + L)) * desiredVolume)
  const lesserVolume = round((L / (H + L)) * desiredVolume)

  return { greaterVolume, lesserVolume }
}

const mixed = mixTwoSolutionsFor({
  desiredConcentration: 75,
  desiredVolume: 100,
  greaterSolution: 95,
  lesserSolution: 40,
})

mixed

/** Combine solutions to equal volume */
function mixSolutionsFor({
  solutions,
  desiredConcentration,
  desiredVolume,
}: {
  solutions: number[]
  desiredConcentration: number
  desiredVolume: number
}) {
  const sortedSolutions = solutions.slice().sort((a, b) => a - b)

  sortedSolutions

  const comparisonVectors = sortedSolutions
    .map((item, index) => [item, sortedSolutions[index + 1]])
    .map(([lesserSolution, greaterSolution = 0]) =>
      mixTwoSolutionsFor({
        desiredConcentration,
        desiredVolume,
        lesserSolution,
        greaterSolution,
      })
    )
  comparisonVectors
}

mixSolutionsFor({
  desiredVolume: 100,
  solutions: [95, 40, 99],
  desiredConcentration: 75,
})

// mixSolutionsFor({
//   desiredVolume: 100,
//   solutions: [
//     80, // rubbing alchohol lol
//     6, // beer
//     19, // Soju
//   ],
//   desiredConcentration: 75,
// })

// https://www.geeksforgeeks.org/mixture-and-alligation/
