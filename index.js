function towerBuilder(nFloors) {
  const width = nFloors * 2 - 1;
  const resultFloors = [];
  for (let floor = 1; floor <= nFloors; floor++) {
    const stars = floor * 2 - 1;
    const spaces = (width - stars) / 2;
    const str = ' '.repeat(spaces) + '*'.repeat(stars) + ' '.repeat(spaces);
    resultFloors.push(str);
    console.log(str, str.length);
  }
  return resultFloors;
}

towerBuilder(3);
