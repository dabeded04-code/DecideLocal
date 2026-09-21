DecideLocal

Turn a messy situation into a clear decision list.

🔗 Links
GitHub Repository: https://github.com/dabeded04-code/DecideLocal
Local App: http://localhost:3000
About

DecideLocal is a local AI web app that helps users organize a messy situation before making a decision.

Instead of making the decision for the user, DecideLocal uses Tether QVAC to organize their thoughts into clear sections.

The app generates:

Situation
Things to Consider
Questions to Ask Yourself
Possible Next Step
✨ Features
Local AI inference
No external AI API key required
No cloud AI service required
Simple web interface
Structured decision organization
Responsive design
Clear/reset functionality
CPU-based local model support
🤖 Powered by Tether QVAC

DecideLocal uses the Tether QVAC JavaScript/TypeScript SDK v0.19.1.

The application uses:

loadModel() to load the local AI model
completion() to generate the structured response

The AI model runs locally on the user's device.

🛠️ Tech Stack
Node.js
Express
Tether QVAC SDK 0.19.1
HTML
CSS
JavaScript
📋 Requirements
Node.js 22.17.0 or newer
npm 10.9.0 or newer
🚀 Installation

Clone the repository:

git clone https://github.com/dabeded04-code/DecideLocal.git
cd DecideLocal

Install dependencies:

npm install
▶️ Run the App

Start DecideLocal:

npm start

Then open:

http://localhost:3000

The first startup may download the QVAC local AI model.

💡 How It Works
The user describes a situation.
DecideLocal sends the situation to the locally loaded QVAC model.
QVAC generates a structured response.
The result is displayed in the browser.
The user can use the organized information to make their own decision.
🔐 Privacy

DecideLocal is designed around local AI processing.

The application does not require an external AI API key for its AI functionality.

User input is processed by the QVAC model running locally on the user's device.

📁 Project Structure
DecideLocal/
├── public/
│   ├── index.html
│   ├── style.css
│   └── app.js
├── server.js
├── package.json
├── package-lock.json
├── README.md
├── LICENSE
└── .gitignore
📸 Demo

To demonstrate the application:

Open http://localhost:3000
Enter a situation.
Click Organize My Decision.
The local QVAC model generates the decision list.
The structured result appears in the browser.
📜 License

This project is licensed under the MIT License.

👤 Author

dabeded04-code

GitHub: https://github.com/dabeded04-code