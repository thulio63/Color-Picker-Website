import virtualenvs
import mysql.connector
from mysql.connector import errorcode
import touchy

try:
    cnx = mysql.connector.connect(user = 'root', password = f'{touchy.password}', host = 'localhost', port = 3306, database = 'colorPickerApp')
except mysql.connector.Error as err:
  if err.errno == errorcode.ER_ACCESS_DENIED_ERROR:
    print("Something is wrong with your user name or password")
  elif err.errno == errorcode.ER_BAD_DB_ERROR:
    print("Database does not exist")
  else:
    print(err)
    
print('successfully accessed database!')
cursor = cnx.cursor()
query = 'SELECT * FROM colors'
#cnx._execute_query(query)
cursor.execute(query)
rows = cursor.fetchall()
print(rows)
cursor.close()
cnx.close