function distributeGifts(packOfGifts, reindeers) {
  // calcular el peso total de los regalos
  const totalWeight = packOfGifts.reduce((total, gift) => total + gift.length, 0);

  // calcular el peso máximo que pueden llevar los renos
  const maxWeight = reindeers.reduce((total, reindeer) => total + (reindeer.length * 2), 0);

  // calcular el número de cajas que Santa Claus puede entregar y redondear hacia abajo
  return Math.floor(maxWeight/totalWeight);
}

export const tests = {
  "codeReport": {
      "cyclomatic": 1,
      "effort": 519.703946860863,
      "maintainability": 32,
      "sloc": 10
  },
  "points": 142,
  "ops": 3082,
  "results": {
      "details": [
          {
              "info": {
                  "msg": "return type",
                  "expected": "\"number\"",
                  "actual": "\"number\""
              },
              "ok": true,
              "secret": false
          },
          {
              "info": {
                  "msg": "distributeGifts(packOfGifts, reindeers)",
                  "expected": "2",
                  "actual": "2"
              },
              "ok": true,
              "secret": false
          },
          {
              "info": {
                  "msg": "distributeGifts(['a', 'b', 'c'], ['d', 'e'])",
                  "expected": "1",
                  "actual": "1"
              },
              "ok": true,
              "secret": false
          },
          {
              "info": {
                  "msg": "it should return 0 if reindeers can't carry any pack:\ndistributeGifts(['videogames', 'console'], ['midu'])",
                  "expected": "0",
                  "actual": "0"
              },
              "ok": true,
              "secret": false
          },
          {
              "info": {
                  "msg": "distributeGifts(['game', 'videoconsole', 'computer'], ['midudev', 'pheralb', 'codingwithdani', 'carlosble', 'blasco', 'facundocapua', 'madeval', 'memxd'])",
                  "expected": "5",
                  "actual": "5"
              },
              "ok": true,
              "secret": false
          },
          {
              "info": {
                  "msg": "distributeGifts(['music'], ['midudev', 'pheralb', 'codingwithdani', 'carlosble', 'blasco', 'facundocapua', 'madeval', 'memxd'])",
                  "expected": "26",
                  "actual": "26"
              },
              "ok": true,
              "secret": false
          },
          {
              "ok": true,
              "secret": true,
              "secretFail": false
          },
          {
              "ok": true,
              "secret": true,
              "secretFail": false
          }
      ],
      "failures": 0,
      "secretFails": 0,
      "totalPublic": 8,
      "total": 8
  },
  "alreadySavedPoints": null
}