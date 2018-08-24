


function hasLowerCase(str) {
  return /[a-z]/.test(str)
}

function hasUpperCase(str) {
  return /[A-Z]/.test(str)
}

function hasSpecialChar(str) {
  return /[^a-zA-Z0-9]/.test(str)
}

function hasNumber(str) {
  return /[0-9]/.test(str)
}

function over8Char(str) {
  return str.length >= 8
}

function estimateStrength(password) {
  let results = {
    score: 0
  }
  if (hasLowerCase(password)){
    results["score"] += 1
    results["hasLowerCase"] = true
  }
  if (hasSpecialChar(password)) {
    results["score"] += 1
    results["hasSpecialChar"] = true
  }
  if (hasNumber(password)) {
    results["score"] += 1
    results["hasNumber"] = true
  }
  if (hasUpperCase(password)) {
    results["score"] += 1
    results["hasUpperCase"] = true
  }
  if (over8Char(password)) {
    results["score"] += 1
    results["isOver8Char"] = true
  }
  return results
}




export default estimateStrength



