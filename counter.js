export function setupCounter(element) {
  let counter = 0
  const setCounter = (count) => {
    counter = count
    element.innerHTML = `count is ${counter}`
    console.log(counter);
    document.getElementById("test2").innerHTML = "test h1 ilmub, click counter";
    document.getElementById("test").innerHTML = counter;
  }
  element.addEventListener('click', () => setCounter(counter + 1))
  setCounter(0)
}
