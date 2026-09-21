const express = require("express");
const path = require("path");
const {
  loadModel,
  completion,
  unloadModel,
  LLAMA_3_2_1B_INST_Q4_0
} = require("@qvac/sdk");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

let modelId = null;

async function startModel() {
  console.log("Loading QVAC local AI model...");

  modelId = await loadModel({
    modelSrc: LLAMA_3_2_1B_INST_Q4_0,
    modelType: "llm",
    modelConfig: {
      device: "cpu",
      gpu_layers: 0
    },
    onProgress: (progress) => {
      const percentage = progress.percentage ?? 0;
      console.log(`Model download: ${percentage.toFixed(0)}%`);
    }
  });

  console.log("QVAC model loaded successfully.");
}

app.post("/api/organize", async (req, res) => {
  try {
    const { situation } = req.body;

    if (!situation || !situation.trim()) {
      return res.status(400).json({
        error: "Please describe your situation."
      });
    }

    const prompt = `
You are DecideLocal, a neutral decision-organizing assistant.

Your job is NOT to make the decision for the user.
Do not tell the user what they should choose.
Instead, organize their situation so they can make their own decision.

Analyze this situation:

${situation}

Return exactly these sections:

Situation:
Briefly summarize the situation.

Things to Consider:
Give 3 to 5 important factors the user may want to think about.

Questions to Ask Yourself:
Give 3 useful questions that can help the user think through the decision.

Possible Next Step:
Give one neutral practical step the user could take before deciding.

Keep the response clear, concise, and easy to understand.
`;

    const run = completion({
      modelId,
      history: [
        {
          role: "user",
          content: prompt
        }
      ]
    });

    const finalResult = await run.final;

    res.json({
      result: finalResult.contentText
    });
  } catch (error) {
    console.error("QVAC error:", error);

    res.status(500).json({
      error: "Something went wrong while using the local AI."
    });
  }
});

async function startServer() {
  try {
    await startModel();

    app.listen(PORT, () => {
      console.log("");
      console.log(`DecideLocal is running at http://localhost:${PORT}`);
      console.log("Your AI processing is running locally with QVAC.");
    });
  } catch (error) {
    console.error("Failed to start DecideLocal:", error);
    process.exit(1);
  }
}

process.on("SIGINT", async () => {
  console.log("\nShutting down...");

  if (modelId) {
    await unloadModel({
      modelId,
      clearStorage: false
    });
  }

  process.exit(0);
});

startServer();