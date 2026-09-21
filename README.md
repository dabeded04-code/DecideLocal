DecideLocal

Turn a messy situation into a clear decision list.

🔗 Links
GitHub Repository: https://github.com/dabeded04-code/DecideLocal
Local App: http://localhost:3000
About

DecideLocal is a local AI web app that helps users organize a messy situation before making a decision.

Instead of making the decision for the user, DecideLocal uses Tether QVAC to organize their thoughts into clear sections.

✨ Features
Local AI inference
No external AI API key
No cloud AI service
Simple web interface
Structured decision organization
Responsive design
Clear/reset functionality
🤖 Powered by Tether QVAC

DecideLocal uses the Tether QVAC JavaScript/TypeScript SDK v0.19.1.

The application uses:

loadModel() to load the local AI model
completion() to generate the structured response
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
git clone https://github.com/dabeded04-code/DecideLocal.git
cd DecideLocal
npm install
▶️ Run the App
npm start

Then open:

http://localhost:3000

The first startup may download the QVAC local AI model.

💡 How It Works
The user describes a situation.
DecideLocal sends it to the locally loaded QVAC model.
QVAC generates a structured response.
The result appears in the browser.
The user makes their own decision using the organized information.
🔐 Privacy

DecideLocal is designed around local AI processing.

The application does not require an external AI API key.

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

Open the app at:

http://localhost:3000

Enter a situation and click Organize My Decision to see the local QVAC AI result.

📜 License

This project is licensed under the MIT License.

👤 Author

dabeded04-code

GitHub: https://github.com/dabeded04-code