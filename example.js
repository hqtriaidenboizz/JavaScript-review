// EX-1
const PEOPLE = [];
for (let i = 0; i < 2000; i++) {
  const name = `Nguyen Van ${i}`;
  const source = `source ${i}`;

  PEOPLE.push({
    id: i,
    name: name,
    address: "Da Nang, Vietnam",
    gender: "male",
    phoneNumber: "0123456789",
    description: "Nothing",
    source: source,
  });
}

const searchMap = new Map();

PEOPLE.forEach((person) => {
  searchMap.set(person.name.toLowerCase(), person);
  searchMap.set(person.source.toLowerCase(), person);
});

// Hàm tìm kiếm item theo name hoặc source từ Map
function searchItemByNameOrSource(value) {
  const lowerValue = value.toLowerCase();
  return Array.from(searchMap.values()).find(
    (person) =>
      person.name.toLowerCase() === lowerValue ||
      person.source.toLowerCase() === lowerValue
  );
}

// Hiển thị kết quả tìm kiếm trên màng hình
function displaySearchResult() {
  const searchValue = document.getElementById("searchValue").value.trim();
  const result = searchItemByNameOrSource(searchValue);

  const outputDiv = document.getElementById("searchResult");
  if (result) {
    outputDiv.textContent = `Infomation: ID ${result.id}, Name: ${result.name}, Address: ${result.address}, Gender: ${result.gender}, Phone Number: ${result.phoneNumber}, Description: ${result.description}, Source: ${result.source}`;
  } else {
    outputDiv.textContent = "Not found";
  }
}


// EX-2

function calculateNextWorkingDay(days) {
    const today = new Date();
    let count = 0;

    while (count < days) {
        today.setDate(today.getDate() + 1);

        if (today.getDay() !== 5 && today.getDay() !== 6) {
            count++;
        }
    }

    const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday','Saturday', 'Sunday'];;
    return daysOfWeek[today.getDay()];
}

const form = document.getElementById('inputFormDay');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    const daysInput = document.getElementById('daysInput').value;
    const result = calculateNextWorkingDay(daysInput);
    document.getElementById('result').textContent = `Ngày làm tiếp theo là: ${result}`;
});



// EX-3

function handleCalculate(event) {
    event.preventDefault();
    const num1 = Number(document.getElementById('num1').value);
    const num2 = Number(document.getElementById('num2').value);
    const operator = document.getElementById('operator').value;
    let result;

    switch (operator) {
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            result = num1 / num2;
            break;
        default:
            result = 'Invalid operator';
    }

    const outputDiv = document.getElementById('calcResult');
    outputDiv.textContent = `Result: ${result}`;
}

