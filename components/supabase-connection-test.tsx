"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export function SupabaseConnectionTest() {
  const [status, setStatus] = useState<"checking" | "ok" | "error">("checking");
  const [message, setMessage] = useState("");

  useEffect(() => {
    async function check() {
      try {
        const { error } = await supabase.auth.getSession();
        if (error) throw error;
        setStatus("ok");
        setMessage("연결 성공");
      } catch (e) {
        setStatus("error");
        setMessage(e instanceof Error ? e.message : String(e));
      }
    }
    check();
  }, []);

  return (
    <div
      className="rounded-lg border px-3 py-2 text-sm"
      style={{
        borderColor: status === "ok" ? "var(--positive)" : status === "error" ? "var(--negative)" : "var(--border)",
        color: status === "ok" ? "var(--positive)" : status === "error" ? "var(--negative)" : "var(--text-muted)",
      }}
    >
      Supabase: {status === "checking" ? "확인 중…" : message}
    </div>
  );
}
