"use client";
import Image from "next/image";
import NavBarComponent from "./components/navbar/NavBarComponent";
import CarouselComponent from "./components/carousel/CarouselComponent";
import { useAtom } from "jotai";
import { mediaAtom } from "./atomStore";
import FooterComponent from "./components/footer/FooterComponent";
import { useRouter } from "next/navigation";

export default function Home() {
  const [media, setMedia] = useAtom(mediaAtom);
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    const query = new URLSearchParams({
      query: e.target.elements.homepageSearchBox.value,
    }).toString();

    router.push(`/search?${query}`);
  };

  let popularCarouselMovies = ["Gladiator II", "Conclave", "Wicked", "Fury", "Inception", "The Maze Runner", "You Don't Mess with the Two Bromine"];
  let topCarouselShows = ["Better Call Saul", "Doctor Who", "Sherlock", "Narcos", "Neon Genesis Evangelion", "Dexter", "House"];
  let mainPageCarouselBooks = ["1984", "To Kill a Mockingbird", "The Catcher in the Rye", "The Great Gatsby", "Moby-Dick", "Pride and Prejudice", "The Hobbit", "Frankenstein"];

  return (<>
    <NavBarComponent />
    <div className="gradient-background" style={{ position: 'fixed', top: 0, left: 0, width: "100vw", zIndex: -1000 }}></div>
    <div className="blank-background">
      <div className="container-fluid pt-5" style={{ overflowX: "hidden", padding: 0 }}>
        <div className="row py-5" style={{ margin: "auto 8%" }}>
          <div className="col-12 col-lg-6">
            <h1 style={{ fontWeight: 700, fontSize: 54 }}>Discover Your Next Favorite Movie, Show, or Book!</h1>
            <p style={{ fontWeight: 400, fontSize: 26 }}>Get personalized recommendations based on your interests.</p>
            <div className="justify-content-left gap-2 my-4" onSubmit={handleSubmit}>
              <button className="btn btn-gradient px-4 py-4" style={{ borderRadius: 15 }}>
                <span style={{ fontWeight: 600, fontSize: 28 }}>View Your Discovery Queue</span>
              </button>
            </div>
            <p style={{ fontWeight: 400, fontSize: 26 }}>Have something in mind?</p>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                id="homepageSearchBox"
                placeholder="Search for movie, genre, actor..."
                className="form-control w-75 searchbox py-4"
                style={{ fontWeight: 400, fontSize: 24, borderRadius: 10 }}
              />
            </form>
          </div>
          <div className="col-12 my-5 col-lg-6 my-lg-0" style={{ position: "relative", minHeight: "200px" }}>
            <Image
              src="/FrontPagePreview.png"
              alt="Image Preview"
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 600px) 100vw, 50vw"
            />
            <div className="gradient-overlay" />
          </div>
        </div>

        <div className="pt-4" style={{ paddingBottom: 50 }}>
          <h2 style={{ fontWeight: 700, fontSize: 48, textAlign: "center" }}>Popular Movies</h2>
          <h3 style={{ fontWeight: 400, fontSize: 26, textAlign: "center" }}>Explore the top movies people are watching right now!</h3>
          <div className="row row-cols-2 row-cols-md-4 g-4">
            <CarouselComponent mediaNames={popularCarouselMovies} />
          </div>
        </div>

        <div className="pt-4" style={{ paddingBottom: 50 }}>
          <h2 style={{ fontWeight: 700, fontSize: 48, textAlign: "center" }}>Top Shows For You</h2>
          <h3 style={{ fontWeight: 400, fontSize: 26, textAlign: "center" }}>Explore the latest recommendations tailored just for you</h3>
          <div className="row row-cols-2 row-cols-md-4 g-4">
            <CarouselComponent mediaNames={topCarouselShows} />
          </div>
        </div>

        <div style={{ paddingBottom: 200 }}>
          <h2 style={{ fontWeight: 700, fontSize: 48, textAlign: "center" }}>Featured Books</h2>
          <h3 style={{ fontWeight: 400, fontSize: 26, textAlign: "center" }}>Check out these top picks which you might enjoy reading next.</h3>
          <div className="row row-cols-2 row-cols-md-4 g-4">
            <CarouselComponent mediaNames={mainPageCarouselBooks} />
          </div>
        </div>

        <FooterComponent />
      </div>
    </div>
  </>)
}