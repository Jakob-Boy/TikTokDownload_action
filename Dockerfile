FROM python
WORKDIR /app
COPY . .
RUN pip install pyinstaller==3.6
RUN pip3 install -r requirements.txt
CMD ["python3", "TikTokMulti.py"]
