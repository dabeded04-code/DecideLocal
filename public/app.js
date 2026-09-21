const situationInput = document.getElementById("situation");
const organizeBtn = document.getElementById("organizeBtn");
const clearBtn = document.getElementById("clearBtn");
const buttonText = document.getElementById("buttonText");

const loading = document.getElementById("loading");
const resultCard = document.getElementById("resultCard");
const result = document.getElementById("result");

function formatResult(text) {
  const sections = [
    "Situation:",
    "Things to Consider:",
    "Questions to Ask Yourself:",
    "Possible Next Step:"
  ];

  let html = text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

  sections.forEach((section) => {
    html = html.replace(
      new RegExp(`\\*\\*${section.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\*\\*`, "g"),
      `|||${section}|||`
    );
  });

  html = html.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");

  const parts = html.split("|||").filter(Boolean);

  let output = "";

  for (let i = 0; i < parts.length; i += 2) {
    const heading = parts[i];
    const content = parts[i + 1] || "";

    output += `
      <div class="result-section">
        <h3>${heading}</h3>
        <div>${content.replace(/\n/g, "<br>")}</div>
      </div>
    `;
  }

  if (!output) {
    output = `<div class="result-section"><div>${html.replace(/\n/g, "<br>")}</div></div>`;
  }

  return output;
}

organizeBtn.addEventListener("click", async () => {
  const situation = situationInput.value.trim();

  if (!situation) {
    situationInput.focus();
    return;
  }

  organizeBtn.disabled = true;
  buttonText.textContent = "Organizing...";
  loading.classList.remove("hidden");
  resultCard.classList.add("hidden");

  try {
    const response = await fetch("/api/organize", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ situation })
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Something went wrong.");
    }

    result.innerHTML = formatResult(data.result);
    resultCard.classList.remove("hidden");

    resultCard.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  } catch (error) {
    result.innerHTML = `
      <div class="result-section">
        <h3>Something went wrong</h3>
        <div>${error.message}</div>
      </div>
    `;

    resultCard.classList.remove("hidden");
  } finally {
    loading.classList.add("hidden");
    organizeBtn.disabled = false;
    buttonText.textContent = "Organize My Decision";
  }
});

clearBtn.addEventListener("click", () => {
  situationInput.value = "";
  result.innerHTML = "";
  resultCard.classList.add("hidden");
  loading.classList.add("hidden");
  situationInput.focus();
});