
export const getRandomNumbers = ({ maxNumber, minNumber }) => {
  const calcRandomNumber = () => Math.floor(Math.random() * maxNumber) + minNumber

  const numberToGuess = calcRandomNumber()
  let initialRandomNumber = calcRandomNumber()

  if (initialRandomNumber === numberToGuess) {
    initialRandomNumber = calcRandomNumber()
  }

  console.log('Number to guess:', numberToGuess)
  console.log('Initial random number:', initialRandomNumber)

  return {
    numberToGuess,
    initialRandomNumber,
  }
}
