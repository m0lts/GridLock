import { sql } from '@vercel/postgres';
 
export default async function handler(request, response) {
  try {
    const queryParams = request.query;

    const username = "TOM-Test-2";
    const p1 = queryParams.P1;
    const p2 = queryParams.P2;
    const p3 = queryParams.P3;
    const p4 = queryParams.P4;
    const p5 = queryParams.P5;
    const p6 = queryParams.P6;
    const p7 = queryParams.P7;
    const p8 = queryParams.P8;
    const p9 = queryParams.P9;
    const p10 = queryParams.P10;

    if (!username || !p1 || !p2 || !p3 || !p4 || !p5 || !p6 ||!p7 || !p8 || !p9 || !p10 ) throw new Error('All inputs required');

    await sql`INSERT INTO gridlock_predictions (Username, P1, P2, P3, P4, P5, P6, P7, P8, P9, P10) VALUES (${username}, ${p1}, ${p2}, ${p3}, ${p4}, ${p5}, ${p6}, ${p7}, ${p8}, ${p9}, ${p10});`;
  
    return response.status(200).json({ message: "Prediction submitted successfully." });
} catch (error) {
    return response.status(500).json({ error });
  }

}