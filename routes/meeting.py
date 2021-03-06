from bottle import get, response, view
import json
import mysql.connector
from g import (
    DATABASE_CONFIG
)



################################################################### 
# MEETING    
################################################################### 
@get('/meeting')
@view('meeting')
def _():

    try:
        ################  CONNECT TO DATABASE  ###################
        db_connection = mysql.connector.connect(**DATABASE_CONFIG)
        cursor = db_connection.cursor(dictionary=True)
        ##########################################################

        sql_fetch_exercises =   """
                                    SELECT * FROM exercises
                                """
        cursor.execute(sql_fetch_exercises)
        exercises = cursor.fetchall()

        print(exercises)

        return dict(exercises=exercises)

    except Exception as ex:
        print(ex)
        return {'info': 'Upps... something went wrong'}






