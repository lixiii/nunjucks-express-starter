# This script is run on the target server over SSH by the NPM script. 
echo 
echo '-------------'
echo "Deploying sample project to server"
cd sample
git pull
# npm i
pm2 stop sample-app
pm2 start server.js --name="sample-app"

# Update reverse proxy
echo 
echo '-------------'
echo 'Updating reverse proxy'
sudo cp ./sample.com.conf /etc/nginx/conf.d/sample.com.conf
sudo systemctl restart nginx