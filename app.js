const trafficCanvas = document.getElementById("traffic-chart")
const dailyCanvas = document.getElementById("daily-chart")
const mobileCanvas = document.getElementById("mobile-chart")

//traffic

let trafficData = {
  labels: [
    "16-22",
    "23-29",
    "30-5",
    "6-12",
    "13-19",
    "20-26",
    "27-3",
    "4-10",
    "11-17",
    "18-24",
    "25-31",
  ],
  datasets: [
    {
      data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500],
      backgroundColor: "rgba(116, 119, 191, .3)",
      borderWidth: 1,
    },
  ],
}

let trafficOptions = {
  tension: 0.4,
  backgroundColor: "rgba(112, 104, 201, .5)",
  fill: true,
  aspectRatio: 2.5,
  scales: {
    y: {
      beginAtZero: true,
    },
  },
  plugins: {
    legend: {
      display: false,
    },
  },
}

let trafficChart = new Chart(trafficCanvas, {
  type: "line",
  data: trafficData,
  options: trafficOptions,
})

// daily

const dailyData = {
  labels: ["S", "M", "T", "W", "T", "F", "S"],
  datasets: [
    {
      label: "# of Hits",
      data: [75, 115, 175, 125, 225, 200, 100],
      backgroundColor: "#7477BF",
      borderWidth: 1,
    },
  ],
}
const dailyOptions = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
  plugins: {
    legend: {
      display: false,
    },
  },
}

let dailyChart = new Chart(dailyCanvas, {
  type: "bar",
  data: dailyData,
  options: dailyOptions,
})

// mobile

const mobileData = {
  labels: ["Desktop", "Tablet", "Phones"],
  datasets: [
    {
      label: "# of Users",
      data: [2000, 550, 500],
      borderWidth: 0,
      backgroundColor: ["#7477BF", "#78CF82", "#51B6C8"],
    },
  ],
}

const mobileOptions = {
  aspectRatio: 1.9,
  plugins: {
    legend: {
      position: "right",
      labels: {
        boxWidth: 20,
        fontStyle: "bold",
      },
    },
  },
}

let mobileChart = new Chart(mobileCanvas, {
  type: "doughnut",
  data: mobileData,
  options: mobileOptions,
})

// Alert close

const close = document.getElementById("close")
const alertMessage = document.querySelector(".alert")
const alertStatus = document.getElementById("alert-status")

close.addEventListener("click", () => {
  alertMessage.classList.toggle("close")
  alertStatus.classList.toggle("close")
})

// Form functionality

const form = document.querySelector("form")
const input = document.getElementById("input")
const message = document.getElementById("message")
const send = document.getElementById("send")

send.addEventListener("click", () => {
  if (input.value.length > 0 && message.value.length > 0) {
    alert("Your message has been sent :)")
    input.value = ""
    message.value = ""
  } else if (input.value.length <= 0 && message.value.length > 0) {
    alert("User must be filled!")
  } else if (input.value.length > 0 && message.value.length <= 0) {
    alert("Message must be filled!")
  } else {
    alert("all inputs must be filled out!")
  }
})
