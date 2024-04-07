import torch.nn as nn
from transformers import BertModel

bert_model = BertModel.from_pretrained('bert-base-uncased')

class GenderAgeModel(nn.Module):
    def _init_(self):
        super(GenderAgeModel, self)._init_()
        self.bert = bert_model
        self.dropout = nn.Dropout(0.1)
        self.gender_output = nn.Linear(768, 1)
        self.age_output_1 = nn.Linear(768, 128)
        self.age_output_2 = nn.Linear(128, 64)
        self.age_output_3 = nn.Linear(64, 1)
        self.sigmoid = nn.Sigmoid()
        self.relu = nn.ReLU()

    def forward(self, input_ids, attention_mask):
        bert_output = self.bert(input_ids, attention_mask)[1]
        bert_output = self.dropout(bert_output)
        gender_output = self.sigmoid(self.gender_output(bert_output))
        age_output_1 = self.relu(self.age_output_1(bert_output))
        age_output_2 = self.relu(self.age_output_2(age_output_1))
        age_output_3 = self.age_output_3(age_output_2)
        return gender_output, age_output_3