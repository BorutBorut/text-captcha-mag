import {
  getRequestTaskButton,
  getRespondTaskButton,
  getStatusIndicator,
  getTaskSpace,
} from "./elements";
import {
  sendIngestRequest,
  sendTaskRequest,
  sendTaskSolution,
} from "./requests";

let instanceId = -1;

window.addEventListener("load", function (event) {
  console.log("Welcome to TextCaptcha.");

  injectTextCaptcha();
  getTaskSpace().innerHTML = "";
  getTaskSpace().appendChild(getStatusIndicator());

  if (!extractArticleText) {
    console.error(
      "extractArticleText function must be defined for TextCaptcha to work."
    );
    return;
  }

  sendIngestRequest(getArticleUrl(), extractArticleText());

  getRequestTaskButton().addEventListener("click", function () {
    sendTaskRequest(getArticleUrl(), extractArticleText(), (task) => {
      instanceId = task.id;
      renderTask(task);
    });
  });
});

function renderTask(task) {
  const meta = document.createElement("span");
  meta.textContent = "Your task id is " + task.id;
  meta.classList.add("metadata");

  getTaskSpace().appendChild(meta);

  for (let word of task.words) {
    const piece = document.createElement("span");
    piece.classList.add("piece");
    piece.textContent = word + " ";

    piece.addEventListener("click", function () {
      if (piece.classList.contains("selected")) {
        piece.classList.remove("selected");
      } else {
        piece.classList.add("selected");
      }
    });

    getTaskSpace().appendChild(piece);
  }

  const submitButton = getRespondTaskButton();
  submitButton.addEventListener(
    "click",
    function () {
      const pieces = getTaskSpace().querySelectorAll(".piece");
      let selectedIndexes = [];
      for (let i = 0; i < pieces.length; i++) {
        if (pieces[i].classList.contains("selected")) {
          selectedIndexes.push(i);
        }
      }
      console.log(selectedIndexes);

      sendTaskSolution(instanceId, selectedIndexes);
    },
    {
      once: true,
    }
  );

  getTaskSpace().appendChild(submitButton);
}

function injectTextCaptcha() {
  try {
    const captchaInjectPosition = document.querySelector("div#text-captcha");
    captchaInjectPosition.append(getTaskSpace());
  } catch (e) {
    console.warn(e);
  }
}

function getArticleUrl() {
  return window.location.hostname + window.location.pathname;
}
