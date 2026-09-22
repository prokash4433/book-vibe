

import React from "react";
 
import { IBook } from "@/types/books.types";
import BookCards from "@/Components/shared/BookCards";

const getBooks = async () => {
          const res = await fetch("http://localhost:3000/booksData.json");

          if (!res.ok) {
                    throw new Error("Failed to fetch books data");
          }

          const data = await res.json();

          return data;
};

const Books = async () => {
          const booksData = await getBooks();

          return (
                    <section className="container mx-auto my[70px] px-4">
                              {/* Section Header */}
                              <div className="mb-12 text-center">
                                        <p className="mb-2 text-sm font-bold tracking-widest text-success">
                                                  EXPLORE OUR COLLECTION
                                        </p>

                                        <h2 className="text-3xl font-bold md:text-4xl">
                                                  Explore All Books
                                        </h2>

                                        <p className="mx-auto mt-4 max-w-2xl text-base-content/60">
                                                  Explore our collection of amazing books and find your next
                                                  unforgettable story.
                                        </p>
                              </div>

                              {/* Books Grid */}
                              <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                                        {booksData.map((book: IBook, id: number) => {
                                                  return <BookCards key={id} book={book}></BookCards>
                                        })}
                              </div>
                    </section>
          );
};

export default Books;

