/** @jest-environment jsdom */

const { validarIdade } = require("./script.js")


test("Testar idade maior", () => {
  var resultado = validarIdade(18);
  
  expect(resultado).toBe(true)
})

test("testar menor de idade", () => {
  var resultado = validarIdade(16);
  
  expect(resultado).toBe(false)
})