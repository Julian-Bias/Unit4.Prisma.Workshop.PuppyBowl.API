const router = require("express").Router();
const prisma = require("../prisma");

//GET all players
router.get("/players", async (req, res) => {
  try {
    const players = await prisma.player.findMany();
    res.json(players);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch players." });
  }
});

// POST a new player
router.post("/players", async (req, res) => {
  const { name, breed, status, imageUrl } = req.body;

  try {
    const player = await prisma.player.create({
      data: {
        name,
        breed,
        status,
        imageUrl,
      },
    });
    res.status(201).json(player);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to create player." });
  }
});

// GET a single player by id
router.get("/players/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const player = await prisma.player.findUnique({
      where: { id: parseInt(id) },
    });

    if (player) {
      res.json(player);
    } else {
      res.status(404).json({ error: "Player not found." });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch player." });
  }
});

// PUT(update) player status
router.put("/players/:id", async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  try {
    const player = await prisma.player.update({
      where: { id: parseInt(id) },
      data: { status },
    });

    res.json(player);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to update player status." });
  }
});

// DELETE a player
router.delete("/players/:id", async (req, res) => {
  const { id } = req.params;

  try {
    await prisma.player.delete({
      where: { id: parseInt(id) },
    });

    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to delete player." });
  }
});

module.exports = router;
