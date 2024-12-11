"use client";
import Image from "next/image";
import NavBarComponent from "@/app/components/navbar/NavBarComponent";
import CarouselComponent from "@/app/components/carousel/CarouselComponent";
import { mediaAtom } from "@/app/atomStore";
import FooterComponent from "@/app/components/footer/FooterComponent";
import { useAtom } from "jotai";
import { useSearchParams } from "next/navigation";
import LogoComponent from "../components/logo/LogoComponent";
import StarRatingComponent from "../components/starrating/StarRatingComponent";
import { useState, useEffect } from "react";

export default function Home() {
  const [media, setMedia] = useAtom(mediaAtom);
  const [showRatingPopup, setShowRatingPopup] = useState(false);
  const [temporaryRating, setTemporaryRating] = useState(0);

  const params = useSearchParams();
  const currentTitle = params.get("title");

  let carousel = ["Fight Club", "Inception", "The Maze Runner", "Gladiator II", "The Hurt Locker", "Logan", "Deadpool"]

  const currentMedia = media.find((mediaItem) => mediaItem.title === currentTitle);

  useEffect(() => {
    // Ensure the currentMedia state updates correctly
  }, [media, currentTitle]);

  function scoreToColor(score) {
    score = Math.min(Math.max(score, 0), 100);

    let r, g, b;

    if (score <= 50) {
      r = Math.round(139 + (255 - 139) * (score / 50));
      g = 0;
      b = 0;
    } else if (score <= 75) {
      r = 255;
      g = Math.round((score - 50) * (255 / 25));
      b = 0;
    } else {
      r = Math.round(255 - (255 - 69) * ((score - 75) / 25));
      g = Math.round(255 - (255 - 223) * ((score - 75) / 25));
      b = Math.round((score - 75) * (177 / 25));
    }

    return `#${((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1).toUpperCase()}`;
  }

  const addToWatchlist = () => {
    setMedia((prevMedia) => {
      const updatedMedia = prevMedia.map((mediaItem) => {
        if (mediaItem.title === currentMedia.title) {
          return { ...mediaItem, onWatchlist: !mediaItem.onWatchlist };
        }
        return mediaItem;
      });

      return updatedMedia;
    });
  };

  const markAsWatched = () => {
    if (!currentMedia.alreadyWatched) {
      setShowRatingPopup(true);
    } else {
      setMedia((prevMedia) => {
        const updatedMedia = prevMedia.map((mediaItem) => {
          if (mediaItem.title === currentMedia.title) {
            return { ...mediaItem, alreadyWatched: false, userRating: null };
          }
          return mediaItem;
        });

        return updatedMedia;
      });
    }
  };

  const handleRatingSubmit = (rating) => {
    setMedia((prevMedia) => {
      const updatedMedia = prevMedia.map((mediaItem) => {
        if (mediaItem.title === currentMedia.title) {
          return { ...mediaItem, alreadyWatched: true, userRating: rating };
        }
        return mediaItem;
      });

      return updatedMedia;
    });
    setShowRatingPopup(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!currentMedia.alreadyWatched) {
      alert("You must mark this media as watched before submitting a review.");
      return;
    }

    const reviewContent = e.target.elements.reviewTextarea.value;

    currentMedia.reviews.push({
      author: "New User",
      rating: currentMedia.userRating,
      message: reviewContent,
    });

    setMedia((prevMedia) => {
      const updatedMedia = prevMedia.map((mediaItem) => {
        if (mediaItem.title === currentMedia.title) {
          return { ...mediaItem, reviews: currentMedia.reviews };
        }
        return mediaItem;
      });

      return updatedMedia;
    });

    console.log("Review Submitted:", currentMedia.reviews);
  };

  return (
    <>
      <NavBarComponent />
      {showRatingPopup && (
        <div className="popup-overlay" style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1000,
        }}>
          <div className="popup-content" style={{
            background: '#0B6477',
            borderRadius: '8px',
            padding: '20px',
            textAlign: 'center',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'
          }}>
            <h3 style={{color:'#ffffff'}}>Select a Rating</h3>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '5px', margin: '10px 0' }}>
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  onClick={() => setTemporaryRating(star)}
                  style={{
                    fontSize: '2rem',
                    cursor: 'pointer',
                    color: star <= temporaryRating ? '#45DFB1' : '#808080',
                  }}
                >
                  ★
                </span>
              ))}
            </div>
            <button
              className="btn btn-gradient"
              onClick={() => handleRatingSubmit(temporaryRating)}
              style={{ marginTop: '20px' }}
            >
              Submit Rating
            </button>
          </div>
        </div>
      )}
      <div className="gradient-background" style={{ position: "fixed", top: 0, left: 0, width: "100vw", zIndex: -1000 }}></div>
      <div className="blank-background" style={{ height: "100%" }}>
        <div className="container-fluid pt-5" style={{ overflowX: "hidden", padding: 0 }}>
          <div className="row py-5" style={{ position: "relative", minHeight: "55vh" }}>
            <Image
              src={currentMedia.banner_image}
              alt="Image Preview"
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 600px) 100vw, 50vw"
            />
            <div className="position-absolute py-1 px-3 d-flex justify-content-center align-items-center" style={{ top: "calc(90%)", left: "9.1%", transform: "translateY(-50%)", background: "#00000082", borderRadius: "10px", boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", zIndex: 10, width: "auto", flexDirection: "column" }}>
              <div className="d-flex align-items-center" style={{ flexDirection: "row", gap: "14px", transform: "translateY(1px)" }}>
                <LogoComponent style={{ fill: "#f2f2f2", width: 45, height: 45 }} />
                <span style={{ fontWeight: 400, fontSize: 36 }}>
                  <span style={{ fontWeight: 700, fontSize: 36, color: scoreToColor(currentMedia.match_percentage) }}>{currentMedia.match_percentage}%</span> Match
                </span>
              </div>
              <div className="d-flex align-items-center" style={{ flexDirection: "row" }}>
                <span style={{ fontWeight: 200, fontSize: 16, transform: "translateY(-1px)" }}>
                  based on your history and preferences
                </span>
              </div>
            </div>
          </div>
          <div className="row" style={{ margin: "auto 8%", marginTop: "2%" }}>
            <div className="col-6">
              <span style={{ fontWeight: 700, fontSize: 42 }}>{currentMedia.title}</span>
              <span style={{ fontWeight: 300, fontSize: 22, paddingLeft: 10 }}>{currentMedia.genres?.join(", ")}</span> <br />
              <div className="d-flex" style={{ paddingTop: 5 }}>
                <span style={{ fontWeight: 300, fontSize: 25 }}>{currentMedia.year} • {currentMedia.runtime} • <span style={{ border: "solid 1px #ffffff", borderRadius: 2, paddingLeft: 4, paddingRight: 4.25, paddingBottom: 2.2 }}>{currentMedia.parental_guide_rating}</span></span>
                <StarRatingComponent rating={currentMedia.rating} size={30} style={{ paddingLeft: 15 }} />
              </div>
              <p style={{ fontWeight: 300, fontSize: 20, lineHeight: 1.35, paddingTop: 15, paddingBottom: 50 }}>
                {currentMedia.description}
              </p>

              <div className="d-flex justify-content-left gap-4" style={{ minHeight: 80, marginBottom: 40 }}>
                <button className="btn btn-gradient d-flex justify-content-center align-items-center" style={{ borderRadius: 10, minWidth: 280 }} onClick={() => markAsWatched()}>
                  <span style={{ fontWeight: 600, fontSize: 24 }}>{currentMedia.alreadyWatched ? "Unmark as Watched" : "Mark as Watched"}</span>
                </button>
                <button className="btn btn-gradient d-flex justify-content-center align-items-center" style={{ borderRadius: 10, minWidth: 280 }} onClick={() => addToWatchlist()}>
                  <span style={{ fontWeight: 600, fontSize: 24 }}>{currentMedia.onWatchlist ? "Remove from your list" : "Add to your list"}</span>
                </button>
              </div>

              <h2 style={{ fontWeight: 600, fontSize: 34, textDecoration: "underline #45DFB1", textUnderlineOffset: 8 }}>Cast & Crew</h2> <br />
              <table style={{ borderCollapse: "collapse", width: "100%" }}>
                <tbody>
                  {currentMedia.mediaType != "book" ? <>
                    <tr>
                      <td style={tableStyles.header}>
                        Director{currentMedia.directors?.length > 1 && "s"}
                      </td>
                      <td style={tableStyles.data}>
                        {currentMedia.directors?.join(" • ")}
                      </td>
                      <td style={tableStyles.header}>
                        Writer{currentMedia.writers?.length > 1 && "s"}
                      </td>
                      <td style={tableStyles.data}>
                        {currentMedia.writers?.join(" • ")}
                      </td>
                    </tr>
                    <tr>
                      <td style={tableStyles.header}>
                        Starring
                      </td>
                      <td colSpan="3" style={tableStyles.data}>
                        {currentMedia.stars?.join(" • ")}
                      </td>
                    </tr>
                  </> :
                  <>
                  <tr>
                    <td style={tableStyles.header}>
                      Author{currentMedia.authors?.length > 1 && "s"}
                    </td>
                    <td style={tableStyles.data}>
                      {currentMedia.authors?.join(" • ")}
                    </td>
                  </tr>
                  </>
                  }
                </tbody>
              </table>
            </div>
            <div className="col-1" />
            <div className="col-5 d-flex justify-content-center align-items-start">
              <iframe
                style={{
                  marginTop: "3.5%",
                  width: "720px",
                  height: "405px",
                  borderRadius: "8px",
                  overflow: "hidden",
                  border: "none",
                  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.5)",
                }}
                src={currentMedia.trailers[0]}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>

          <div className="row d-flex justify-content-center align-items-start" style={{ margin: "auto 8%", marginTop: "3%" }}>
            <div className="col-12 d-flex flex-column justify-content-center align-items-center">
              <span style={{ fontWeight: 600, fontSize: 48 }}>User Reviews</span>
              <div className="d-flex flex-column justify-content-start align-items-center pt-3 px-4" style={{ width: "60%", background: "#0B6477", borderRadius: "30px", marginTop: 20 }}>
                <h3 style={{ fontWeight: 500, fontSize: 20 }}>General Consensus</h3>
                <p className="py-3" style={{ fontWeight: 300, fontSize: 20, textAlign: "center", wordWrap: "break-word", overflowWrap: "break-word" }}>
                  {currentMedia.general_consensus}
                </p>
              </div>
            </div>
          </div>

          {[...Array(Math.ceil(currentMedia.reviews.length / 3))].map((_, rowIndex) => (
            <div key={rowIndex} className="row d-flex justify-content-center align-items-start" style={{ margin: "auto 8%", marginTop: "1%" }}>
              <div className="col-12 d-flex justify-content-center" style={{ gap: "4%" }}>
                {currentMedia.reviews
                  .slice(rowIndex * 3, rowIndex * 3 + 3)
                  .map((review, index) => (
                    <div key={index} className="d-flex flex-column justify-content-start align-items-center pt-3 px-4" style={{ width: "25%", background: "#213A57", borderRadius: "30px", marginTop: 20 }}>
                      <div className="d-flex justify-content-between pt-2" style={{ width: "90%" }}>
                        <span style={{ fontWeight: 500, fontSize: 20 }}>
                          {review.author}
                        </span>
                        <StarRatingComponent rating={review.rating} />
                      </div>
                      <p
                        className="py-3 flex-grow-1 d-flex align-items-center"
                        style={{ fontWeight: 300, fontSize: 20, textAlign: "center", wordWrap: "break-word", overflowWrap: "break-word" }}>
                        {review.message}
                      </p>
                    </div>
                  ))}
              </div>
            </div>
          ))}

          <div className="row d-flex justify-content-center align-items-start" style={{ margin: "auto 8%", marginTop: "4%" }}>
            <div className="col-12 d-flex flex-column justify-content-center align-items-center">
              <h3 style={{ fontWeight: 300, fontSize: 26 }}>Want to share your thoughts?</h3>
              <h3 style={{ fontWeight: 300, fontSize: 26 }}>Mark as watched to leave a review below.</h3>

              <form className="d-flex flex-column justify-content-center align-items-center" onSubmit={handleSubmit} style={{ width: "80%" }}>
                <textarea id="reviewTextarea" placeholder="Share your thoughts..." className="form-control searchbox py-4" style={{ fontWeight: 400, marginTop: 20, marginBottom: 20, fontSize: 20, width: "100%", minHeight: 150, borderRadius: 10, border: "solid 1px #45DFB1" }}/>
                <button type="submit" className="btn btn-gradient d-flex justify-content-center align-items-center" style={{ borderRadius: 15, minWidth: 230, marginTop: 10 }}>
                  <span className="py-1" style={{ fontWeight: 300, fontSize: 20 }}>Submit Review</span>
                </button>
              </form>
            </div>
          </div>

          <div className="pt-4" style={{ paddingBottom: 50, marginTop: 60, marginBottom:150 }}>
            <h2 style={{ fontWeight: 700, fontSize: 48, textAlign: "center" }}>Popular Movies</h2>
            <h3 style={{ fontWeight: 400, fontSize: 26, textAlign: "center" }}>Explore the top movies people are watching right now!</h3>
            <div className="row row-cols-2 row-cols-md-4 g-4">
              <CarouselComponent mediaNames={carousel} />
            </div>
          </div>

          <FooterComponent />
        </div>
      </div>
    </>
  );
}

const tableStyles = {
  header: {
    fontWeight: 600,
    fontSize: 24,
    verticalAlign: "bottom",
  },
  data: {
    fontWeight: 400,
    fontSize: 18,
    letterSpacing: 0.35,
    lineHeight: "1.7",
    verticalAlign: "bottom",
  },
};
