'use client'
import BookCards from '@/Components/shared/BookCards';
import { BooksContext } from '@/context/BooksContext';
import { IBook } from '@/types/books.types';
import Image from 'next/image';
import Link from 'next/link';
import React, { useContext } from 'react';

const ListedBooks = () => {
          const {readBooks,wishlist} = useContext(BooksContext);
          console.log(readBooks,wishlist, "readBooks", "wishlist")
          return (
                    <div className="container mx-auto py-[20px]">
                         <h2 className="my-4 bg-amber-100 rounded-3xl py-16 font-bold text-center text-4xl">Listed Books</h2>
                    {/* name of each tab group should be unique */}
                    <div className="tabs tabs-border">
                         <input type="radio" name="my_tabs_2" className="tab" aria-label={`Read Books (${readBooks.length})`} />
                         <div className="tab-content border-base-300 bg-base-100 p-10">

                         {readBooks.length > 0 ? ( readBooks.map((book:IBook) => {
                              return <div key={book.bookId} className="mb-5 flex w-full flex-col overflow-hidden rounded-2xl border border-base-300 bg-base-100 shadow-sm transition-all duration-300 hover:shadow-lg sm:flex-row"> 
                              {/* Image */}
                               <div className="relative h-64 w-full shrink-0 sm:h-52 sm:w-40">
                                    <Image
                                     src={book.image} 
                                     alt={book.bookName} 
                                     fill className="object-cover" /> 
                                     </div>
                                      {/* Content */} 
                                      <div className="flex flex-1 flex-col justify-between p-5"> <div> 
                                        <span className="badge badge-primary mb-3"> {book.category} </span>
                                         <h2 className="text-2xl font-bold"> {book.bookName} </h2> 
                                         <p className="mt-2 text-base-content/70"> By {book.author} </p>
                                          </div>
                                          {/* Bottom */}
                                           <div className="mt-5 flex items-center justify-between gap-3">
                                              <div className="badge badge-warning"> ⭐ 4.5 </div>
                                               <Link href={`/books/${book.bookId}`} className="btn btn-primary btn-sm" > View Details </Link>
                                                </div> </div> </div>
                         })
                    ) : ( 
                         <p className="text-center text-lg font-semibold">No read books found</p>
                    )}

                         </div>

                         <input type="radio" name="my_tabs_2" className="tab" aria-label={`Wishlist Book (${wishlist.length})`} defaultChecked />
                         <div className="tab-content border-base-300 bg-base-100 p-10">
                              {wishlist.length > 0 ? ( wishlist.map((book:IBook) =>{
                                   return<BookCards key={book.bookId} book={book}/>
                              })
                         ) : (
                              <p className="text-center text-lg font-semibold">No read books found</p>
                         )}
                         </div>

                         
                    </div>   
                    </div>
          );
};

export default ListedBooks;