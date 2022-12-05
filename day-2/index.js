countHours = (year, holidays) => {
  // Creamos un objeto Date para el año dado
  const date = new Date(year, 0, 1);

  // Inicializamos un contador de días festivos
  let numHolidays = 0;

  // Iteramos sobre cada fecha en el array de días festivos
  for (const holiday of holidays) {
    // Creamos un objeto Date para cada día festivo
    const holidayDate = new Date(`${year} ${holiday}`);

    // Si el día de la semana es lunes a viernes, contabilizamos el día festivo
    if (holidayDate.getDay() >= 1 && holidayDate.getDay() <= 5) {
      numHolidays++;
    }
  }

  // Multiplicamos el número de días festivos por dos para obtener el número total de horas extra
  return numHolidays * 2;
}

export const tests = {
  "codeReport": {
      "cyclomatic": 1,
      "effort": 282.6961029627771,
      "maintainability": 34,
      "sloc": 21
  },
  "points": 120,
  "ops": 2497,
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
                  "msg": "countHours(2023, ['01/06', '04/01', '12/25'])",
                  "expected": "4",
                  "actual": "4"
              },
              "ok": true,
              "secret": false
          },
          {
              "info": {
                  "msg": "countHours(2022, ['01/06', '04/01', '12/25'])",
                  "expected": "4",
                  "actual": "4"
              },
              "ok": true,
              "secret": false
          },
          {
              "info": {
                  "msg": "countHours(1985, ['01/01', '01/06', '02/02', '02/17', '02/28', '06/03', '12/06', '12/25'])",
                  "expected": "10",
                  "actual": "10"
              },
              "ok": true,
              "secret": false
          },
          {
              "info": {
                  "msg": "countHours(2000, ['01/01'])",
                  "expected": "0",
                  "actual": "0"
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
      "totalPublic": 7,
      "total": 7
  },
  "alreadySavedPoints": 132
}