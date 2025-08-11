import os
from flask import Flask, request, jsonify
import openai

app = Flask(__name__)

# Get the OpenAI key from environment variables
openai.api_key = os.getenv("OPENAI_API_KEY")

@app.route("/api/generate", methods=["POST"])
def generate_listing():
    description = request.form.get("description", "")
    # For now, placeholder that just echoes input
    # Later: add eBay API sold comps lookup and AI generation
    prompt = f"Create SEO-optimized resale listing title, description, pricing, and era for: {description}"
    try:
        completion = openai.ChatCompletion.create(
            model="gpt-4o-mini",
            messages=[{"role": "user", "content": prompt}]
        )
        ai_response = completion.choices[0].message["content"]
        return jsonify({"result": ai_response})
    except Exception as e:
        return jsonify({"error": str(e)})

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=3000)
