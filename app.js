//Takes user input puts them into an array and then returns from second one on because of first two being file paths.
const profileDataArgs = process.argv.slice(2, process.argv.length);
console.log(profileDataArgs);

//Same as above
/* const printProfileData = (profileDataArr) => {
    console.log(profileDataArr);
}; */

// Notice the lack of parentheses around the `profileDataArr` parameter?
const printProfileData = profileDataArr => {
  // This...
  for (let i = 0; i < profileDataArr.length; i += 1) {
    console.log(profileDataArr[i]);
  }

  console.log('================');

  // Is the same as this...
  profileDataArr.forEach((profileItem) => {
    console.log(profileItem)
  });
};

printProfileData(profileDataArgs);