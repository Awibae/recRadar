"use client";
import React, { useState, useEffect, useRef, useMemo } from 'react';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Image from 'next/image';
import StarRatingComponent from '../starrating/StarRatingComponent';
import { useAtom } from 'jotai';
import { mediaAtom } from "@/app/atomStore";
import { useRouter } from 'next/navigation';

const CarouselComponent = ({ mediaNames }) => {
  const router = useRouter();
  const [mediaState, setMediaState] = useAtom(mediaAtom);
  const carouselRef = useRef(null);
  const popupRef = useRef(null);

  // Memoize filtered media to avoid recalculating on every render
  const media = useMemo(() => 
    mediaState.filter((mediaItem) => mediaNames.includes(mediaItem.title)),
    [mediaState, mediaNames]
  );

  // Initialize state with memoized media
  const [selectedIndex, setSelectedIndex] = useState(() => 
    Math.floor(Math.min(media.length - 1, media.length / 2))
  );
  const [hoveredIndex, setHoveredIndex] = useState(undefined);
  const [showPopup, setShowPopup] = useState(false);
  const [currentMediaItem, setCurrentMediaItem] = useState(null);

  // Click outside handler
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        showPopup && 
        carouselRef.current && 
        popupRef.current && 
        !carouselRef.current.contains(event.target) && 
        !popupRef.current.contains(event.target)
      ) {
        setShowPopup(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showPopup]);

  // Scroll to center effect
  useEffect(() => {
    const carousel = carouselRef.current;
    if (carousel && carousel.children[selectedIndex]) {
      const centerItem = carousel.children[selectedIndex];
      carousel.scrollLeft = centerItem.offsetLeft - carousel.offsetWidth / 2 + centerItem.offsetWidth / 2;
    }
  }, [selectedIndex]);

  const addToWatchlist = (currentMediaItem) => {
    setMediaState((prevMedia) => {
      const updatedMedia = prevMedia.map((mediaItem) => {
        if (mediaItem.title === currentMediaItem.title) {
          return { ...mediaItem, onWatchlist: !mediaItem.onWatchlist };
        }
        return mediaItem;
      });

      const updatedCurrentMediaItem = updatedMedia.find(
        (mediaItem) => mediaItem.title === currentMediaItem.title
      );

      setCurrentMediaItem(updatedCurrentMediaItem);
      return updatedMedia;
    });
  };

  const navigateToDetails = (currentMediaItem) => {
    const query = new URLSearchParams({
      title: currentMediaItem.title,
    }).toString();

    router.push(`/mediadetails?${query}`);
  };

  const handleArrowClick = (direction) => {
    const newIndex = direction === 'left'
      ? (selectedIndex - 1 + media.length) % media.length
      : (selectedIndex + 1) % media.length;
    setSelectedIndex(newIndex);
  };

  const calculateOpacity = (index) => {
    let distance = Math.abs(index - selectedIndex);
    if (distance > media.length / 2) {
      distance = media.length - distance;
    }
    return Math.max(0.2, 1 - distance * 0.2);
  };

  // Memoize visible media and indexes
  const { visibleMedia, visibleIndexes } = useMemo(() => {
    const visibleMedia = [];
    const visibleIndexes = [];
    for (let i = selectedIndex - 3; i <= selectedIndex + 3; i++) {
      const wrappedIndex = (i + media.length) % media.length;
      visibleMedia.push(media[wrappedIndex]);
      visibleIndexes.push(wrappedIndex);
    }
    return { visibleMedia, visibleIndexes };
  }, [media, selectedIndex]);

  const handleItemClick = (visibleIndex) => {
    const actualIndex = visibleIndexes[visibleIndex];

    if (actualIndex === selectedIndex) {
      setShowPopup(!showPopup);
    }

    setSelectedIndex(actualIndex);
    setCurrentMediaItem(media[actualIndex]);

    const uniqueHoverKey = `${actualIndex}_${visibleIndex}`;
    setHoveredIndex(uniqueHoverKey);
  };

  const handleItemMouseEnter = (visibleIndex) => {
    const uniqueHoverKey = `${visibleIndexes[visibleIndex]}_${visibleIndex}`;
    setHoveredIndex(uniqueHoverKey);
  };

  const handleItemMouseLeave = () => {
    setHoveredIndex(undefined);
  };

  const calculateSelectedScale = (carouselIndex, visibleIndex) => {
    const centerIndex = Math.floor(visibleIndexes.length / 2);
    return (carouselIndex === selectedIndex && visibleIndex === centerIndex) ? 1.175 : 1;
  };

  const calculateHoveredScale = (carouselIndex, visibleIndex) => {
    const uniqueHoverKey = `${carouselIndex}_${visibleIndex}`;
    return hoveredIndex === uniqueHoverKey ? 1.125 : 1;
  };

  return (
    <div className="position-relative d-flex justify-content-center align-items-center" style={{ width: '100%', height: 475, overflow: 'visible' }}>
      <div className="position-absolute start-0 top-50 translate-middle-y z-3" style={{ left: '20px' }}>
        <button className="btn btn-light rounded-circle shadow d-flex justify-content-center align-items-center" onClick={() => handleArrowClick('left')}
          style={{
            width: '40px',
            height: '40px',
            padding: '0',
            transform: "translateX(25px)",
          }}>
          <FaArrowLeft style={{ fontSize: '20px' }} />
        </button>
      </div>

      <div ref={carouselRef} className="d-flex justify-content-center align-items-center" style={{ gap: '4.5%', position: 'relative', width: '100%', scrollBehavior: 'smooth' }}>
      {visibleMedia.map((mediaItem, visibleIndex) => {
        const carouselIndex = visibleIndexes[visibleIndex];
        const opacity = calculateOpacity(carouselIndex);
        const selectedScale = calculateSelectedScale(carouselIndex, visibleIndex);
        const hoveredScale = calculateHoveredScale(carouselIndex, visibleIndex);

        return (
          <div key={`${carouselIndex}_${visibleIndex}`} 
            onClick={() => handleItemClick(visibleIndex)}
            onMouseEnter={() => handleItemMouseEnter(visibleIndex)}
            onMouseLeave={() => handleItemMouseLeave()}
            style={{
              transition: 'all 0.3s ease',
              opacity: opacity,
              transform: `scale(${selectedScale}) scale(${hoveredScale})`,
              cursor: 'pointer',
            }}>
            <Image
              src={mediaItem.cover_image}
              alt={`Item ${visibleIndex + 1}`}
                width={220}
                height={330}
                style={{
                  objectFit: 'cover',
                  transition: 'all 0.3s ease',
                  borderRadius: 3,
                }} />
            </div>
          );
        })}
      </div>

      <div className="position-absolute end-0 top-50 translate-middle-y z-3" style={{ right: '20px' }}>
        <button className="btn btn-light rounded-circle shadow d-flex justify-content-center align-items-center" onClick={() => handleArrowClick('right')}
          style={{
            width: '40px',
            height: '40px',
            padding: '0',
            transform: "translateX(-25px)",
          }}>
          <FaArrowRight style={{ fontSize: '20px' }} />
        </button>
      </div>

      {showPopup && currentMediaItem && (
        <div ref={popupRef} className="position-absolute"
          style={{
            top: 'calc(92%)',
            left: '50%',
            transform: 'translateX(-50%)',
            background: '#213A57',
            borderRadius: '3px',
            border: '1px solid #45DFB1',
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
            zIndex: 10,
            width: '55%',
          }}>
          <div className="container-fluid py-3">
            <div className="row mx-1">
              <div className="col-4">
                <h3 style={{ fontWeight: 500, fontSize: 20, lineHeight: 0.5, paddingTop: 9 }}><span style={{ fontWeight: 600 }}>{currentMediaItem.match_percentage}%</span> Match For You</h3>
                <span style={{ fontWeight: 300, fontSize: 16 }}>
                  {currentMediaItem.genres?.join(', ')} <br />
                  {currentMediaItem.year} • {currentMediaItem.runtime} • <span style={{ border: "solid 1px #ffffff", borderRadius: 2, paddingLeft: 4, paddingRight: 4.25, paddingBottom: 2.2 }}>{currentMediaItem.parental_guide_rating}</span> <br />
                </span>
                <StarRatingComponent rating={currentMediaItem.rating} /> <br />
                <div style={{ fontWeight: 300, fontSize: 16, whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}>
                  <span style={{ fontWeight: 500 }}>Director{currentMediaItem.directors?.length > 1 && "s"}</span> {currentMediaItem.directors?.join(' • ')} <br />
                  <span style={{ fontWeight: 500 }}>Writer{currentMediaItem.writers?.length > 1 && "s"}</span> {currentMediaItem.writers?.join(' • ')} <br />
                  <span style={{ fontWeight: 500 }}>Starring</span> {currentMediaItem.stars?.join(' • ')} <br />
                </div>
              </div>
              <div className="col-5 d-flex flex-column" style={{ height: '100%' }}>
                <h3 style={{ fontWeight: 600, fontSize: 24 }}>{currentMediaItem.title}</h3>
                <div>
                  <p style={{
                    fontWeight: 400,
                    fontSize: 16,
                    textOverflow: 'ellipsis',
                    overflow: 'hidden',
                    display: '-webkit-box',
                    WebkitBoxOrient: 'vertical',
                    WebkitLineClamp: 7,
                    lineHeight: '1.35',
                    marginBottom: 0,
                    paddingBottom: 0
                  }}>
                    {currentMediaItem.description}
                  </p>
                </div>
              </div>
              <div className="col-3 d-flex flex-column justify-content-center align-items-center">
                <div className="row w-100 px-3">
                  <button className="btn btn-gradient py-3 my-3 d-flex justify-content-center align-items-center" style={{ borderRadius: 15 }} onClick={() => addToWatchlist(currentMediaItem)}>
                    <span style={{ fontWeight: 600, fontSize: 16 }}>{currentMediaItem.onWatchlist ? "Remove from your list" : "Add to your list"}</span>
                  </button>
                </div>
                <div className="row w-100 px-3">
                  <button className="btn btn-gradient py-3 my-3 d-flex justify-content-center align-items-center" style={{ borderRadius: 15 }} onClick={() => navigateToDetails(currentMediaItem)}>
                    <span style={{ fontWeight: 600, fontSize: 16 }}>View Full Details</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CarouselComponent;