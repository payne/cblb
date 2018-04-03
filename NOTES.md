Handy commands:

1. `cat database_get.output | jq -c . | firebase database:set / --confirm`
2. `firebase database:get / | jq . | tee database_get.output`


Plan 4/2/2018 

1. People can put in their name and CodingBat DONE URL
2. Batch processor will get the database then run it through a simple jSoup java program to score
3. Java program will add scores into the json
4. Then we'll write that json back to the realtime database



