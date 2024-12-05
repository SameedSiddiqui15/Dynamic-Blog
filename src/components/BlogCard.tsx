import React from 'react';
import { Card, CardContent, CardTitle } from "./ui/card";
import Link from 'next/link';

interface BlogCardProps {
  post: { id: string; title: string; description: string; date: string; imageUrl: string };
  isDarkBackground: boolean;
}

export default function BlogCard({ post, isDarkBackground }: BlogCardProps) {
  return (
    <Card
      className={`p-4 ${isDarkBackground ? 'bg-slate-800 text-white' : 'text-slate-800'} 
        rounded-lg h-full shadow-lg hover:shadow-xl transition-shadow duration-300 border-2 border-slate-800 flex flex-col justify-between`} >
      <img src={post.imageUrl} alt={post.title} className='w-full h-48 object-cover rounded-t-lg' />
      <CardTitle className="text-xl font-normal mt-4 text-center">{post.title}</CardTitle>
      <br />
      <CardContent className="text-center">
        <p>{post.description}</p>
      </CardContent>
      <div className="flex flex-col items-center mt-4">
        <p>Published on : {new Date(post.date).toLocaleDateString()}</p>
        <Link href={`/posts/${post.id}`} className={`w-full text-center py-2 px-6 transition-colors duration-300 text-white bg-blue-600 rounded hover:bg-blue-500 ${isDarkBackground ? "bg-black hover:bg-red-500" : "bg-black hover:bg-red-500 "}`}>Read More</Link>
      </div>
    </Card>
  );
}
