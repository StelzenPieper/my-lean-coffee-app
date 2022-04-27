export default function handler(req, res) {
  if (req.method === "POST") {
    const newCard = JSON.parse(req.body);

    res.status(200).json({
      message: "card has been created successfully",
      card: newCard,
    });
  } else {
    res.status(400).json({ error: "wrong method - requires POST-method" });
  }
}
