// import React from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
	"https://prvyhnsivyrdjikqzbqd.supabase.co",
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBydnlobnNpdnlyZGppa3F6YnFkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODg2NjQzMjAsImV4cCI6MjAwNDI0MDMyMH0.0MhDaX1_8UAxj4JFima-jR5QHrLAPq4T7aglG73Qw24"
);

// function Supabase() {
// 	return <div>Supabase</div>;
// }

export default supabase;
