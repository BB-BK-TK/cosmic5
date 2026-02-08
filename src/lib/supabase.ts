import { createClient } from '@supabase/supabase-js';

// .env.local에 저장한 환경 변수를 불러옵니다.
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;


// 프로젝트 어디서든 쓸 수 있는 Supabase 클라이언트를 내보냅니다.
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
