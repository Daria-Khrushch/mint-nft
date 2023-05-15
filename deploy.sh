echo "Switching to branch master"
git checkout master

echo "Building app..."
npm run build

echo "Deploying files toyes server..."
scp -r dist/* root@157.90.157.69:/var/www/157.90.157.69/

echo "Done!"