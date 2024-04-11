import requests
import json

# Replace with the actual URL where your Flask app is running
APP_URL = "http://localhost:5000/generate_text"

# Set your system prompt and user input

user_input = "volvo is mercedes"

# Create the payload
payload = {
    "user_input": user_input
}

try:
    # Make the POST request
    response = requests.post(APP_URL, json=payload)

    # Parse the response
    if response.status_code == 200:
        generated_text = response.json().get("generated_text", "")
        print("Generated Text:")
        print(generated_text)
    else:
        print(f"Error: {response.status_code} - {response.text}")
except Exception as e:
    print(f"An error occurred: {str(e)}")