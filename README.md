# CSV Splitter Script
## This script will allow you to break large CSV files into smaller ones
This script works by looping through a specified csv file and turning it into an array of values before saving the values into individual files. The number of files and the number of rows per file are dependant on the limit per file. The limit is a variable which can be changed to a number to specify how many rows each file that's written can have.

requirements:
install node

* To split a file, you need to be inside the same directory as the script using a terminal such as windows cmd or bash. You can then run the script with the following command inside the script directory. 

  ```
  node csv-splitter
  ```
  Once ran successfully, the script will ask for three inputs. This will be the following.
  ```
  Enter the name you want to call your files.
  ```
  This can be any sort of value
    ```
  Which file would would you like to split?
  ```
  This needs to be the location of the file. You can copy the full path of the file and paste this in
    ```
  How many rows do you want in each file?
  ```
  This needs to be a number to specify how many rows each file written must have.

  The script will then write the files in the same directory as the script.


