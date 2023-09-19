import os

# Specify the directory path you want to list files from
directory_path = './new'


# Walk through the directory and its subdirectories
for root, dirs, files in os.walk(directory_path):
    for file in files:
        # Print the full path of each file
        file_path = os.path.join(root, file)
        file_name = os.path.basename(file_path)
        file_name_without_extension = os.path.splitext(os.path.basename(file_path))[0]
        new_file_name_without_extension = file_name_without_extension.replace("SVG", "")
        new_file_name = file_name.replace("SVG", "")
        print(file_name_without_extension)
        # # remove SVG
        # with open(file_path, 'rb') as file2:
        # # Read the entire content of the file as bytes
        #     file_content = file2.read()

        # # Convert file_name and new_file_name to bytes
        # modified_content = file_content.replace(file_name_without_extension.encode('utf-8'), new_file_name_without_extension.encode('utf-8'))
        # print(modified_content)
        # # Open the file in binary write mode ('wb') to overwrite the content
        # with open(file_path, 'wb') as file3:
        #     # Write the modified content back to the file
        #     file3.write(modified_content)
        
        # # Rename the file
        # os.rename(file_path, './new/'+new_file_name)
        