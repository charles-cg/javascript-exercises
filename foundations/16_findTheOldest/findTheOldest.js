const findTheOldest = function(people) {
  return people.reduce((oldest, currentPerson) => {
    let oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
    let currentAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);

    if (oldestAge < currentAge) {
      return currentPerson;
    } else {
      return oldest;
    }

  })
};

const getAge = function(birthYear, deathYear) {
  const currentYear = new Date().getFullYear();

  if (deathYear == undefined) {
    let age = currentYear - birthYear;
    return age;
  } else {
    let age = deathYear - birthYear;
    return age;
  }
}

// Do not edit below this line
module.exports = findTheOldest;
