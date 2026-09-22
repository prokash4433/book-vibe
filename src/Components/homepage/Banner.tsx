 
import Image from "next/image";
import React from "react";
import bannerImg from "@/assets/hero_img.jpg";

const Banner = () => {
  return (
    <section className="py-10 md:py-16 lg:py-20 px-4">
      <div className="container mx-auto">

        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-green-50 via-base-100 to-green-100 shadow-xl">

          {/* Decorative Background */}
          <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-success/10 blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-green-300/10 blur-3xl"></div>

          <div className="relative grid items-center gap-10 p-6 sm:p-10 md:grid-cols-2 md:p-14 lg:p-16">

            {/* Left Content */}
            <div className="space-y-6">

              {/* Small Badge */}
              <div className="inline-flex items-center gap-2 rounded-full bg-success/10 px-4 py-2 text-sm font-semibold text-success">
                📚 Explore Your Next Favorite Book
              </div>

              {/* Heading */}
              <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                Books to freshen up
                <br />
                <span className="text-success">
                  your bookshelf
                </span>
              </h1>

              {/* Description */}
              <p className="max-w-lg text-base leading-7 text-base-content/60 md:text-lg">
                Discover amazing books, explore new stories, and find
                something special to add to your personal collection.
              </p>

              {/* Button */}
              <div className="flex flex-wrap gap-3 pt-2">
                <button className="btn btn-success rounded-full px-7 text-white shadow-md hover:shadow-lg">
                  View The List
                </button>

                <button className="btn btn-outline rounded-full px-7">
                  Explore Books
                </button>
              </div>

              {/* Small Stats */}
              <div className="flex gap-8 pt-4">
                <div>
                  <h3 className="text-2xl font-bold">1K+</h3>
                  <p className="text-sm text-base-content/50">
                    Books
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold">500+</h3>
                  <p className="text-sm text-base-content/50">
                    Readers
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold">4.8★</h3>
                  <p className="text-sm text-base-content/50">
                    Rating
                  </p>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative flex justify-center md:justify-end">

              {/* Image Glow */}
              <div className="absolute h-72 w-72 rounded-full bg-success/20 blur-3xl"></div>

              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <Image
                  src={bannerImg}
                  alt="Books collection"
                  width={600}
                  height={500}
                  priority
                  className="h-[280px] w-full object-cover sm:h-[350px] md:h-[400px] lg:h-[450px]"
                />
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Banner;
 
