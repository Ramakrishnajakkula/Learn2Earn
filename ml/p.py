import nltk
nltk.download('punkt')
nltk.download('wordnet')
nltk.download('stopwords')

from nltk.tokenize import word_tokenize
from nltk.stem import WordNetLemmatizer
from nltk.corpus import stopwords
import PyPDF2
import re
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
import os

def extract_text_from_pdf(pdf_path):
    """Extract text content from a PDF file."""
    text = ""
    try:
        with open(pdf_path, 'rb') as file:
            pdf_reader = PyPDF2.PdfReader(file)
            for page in pdf_reader.pages:
                text += page.extract_text()
    except Exception as e:
        print(f"Error extracting text from {pdf_path}: {e}")
    return text

def preprocess_text(text):
    """Preprocess text by tokenizing, removing stopwords, and lemmatizing."""
    # Convert to lowercase
    text = text.lower()
    
    # Remove special characters and numbers
    text = re.sub(r'[^a-zA-Z\s]', '', text)
    
    # Tokenize
    tokens = word_tokenize(text)
    
    # Remove stopwords
    stop_words = set(stopwords.words('english'))
    tokens = [token for token in tokens if token not in stop_words and len(token) > 2]
    
    # Lemmatize
    lemmatizer = WordNetLemmatizer()
    tokens = [lemmatizer.lemmatize(token) for token in tokens]
    
    return ' '.join(tokens)

def calculate_similarity(resume_text, job_text):
    """Calculate similarity between resume and job description using TF-IDF and cosine similarity."""
    documents = [resume_text, job_text]
    
    # Create TF-IDF vectors
    vectorizer = TfidfVectorizer()
    tfidf_matrix = vectorizer.fit_transform(documents)
    
    # Calculate cosine similarity
    similarity = cosine_similarity(tfidf_matrix[0:1], tfidf_matrix[1:2])[0][0]
    
    # Convert to percentage
    match_percentage = similarity * 100
    
    return match_percentage

def ats_resume_match(resume_path, project_details_path):
    """
    Compare a resume with project details and return a matching percentage.
    
    Args:
        resume_path (str): Path to the resume PDF file
        project_details_path (str): Path to the project details PDF file
        
    Returns:
        float: Matching percentage between the resume and project details
    """
    # Extract text from PDFs
    resume_text = extract_text_from_pdf(resume_path)
    project_text = extract_text_from_pdf(project_details_path)
    
    # Preprocess the texts
    processed_resume = preprocess_text(resume_text)
    processed_project = preprocess_text(project_text)
    
    # Calculate matching percentage
    match_percentage = calculate_similarity(processed_resume, processed_project)
    
    return match_percentage

def batch_process_resumes(resumes_folder, project_details_path):
    """
    Process multiple resumes and return their matching percentages with project details.
    
    Args:
        resumes_folder (str): Path to folder containing resume PDFs
        project_details_path (str): Path to the project details PDF file
        
    Returns:
        dict: Dictionary with resume filenames as keys and matching percentages as values
    """
    results = {}
    project_text = extract_text_from_pdf(project_details_path)
    processed_project = preprocess_text(project_text)
    
    for filename in os.listdir(resumes_folder):
        if filename.lower().endswith('.pdf'):
            resume_path = os.path.join(resumes_folder, filename)
            resume_text = extract_text_from_pdf(resume_path)
            processed_resume = preprocess_text(resume_text)
            match_percentage = calculate_similarity(processed_resume, processed_project)
            results[filename] = match_percentage
    
    # Sort results by matching percentage in descending order
    sorted_results = {k: v for k, v in sorted(results.items(), key=lambda item: item[1], reverse=True)}
    return sorted_results

# Example usage
if __name__ == "__main__":
    # For single resume matching
    # match = ats_resume_match("path/to/resume.pdf", "path/to/project_details.pdf")
    # print(f"Resume match percentage: {match:.2f}%")
    
    # For batch processing
    # results = batch_process_resumes("path/to/resumes_folder", "path/to/project_details.pdf")
    # for resume, match in results.items():
    #     print(f"{resume}: {match:.2f}%")
    pass
