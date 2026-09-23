import ReadButton from '@/Components/bookDetails/ReadButton';
import WishListButton from '@/Components/bookDetails/WishListButton';
import { IBook } from '@/types/books.types';
import Image from 'next/image';
import React from 'react';


interface IBookDetailsPageProps {
          params:{
                    id:string;
          };
};


const getBooks = async () => {
      const res = await fetch("http://localhost:3000/booksData.json");

      if (!res.ok) {
            throw new Error("Failed to fetch books data");
      }

      const data = await res.json();

      return data;
};

const BookDetailsPage= async({params}:IBookDetailsPageProps) => {
      const {id} = await params;
      const booksData = await getBooks();
        const book = booksData.find((book: IBook) => book.bookId === Number(id))as IBook;
      //   const book = booksData.find((book: IBook) => String(book.bookid) === String(id))
      console.log(book,"book")
      return (
            <div className="container mx-auto py-8">
                  <div className="card lg:card-side bg-base-100 shadow-sm overflow-hidden border border-base-200">

                        {/* Book Image */}
                        <figure className="lg:w-2/5 bg-base-200">
                              <Image
                                    src={book.image}
                                    alt={book.bookName}
                                    width={500}
                                    height={300}
                                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                              />
                        </figure>

                        {/* Book Details */}
                        <div className="card-body lg:w-3/5 p-6 lg:p-8">

                              {/* Category */}
                              <div>
                                    <span className="badge badge-primary badge-outline">
                                          {book.category}
                                    </span>
                              </div>

                              {/* Title */}
                              <h2 className="card-title text-3xl lg:text-4xl font-bold mt-2">
                                    {book.bookName}
                              </h2>

                              {/* Author */}
                              <p className="text-base-content/70">
                                    By <span className="font-semibold text-base-content">{book.author}</span>
                              </p>

                              {/* Rating */}
                              <div className="flex items-center gap-2 mt-2">
                                    <div className="rating rating-sm">
                                          <input
                                                type="radio"
                                                className="mask mask-star-2 bg-orange-400"
                                                checked
                                                readOnly
                                          />
                                    </div>

                                    <span className="font-semibold">{book.rating}</span>
                                    <span className="text-sm text-base-content/60">
                                          / 5
                                    </span>
                              </div>

                              {/* Review */}
                              <p className="text-base-content/70 leading-7 mt-3">
                                    {book.review}
                              </p>

                              {/* Tags */}
                              <div className="flex flex-wrap gap-2 mt-2">
                                    {book.tags.map((tag) => (
                                          <span
                                                key={tag}
                                                className="badge badge-ghost px-3 py-3"
                                          >
                                                #{tag}
                                          </span>
                                    ))}
                              </div>

                              {/* Book Information */}
                              <div className="grid grid-cols-2 gap-4 mt-5 p-4 rounded-xl bg-base-200/60">
                                    <div>
                                          <p className="text-xs text-base-content/60">Total Pages</p>
                                          <p className="font-semibold">{book.totalPages}</p>
                                    </div>

                                    <div>
                                          <p className="text-xs text-base-content/60">Publisher</p>
                                          <p className="font-semibold">{book.publisher}</p>
                                    </div>

                                    <div>
                                          <p className="text-xs text-base-content/60">Published Year</p>
                                          <p className="font-semibold">{book.yearOfPublishing}</p>
                                    </div>

                                    <div>
                                          <p className="text-xs text-base-content/60">Book ID</p>
                                          <p className="font-semibold">{book.bookId}</p>
                                    </div>
                              </div>

                              {/* Button */}
                              <div className="card-actions justify-end mt-5">
                                    <ReadButton book ={book}></ReadButton>
                                   
                                   <WishListButton book ={book} />
                              </div>

                        </div>
                  </div>
            </div>
      );
};

export default BookDetailsPage;                        