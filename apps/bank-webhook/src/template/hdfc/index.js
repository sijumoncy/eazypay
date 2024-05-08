// simulation buttons and click events
const successBtn = document.getElementById("successbtn");
const failureBtn = document.getElementById("failurebtn");

const requestParamsData = {};
let redirectionUrl = "";

async function informServiceProviderBankWebHook(status) {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const rawdata = JSON.stringify({
    token: requestParamsData?.token,
    user_id: requestParamsData?.userId,
    amount: requestParamsData?.amount,
    status: status,
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: rawdata,
    redirect: "follow",
  };

  fetch("http://localhost:8003/bankWebhook", requestOptions)
    .then((response) => response.json())
    .then((result) => console.log({ result }))
    .catch((error) => console.error(error))
    .finally(() => {
      // redirect to the actual called location
      window.location.href = redirectionUrl;
    });
}

successBtn.addEventListener("click", async (e) => {
  console.log("clicked success button -------", e);
  await informServiceProviderBankWebHook("success");
});

failureBtn.addEventListener("click", async (e) => {
  console.log("clicked failure button xxxxxx", e);
  await informServiceProviderBankWebHook("failed");
});

// get request params
function getQueryParams() {
  const queryParams = new URLSearchParams(window.location.search);
  for (const param of queryParams) {
    if (param[0] === "redirectUrl") {
      redirectionUrl = param[1];
      console.log({ redirectionUrl });
    } else {
      requestParamsData[param[0]] = param[1];
    }
  }
  return requestParamsData;
}

console.log({ requestParamsData });

window.onload = getQueryParams();
