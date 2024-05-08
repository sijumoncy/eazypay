// simulation buttons and click events
const successBtn = document.getElementById("successbtn");
const failureBtn = document.getElementById("failurebtn");

const requestParamsData = {};

successBtn.addEventListener("click", (e) => {
  console.log("clicked success button -------", e);
});

failureBtn.addEventListener("click", (e) => {
  console.log("clicked failure button xxxxxx", e);
});

// get request params
function getQueryParams() {
  const queryParams = new URLSearchParams(window.location.search);
  for (const param of queryParams) {
    requestParamsData[param[0]] = param[1];
  }
  return requestParamsData;
}

console.log({ requestParamsData });

window.onload = getQueryParams();
