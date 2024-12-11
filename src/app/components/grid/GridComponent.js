"use client";
import React, { useState, useEffect, useRef, useMemo } from 'react';
import Image from 'next/image';
import StarRatingComponent from '../starrating/StarRatingComponent';
import { useAtom } from 'jotai';
import { mediaAtom } from "@/app/atomStore";
import { useRouter } from 'next/navigation';

const MediaGridComponent = ({ media }) => {
  const router = useRouter();
  const [mediaState, setMediaState] = useAtom(mediaAtom);
  const popupRef = useRef(null);
  const itemRefs = useRef({});

  const [selectedItem, setSelectedItem] = useState(null);
  const [hoveredItem, setHoveredItem] = useState(null);

  // Click outside handler
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        selectedItem &&
        popupRef.current &&
        !popupRef.current.contains(event.target) &&
        // Check that the click is not on the same item that opened the popup
        (!itemRefs.current[selectedItem.title] ||
          !itemRefs.current[selectedItem.title].contains(event.target))
      ) {
        setSelectedItem(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [selectedItem]);

  const addToWatchlist = (currentMediaItem) => {
    setMediaState((prevMedia) => {
      const updatedMedia = prevMedia.map((mediaItem) => {
        if (mediaItem.title === currentMediaItem.title) {
          return { ...mediaItem, onWatchlist: !mediaItem.onWatchlist };
        }
        return mediaItem;
      });

      return updatedMedia;
    });
  };

  const navigateToDetails = (currentMediaItem) => {
    const query = new URLSearchParams({
      title: currentMediaItem.title,
    }).toString();

    router.push(`/mediadetails?${query}`);
  };

  const handleItemClick = (mediaItem) => {
    // If clicking the same item, do nothing
    if (selectedItem?.title === mediaItem.title) return;

    // Otherwise, set the selected item
    setSelectedItem(mediaItem);
  };

  const handleItemMouseEnter = (mediaItem) => {
    setHoveredItem(mediaItem);
  };

  const handleItemMouseLeave = () => {
    setHoveredItem(null);
  };

  // Memoize grid rows to prevent unnecessary recalculations
  const gridRows = useMemo(() => {
    const rows = [];
    for (let i = 0; i < media.length; i += 5) {
      rows.push(media.slice(i, i + 5));
    }
    return rows;
  }, [media]);

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center">
      <div style={{ width: '100%' }}>
        {gridRows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="row mb-5 justify-content-center"
            style={{ position: 'relative' }}
          >
            {/* Render row items */}
            {row.map((mediaItem, colIndex) => {
              const isHovered = hoveredItem?.title === mediaItem.title;
              const isSelected = selectedItem?.title === mediaItem.title;

              return (
                <div
                  key={mediaItem.title}
                  ref={(el) => {
                    if (el) {
                      itemRefs.current[mediaItem.title] = el;
                    }
                  }}
                  className="col-2 px-2 position-relative d-flex justify-content-center"
                  onClick={() => handleItemClick(mediaItem)}
                  onMouseEnter={() => handleItemMouseEnter(mediaItem)}
                  onMouseLeave={() => handleItemMouseLeave()}
                >
                  <Image
                    src={mediaItem.cover_image}
                    alt={mediaItem.title}
                    width={220}
                    height={330}
                    style={{
                      transform: isHovered ? 'scale(1.1)' : 'scale(1)',
                      transition: 'transform 0.3s ease',
                      objectFit: 'cover',
                      borderRadius: 3,
                      cursor: 'pointer',
                    }}
                  />

                  {/* Popup */}
                  {isSelected && (
                    <div
                      ref={popupRef}
                      className="position-absolute"
                      style={{
                        top: 'calc(100% + 20px)',
                        left: '50%',
                        transform: `translateX(${-50 - ((colIndex - 2) * 9.5)}%)`,
                        background: '#213A57',
                        borderRadius: '3px',
                        border: '1px solid #45DFB1',
                        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                        zIndex: 2000,
                        width: 1000,
                      }}
                    >
                      <div className="container-fluid py-3">
                        <div className="row mx-1">
                          <div className="col-4">
                            <h3 style={{ fontWeight: 500, fontSize: 20, lineHeight: 0.5, paddingTop: 9 }}>
                              <span style={{ fontWeight: 600 }}>{mediaItem.match_percentage}%</span> Match For You
                            </h3>
                            <span style={{ fontWeight: 300, fontSize: 16 }}>
                              {mediaItem.genres?.join(', ')} <br />
                              {mediaItem.year} • {mediaItem.runtime} •
                              <span
                                style={{
                                  border: "solid 1px #ffffff",
                                  borderRadius: 2,
                                  paddingLeft: 4,
                                  paddingRight: 4.25,
                                  paddingBottom: 2.2
                                }}
                              >
                                {mediaItem.parental_guide_rating}
                              </span> <br />
                            </span>
                            <StarRatingComponent rating={mediaItem.rating} /> <br />
                            <div style={{ fontWeight: 300, fontSize: 16, whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}>
                              <span style={{ fontWeight: 500 }}>Director{mediaItem.directors?.length > 1 && "s"}</span> {mediaItem.directors?.join(' • ')} <br />
                              <span style={{ fontWeight: 500 }}>Writer{mediaItem.writers?.length > 1 && "s"}</span> {mediaItem.writers?.join(' • ')} <br />
                              <span style={{ fontWeight: 500 }}>Starring</span> {mediaItem.stars?.join(' • ')} <br />
                            </div>
                          </div>
                          <div className="col-5 d-flex flex-column" style={{ height: '100%' }}>
                            <h3 style={{ fontWeight: 600, fontSize: 24 }}>{mediaItem.title}</h3>
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
                                {mediaItem.description}
                              </p>
                            </div>
                          </div>
                          <div className="col-3 d-flex flex-column justify-content-center align-items-center">
                            <div className="row w-100 px-3">
                              <button
                                className="btn btn-gradient py-3 my-3 d-flex justify-content-center align-items-center"
                                style={{ borderRadius: 15 }}
                                onClick={() => addToWatchlist(mediaItem)}
                              >
                                <span style={{ fontWeight: 600, fontSize: 16 }}>
                                  {mediaItem.onWatchlist ? "Remove from your list" : "Add to your list"}
                                </span>
                              </button>
                            </div>
                            <div className="row w-100 px-3">
                              <button
                                className="btn btn-gradient py-3 my-3 d-flex justify-content-center align-items-center"
                                style={{ borderRadius: 15 }}
                                onClick={() => navigateToDetails(mediaItem)}
                              >
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
            })}

            {/* Fill remaining columns with empty divs */}
            {[...Array(5 - row.length)].map((_, index) => (
              <div key={`empty-${index}`} className="col-2"></div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MediaGridComponent;