from flask import Flask, request, jsonify
from flask_cors import CORS
import google.generativeai as genai



app = Flask(__name__)
CORS(app)
genai.configure(api_key="<YOUR API KEY>")  # Replace with your actual API key

# Create a GenerativeModel object
model = genai.GenerativeModel("gemini-pro-fake-news-detector")

@app.route('/generate_text', methods=['POST'])
def generate_text():
    # print(request.form.get('user_input'))
    try:
        data = request.get_json()
        system_prompt = "I want you to act as a fact checker for news credibility assessment, where you will analyze either text or image content and provide a rating from 0 to 5 on the authenticity level, with 0 being completely fake and 5 being entirely true. use the latest news"
        user_input = data.get('user_input', "")
        # print(user_input)
        # user_input = request.form.get('user_input')


        # Generate text from combined prompt
        prompt = system_prompt + user_input
        response = model.generate_content(prompt)
        # print(response)
        return jsonify({"generated_text":response.text})
    except Exception as e:
        return jsonify({"error": str(e)})

if __name__ == '__main__':
    app.run(debug=False,host='0.0.0.0')
