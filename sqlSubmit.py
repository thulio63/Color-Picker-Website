#!/Users/andrewthul/Desktop/Projects/Code/Color Picker Website/virtualenvs/bin/python

import mysql.connector
from mysql.connector import errorcode
import touchy
#import sys
#print(sys.executable)

try:
    cnx = mysql.connector.connect(user = touchy.user, password = f'{touchy.password}', host = touchy.host, port = touchy.port, database = touchy.db)
except mysql.connector.Error as err:
  if err.errno == errorcode.ER_ACCESS_DENIED_ERROR:
    print("Something is wrong with your user name or password")
  elif err.errno == errorcode.ER_BAD_DB_ERROR:
    print("Database does not exist")
  else:
    print(err)
    
cursor = cnx.cursor()
print('successfully accessed database!')
'''
#DO NOT GIVE OTHERS ACCESS TO THIS DUMMY
options = ["SELECT", "INSERT", "CREATE"]
opts = []
choosing = True
while choosing:
    print("select from the following:\n")
    for opt in options:
        print(opt)
        opts.append(opt)
    choice = str(input()).upper()
    for x in range(len(options)):        
        if choice in opts:
            print(f"executing {choice}")
            choosing = False
            break
    if choosing:
        print("\ninvalid choice, please try again\n")
'''
#build-a-query for fun, not necessary for this project
query = 'SELECT * FROM colors'
cursor.execute(query)
print(f"executing query: {query}")
rows = cursor.fetchall()
print("printing results")
for row in rows:
    print(row)
cursor.close()
print("goodbye!")
cnx.close