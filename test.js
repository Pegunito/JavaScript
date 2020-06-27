const workers = [
  {"name":"John","salary":500},
  {"name":"Mike","salary":1300},
  {"name":"Linda","salary":1500}
];

const getWorthyWorkers = (workersArr) => {

  const worthyWorkers = [];

  for (let i = 0; i < workersArr.lenght; i++) {
    const currentWorker = workersArr[i];

    if (currentWorker.salary > 1000) {
      worthyWorkers.push(currentWorker);
    }
  }

  return worthyWorkers;
}

console.log(getWorthyWorkers(workers));