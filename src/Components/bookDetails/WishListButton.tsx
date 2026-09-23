'use client'

import { BooksContext } from '@/context/BooksContext';
import { IBook } from '@/types/books.types';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';
 

const WishListButton = ({ book }: { book: IBook }) => {

          const { wishlist, setWishlist } = useContext(BooksContext)



          const handleAddToWishlist = () => {
                    console.log('read book btn triggerd', book)

                    setWishlist([...wishlist, book])
                    toast.success(`You have read "${book.bookName}"`)
          }
          return (
                    <div>
                              <button className="btn btn-primary px-8 shadow-md hover:shadow-lg" onClick={() => handleAddToWishlist()}>
                                        Add to Wishlist
                              </button>
                    </div>
          );
};

export default WishListButton;