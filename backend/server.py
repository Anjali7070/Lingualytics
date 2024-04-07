from flask import Flask, request, jsonify
from flask_cors import CORS
import torch
from GenderAgePrediction import GenderAgeModel
from transformers import BertTokenizer


app = Flask(_name_)
CORS(app)
bert_tokenizer = BertTokenizer.from_pretrained('bert-base-uncased')

model = GenderAgeModel()

model.load_state_dict(torch.load('model.pth', map_location=torch.device('cpu')))
model.eval()


def preprocess_text(text):
    # Tokenize the text
    encoded_input = bert_tokenizer(text, padding=True, truncation=True, return_tensors='pt')

    # Extract the input_ids and attention_mask
    input_ids = encoded_input['input_ids']
    attention_mask = encoded_input['attention_mask']

    return input_ids, attention_mask



def give_prediction(text):
    input_ids, attention_mask = preprocess_text(text)

    with torch.no_grad():
        gender_out, age_out = model(input_ids, attention_mask)

    return gender_out.item(), age_out.item()


@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()
    
    gender, age = give_prediction(data['text'])
    age = int(age)
    str_gender = "Male" if gender > 0.3 else "Female"
    return jsonify({
        "age" : age,
        "gender" : str_gender
    })


if _name_ == '_main_':
    app.run(host='0.0.0.0')