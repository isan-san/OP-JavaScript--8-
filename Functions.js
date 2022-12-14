function trueFunction() {
  return true;
}

console.log(trueFunction());

const initialTime = new Date().getTime();

const fiveSeconds = new Promise((resolve, reject) => {
  let isTime = true;
  while (isTime) {
    let currentTime = new Date().getTime();
    if (currentTime >= initialTime + 5000) {
      resolve();
      isTime = flase;
    }
    if (currentTime - initialTime < 0) reject();
  }
});

fiveSeconds
  .then(() => console.log("is Time"))
  .catch(() => console.log("The time is negative"))
  .finally(() => console.log("End of the promise"));

console.log("Ejecutando la funcion");

function* generaId() {
  let id = 0;
  while (true) {
    id += 2;
    if (id === 100) {
      return id;
    }
    yield id; // Esperando hasta que se vuelva a llamar
  }
}

const gen = generaId();

for (let index = 0; index < 50; index++) {
  console.log(gen.next().value);
}
