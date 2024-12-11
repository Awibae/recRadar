"use client";
import NavBarComponent from "../components/navbar/NavBarComponent";
import { useAtom } from "jotai";
import { mediaAtom } from "@/app/atomStore";
import FooterComponent from "../components/footer/FooterComponent";
import GridComponent from "../components/grid/GridComponent";
import { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";

// Create a client-side wrapper component
function SearchContent() {
    const [media, setMedia] = useAtom(mediaAtom); // Original media state
    const [searchText, setSearchText] = useState(""); // State for search text
    const [filteredMedia, setFilteredMedia] = useState(media); // State for filtered media
    
    // Populate searchText from query string on page load
    const params = useSearchParams();
    
    useEffect(() => {
        const initialSearchText = params.get('query') || "";
        setSearchText(initialSearchText);
    }, [params]);
    
    // Update filtered media whenever searchText or media changes
    useEffect(() => {
        if (searchText.trim() === "") {
            setFilteredMedia(media);
        } else {
            const lowercasedSearchText = searchText.toLowerCase();
            setFilteredMedia(
                media.filter((mediaItem) =>
                    mediaItem.title.toLowerCase().includes(lowercasedSearchText)
                )
            );
        }
    }, [searchText, media]);
    
    return (
        <div className="blank-background">
            <div className="container-fluid pt-5" style={{ overflowX: "hidden", padding: 0 }}>
                <div className="row d-flex justify-content-center" style={{ marginTop: "5%" }}>
                    <div className="col-6 d-flex flex-column justify-content-center">
                        <input
                            type="text"
                            placeholder="Search for movie, genre, actor..."
                            className="form-control searchbox py-4"
                            style={{ fontWeight: 400, fontSize: 24, borderRadius: 10 }}
                            value={searchText}
                            onChange={(e) => setSearchText(e.target.value)}
                        />
                    </div>
                </div>
                <div className="pt-4" style={{ paddingBottom: "12%" }}>
                    <h2 style={{ fontWeight: 700, fontSize: 48, margin: "auto 16%", marginTop: 25, lineHeight: 0.4 }}>
                        {searchText ? `Search Results for "${searchText}"` : "Enter a search query"}
                    </h2>
                    <div className="row d-flex flex-column align-items-center py-5" style={{ margin: "0 8%"}}>
                        <GridComponent media={filteredMedia} />
                    </div>
                </div>
                <FooterComponent />
            </div>
        </div>
    );
}

export default function Home() {
    return (
        <>
            <NavBarComponent />
            <div className="gradient-background" style={{ position: 'fixed', top: 0, left: 0, width: "100vw", zIndex: -1000 }}></div>
            <Suspense>
                <SearchContent />
            </Suspense>
        </>
    );
}