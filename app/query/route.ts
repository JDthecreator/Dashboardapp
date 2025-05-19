import postgres from 'postgres';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: { rejectUnauthorized: false } });

async function listInvoices() {
	try {
		const data = await sql`
      SELECT invoices.amount, clients.name
      FROM invoices
      JOIN clients ON invoices.clients_id = clients.id
      WHERE invoices.amount = 666;
    `;
		return data;
	} catch (error) {
		console.error('Database query failed:', error);
		throw error;
	}
}
export async function GET() {
	try {
		const invoices = await listInvoices();
		return new Response(JSON.stringify(invoices), {
			headers: { 'Content-Type': 'application/json' },
		});
	} catch (error) {
		// TypeScript fix: Ensure `error` is an instance of `Error`
		const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';

		return new Response(JSON.stringify({ error: errorMessage }), {
			status: 500,
			headers: { 'Content-Type': 'application/json' },
		});
	}
}

