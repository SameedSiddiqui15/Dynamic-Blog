import React from 'react'
import BlogCard from './BlogCard'

export default function Mega() {
  const posts = [
    {
      id: '1',
      title: 'Rise of Artificial Intelligence',
      description: 'Explore how AI is transforming industries and impacting our daily lives, from smart assistants to self-driving cars.',
      date: '2024-12-18',
      imageUrl: '../images/Artificial Intelligence.jpg',
    },
    {
      id: '2',
      title: 'Top Cybersecurity Threats in 2024',
      description: 'A detailed look at the emerging cybersecurity threats of 2024 and how to protect yourself online.',
      date: '2024-12-02',
      imageUrl: '../images/Cybersecurity Threats.jpg',
    },
    {
      id: '3',
      title: 'Quantum Computing in Technology',
      description: 'Understand the basics of quantum computing and its potential to revolutionize computing power.',
      date: '2024-12-03',
      imageUrl: '../images/Quantum Computing.jpg',
    },
    {
      id: '4',
      title: '5G Networks: What You Need to Know',
      description: 'Discover how 5G technology is reshaping connectivity and enabling faster communication worldwide.',
      date: '2024-12-04',
      imageUrl: '../images/5G Networks.jpg',
    },
    {
      id: '5',
      title: 'Importance of Data Privacy',
      description: 'Learn why safeguarding your personal information online is crucial and how to protect your privacy.',
      date: '2024-12-05',
      imageUrl: '../images/Data Privacy.jpg',
    },
    {
      id: '6',
      title: 'Cryptocurrencies & Blockchain',
      description: 'An introduction to cryptocurrencies, blockchain technology, and their impact on the financial world.',
      date: '2024-12-06',
      imageUrl: '../images/Cryptocurrencies.jpg',
    },
    {
      id: '7',
      title: 'Role of Technology in Fighting Climate Change',
      description: 'Explore how innovations in technology are contributing to a greener and more sustainable world.',
      date: '2024-12-07',
      imageUrl: '../images/Climate Change.jpg',
    },
    {
      id: '8',
      title: 'Future of Remote Work and Automation',
      description: 'Learn how remote work and automation are changing the workforce dynamic in the digital age.',
      date: '2024-12-08',
      imageUrl: '../images/Remote Work and Automation.jpg',
    },
    {
      id: '9',
      title: 'Ethical Considerations in AI Development',
      description: 'A discussion on the ethical dilemmas surrounding artificial intelligence and its future.',
      date: '2024-12-09',
      imageUrl: '../images/Ethical Considerations.jpg',
    },
    {
      id: '10',
      title: 'Rise of Augmented and Virtual Reality',
      description: 'Discover how AR and VR are transforming entertainment, education, and more.',
      date: '2024-12-10',
      imageUrl: '../images/Augmented and Virtual Reality.jpg',
    },
    {
      id: '11',
      title: 'The Evolution of Edge Computing',
      description: 'How edge computing is bringing faster and more efficient processing power closer to where data is generated.',
      date: '2024-12-11',
      imageUrl: '../images/Evolution of Edge Computing.jpg',
    },
    {
      id: '12',
      title: 'The Role of IoT in Smart Cities',
      description: 'Dive into how the Internet of Things (IoT) is transforming urban living into a smarter and more connected experience.',
      date: '2024-12-12',
      imageUrl: '../images/Internet of Things.jpg',
    },
  ];
  return (
    <div className='my-8 container'>
      <h1 className='text-5xl font-bold text-center text-red-600 animate-color-change my-8'>Impact of Technology on Modern Society</h1>
      <div className='mx-2 hover:mx-2 grid grid-col-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
        {posts.map((post, index) => (
          <div className="fade-in" key={post.id} >
            <div className="blog-card h-full">
              <BlogCard post={post} isDarkBackground={index % 2 === 0} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
