cat database_get.output | jq -c . | firebase database:set / --confirm
firebase database:get / | jq . | tee database_get.output 
