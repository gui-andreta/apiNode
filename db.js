import 'dotenv/config'
import postgres from "postgres";

const sql = postgres({
    connection
});

export default sql;
