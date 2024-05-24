from flask import Flask, request, jsonify
import nbformat
from nbconvert import HTMLExporter
import subprocess
import os

app = Flask(__name__)

@app.route('/run-notebook', methods=['POST'])
def run_notebook():
    # Get user input from the request
    user_input = request.json.get('input')
    
    # Path to the notebook
    notebook_path = 'path_to_your_notebook.ipynb'

    # Load the notebook
    with open(notebook_path) as f:
        nb = nbformat.read(f, as_version=4)

    # Execute the notebook
    output_notebook_path = 'output_notebook.ipynb'
    with open(output_notebook_path, 'w') as f:
        nbformat.write(nb, f)

    # Convert the notebook to HTML
    html_exporter = HTMLExporter()
    (body, resources) = html_exporter.from_filename(output_notebook_path)

    # Clean up
    os.remove(output_notebook_path)

    return jsonify({'output': body})

if __name__ == '__main__':
    app.run(debug=True)
