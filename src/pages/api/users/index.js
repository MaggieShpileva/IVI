import connectMongoDB from "../../../../lib/mongodb";
import Users from "../../../../models/register";

const handler = async (req, res) => {
  if (req.method === "GET") {
    try {
      await connectMongoDB();
      const users = await Users.find();
      res.status(200).json(users);
    } catch (error) {
      console.error("Error fetching users:", error);
      res.status(500).json({ error: "Failed to fetch users" });
    }
  } else if (req.method === "POST") {
    try {
      const { email, name, password, role } = req.body;
      await connectMongoDB();
      await Users.create({ email, name, password, role });
      res.status(200).json({
        message: "User created",
        user: {
          email,
          name,
          password,
          role,
        },
      });
    } catch (error) {
      console.error("Error creating user:", error);
      res.status(500).json({ error: "User creation failed" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
};

export default handler;
