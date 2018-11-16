echo "Synchronising frontend resources"
rsync -auvP ./assets/ ubuntu@lixiii.sample.xyz:~/sample/assets/
