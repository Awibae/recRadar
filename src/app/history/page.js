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

    const filteredMovies = media.filter((mediaItem) => {
      if (mediaItem.alreadyWatched && mediaItem.mediaType === "movie") {
        return mediaItem;
      }
    });

    const filteredShows = media.filter((mediaItem) => {
      if (mediaItem.alreadyWatched && mediaItem.mediaType === "tv") {
        return mediaItem;
      }
    });

    const filteredBooks = media.filter((mediaItem) => {
      if (mediaItem.alreadyWatched && mediaItem.mediaType === "book") {
        return mediaItem;
      }
    });

  return (
    <>
      <NavBarComponent />
      <div className="gradient-background" style={{ position: "fixed", top: 0, left: 0, width: "100vw", zIndex: -1000 }}></div>
      <div className="blank-background" style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        <div className="container-fluid pt-5 flex-grow-1" style={{ overflowX: "hidden", padding: 0 }}>
        
        <div className="row d-flex flex-column align-items-center py-5" style={{ margin: "0 8%", marginTop: "60px"}}>
            <h2 style={{ fontWeight: 700, fontSize: 50, textAlign: "center"}}>History</h2>
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
