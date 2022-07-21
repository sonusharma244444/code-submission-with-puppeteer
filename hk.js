const puppeteer = require("puppeteer");
const codeObj = require("./code");

const login = "https://www.hackerrank.com/auth/login";
const email = "togihor253@tebyy.com";
const password = "12345678";

let page;

const browserOpen = puppeteer
  .launch({
    headless: false,
    args: ["--start-maximized"],
    defaultViewport: null,
  })
  .then(function (browserObj) {
    const browserOpenPromise = browserObj.newPage();
    return browserOpenPromise;
  })
  .then(function (newTab) {
    page = newTab;
    const hackerRankOpenPromise = newTab.goto(login);
    return hackerRankOpenPromise;
  })
  .then(function () {
    const emailIsEntered = page.type("input[id='input-1']", email, {
      delay: 50,
    });
    return emailIsEntered;
  })
  .then(function () {
    const passwordIsEntered = page.type("input[id='input-2']", password, {
      delay: 50,
    });
    return passwordIsEntered;
  })
  .then(function () {
    const loginButtonClicked = page.click("button[type ='submit']", {
      delay: 50,
    });
    return loginButtonClicked;
  })
  .then(function () {
    const clickOnAlgoPromise = waitAndClick(
      ".topic-card a[data-attr1='algorithms']",
      page
    );
    return clickOnAlgoPromise;
  })
  .then(function () {
    const clickOnWarmUp = waitAndClick("input[value='warmup']", page);
    return clickOnWarmUp;
  })
  .then(function () {
    const waitFor3Seconds = page.waitForTimeout(3000);
    return waitFor3Seconds;
  })
  .then(function () {
    const allQuestionsPromise = page.$$(
      ".ui-btn.ui-btn-normal.primary-cta.ui-btn-line-primary.ui-btn-styled"
    );
    return allQuestionsPromise;
  })
  .then(function (questionArr) {
    // console.log(questionArr.length);
    const questionWillBeSolved = questionSolver(
      page,
      questionArr[0],
      codeObj.answer[0]
    );
    return questionWillBeSolved;
  })
  .catch(function (err) {
    console.log(err);
  });

function waitAndClick(selector, cPage) {
  return new Promise(function (resolve, reject) {
    let waitForModelPromise = cPage.waitForSelector(selector);

    waitForModelPromise
      .then(function () {
        const clickModel = cPage.click(selector, { delay: 50 });
        return clickModel;
      })
      .then(function () {
        resolve();
      })
      .then(function (err) {
        reject();
      });
  });
}

function questionSolver(page, questionArr, answer) {
  return new Promise(function (resolve, reject) {
    const questionWillBeClicked = questionArr.click();
    questionWillBeClicked
      .then(function () {
        const editorInFocus = waitAndClick(
          ".monaco-editor.no-user-select.vs",
          page
        );
        return editorInFocus;
      })
      .then(function () {
        return waitAndClick("input[type='checkbox']", page);
      })
      .then(function () {
        return page.waitForSelector("textarea[id='input-1']", page);
      })
      .then(function () {
        return page.type("textarea[id='input-1'", answer, { delay: 10 });
      })
      .then(function () {
        let ctrlIsPressed = page.keyboard.down("Control");
        return ctrlIsPressed;
      })
      .then(function () {
        const AIsPressed = page.keyboard.press("A", { delay: 100 });
        return AIsPressed;
      })
      .then(function () {
        const XIsPressed = page.keyboard.press("X", { delay: 100 });
        return XIsPressed;
      })
      .then(function () {
        const ctrlIsUnPressed = page.keyboard.up("Control");
        return ctrlIsUnPressed;
      })
      .then(function () {
        const mainEditorInFocused = waitAndClick(
          ".monaco-editor.no-user-select.vs",
          page
        );
        return mainEditorInFocused;
      })
      .then(function () {
        let ctrlIsPressed = page.keyboard.down("Control");
        return ctrlIsPressed;
      })
      .then(function () {
        const AIsPressed = page.keyboard.press("A", { delay: 10 });
        return AIsPressed;
      })
      .then(function () {
        const vIsPressed = page.keyboard.press("V", { delay: 10 });
        return vIsPressed;
      })
      .then(function () {
        const ctrlIsUnPressed = page.keyboard.up("Control");
        return ctrlIsUnPressed;
      })
      .then(function () {
        return page.click(
          ".ui-btn.ui-btn-normal.ui-btn-secondary.pull-right.msR.hr-monaco-compile.hr-monaco__run-code.ui-btn-styled",
          { delay: 50 }
        );
      })
      .then(function () {
        resolve();
      })
      .catch(function (err) {
        reject();
      });
  });
}
