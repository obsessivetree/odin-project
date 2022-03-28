const stars = document.querySelectorAll(".pin");
stars.forEach((star) =>
  star.addEventListener("click", (e) => {
    // console.log(e.target.style.fill);
    if (e.currentTarget.style.fill === "rgb(255, 231, 0)") {
      e.currentTarget.style.fill = "";
      e.currentTarget.style.stroke = "gray";
      e.currentTarget.addEventListener("mouseover", (f) => {
        f.currentTarget.style.stroke = "gray";
        // console.log(f.currentTarget.style.stroke);
      });
      e.currentTarget.addEventListener("mouseout", (g) => {
        g.currentTarget.style.stroke = "lightgray";
        // console.log(g.currentTarget.style.stroke);
      });
    } else {
      e.currentTarget.style.stroke = "rgb(255, 231, 0)";
      e.currentTarget.style.fill = "rgb(255, 231, 0)";
    }
    // console.log(e.currentTarget);
  })
);

const liItem = document.querySelectorAll("li");

liItem.forEach((li) =>
  li.addEventListener("click", (e) => {
    const checkbox = e.currentTarget.querySelector("div.checkbox");
    if (!e.target.classList.contains("item-description")) {
      if (!checkbox.firstChild) {
        checkbox.innerHTML =
          '<img class="check" src="../icons/check.svg" alt="" srcset="" />';
        // checkbox.style.borderColor = "#77b255";
      } else {
        checkbox.firstChild.remove();
        // checkbox.style.borderColor = "rgb(234, 234, 234)";
      }
    }
    // console.log(e.currentTarget);
  })
);

const Xs = document.querySelectorAll(".x");

Xs.forEach((x) =>
  x.addEventListener("click", (e) => {
    if (e.target.classList.contains("del-col-btn")) {
      e.target.parentElement.remove();
    }
    if (e.target.classList.contains("del-list-btn")) {
      e.target.parentElement.parentElement.remove();
    }
  })
);

const listTitles = document.querySelectorAll("h2");

listTitles.forEach((listTitle) =>
  listTitle.addEventListener("click", (e) => {
    // console.log(e.currentTarget);
    let input = document.createElement("input");
    const oldTitle = e.currentTarget.textContent;
    input.placeholder = oldTitle;
    e.currentTarget.textContent = "";
    e.currentTarget.appendChild(input);
    input.focus();
    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        if (input.value !== "") {
          listTitle.textContent = input.value;
        } else {
          listTitle.textContent = oldTitle;
        }
      }
      if (e.key === "Escape") {
        listTitle.textContent = oldTitle;
      }
    });
  })
);

const itemLabels = document.querySelectorAll(".item-description");

itemLabels.forEach((label) =>
  label.addEventListener("click", (e) => {
    let input = document.createElement("input");
    const oldLabel = e.currentTarget.textContent;
    input.placeholder = oldLabel;
    e.currentTarget.textContent = "";
    e.currentTarget.appendChild(input);
    input.focus();
    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        if (input.value !== "") {
          label.textContent = input.value;
        } else {
          label.textContent = oldLabel;
        }
      }
      if (e.key === "Escape") {
        label.textContent = oldLabel;
      }
    });
  })
);
