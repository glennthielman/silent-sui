# Remove old page and create a new one
rm -f page.html
cp template.html page.html

#add data.js
FILE=$(<assets/js/data.min.js)
sed -i '' "s#__DATAJS__#${FILE}#g" page.html

#add script.js
FILE=$(<assets/js/script.min.js)
sed -i '' "s#__SCRIPTJS__#${FILE}#g" page.html

#add themer.js
FILE=$(<assets/js/themer.min.js)
sed -i '' "s/__THEMERJS__/${FILE}/g" page.html

#add search.js
FILE=$(<assets/js/search.min.js)
DATA=`echo ${FILE} | tr '\n' "\\n"`
sed -i '' "s#__SEARCHJS__#${DATA}#g" page.html

