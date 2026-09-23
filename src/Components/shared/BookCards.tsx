import { IBook } from '@/types/books.types';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface IBookCardProps {
          book :IBook;
}


const BookCards = ({book}:IBookCardProps) => {
          return (
                <div className="group overflow-hidden rounded-2xl bg-base-100 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                              >
                               {/* Book Image */}
              <div className="relative h-72 overflow-hidden bg-base-200">
                 <Image
                                  src={book.image}
                                    alt={book.bookName}
                                    width={800}
                                    height={600}
                                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                                  />
                    
                                  {/* Category Badge */}
                                  <div className="absolute left-4 top-4">
                                    <span className="badge badge-success px-3 py-3 font-semibold text-white shadow-lg">
                                      {book.category}
                                    </span>
                                  </div>
                    
                                  {/* Rating */}
                                  <div className="absolute right-4 top-4">
                                    <span className="flex items-center gap-1 rounded-full bg-black/70 px-3 py-2 text-sm font-semibold text-white backdrop-blur-sm">
                                      ⭐ {book.rating}
                                    </span>
                                  </div>
                                </div>
                    
                                {/* Book Content */}
                                <div className="p-5">
                                  {/* Book Name */}
                                  <h2 className="line-clamp-1 text-xl font-bold transition-colors group-hover:text-success">
                                    {book.bookName}
                                  </h2>
                    
                                  {/* Author */}
                                  <p className="mt-1 text-sm font-medium text-base-content/60">
                                    by {book.author}
                                  </p>
                    
                                  {/* Review */}
                                  <p className="mt-4 line-clamp-3 text-sm leading-6 text-base-content/70">
                                    {book.review}
                                  </p>
                    
                                  {/* Tags */}
                                  <div className="mt-4 flex flex-wrap gap-2">
                                    {book.tags.map((tag) => (
                                      <span
                                        key={tag}
                                        className="badge badge-outline text-xs"
                                      >
                                        #{tag}
                                      </span>
                                    ))}
                                  </div>
                    
                                  {/* Book Details */}
                                  <div className="mt-5 grid grid-cols-2 gap-3 rounded-xl bg-base-200 p-3 text-sm">
                                    <div>
                                      <p className="text-xs text-base-content/50">
                                        Pages
                                      </p>
                                      <p className="font-semibold">
                                        {book.totalPages}
                                      </p>
                                    </div>
                    
                                    <div>
                                      <p className="text-xs text-base-content/50">
                                        Published
                                      </p>
                                      <p className="font-semibold">
                                        {book.yearOfPublishing}
                                      </p>
                                    </div>
                                  </div>
                    
                                  {/* Publisher */}
                                  <div className="mt-4">
                                    <p className="text-xs text-base-content/50">
                                      Publisher
                                    </p>
                    
                                    <p className="text-sm font-semibold">
                                      {book.publisher}
                                    </p>
                                  </div>
                    
                                  {/* Button */}
                    <Link href={`/books/${book.bookId}`}>
                  <button className="btn btn-success mt-5 w-full rounded-xl text-white">
                    View Details
                  </button>
                    </Link>
                                </div>
                              </div>
          );
};

export default BookCards;