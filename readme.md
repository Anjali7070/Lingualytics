# LINGUALYTICS - Gender-and-Age-Detector

Lingualytics - The Gender and Age Detection project is a Natural Language Processing (NLP) based project that uses Machine Learning to predict the gender and approximate age of individuals by analyzing the linguistic features and patterns in their text data, messages, comments or chat conversations. The project is implemented using deep learning techniques and leverages a dataset of textual data. It can be used for various applications, such as targeted marketing and advertising, social media analytics, demographic and sentiment analysis, personalized healthcare recommendations, enhanced customer services, chatbot optimization and content moderation,security and surveillance, and personalized recommendations.

The main components of this project include:

- Data Collection: Gathering a dataset of textual data and messages with corresponding age and gender labels.
- Data Preprocessing: Preprocessing the data to ensure they are suitable for training deep learning models.
- Model Building: Creating deep learning models for gender and age prediction.
- Training: Training the models on the prepared dataset.
- Evaluation: Assessing the model's accuracy and performance.
- Inference: Using the trained model to predict the gender and age from textual data.
- Visualization: Visualizing the results and demographic distributions.
- The project can serve as a foundation for developing applications related to gender and age prediction from textual data.


## Table of Contents
1. [Project Structure](#project-structure)
2. [Data Collection](#data-collection)
3. [Data Preprocessing](#data-preprocessing)
4. [Model Building](#model-building)
5. [Training](#training)
6. [Evaluation](#evaluation)
7. [Inference](#inference)
8. [Visualization](#visualization)
9. [Dependencies](#dependencies)
10. [Setup](#setup)

## Project Structure
The project is organized into several key components:
- `data/`: Contains the dataset of textual data with gender and age labels.
- `notebooks/`: Jupyter notebooks for data preprocessing, model training, and visualization.
- `models/`: Saved model checkpoints.
- `src/`: Source code for data preprocessing, model building, and inference.
- `results/`: Output visualizations and evaluation metrics.

## Data Collection
Data for this project can be collected from various sources or datasets containing textual data with gender and age labels. Ensure that the data is organized in a structured manner.

## Data Preprocessing
Before training, the text data need to be preprocessed. This includes resizing, normalization, and data augmentation if necessary. 

## Model Building
Deep learning models are used for gender and age prediction. 

## Training
Training the model involves feeding the preprocessed data into the model and iteratively adjusting model weights. 

## Evaluation
Evaluate the model's performance using appropriate metrics such as accuracy, loss, or mean squared error.

## Inference
After training, use the model to make predictions on new textual data. 

## Visualization
Visualize the results and demographic distributions using the website.

## Dependencies
Ensure you have the following dependencies installed:
- Python 3.x
- Pytorch
- Pandas
- Transformers
- Hugging_Face_Accelerator
- Flask
- next.js
- Other necessary libraries

## setup
1. Clone the repository:
 ```bash
git clone https://github.com/Anjali7070/Hack-o-masters.git
cd Hack-o-masters
```
2. Importing Lingualytics Model:
  ```bash
git lfs install
git clone https://huggingface.co/saurabhalp/linguilytics
```
Now move model.pth to the backend directory.

4. Set up your environment and install dependencies:
```bash
   pip install -r requirements.txt
```
5. ```bash
   cd frontend
   npm i
   npm run dev
   ```
 6. ```bash
    cd ..
    cd backend
    python server.py
     ```
    
## IMPORTANT LINKS
PPT - https://docs.google.com/presentation/d/1TZgp6ghtxH3RwJkShzKPj-YgZ2uxTDF0/edit?usp=drive_link&ouid=110831135010972549841&rtpof=true&sd=true <br/>
Video - https://drive.google.com/file/d/1DszJadp0Xqj69Cb6pohi0HBBv-hZTObN/view?usp=drive_link
