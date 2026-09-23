'use client'

import { BooksContext } from '@/context/BooksContext';
import { IBook } from '@/types/books.types';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';
 

const ReadButton = ({ book }: { book: IBook }) => {

          const  { readBooks, setReadBooks} = useContext(BooksContext)

           

          const handleReadBook = () =>{
             console.log('read book btn triggerd', book)   
             
             setReadBooks([...readBooks,book])
             toast.success(`You have read "${book.bookName}"`)
          }
          return (
                    <div>
                              <button className="btn btn-primary px-8 shadow-md hover:shadow-lg" onClick={() => handleReadBook()}>
                                        Read
                              </button>   
                    </div>
          );
};

export default ReadButton;