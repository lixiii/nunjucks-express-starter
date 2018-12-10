echo "Synchronising frontend resources"
rsync -auvP ./assets/ ubuntu@www.sample.com:~/sample/assets/
