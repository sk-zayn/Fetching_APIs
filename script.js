async function getUserData() {
  const response = await fetch('https://dummyjson.com/users?limit=5&skip=10&select=firstName,age')
  const finalData = await response.json()
  console.log(finalData.users);
}
