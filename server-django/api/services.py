import requests


def get_weather_data():
    headers = {"Content-Type": "application/json",
               "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0ZHRyaS4xMTVAZ21haWwuY29tIiwic2NvcGVzIjpbIlRFTkFOVF9BRE1JTiJdLCJ1c2VySWQiOiIxMWMxZmRjMC0zN2U0LTExZWMtYThkNy03ZGIyOTNmMWFmYjkiLCJmaXJzdE5hbWUiOiJUcsOtIiwibGFzdE5hbWUiOiJUcuG6p24iLCJlbmFibGVkIjp0cnVlLCJwcml2YWN5UG9saWN5QWNjZXB0ZWQiOnRydWUsImlzUHVibGljIjpmYWxzZSwidGVuYW50SWQiOiIxMGZjYjFmMC0zN2U0LTExZWMtYThkNy03ZGIyOTNmMWFmYjkiLCJjdXN0b21lcklkIjoiMTM4MTQwMDAtMWRkMi0xMWIyLTgwODAtODA4MDgwODA4MDgwIiwiaXNzIjoidGhpbmdzYm9hcmQuaW8iLCJpYXQiOjE2NDExMzQ0MzMsImV4cCI6MTY0MjkzNDQzM30.26rHM6t9F0-f26adRwkxooErmuUiGsR1paV0vu8oJgr1MlQkHdD5yzOMfPeOWlPDOuouWVQQgbYGT3HpBeXKcg"}
    r = requests.get(
        "https://demo.thingsboard.io/api/plugins/telemetry/DEVICE/61d0e510-5b89-11ec-8159-03103585248e/values"
        "/timeseries?keys=temperature,humidity,coppm,pressure,soilmoisture,raindrop", headers=headers)
    data = r.json()
    return data


def get_weather_stat(start, end):
    headers = {"Content-Type": "application/json",
               "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0ZHRyaS4xMTVAZ21haWwuY29tIiwic2NvcGVzIjpbIlRFTkFOVF9BRE1JTiJdLCJ1c2VySWQiOiIxMWMxZmRjMC0zN2U0LTExZWMtYThkNy03ZGIyOTNmMWFmYjkiLCJmaXJzdE5hbWUiOiJUcsOtIiwibGFzdE5hbWUiOiJUcuG6p24iLCJlbmFibGVkIjp0cnVlLCJwcml2YWN5UG9saWN5QWNjZXB0ZWQiOnRydWUsImlzUHVibGljIjpmYWxzZSwidGVuYW50SWQiOiIxMGZjYjFmMC0zN2U0LTExZWMtYThkNy03ZGIyOTNmMWFmYjkiLCJjdXN0b21lcklkIjoiMTM4MTQwMDAtMWRkMi0xMWIyLTgwODAtODA4MDgwODA4MDgwIiwiaXNzIjoidGhpbmdzYm9hcmQuaW8iLCJpYXQiOjE2NDExMzQ0MzMsImV4cCI6MTY0MjkzNDQzM30.26rHM6t9F0-f26adRwkxooErmuUiGsR1paV0vu8oJgr1MlQkHdD5yzOMfPeOWlPDOuouWVQQgbYGT3HpBeXKcg"}
    r = requests.get(
        f'https://demo.thingsboard.io/api/plugins/telemetry/DEVICE/61d0e510-5b89-11ec-8159-03103585248e/values/timeseries?keys=temperature,humidity,coppm,pressure,soilmoisture,raindrop&startTs={start}&endTs={end}&limit=50000000',
        headers=headers)
    data = r.json()
    return data
