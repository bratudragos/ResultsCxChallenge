const router = require("express").Router();

const CatsController = require("../controllers/cats");

router.post("/", CatsController.createCat);

router.get("/cats", CatsController.getCats);

router.get("/sortCats", CatsController.sortCats);

router.get("/:catId", CatsController.getCatById);

router.delete("/:catId", CatsController.deleteCat);

module.exports = router;
