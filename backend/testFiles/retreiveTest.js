import dotenv from 'dotenv'
dotenv.config()
import { createClient } from "@libsql/client";
const tursoAuthToken = process.env.TURSO_TOKEN
const tursoUrl = process.env.TURSO_URL

const client = createClient({
    url: `${tursoUrl}`,
    authToken: `${tursoAuthToken}`
});

try {
    const rs = await client.execute("select * from goleiros where id = '00952-1'");
    console.log(rs.rows[0].nome)
    // rs.columns == [ 'uid', 'email' ]
    // rs.rows[0] == [ 'uid1', 'foo@bar.com' ]
    // rs.rows[1] == [ 'uid2', 'baz@bar.com' ]
} catch (e) {
    console.error(e);
}
