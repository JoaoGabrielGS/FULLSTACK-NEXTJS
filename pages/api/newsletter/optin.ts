import { createClient } from '@supabase/supabase-js';
import type { NextApiRequest, NextApiResponse } from 'next';

// SUPABASE SETUP 
const SUPABASE_URL = "https://kmcabuyzpvkvrksctugp.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImttY2FidXl6cHZrdnJrc2N0dWdwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk0NzI3NTYsImV4cCI6MjA1NTA0ODc1Nn0.bM1KzUUqsmQP20kWJReLSi1F-SDkeq7DIzi0k5fCOH4";
const dbClient = createClient(SUPABASE_URL, SUPABASE_KEY);
// SUPABASE SETUP 

type ResponseData = {
  message: string
}

const httpStatus = {
    Success: 200,
    BadRequest: 400,
    NotFound: 404,
    InternalServerError: 500,
}

const controllerByMethod = {
    async POST(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
        console.log(req.body);
        res.status(httpStatus.Success).json({ message: "Post Request!" })
    },
    async GET(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
        const {data, error} = await dbClient.from("newsletter_users").select("*");
        console.log(data);
        console.log(error);
        
        res.status(httpStatus.Success).json({ message: "Get Request!", data })
    },
}
 
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {

    const controller = controllerByMethod[req.method];

    if (!controller) {
        res.status(httpStatus.NotFound).json({ message: 'Nada encontrado aqui :(' })
        return;
    }

    controller(req, res);
}