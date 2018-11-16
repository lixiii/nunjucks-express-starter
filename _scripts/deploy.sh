# setup alias
echo 
echo '-------------'
echo "Deploying sample project to server"
cd sample
git pull
# npm i
sudo forever stop sample
sudo forever start --append --uid "sample" server.js

# Update reverse proxy
echo 
echo '-------------'
echo Updating reverse proxy
sudo cp ./sample.xyz.conf /etc/nginx/conf.d/sample.xyz.conf
sudo systemctl restart nginx