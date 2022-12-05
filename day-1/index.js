export const wrapping = (gifts) => {
  // Creamos un array vacío donde almacenar los regalos envueltos
  const wrapped = [];

  // Iteramos sobre el array de regalos
  for (const gift of gifts) {
    // Contamos cuántos caracteres tiene el regalo
    const length = gift.length;

    // Calculamos cuántos asteriscos necesitamos para envolver el regalo
    const stars = "*".repeat(length + 4);

    // Añadimos un asterisco al inicio y al final del regalo y añadimos los asteriscos necesarios al inicio y al final del string
    const wrappedGift = `${stars}\n* ${gift} *\n${stars}`;

    // Añadimos el string resultante al array wrapped
    wrapped.push(wrappedGift);
  }

  // Retornamos el array de regalos envueltos
  return wrapped;
}

export const tests = {
  "codeReport": {
      "cyclomatic": 1,
      "effort": 1,
      "maintainability": 171,
      "sloc": 7
  },
  "points": 132,
  "ops": 3469,
  "results": {
      "details": [
          {
              "info": {
                  "msg": "return type",
                  "expected": "\"array\"",
                  "actual": "\"array\""
              },
              "ok": true,
              "secret": false
          },
          {
              "info": {
                  "msg": "wrapping(gifts)",
                  "expected": "[\"******\\n*book*\\n******\",\"******\\n*game*\\n******\",\"*******\\n*socks*\\n*******\"]",
                  "actual": "[\"******\\n*book*\\n******\",\"******\\n*game*\\n******\",\"*******\\n*socks*\\n*******\"]"
              },
              "ok": true,
              "secret": false
          },
          {
              "info": {
                  "msg": "wrapping([\"midu\"])",
                  "expected": "[\"******\\n*midu*\\n******\"]",
                  "actual": "[\"******\\n*midu*\\n******\"]"
              },
              "ok": true,
              "secret": false
          },
          {
              "info": {
                  "msg": "wrapping([\"a\"])",
                  "expected": "[\"***\\n*a*\\n***\"]",
                  "actual": "[\"***\\n*a*\\n***\"]"
              },
              "ok": true,
              "secret": false
          },
          {
              "info": {
                  "msg": "wrapping an empty array should return an empty array",
                  "expected": "[]",
                  "actual": "[]"
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
  }
}