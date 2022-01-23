from django.shortcuts import render
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
import datetime
import pandas as pd
import json
from . import services


# Create your views here.
class WeatherNowView(APIView):

    def get(self, request):
        if request.method == "GET":
            data = services.get_weather_data()

            # today = datetime.date.today() week_ago = int(datetime.datetime.strptime(str(today - datetime.timedelta(
            # days=7)), "%Y-%m-%d").timestamp() * 1000) today = int(datetime.datetime.strptime(str(today),
            # "%Y-%m-%d").timestamp() * 1000) old_data = services.get_weather_stat(week_ago, today)
            #
            # json_file = open("ml/data.json", "w")
            # json_file.write(json.dumps(old_data))
            # json_file.close()
            #
            # df = pd.read_json('ml/data.json')
            # df.to_csv('ml/data.csv')
            #
            # # data = preprocessing.preprocess_data('ml/data.csv')
            # print(data)

            return Response(data, status=status.HTTP_200_OK)
        else:
            return Response({"error": "Method not allowed"}, status=status.HTTP_400_BAD_REQUEST)


class WeatherStatView(APIView):

    def get(self, request):
        if request.method == "GET":
            start = request.GET.get('start')
            end = request.GET.get('end')
            if start is None and end is None:
                return Response({"error": "Not enough parameter"}, status=status.HTTP_400_BAD_REQUEST)
            else:
                data = services.get_weather_stat(start, end)
                return Response(data, status=status.HTTP_200_OK)
        else:
            return Response({"error": "Method not allowed"}, status=status.HTTP_400_BAD_REQUEST)
