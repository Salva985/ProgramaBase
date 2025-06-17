function calculateAverageAge(count) {
    let sum = 0;
    let validEntries = 0;
  
    for (let i = 1; i <= count; i++) {
      let age = parseInt(prompt(`Enter age of person ${i}:`));
  
      // Validate age
      if (age >= 0 && age <= 120) {
        sum += age;
        validEntries++;
      } else {
        alert("Invalid age. Must be between 0 and 120.");
        i--; 
      }
    }
  
    const average = sum / validEntries;
    return average.toFixed(2);
  }
  
  function startAverageAge() {
    const numPeople = parseInt(document.getElementById("numPeople").value);
  
    if (isNaN(numPeople) || numPeople <= 0) {
      alert("Please enter a valid number of people.");
      return;
    }
  
    const avg = calculateAverageAge(numPeople);
    document.getElementById("result").innerText = `Average age: ${avg}`;
  }