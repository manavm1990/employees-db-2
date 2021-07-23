import client from "mysql2/promise";

(async () => {
  const db = await client.createConnection({
    host: "localhost",
    user: "root",
    password: "Password123!",
    database: "employees",
  });

  const [results] = await db.execute(
    "SELECT (first_name) FROM employees LIMIT 24 "
  );

  console.log(results);

  db.end();
})();
