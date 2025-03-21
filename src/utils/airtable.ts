import Airtable from "Airtable";

Airtable.configure({ apiKey: process.env.NEXT_PUBLIC_AIRTABLE_ACCESS_TOKEN });
const base = Airtable.base(process.env.NEXT_PUBLIC_AIRTABLE_BASE_ID || "");

export default base;
