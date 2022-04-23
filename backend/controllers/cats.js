const axios = require("axios");

exports.createCat = (req, res, next) => {
  const url = req.protocol + "://" + req.get("host");
  axios.post(url, {
    name: req.body.name,
    id: req.body.id,
    breed: req.body.breed,
    weight: req.body.weight
  })
    .then(() => {
      res.status(201).json({
        message: "cat added"
      });
    })
    .catch((error) => {
      res.status(500).json({
        message: "Creating cat failed",
      });
    });
};

exports.getCats = (req, res) => {
  const url = req.protocol + "://" + req.get("host");
  axios
    .get(url)
    .then((response) => response.json())
    .then((data) => {
      if (!req.params) {
        if (!req.params.name) {
          data.forEach((cat) => {
            if (cat.name.toLowerCase() === req.params.name.toLowerCase()) {
              data = cat;
            }
          });
        }
      } else {
        res.status(200);
        res.send(data);
      }
    })
    .catch((err) => res.status(400).json("Error " + err));
};

exports.getCatById = (req, res, next) => {
  const url = req.protocol + "://" + req.get("host");
  axios
    .get(url)
    .then((response) => response.json())
    .then((data) => {
      data.forEach((cat) => {
        if (cat.id === req.body.catId) {
          data = cat;
        } else {
          res.status(404).body({ message: "cat not found" });
          res.send();
        }
      });
      res.status(200);
      res.send(data);
    })
    .catch((err) => res.status(400).json("Error " + err));
};

exports.deleteCat = (req, res, next) => {
  const cats = this.getCats();
  const result = cats.filter(cat => {
      if (cat.id !== req.body.catId){
          return cat;
      }
  });
    if(result.count() === cats.count()){
        res.status(404).json({ message: "cat not found" });
    }
    else{
        res.stats(200).json({message: "cat deleted"});
    }
    res.send();
};

exports.sortCats = (req, res) => {
  const url = req.protocol + "://" + req.get("host");
  const cats = this.getCats();

  const compareByName = (a, b) =>{
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
  }

  [...cats].sort(compareByName);

  res.status(200);
  res.send(cats)
};