var axios = require('axios');
var data = JSON.stringify({
    "collection": "nhietdodoam",
    "database": "ptudiot",
    "dataSource": "Cluster0"
});
            
var config = {
    method: 'post',
    url: 'https://ap-southeast-1.aws.data.mongodb-api.com/app/data-oyybq/endpoint/data/v1/action/find',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Request-Headers': '*',
      'api-key': 'CfmUYatHhEfinoDfKxckJ5ClcEZIdx5Ijd5xX7hN2yu6WA0C8GCEz6xCKiezdVp8',
    },
    data: data
};
    
class mongoapi {
    getDHT22(req, res) {
        console.log("Handling DHT22 request");  // Thêm dòng này
        axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response.data));
            res.json(response.data);
        })
        .catch(function (error) {
            console.log(error);
            res.status(500).json({ error: 'Internal Server Error' });
        });
    }
}

module.exports = new mongoapi();


