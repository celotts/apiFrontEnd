const perro = {
  raza: 'Dalmata',
  ladrar: function () {
    console.log('prueba');
  }
};

const kiltro = Object.create(perro);
kiltro.ladrar();
