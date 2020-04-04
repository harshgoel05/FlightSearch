const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const axios = require("axios").default;
const app = express();
app.use(cors("*"));
app.use(bodyParser.json());
var port = 3000;
app.listen(process.env.PORT || port, () => {
  console.log(`server running on port ${port}`);
});
const headers = {
  "x-Username": "test229267",
  "x-DomainKey": "TMX1512291534825461",
  "x-system": "test",
  "x-Password": "test@229",
};
app.post("/api", (req, res) => {
  console.log(req.body);
  //   res.send({ hey: req.body });
  axios
    .post(
      "http://test.services.travelomatix.com/webservices/index.php/flight/service/Search",
      req.body,
      {
        headers: headers,
      }
    )
    .then((result) => {
      console.log("Api is working", result.data);
      res.json(result.data);
    })
    .catch((error) => {
      console.log(error);
      res.send({ success: false });
    });
});
