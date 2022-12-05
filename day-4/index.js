function fitsInOneBox(boxes) {
  // Primero, se ordenan las cajas de mayor a menor tamaño (utilizando la longitud, anchura y altura)
  return boxes
    .sort((a, b) => b.l * b.w * b.h - a.l * a.w * a.h)
    // Luego, se itera sobre cada caja
    .every((b, index) => {
      // Si no hay una caja siguiente, entonces se retorna true (ya que no hay más cajas que comparar)
      if (!boxes[index + 1]) return true;

      // Si hay una caja siguiente, se verifica si la caja actual entra en la caja siguiente
      // Esto se hace comparando la longitud, anchura y altura de ambas cajas y asegurando que
      // los valores de la caja actual son menores a los de la caja siguiente
      return (
        b.l > boxes[index + 1].l &&
        b.w > boxes[index + 1].w &&
        b.h > boxes[index + 1].h
      );
    });
}

export const tests = {
  "codeReport": {
      "cyclomatic": 1,
      "effort": 46.529325012980806,
      "maintainability": 58,
      "sloc": 19
  },
  "points": 170,
  "ops": 2405,
  "results": {
      "details": [
          {
              "info": {
                  "msg": "return type",
                  "expected": "\"boolean\"",
                  "actual": "\"boolean\""
              },
              "ok": true,
              "secret": false
          },
          {
              "info": {
                  "msg": "fitsInOneBox([\n  { l: 1, w: 1, h: 10 },\n  { l: 3, w: 3, h: 12 },\n  { l: 2, w: 2, h: 1 },\n])",
                  "expected": "false",
                  "actual": "false"
              },
              "ok": true,
              "secret": false
          },
          {
              "info": {
                  "msg": "fitsInOneBox([\n  { l: 1, w: 1, h: 1 },\n  { l: 2, w: 2, h: 2 }\n])",
                  "expected": "true",
                  "actual": "true"
              },
              "ok": true,
              "secret": false
          },
          {
              "info": {
                  "msg": "fitsInOneBox([\n  { l: 1, w: 1, h: 1 },\n  { l: 2, w: 2, h: 2 },\n  { l: 3, w: 1, h: 3 }\n])",
                  "expected": "false",
                  "actual": "false"
              },
              "ok": true,
              "secret": false
          },
          {
              "info": {
                  "msg": "fitsInOneBox([\n        { l: 1, w: 1, h: 1 },\n        { l: 2, w: 2, h: 2 },\n        { l: 2, w: 10, h: 2}\n      ])",
                  "expected": "false",
                  "actual": "false"
              },
              "ok": true,
              "secret": false
          },
          {
              "info": {
                  "msg": "fitsInOneBox([\n        { l: 1, w: 1, h: 1 },\n        { l: 3, w: 3, h: 3 },\n        { l: 2, w: 2, h: 2 }\n      ])",
                  "expected": "true",
                  "actual": "true"
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
      "totalPublic": 10,
      "total": 10
  },
  "alreadySavedPoints": null
}