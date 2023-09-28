import dotenv from 'dotenv'
dotenv.config()
import fs from 'fs'
import csv from 'csv-parser'
import { createClient } from "@libsql/client";
const tursoAuthToken = process.env.TURSO_TOKEN
const tursoUrl = process.env.TURSO_URL

const client = createClient({
    url: `${tursoUrl}`,
    authToken: `${tursoAuthToken}`
});

const csvFilePath = '../../GoleiroStats.csv';
const rows = []

fs.createReadStream(csvFilePath)
    .pipe(csv())
    .on('data', (row) => {
        rows.push(row)
    })
    .on('end', async () => {
        for (const row of rows) {
            try {
                //const go = await client.execute('insert into jogadores values("0001", "macacoprego")')
                const rs = await client.execute({
                    sql: "insert into goleiros values (:id, :nome, :time, :nacionalidade, :preco, :habilidade, :overall, :posicao, :alcance, :conducao, :reposicao, :reflexo, :explosao, :posicionamento, :colecao, :code)",
                    args: {
                        id: row.id,
                        nome: row.nome,
                        time: row.time,
                        nacionalidade: row.nacionalidade,
                        preco: row.preco,
                        habilidade: row.habilidade,
                        overall: row.overall,
                        posicao: row.posicao,
                        alcance: row.alcance,
                        conducao: row.conducao,
                        reposicao: row.reposicao,
                        reflexo: row.reflexo,
                        explosao: row.explosao,
                        posicionamento: row.posicionamento,
                        colecao: row.colecao,
                        code: row.code
                    }
                });
                console.log(`Inserted: ${row.id} - ${row.nome}`);
                // rs.columns == [ 'uid', 'email' ]
                // rs.rows[0] == [ 'uid1', 'foo@bar.com' ]
                // rs.rows[1] == [ 'uid2', 'baz@bar.com' ]
            } catch (e) {
                console.error(e);
            }
        }
        console.log('CSV file reading completed.');
    });

// Read the CSV file and print its contents
// fs.createReadStream(csvFilePath)
//     .pipe(csv())
//     .on('data', async (row) => {
//         // Process each row of data here
//         try {
//             //const go = await client.execute('insert into jogadores values("0001", "macacoprego")')
//             const rs = await client.execute({
//                 sql: "insert into jogadores values (:id, :nome, :time, :nacionalidade, :preco, :habilidade, :overall, :posicao, :passe, :drible, :desarme, :finalizacao, :velocidade, :resistencia, :colecao, :code)",
//                 args: {
//                     id: row.id,
//                     nome: row.nome,
//                     time: row.time,
//                     nacionalidade: row.nacionalidade,
//                     preco: row.preco,
//                     habilidade: row.habilidade,
//                     overall: row.overall,
//                     posicao: row.posicao,
//                     passe: row.passe,
//                     drible: row.drible,
//                     desarme: row.desarme,
//                     finalizacao: row.finalizacao,
//                     velocidade: row.velocidade,
//                     resistencia: row.resistencia,
//                     colecao: row.colecao,
//                     code: row.code
//                 }
//             });
//             console.log(`Inserted: ${row.id} - ${row.nome}`);
//             // rs.columns == [ 'uid', 'email' ]
//             // rs.rows[0] == [ 'uid1', 'foo@bar.com' ]
//             // rs.rows[1] == [ 'uid2', 'baz@bar.com' ]
//         } catch (e) {
//             console.error(e);
//         }
//     })
//     .on('end', () => {
//         console.log('CSV file reading completed.');
//     });
