import requests
from datetime import date, time

# URL of the endpoint
url = "http://localhost:8080/Reservations/NewReservation"
# Data to be sent in the POST request
data = {
    "name":"João",
    "lastName":"Miguel",
    "persons":5,
    "phone":"+351969696969",
    "date":date(2024, 9, 25).isoformat(),
    "time":time(18, 0, 0).isoformat(),
    "obs":"test123"
}
# Headers
headers = {
    "Content-Type": "application/json",  # Typically JSON, adjust based on your API
}

# Sending POST request
response = requests.post(url, json=data, headers=headers)

# Printing the response
print("Status Code:", response.status_code)
print("Response Body:", response.text)