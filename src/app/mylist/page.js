"use client";
import Image from "next/image";
import NavBarComponent from "@/app/components/navbar/NavBarComponent";
import CarouselComponent from "@/app/components/carousel/CarouselComponent";
import FooterComponent from "@/app/components/footer/FooterComponent";
import GridComponent from "../components/grid/GridComponent";
import { mediaAtom } from "../atomStore";
import { useAtom } from "jotai";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function MyListPage() {
    const [media, setMedia] = useAtom(mediaAtom);
    let highPriorityCarousel = ["Better Call Saul", "Gladiator II", "1984", "The Hobbit", "Breaking Bad", "Conclave", "Deadpool",]

    const router = useRouter();
    const [filterText, setFilterText] = useState("");

    const handleViewHistory = () => {
      router.push("/history");
    };

    const filteredMovies = media.filter((mediaItem) => {
      if (mediaItem.onWatchlist && mediaItem.mediaType === "movie") {
        return mediaItem;
      }
    });

    const filteredShows = media.filter((mediaItem) => {
      if (mediaItem.onWatchlist && mediaItem.mediaType === "tv") {
        return mediaItem;
      }
    });

    const filteredBooks = media.filter((mediaItem) => {
      if (mediaItem.onWatchlist && mediaItem.mediaType === "book") {
        return mediaItem;
      }
    });
  return (
    <>
      <NavBarComponent />
      <div className="gradient-background" style={{ position: "fixed", top: 0, left: 0, width: "100vw", zIndex: -1000 }}></div>
      <div className="blank-background" style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        <div className="container-fluid pt-5 flex-grow-1" style={{ overflowX: "hidden", padding: 0 }}>

            <div className="row d-flex align-items-center justify-content-center" style={{ margin: "0 8%", marginTop: "100px" }}>
                <div className="col-3 d-flex justify-content-end">
                    <span style={{ fontWeight: 700, fontSize: 42 }}>My List</span>
                </div>
                <div className="col-6 d-flex justify-content-center">
                            <input
                                type="text"
                                placeholder="Filter List"
                                value={filterText}
                                onChange={(e) => setFilterText(e.target.value)}
                                className="form-control searchbox py-3"
                                style={{
                                    fontSize: 20
                                }}
                                
                            />
                        </div>
                        <div className="col-3 d-flex justify-content-start">
                            <span
                                onClick={handleViewHistory}
                                style={{
                                    fontWeight: 500,
                                    fontSize: 18,
                                    cursor: "pointer",
                                    textDecoration: "underline",
                                    color: "#45DFB1",
                                }}
                            >
                                View History
                            </span>
                        </div>
            </div>

          <div className="row d-flex flex-column align-items-center py-5" style={{ margin: "0 8%" }}>
            <h2 style={{ fontWeight: 700, fontSize: 34, textAlign: "center" }}>High Priority</h2>
            <p style={{ fontWeight: 300, fontSize: 20, textAlign: "center" }}>
              Add the seven most important titles in your list
            </p>
            <CarouselComponent mediaNames={highPriorityCarousel} />
          </div>

          <div className="row d-flex flex-column align-items-center py-5" style={{ margin: "0 8%"}}>
            <h2 style={{ fontWeight: 700, fontSize: 34, textAlign: "center", marginBottom: "35px" }}>My Movies</h2>
            <GridComponent media={filteredMovies} />
          </div>

          <div className="row d-flex flex-column align-items-center py-5" style={{ margin: "0 8%" }}>
            <h2 style={{ fontWeight: 700, fontSize: 34, textAlign: "center", marginBottom: "35px" }}>My Shows</h2>
            <GridComponent media={filteredShows} />
          </div>

          <div className="row d-flex flex-column align-items-center py-5" style={{ margin: "0 8%" }}>
            <h2 style={{ fontWeight: 700, fontSize: 34, textAlign: "center" }}>My Books</h2>
            <GridComponent media={filteredBooks} />
          </div>

        </div>
        <FooterComponent />
      </div>
    </>
  );
}
