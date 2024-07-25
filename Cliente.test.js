// Importamos todo lo que quiero usar 
const LibroDigital = require('./LibroDigital');
const LibroImpreso = require('./LibroImpreso');
const Cliente = require('./Cliente');
const ClienteVIP = require('./ClienteVIP');


let gamma, mackenzie;
let normal;

beforeEach( ()=> {
    normal = new Cliente('Juan');
    gamma = new LibroImpreso('OO Patterns', 'Gamma et al', 3000);
    mackenzie = new LibroDigital('Empirical Research in HCI','MacKenzie',5000);
});

test("Un cliente nuevo no debería tener libros", ()=>{
    nuevo = new Cliente("Julián");
    expect(nuevo.libros()).toEqual([]);
})

test("Un cliente normal debe recargar crédito", () => {
    normal.recargarCredito(10000);
    expect(normal.credito()).toBe(10000);
});

test("Un cliente normal no debe aumentar crédito si se carga 0", () => {
    normal.recargarCredito(0);
    expect(normal.credito()).toBe(0);
});

test("Al comprar un libro, un cliente normal debería descontar el crédito", ()=>{
    normal.recargarCredito(10000);
    normal.comprarLibro(mackenzie);
    expect(normal.credito()).toBe(10000-mackenzie.precio());
})

test("Al comprar un libro, un cliente normal debería tenerlo entre sus libros", ()=>{
    normal.recargarCredito(10000);
    normal.comprarLibro(gamma);
    expect(normal.libros()).toContain(gamma);
})

test("Un cliente no puede gastar más del crédito que tiene", ()=>{
    normal.recargarCredito(1000);
    let compraInvalida = ()=>{normal.comprarLibro(gamma)};
    expect(compraInvalida).toThrow();
})

//----------------------------Anterior----------------------------
// test("Un cliente normal debe recargar crédito", () => {
//     const clienteNormal = new Cliente('Juan')
//     clienteNormal.recargarCredito(10000);
//     expect(clienteNormal.credito()).toBe(1000);
// });


