# VeriFacts - Your AI-Powered News Verification Tool

What is VeriFacts?

VeriFacts is a powerful tool that leverages advanced AI models (RAG models) to help you determine the authenticity of news articles and URLs.
Trained on the FEVER dataset and integrated with LangChain Agent, VeriFacts ensures comprehensive and up-to-date news verification.


Why Use VeriFacts?

Combat Misinformation: In the era of fake news, VeriFacts empowers you to separate fact from fiction.
Stay Informed: Make confident decisions based on reliable information.
Easy to Use: Our intuitive browser extension streamlines the verification process.


Installation

Fork the repository: Create a copy of the VeriFacts code on your own GitHub account.
Install dependencies: Run the following command in your terminal:
Bash
pip install -r requirements.txt
Use code with caution.
Enable Chrome developer mode:
Open Chrome and navigate to "Settings" -> "More tools" -> "Extensions".
Toggle the "Developer mode" switch in the top-right corner.
Load the extension:
Click "Load unpacked" and select the extensions folder within the VeriFacts project directory.
Add API keys:
Obtain API keys from Gemini and Serpapi.
Securely store your API keys within the app.py file (follow best practices for API key management).
Run the application:
Execute the following command in your terminal:
Bash
  python app.py

Access the extension in Chrome:
Navigate to your Chrome extensions, locate VeriFacts, and enable it.
Usage

Open the VeriFacts extension in your Chrome browser.
Input your query: Enter the text of a news article or the URL you want to verify.
VeriFacts analyzes and provides a verdict: The extension will carefully analyze your input and provide a clear indication of whether the information is likely real or fake.


