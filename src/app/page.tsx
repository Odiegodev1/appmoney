"use client";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";


export default function Home() {
  async function handleregister() {
  await signIn("github",{redirectTo:"/home"});
}
  return (
   <>
   <Button onClick={handleregister}>
      login with github
   </Button>
   </>
  );
}
