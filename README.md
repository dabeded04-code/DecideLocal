# DecideLocal

> Turn a messy situation into a clear decision list.

**GitHub:** https://github.com/dabeded04-code
**Local App:** http://localhost:3000

DecideLocal is a simple local AI web app that helps users organize a messy situation before making a decision.

Instead of making the decision for the user, DecideLocal uses Tether QVAC to organize their thoughts into clear sections.

## ✨ Features

* 🧠 Local AI decision organization
* 🔒 AI processing runs locally on the device
* 🚫 No external AI API key required
* 📝 Describe any situation in your own words
* 📋 Generates a structured decision list
* ❓ Provides questions to think about
* ➡️ Suggests a neutral possible next step
* 📱 Responsive web interface
* 🧹 Clear and reset functionality

## 🤖 Powered by Tether QVAC

DecideLocal uses the **Tether QVAC JavaScript/TypeScript SDK v0.19.1**.

The application uses:

* `loadModel()` to load the local AI model
* `completion()` to generate the decision-organizing response

The AI model runs locally instead of sending the user's situation to a cloud AI service.

## 🛠️ Tech Stack

* **Node.js**
* **Express**
* **Tether QVAC SDK 0.19.1**
* **HTML**
* **CSS**
* **JavaScript**

## 📋 Requirements

* Node.js `22.17.0` or newer
* npm `10.9.0` or newer

## 🚀 Installation

Clone the repository:

```bash
git clone https://github.com/dabeded04-code/DecideLocal.git
cd DecideLocal
```

Install the dependencies:

```bash
npm install
```

## ▶️ Run DecideLocal

Start the application:

```bash
npm start
```

Then open:

**http://localhost:3000**

The first startup may download the QVAC local AI model.

## 💡 How It Works

1. The user describes a situation.
2. DecideLocal sends the situation to the locally loaded QVAC model.
3. QVAC organizes the information.
4. The app displays the result as:

   * **Situation**
   * **Things to Consider**
   * **Questions to Ask Yourself**
   * **Possible Next Step**
5. The user makes their own decision using the organized information.

## 🔐 Privacy

DecideLocal is designed around local AI processing.

The application does not require an external AI API key for its AI functionality.

User input is processed by the QVAC model running locally on the user's device.

## 📁 Project Structure

```text
DecideLocal/
├── public/
│   ├── index.html
│   ├── style.css
│   └── app.js
├── server.js
├── package.json
├── package-lock.json
├── README.md
└── LICENSE
```

## 📸 Demo

The application can be demonstrated by entering a real-life situation and clicking **Organize My Decision**.

The resulting QVAC-generated decision list is displayed directly in the browser.

## 📜 License

This project is licensed under the MIT License.

## 👤 Author

Created by **dabeded04-code**

GitHub: https://github.com/dabeded04-code
