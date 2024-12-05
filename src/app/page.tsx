import React from "react";
import AuthorCard from "@/components/AuthorCard";
import CommentSection from "@/components/CommentSection";
import Mega from "@/components/Mega";
import Feature from "@/components/Feature";

export default function Home() {
  return (
    <>
    <Feature />
    <Mega />
    <CommentSection postId={""} />
    <AuthorCard />
    </>
  );
}
