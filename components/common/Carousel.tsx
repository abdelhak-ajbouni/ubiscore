import React, { useCallback, useState, useEffect } from "react";
import useEmblaCarousel from 'embla-carousel-react'
import cn from 'classnames'

export default function Carousel({ items }: Props) {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [scrollSnaps, setScrollSnaps] = useState<any>([]);

  const [emblaRef, embla] = useEmblaCarousel({
    loop: false,
  })
  const scrollTo = useCallback((index) => embla && embla.scrollTo(index), [
    embla
  ]);

  const onSelect = useCallback(() => {
    if (!embla) return;
    setSelectedIndex(embla.selectedScrollSnap());
  }, [embla, setSelectedIndex]);

  useEffect(() => {
    if (!embla) return;
    setScrollSnaps(embla.scrollSnapList());
    onSelect();
    embla.on("select", onSelect);
  }, [embla, setScrollSnaps, onSelect]);

  return (
    <div className="overflow-hidden w-full" ref={emblaRef}>
      <div className="flex">
        {
          items?.map((item, i) => (
            <div key={i} style={{ flex: "0 0 100%" }}>
              <h1 className='text-2xl text-white mb-2'>{item.name}</h1>
              <h2 className='text-gray-400'>{item.title}</h2>
              <p className='text-white my-8'>{item.content}</p>
            </div>
          ))
        }
      </div>

      <div className="flex">
        {scrollSnaps.map((_, index) => (
          <div
            key={index}
            className={cn(
              "m-1 p-1 rounded cursor-pointer",
              "transform transition-all duration-250",
              index === selectedIndex ? "bg-white  w-10" : "bg-gray-500 w-4"
            )}
            onClick={() => scrollTo(index)}
          />
        ))}
      </div>
    </div>
  );
}

type Props = {
  items: {
    name: string,
    title: string,
    content: string
  }[]
}
