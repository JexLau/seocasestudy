import { cookies, headers } from "next/headers";
import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/action'

export async function POST(req: Request) {
  const headerAll = headers();
  const userIp = headerAll.get("x-forwarded-for");
  console.log('userIp: ', userIp);
  const json = await req.json();
  const email = json.email;
  const suggestion = json?.suggestion;

  if (email) {
    const cookieStore = cookies()
    const supabase = createClient(cookieStore)
    const { error } = await supabase.from('seousers').upsert([{ email, suggestion }]);
    if (!error) {
      return NextResponse.json({
        status: 200,
        data: email,
      });
    } else {
      return NextResponse.json({
        status: 500,
        data: email,
        error,
      });
    }
  }

  return NextResponse.json({
    status: 400,
    data: email,
  });
}
