//import packages
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import pg from "pg";

//package configs
//pg config

//dotenv config
dotenv.config();

// connection string --> we store it in the .env / the value is in the supabase connect section
const dbCString = process.env.DATABASE_URL;
//set up a pool
export const database = new pg.Pool({
  connectionString: dbCString,
});

//exoress config
const app = express();
//cors config
app.use(cors());

app.use(express.json());

//set up the server port
const port = 8081;
app.listen(port, () => {
  console.log(`Your server is running on port: ${port}`);
});
// but need .env with connection string and passoword


//endpoint for the root route
//endpoints
//GET endpoint --> we need to SELECT data from database
//POST endpoint --> we receive the body from client and we INSERT the body into the database


//       ! STRETCH GOALS : UPDATE and DELETE endpoints


//UPDATE ENDPOINT
app.put("/updateFormData/:id", async (req, res)=> {
  const id = req.params.id;
  const result = await db.query(
    `UPDATE table_name SET column_name = $1, second_column = $2 WHERE id = $3 RETURNING *`,
     [data_one, data_two, id]
    );
    res.json(result.rows); 
});


//DELETE ENDPOINT

//app.delete DELETES TABLE DATA
//app.drop DELETES A TABLE
app.delete("/deleteFormData/:id", async (req, res) => {
  const id = req.params.id;
  const result = await db.query(
    `DELETE FROM table_name WHERE id = $1 RETURNING * `,
    [id]
  );
  res.json(result.rows)
})







