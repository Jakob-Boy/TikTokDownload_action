FROM haoyu233/python-n1:latest
WORKDIR /app
COPY . .
RUN pip3 install -r requirements.txt
CMD ["python3", "TikTokMulti.py"]
